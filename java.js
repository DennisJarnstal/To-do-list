//To do list

const newItem = document.querySelector('#newItem');
newItem.addEventListener('click', newElement);

// Add new item to shoppinglist
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("myInput").value;
  let t = document.createTextNode(inputValue);
    li.appendChild(t);
      if (inputValue === '') {
            alert("Du har inte skrivit in något!");} 
      else {
            document.getElementById("myList").appendChild(li);}
            
          document.getElementById("myInput").value = "";
        
          var span = document.createElement("closebutton");
          var txt = document.createTextNode("x");
          span.className = "close";
          span.appendChild(txt);
          li.appendChild(span);
        
          for (item = 0; item < close.length; item++) {
            close[item].onclick = function() {
              var div = this.parentElement;
              div.style.display = "none";
            }
          }
        }

// Add close button to listitems
let myNodelist = document.getElementsByTagName("LI");
var item;
    for (item = 0; item < myNodelist.length; item++) {
      var span = document.createElement("closebutton");
      var txt = document.createTextNode("x");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[item].appendChild(span);
    }

// Check listitem when clicked
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
    
// Remove listitem
  let close = document.getElementsByClassName("close");
  /* var i; */
    for (item = 0; item < close.length; item++) {
      close[item].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }


//Bish bosh

let bishBoshDisplay = document.querySelector('#bishBoshDisplay');
bishBoshDisplay.addEventListener('click', newBishBoshValues);

function newBishBoshValues(){
  let bishValue = document.getElementById("bishInput").value;
  let boshValue = document.getElementById("boshInput").value;
  let bishcBoshMax = document.getElementById("bishboshMaxInput").value;
  let bischBoshMin = document.getElementById("bishboshMinInput").value;

for(var i = bischBoshMin;i <=bishcBoshMax; i++){
  bish = i/bishValue
  bosh = i/boshValue
if(i == 0)
bishBosh = document.write("0, ")
else if(i < 0){
  bishBosh = document.write("")
}
else if((bish % 1)== 0){
  bishBosh = document.write("bish, ")
}
else if((bosh % 1)== 0){
  bishBosh = document.write("bosh, ")
}
else{
  bishBosh = document.write(i+", ")
}
}
}
    
