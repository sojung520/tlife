const express = require('express');
const request = require('request');
const app = express();
const port = 3000;
// let opt = {
//   method: 'GET',
//   uri: 'https://reqres.in/api/users?page=3'
// };
app.get('/', function (req, res) {
  res.send('열림~');
});
// request(opt, function (err, response, body) {
//   var result = JSON.parse(body);
//   console.log(result.ad.text);
// })
app.listen(port, function () {
  console.log("서버오픈" + port)
})