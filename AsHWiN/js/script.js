var head =document.getElementById("head1");
console.log(head);
head.style.color="blue";
head.textContent="TEXT CONTENT CHANGED";
head.innerHTML="<h6>CHANGED IN TO H6</h6>";

var c =document.getElementsByClassName("List");
for(let i=0;i<c.length;i++){
    c[i].style.backgroundColor="yellow";
}

var t=document.getElementsByTagName('li');
t[1].style.color="red"

//using query selector
let val=document.querySelector("input");
val.value="Name"

//quary selector using id
var saveBtn=document.querySelector("#saveBtn")
saveBtn.style.backgroundColor="Green"