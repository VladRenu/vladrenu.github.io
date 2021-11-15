let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/eu-si-ticu.jpeg') {
      myImage.setAttribute('src','images/ticu-1.jpeg');
    } else {
      myImage.setAttribute('src','images/eu-si-ticu.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }
  
  
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Bine ai venit, ' + storedName + '!';
  }

  myButton.onclick = function() {
    setUserName();
  }
  
  