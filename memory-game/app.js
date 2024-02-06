const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];
//in the following a function to sort an array
cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let choosenCard = [];
let choosenCardid = [];
const cardsWon = [];

function createCard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png"); 
    card.setAttribute("data-id", i); 
    card.addEventListener("click", filpCard);
    gridDisplay.appendChild(card);
  }
}
createCard();
//function to check the matching cards
function CheckCard() {
  const cards = document.querySelectorAll("img");
  const optionOneId = choosenCardid[0];
  const optionTwoId = choosenCardid[1];
  console.log(cards);
  console.log("you have found a match!");
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("you clicked the same card!");
  }
  if (choosenCard[0] == choosenCard[1]) {
    alert("you have found a match");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", filpCard);
    cards[optionTwoId].removeEventListener("click", filpCard);
    cardsWon.push(choosenCard);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("sorry try again");
  }
  resultDisplay.textContent = cardsWon.length;
  choosenCard = [];
  choosenCardid = [];
  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.textContent = "you have won the game";
  }
}

//create a funxtion that will filp the card when we click on it
function filpCard() {
  console.log(cardArray);
  //getting the id of the image we click
  const cardid = this.getAttribute("data-id");
  console.log(cardArray[cardid].name); 
  choosenCard.push(cardArray[cardid].name);
  choosenCardid.push(cardid); 
  this.setAttribute("src", cardArray[cardid].img);
  if (choosenCard.length === 2) {
    setTimeout(CheckCard, 500);
  }
}
