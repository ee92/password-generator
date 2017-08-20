const sha256 = require('sha256');

var url;
var login;
var master;

$('#genbtn').click(() => {
  url = $('#url').val();
  login = $('#login').val();
  master = $('#master').val();
  pass(url, login, master);
});

function pass(url, login, master) {
  console.log(url, login, master);
  console.log(sha256(url + login + master));
};
