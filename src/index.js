import "./styles.css";

function inputHandler() {
  let userInput = txtInput.value;
  if (userInput in emojiDictionary) {
    output.innerText = emojiDictionary[userInput];
  } else {
    output.innerText = "we don't have this in our database";
  }
}

function clickHandler(event) {
  let userInput = event.target.innerText;
  output.innerText = emojiDictionary[userInput];
}

let emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😀": "grinning face",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🤯": "Exploing head ",
  "🥳": "partying face",
  "🤧": "sneezing face",
  "✨": "sparkles"
};

let txtInput = document.querySelector("#txt-input");
let output = document.querySelector("#output");
let displayEmojis = document.querySelector("#displayemojis");
let emojisWeKnow = Object.keys(emojiDictionary);
let emojiString = "";
emojisWeKnow.map(function (emoji) {
  emojiString += `<span class="emojis">${emoji}</span>`;
  return "";
});

displayEmojis.innerHTML = emojiString;

let emojis = document.querySelectorAll(".emojis");

for (let i = 0; i < emojis.length; i++) {
  emojis[i].addEventListener("click", clickHandler);
}

txtInput.addEventListener("input", inputHandler);
