import './style.css'

const heading = document.createElement('h1');
heading.innerText = 'Sup, grads';
heading.className = "grads-h1";

const app = document.getElementById('app');
app.append(heading);


const myStyles = document.createElement('style');
myStyles.innerText = ".grads-h1{color:green}";

document.body.append(myStyles);

const listItemCollection  = document.querySelectorAll("li");
const itemToDelete = listItemCollection[listItemCollection.length -1];
console.log(itemToDelete.innerText);
itemToDelete.remove();


function buttonClicked(event){
  console.log(event);
}

const myButton = document.createElement("button");
myButton.innerText = "Click Me";
myButton.addEventListener("click", buttonClicked);

document.body.appendChild(myButton);