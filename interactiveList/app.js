const myHeading = document.getElementById('myHeading');
const myTextInput = document.getElementById('myTextInput');
const myButton = document.getElementById('myButton');
const myList= document.getElementsByTagName('li');
const notPurple = document.getElementsByClassName('not-purple');
myButton.addEventListener('click',()=>{
   myHeading.style.color=myTextInput.value;
   
});

for(let i=0;i<myList.length;i++){
    myList[i].style.color ='purple';
    myList[i].style.listStyle='none';
}
for(let i=0;i<myList.length;i++){
    notPurple[i].style.color ='red';
    notPurple[i].style.listStyle='none';
}