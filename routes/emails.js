var express = require('express');
var router = express.Router();
const Sib = require('sib-api-v3-sdk');
const mysql = require('mysql');

var con = mysql.createConnection({
    host: "66.85.144.162",
    port: '3306',
});
const client = Sib.ApiClient.instance;
const apiKey = client.authentications['api-key'];


const sender = {
  email: "noreplybigguy@gmail.com",
  name: "noreply",
};
const receivers = [
  {
    email: "BigGuyRobReid@gmail.com",
  },
];
const tranEmailApi = new Sib.TransactionalEmailsApi();
cookies = [];
router.post('/', function(req, res) {
  var bodyofrequest = req.body;
  console.log(req.cookies.tag);
  //This is me
  emailAddress = req.body.email;
  if(validateEmail(emailAddress)){
    if(req.cookies.tag){
      res.send("tm");
      //here I open the mail app 
    }else{
      originatorcookie = makeid(22);
      res.setHeader("Set-Cookie", "tag=" + originatorcookie + "; Expires=" + makeExpiri(1)); //only 1 day
      sendEmail(req.body);
    res.send("send");
      // now we send an email automated to my BigGuyRobReid@gmail.com
    }
  }else{
    res.send("not a valid email address");
  }
});

function sendEmail(req){
tranEmailApi
      .sendTransacEmail({
        sender,
        to: receivers,
        subject: 'New Message from {{params.email}}',
        textContent: `
        You have received a message from {{params.name}} \n
        you can reach that at {{params.email}} \n
        the body of the message is {{params.message}}`,
        params: {
            name: req.name,
            email: req.email,
            message: req.message,
        },
    })
    .then(console.log)
    .catch(console.log);
  }
function makeExpiri(expDays){
  const date = new Date();
  date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  return expires;
}

function makeid(length) {
  var result = '';
  var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var charlen = chars.length;
  for (var i = 0; i < length; i++) {
  result += chars. charAt(Math. floor(Math. random() *
  charlen));
  }
  return result;
}

function validateEmail(email){
    return String(email)
      .toLowerCase()
      .match(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
      );
}

module.exports = router;
