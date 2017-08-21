const sha256 = require('sha256');

var url;
var login;
var master;
var password;

var clipboard = new Clipboard('#copy');

$('#genbtn').click(() => {
  url = $('#url').val();
  login = $('#login').val();
  master = $('#master').val();
  password = pass(url, login, master);
  $('#pass').val(password);
  console.log($('#pass').val());
});

function pass(url, login, master) {
  var hashnum = sha256(url + login + master).split('').filter((x) => {
    return !isNaN(Number(x));
  });
  var w1 = Number(hashnum.slice(0,7).join('')) % words.length;
  var w2 = Number(hashnum.slice(7,14).join('')) % words.length;
  var w3 = Number(hashnum.slice(14,21).join('')) % words.length;
  return `${words[w1]} ${words[w2]} ${words[w3]}`;
};

