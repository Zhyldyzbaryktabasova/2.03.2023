const exampleList=["Apples","Pears","Oranges"];

const exampleList2 =[
  {name:"Bakyt", age:18},
  {name:"Dosbol", age:32}
]
console.log(exampleList2[0])
console.log(exampleList2[0].age)
console.log(exampleList2[1])


const h1=document.querySelector("h1");

document.querySelector("#dispay-text").addEventListener("input",function() {
  h1.textContent = this.value;
});


document.querySelector("#font-family").addEventListener("change",function() {
  h1.style.fontFamily = this.value;
})

document.querySelector("#text-bold").addEventListener("change",function(){
  if (this.checked) {
    h1.style.fontWeight ="bold";
  }
  else {
    h1.style.fontWeight ="normal";
  }
  const textTransformInpts = document.querySelectorAll('[name="text-transform"]');
 for (let i = 0; i< textTransformInpts.length; i++)  {
  textTransformInpts[i].addEventListener("change",function() {
    h1.style.textTransform=this.value;
 
  }
});