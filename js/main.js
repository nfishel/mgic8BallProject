const ball = document.querySelector(".eightBall");
const button = document.getElementById("result");
const output = document.getElementById("output");
const radios = document.querySelectorAll("[name=listSelection]");


var custom = [];

var answers = [
  "As I see it, yes.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don’t count on it.",
  "It is certain.",
  "It is decidedly so.",
  "Most likely.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Outlook good.",
  "Reply hazy, try again.",
  "Signs point to yes.",
  "Very doubtful.",
  "Without a doubt.",
  "Yes.",
  "Yes – definitely.",
  "You may rely on it.",  
];

ball.addEventListener('click', getAnswer);

function getAnswer(){
  var ind = Math.floor(Math.random()*answers.length);//Math.random().toString(answers.length).substring(2,3)
  var msg = answers[ind];
  
  console.log(ind +"\n"+ msg);
  
  button.textContent = msg;
  button.style.fontSize = "2.5rem";
  button.style.color = "#C5F8FF";//"#0E4453";
  output.style.backgroundColor = "#0D84A5";//"#A9E4F4"

}

function addRestaurant(){
  var restaurant = addText.value;
  answers.push(restaurant);
}
const addText = document.getElementById("addOptionText");
const addBtn  = document.getElementById("submit");
  
//addBtn.addEventListener('click', addRestaurant);

const topP = document.getElementById("topP");
const midP = document.getElementById("midP");
const botP = document.getElementById("bottomP");

const topBtn = document.getElementById("topBtn");
const midBtn = document.getElementById("midBtn");
const botBtn = document.getElementById("bottomBtn");

//topBtn.addEventListener('click', showArray);

function showArray(){
  topP.textContent = answers;
  
}


function getRaidoChecked(){
  var val = "";
  for(var i=0; i<radios.length;i++){
    if(radios[i].checked){
      val = radios[i].value;
      break;
    }
  }
  return val;
}