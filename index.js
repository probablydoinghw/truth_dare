

var arrayTruth = [
  "Who is your crush?",
  "What is your most embarrassing memory?",
  "What is your guilty pleasure?",
  "What did you think of Karlie Kloss before this camp?",
  "What is your favorite video game or app?"
]

var arrayDare = [
  "Tell everyone in the room your crush",
  "Write a list of all your past crushes on piece of paper and tape it to the wall",
  "Send an ugly selfie to your crush",
  "Dance to the current song playing; if there is no song, dance to the silence",
  "Text Karlie Kloss an ugly selfie of you with no context"
]

var truthButton = $('.truthbutton');

// var truthButton = document.querySelector('.truthbutton');
truthButton.on('click', showTruth);

var truthContainer = $('.truthcontainer');

function showTruth() {
  //choose a truth from arrayTruth and then display

  // truthContainer.text(arrayTruth[2]);
  truthContainer.append(`<h2>${arrayTruth[2]}</h2>`);
}

var dareButton = $('.darebutton');
dareButton.on('click', showDare);

var dareContainer = $('.darecontainer');

function showDare() {

  // dareContainer.text(arrayDare[2]);
  dareContainer.append(`<h2>${arrayDare[3]}</h2>`);
  dareContainer.append(`<img src="https://images-na.ssl-images-amazon.com/images/I/51w7koDjFsL._SX425_.jpg">`)
}

var submitButton = $('.submit');
var secretContainer = $('.secretcontainer');
var secretCode = $('.secretcode');

submitButton.on('click', checkCode);

function checkCode() {

  if (secretCode.val()==="trollface") {
    secretContainer.append(`<h2>You have successfully entered!</h2> <img class="rightimg" src="https://i.pinimg.com/originals/54/d5/82/54d58288eb786f7384fcec6524125895.jpg">`)
  }

  else {
    secretContainer.append(`<h2>Wrong!</h2> <img class="wrongimg" src="https://live.staticflickr.com/7038/6904407315_55fa93c914_b.jpg">`)
  }

  }
