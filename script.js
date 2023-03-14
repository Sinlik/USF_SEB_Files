const gameContainer = document.getElementById("game");
const score = document.createElement("h2")
let scoreText = 0;
gameContainer.append(score)
let cardNumber = 0;
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    cardNumber++
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.id = cardNumber

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}
let checked = [0, 0, 0, 0, 0];
let clicked = 0;
let clickedChk = 0
// TODO: Implement this function!
function handleCardClick(event) {
  let cardColor = document.querySelectorAll("div")
  let checkColor = [0, 0, 0, 0, 0];
  clicked++
  // you can use event.target to see which element was clicked
  event.target.style.backgroundColor = event.target.classList
  event.target.classList.add("selected")
  for (let i = 0; i < cardNumber; i ++)
  {
    //console.log(`card ${i + 1} is ${cardColor[i + 1].classList}`)
    if (cardColor[i + 1].classList.contains("selected"))
    {
      if (cardColor[i + 1].classList.contains("red"))
      {
        checkColor[0]++
        clickedChk = 0
      }
      if (cardColor[i + 1].classList.contains("blue"))
      {
        checkColor[1]++
        clickedChk = 1

      }
      if (cardColor[i + 1].classList.contains("green"))
      {
        checkColor[2]++
        clickedChk = 2

      }
      if (cardColor[i + 1].classList.contains("orange"))
      {
        checkColor[3]++
        clickedChk = 3
      }
      if (cardColor[i + 1].classList.contains("purple"))
      {
        checkColor[4]++
        clickedChk = 4
      }
    }
  }
  console.log(`clickedChk = ${clickedChk}`)
  console.log("___")
  if ((checkColor[0] === 2))
  {
    if (checked[0] === 0)
    {
      console.log("match red")
      scoreText++
    }
    checked[0] = 1
  }
  if ((checkColor[1] === 2))
  {
    if (checked[1] === 0)
    {
      console.log("match blue")
      scoreText++
    }
    checked[1] = 1
  }
  if ((checkColor[2] === 2))
  {
    if (checked[2] === 0)
    {
      console.log("match green")
      scoreText++
    }
    checked[2] = 1
  }
  if ((checkColor[3] === 2))
  {
    if (checked[3] === 0)
    {
      console.log("match orange")
      scoreText++
    }
    checked[3]++
  }
  if ((checkColor[4] === 2))
  {
    if (checked[4] === 0)
    {
      console.log("match purple")
      scoreText++
    }
    checked[4]++
  }
  /*if (clicked === 2)
  {
    if (checkColor[clickedChk] < 2)
    {
      cardColor[clickedChk].style.backgroundColor = "white"
      clicked = 0
    }
  }*/
  /*console.log(`clicked = ${clicked}`)
  console.log(`clickedChk = ${clickedChk}`)
  console.log(`checkColor[clickedChk] = ${checkColor[clickedChk]}`)
  console.log(`checkColor[clickedChk] is color ${cardColor[clickedChk].classList}`)*/
  score.innerText = scoreText
}

// when the DOM loads
createDivsForColors(shuffledColors);