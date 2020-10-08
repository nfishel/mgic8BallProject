//variables to grab the HTML elements
const defaultList  = document.getElementById("defaultBtn");
const customList   = document.getElementById("customBtn");
const listMsg      = document.getElementById("listMsg");
const askBtn       = document.getElementById("askBtn");
const result       = document.getElementById("result");
const outputArea   = document.getElementById("output");
const customArea   = document.getElementById("customArea");
const userList     = document.querySelector(".userList");
const inputBox     = document.getElementById("inputBox");
const addBtn       = document.getElementById("addBtn");


//lists that will hold the responses
var defaultResponses = [
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
  "You may rely on it."  
  ];

var customResponses = [];

var currentList = defaultResponses;
setDefault();

//eventListeners
defaultList.addEventListener('click', setDefault);
customList.addEventListener('click', setCustom);
askBtn.addEventListener('click', getResponse);
addBtn.addEventListener('click', addCustomResponse);


//functions
function setDefault(){
  currentList = defaultResponses;
  listMsg.textContent = "You are using the default responses list.";
  //console.log(currentList);
  userList.style.display = "none";
  
}

function setCustom(){
  currentList = customResponses;
  listMsg.textContent = "You are using the custom responses list.";
  showCustomList();
  userList.style.display = "block";
  //console.log(currentList);
}


function getResponse(){
  var ind = Math.floor(Math.random()*currentList.length);
  var answer = currentList[ind];
  
  result.textContent = answer;
  result.style.fontSize = "2.5rem";
  result.style.color = "#C5F8FF";//"#0E4453";
  outputArea.style.backgroundColor = "#0D84A5";//"#A9E4F4"
}


function showCustomList(){
  
  if(customResponses.length == 0){
    customArea.innerHTML = "<h4>Custom Responses list is empty, please add some custom responses</h4>";
  }else{
    customArea.innerHTML = "<h2>Custom Responses</h2>";
    
    for(var i=0; i<customResponses.length; i++){
      //console.log(currentList[i]+ "\n");
      customArea.innerHTML += customResponses[i] + "<br>";
    }
  }
}


function addCustomResponse(){
  var response = inputBox.value;
  
  if(response == "" || customResponses.indexOf(response) != -1){
    alert("That response already exists, or the input box is blank.\nPlease enter a unique response.");
  }else{
    customResponses.push(response);
    currentList = customResponses;
    showCustomList();
  }
  inputBox.value="";
  inputBox.focus();
  
}

function isUnique(res){
  
}
