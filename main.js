import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

var simpleCrypto = new SimpleCrypto("123")

document.getElementById("enviar").addEventListener("click", function() {
  
   
  let textobase = document.getElementById("entrada").value;
  let secret = simpleCrypto.encrypt(textobase)
  document.getElementById("result").innerHTML = secret


});

document.getElementById("enviar2").addEventListener("click", function() {
  let textobase = document.getElementById("entrada").value;
  let secret = simpleCrypto.decrypt(textobase)
  document.getElementById("result").innerHTML = secret
});

document.getElementById("Copy").addEventListener("click", function() {
  var content = document.getElementById("result").innerHTML;
  var textarea = document.createElement("textarea");
  textarea.value = content;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
});
/* const test ="Bem vindo ao novo jogo da aodajksdjaskdasdjaksjd"

const secret = simpleCrypto.encrypt(test)
console.log(secret)
const decifrado = simpleCrypto.decrypt(secret)
console.log(decifrado)

const cryppp = ""

const novoo = simpleCrypto.decrypt(cryppp)

console.log(novoo) */


