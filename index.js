let randomNumber1 = Math.floor(Math.random() *6) + 1;
let randomImage = 'dice' + randomNumber1 + '.png';
let randomImageSource = './images/' + randomImage; // well get random images from the dice 1 to dice 6;


var changeSource1 = document.querySelectorAll('img')[0];
changeSource1.setAttribute('src', randomImageSource);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImage2 = 'dice' + randomNumber2 + '.png';
let randomImageSource2 = './images/' + randomImage2;

var changeSource2 = document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2);

if( randomNumber1 > randomNumber2){
  document.querySelector('h1').innerText = 'player One won';  
}else if( randomNumber1 < randomNumber2 ){
    document.querySelector('h1').innerText = 'player two won';
}else{
    document.querySelector('h1').innerText = 'draw';
}