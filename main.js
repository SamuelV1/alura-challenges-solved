import './style.css'
import './logo.svg'
var simpleCrypto = new SimpleCrypto("123")

document.getElementById("enviar").addEventListener("click", function() {
  let textobase = document.getElementById("entrada").value;
  let secret = simpleCrypto.encrypt(textobase)
  document.getElementById("result").innerHTML = secret
});

document.getElementById("enviar2").addEventListener("click", function() {
  try {
    let textobase = document.getElementById("entrada").value;
    let secret = simpleCrypto.decrypt(textobase)
    document.getElementById("result").innerHTML = secret
  } catch (error) {
    console.error(error);
    document.getElementById("result").innerHTML = "";
    let errorMessage = document.createElement("h1");
    errorMessage.textContent = "Nenhuma mensagem encontrada";
    let imageElement = document.createElement("img");
    imageElement.src = "logo.svg";
    document.getElementById("result").appendChild(imageElement);
    document.getElementById("result").appendChild(errorMessage);
  }
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



