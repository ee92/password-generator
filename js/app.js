const sha256 = require('sha256');

var url;
var login;
var master;
var password;
var symbols = ['!','@','#','$','%','^','&','*','?','+','-']

// adds clipboard save for copy button
var clipboard = new Clipboard('#copy');

// generate button click event
$('#genbtn').click(() => {
  // get values from inputs
  url = $('#url').val();
  login = $('#login').val();
  master = $('#master').val();
  //values into pass function
  password = pass(url, login, master);
  // set password to DOM
  $('#pass').val(password);
});

// 
function pass(url, login, master) {
  //array of all nums from hash
  var hashnum = sha256(url + login + master).split('').filter((x) => {
    return !isNaN(Number(x));
  });
  //generate words, number, and sybmol
  var w1 = Number(hashnum.slice(0,7).join('')) % words.length;
  var w2 = Number(hashnum.slice(7,14).join('')) % words.length;
  var w3 = Number(hashnum.slice(14,21).join('')) % words.length;
  var sym = symbols[Number(hashnum.slice(0,2).join('')) % symbols.length];
  var num = hashnum[0];
  // retuwn concatinated password string
  return words[w1][0].toUpperCase() + words[w1].slice(1)
    + " " + words[w2] + " " + words[w3] + " " + num + sym;
};

