const express = require('express');
const app = express();
const port = 3000;
const Imap = require('imap');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');

// set the view engine and the views folder
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// create new IMAP instance
const imap = new Imap({
  user: 'motieugene@gmail.com', // replace with your email address
  password: 'kingwendu1234', // replace with your email password
  host: 'smtp.gmail.com', // replace with your email provider's IMAP server address
  port: 993,
  tls: true
});

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  imap.once('ready', () => {
    // select the inbox mailbox
    imap.openBox('INBOX', false, (error, mailbox) => {
      if (error) throw error;

      // fetch the last 20 messages
      const fetchOptions = {
        bodies: ['HEADER', 'TEXT'],
        markSeen: false,
        maxMessages: 20
      };
      const fetch = imap.seq.fetch(`-${fetchOptions.maxMessages}:*`, fetchOptions);

      const messages = [];

      // process each message
      fetch.on('message', (message, seqno) => {
        // parse the message headers
        const headers = message.headers;

        // create a message stream
        const messageStream = imap.seq.fetch(seqno, {
          bodies: ''
        }).once('body', (stream, info) => {
          let buffer = '';

          // read the message body
          stream.on('data', (chunk) => {
            buffer += chunk.toString('utf8');
          });

          stream.once('end', () => {
            messages.push({
              from: headers.from,
              to: headers.to,
              subject: headers.subject,
              date: headers.date,
              body: buffer
            });
          });
        });

        messageStream.once('error', (error) => {
          console.log(`Error fetching message: ${error}`);
        });
      });

      fetch.once('error', (error) => {
        console.log(`Error fetching messages: ${error}`);
      });

      fetch.once('end', () => {
        console.log('Done fetching messages.');
        imap.end();

        // render the messages in the HTML page
        res.render('index', { messages: messages });
      });
    });
  });

  imap.once('error', (error) => {
    console.log(`IMAP error: ${error}`);
  });

  imap.once('end', () => {
    console.log('IMAP connection ended.');
  });

  imap.connect();
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
