/* expansão do textarea do tweetar*/

function autoExpand(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
  
  document.addEventListener('DOMContentLoaded', function() {
  const textarea = document.getElementById('myTextarea');
  textarea.addEventListener('input', function() {
    autoExpand(textarea);
  });
});



/* Obter o texto, foto e horario do usuário */

let textoDoUsuario;
let img;
let data = new Date();
let hora = data.getHours();
let minutos = data.getMinutes();
let tempoExato;
let nome1;
let nome2;


document.getElementById('tweetar').addEventListener('click',function(event){
  event.preventDefault();

  textoDoUsuario = document.getElementById('myTextarea').value;
  img            ="./imagens/men.jpg"
  tempoExato     = `${hora}h ${minutos}m`
  nome1          = document.getElementById('nomeDoUsuario').value;
  nome2          = "@" + document.getElementById('nomeDeUsuario').value;


  
  fazerTweet(nome1,nome2,textoDoUsuario, img, tempoExato)
  
  setTimeout( function(){
    document.getElementById('myTextarea').value= ''
  },10);
});

/*Criar de fato o tweet com JS*/

const feed = document.getElementById('feed');

function fazerTweet(nome1, nome2,textoDoUsuario, img, tempoExato){

  console.log(nome1)
  console.log(nome2)
  console.log(textoDoUsuario)
  console.log(img)
  console.log(tempoExato)

  
  let li          = document.createElement('li');
  let divtweetsList = document.createElement('div');
  divtweetsList.classList.add('tweetsList')
  let div2        = document.createElement('div');
  div2.classList.add('topoDosTweets')

  let imgDoPerfil = document.createElement('img');
  imgDoPerfil.src = img;
  imgDoPerfil.classList.add('imgDoTweet')

  let nomeDoUsuario = document.createElement('h3');
  nomeDoUsuario.innerText = nome1;
  nomeDoUsuario.classList.add('h3DoTweet');

  let nomeDeUsuario = document.createElement('p');
  nomeDeUsuario.innerText = `${nome2} - ${tempoExato}`
  nomeDeUsuario.classList.add('pDoTweet');

  let divDoTexto  = document.createElement('div');
  divDoTexto.classList.add('corpoDosTweets')

  let pDoTexto = document.createElement('p');
  pDoTexto.innerText = textoDoUsuario;


  li.appendChild(divtweetsList);
  divtweetsList.appendChild(div2);
  div2.appendChild(imgDoPerfil);
  div2.appendChild(nomeDoUsuario);
  div2.appendChild(nomeDeUsuario );
  divtweetsList.appendChild(divDoTexto);
  divDoTexto.appendChild(pDoTexto);

  console.log(li)

  feed.appendChild(li);
}

/* Tornar a primeira letra maiúcula no input de nome e tweet */
const inputElement = document.getElementById('myTextarea');

inputElement.addEventListener('input', function(event) {
  const inputValue = event.target.value;
  
  if (inputValue !== '') {
    event.target.value = capitalizeFirstLetter(inputValue);
  }
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const inputElement1 = document.getElementById('nomeDoUsuario');

inputElement1.addEventListener('input', function(event) {
  const inputValue = event.target.value;
  
  if (inputValue !== '') {
    event.target.value = capitalizeFirstLetter(inputValue);
  }
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

