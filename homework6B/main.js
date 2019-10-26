//new code added
bool1=false;
bool2=false;
var counter = 0;

function Onload(){
  document.getElementById("addtocart").disabled = true;
}

function enableBtn() {
    document.getElementById("addtocart").disabled = false;
}

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('glazed');
//let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
/*function currentOrder(glaze,quantity){
  this.glaze= glaze;
  this.quantity=quantity
}; */


//
var count=0;
function changeCartNumber2(){
  if (clickedobject != null && clickedobject2 !=null) {
    count +=1;
    document.getElementById("cart").innerHTML=count;
    document.getElementById("addtocart").innerHTML="Added to Cart!"

  }

};
//use this for glaze type//
var clickedobject=null;

function myFunction(elmnt,clr,clr2) {
  bool1= true;
  if (clickedobject!= null){
    clickedobject.style.color="rgb(105, 105, 105)";
    clickedobject.style.backgroundColor="rgb(255, 242, 245)";
  }
  clickedobject = elmnt;
  clickedobject.style.color = clr;
  clickedobject.style.backgroundColor=clr2;
  if (bool1==true && bool2 ==true){
    enableBtn();

  }
};
//use this for quantity type//
var clickedobject2=null;

function myFunction2(elmnt,clr,clr2) {
  bool2=true;
  if (clickedobject2!= null){
    clickedobject2.style.color="rgb(105, 105, 105)";
    clickedobject2.style.backgroundColor="rgb(255, 242, 245)";
  }
  clickedobject2 = elmnt;
  clickedobject2.style.color = clr;
  clickedobject2.style.backgroundColor=clr2;
  if (bool1==true && bool2 ==true){
    enableBtn();
}
};

var globalGlaze = "";
var globalQuantity = 0;
var globalid = 0;
function addGlaze (){
  var glaze = document.getElementById("glazed");
  globalGlaze = glaze.value;
  document.getElementById("addtocart").innerHTML="Add to Cart!"
  //return ("glazed",glaze.value);
}

function addGlaze2 (){
  var glaze = document.getElementById("dblchocolate");
  globalGlaze = glaze.value;
  document.getElementById("addtocart").innerHTML="Add to Cart!"
  //return ("glazed",glaze.value);
}
function addGlaze3 (){
  var glaze = document.getElementById("sugarmilk");
  globalGlaze = glaze.value;
  document.getElementById("addtocart").innerHTML="Add to Cart!"
  //return ("glazed",glaze.value);
}

function addGlaze4 (){
  var glaze = document.getElementById("vanilla");
  globalGlaze = glaze.value;
  document.getElementById("addtocart").innerHTML="Add to Cart!"
  //return ("glazed",glaze.value);
}


function addQuantity (){

  var quantity = document.getElementById("1");
  globalQuantity = quantity.value;
  document.getElementById("addtocart").innerHTML="Add to Cart!"
  //return ("quant",quantity.value);
}

function addQuantity2 (){

  var quantity = document.getElementById("3");
  globalQuantity = quantity.value;
  document.getElementById("addtocart").innerHTML="Add to Cart!"
  //return ("quant",quantity.value);
}

function addQuantity3 (){

  var quantity = document.getElementById("6");
  globalQuantity = quantity.value;
  document.getElementById("addtocart").innerHTML="Add to Cart!"
  //return ("quant",quantity.value);
}
function addQuantity4 (){

  var quantity = document.getElementById("12");
  globalQuantity = quantity.value;
  document.getElementById("addtocart").innerHTML="Add to Cart!"
  //return ("quant",quantity.value);
}

function orderList(glaze,quantity,id){
  this.glaze = glaze;
  this.quantity = quantity;
  this.id= id;
}

// console.log(currentOrder);
var oldItems = [];

function addOrder(){
  //var glaze = addGlaze();
  //if (currentOrder.quantity !=null && currentOrder.glaze != null){
  console.log("this is globalid before" + globalid)
  var item = new orderList(globalGlaze, globalQuantity,globalid);
  oldItems.push(item);
  localStorage.setItem("itemsArray", JSON.stringify(oldItems));
  globalid +=1

  console.log("this is globalid after" + globalid)

}

var obj = JSON.parse(localStorage.getItem("itemsArray"));
var forI = 0;
//var deleteBtn = 0;

var parsedOld = JSON.parse(localStorage.getItem('itemsArray'));
function onLoad2() {
  //var forI = i;
  var key = localStorage.key(i);
  var value = localStorage.getItem(key);
  //var parsedOld = JSON.parse(localStorage.getItem('itemsArray'));
  //var order = JSON.parse(value);
  for (var i = 0; i < parsedOld.length; i++){
        //console.log(parsedOld[i].quantity);
    var forI = i;
    //var cartdiv = document.getElementById("cart");
    //var cartdiv2="";
    //console.log("this is forI" + forI);
    var div = document.createElement("div");
    div.style.width = "300px";
    div.style.height = "50px";
    div.style.color = "black";
    div.style.fontFamily = "Patrick Hand, cursive";
    div.style.fontSize = "24px";
    // need to get orderlist in here ..so orderList.glaze
    div.innerHTML =  "Glaze: " + parsedOld[i].glaze  +"<br>  Quantity: " + parsedOld[i].quantity;
    var editBtn = document.createElement("button");
    editBtn.setAttribute('content', 'test content');
    editBtn.setAttribute('class','custom-button');
    editBtn.innerHTML = 'Edit';
    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute('content', 'test content');
    deleteBtn.setAttribute('class','custom-button');
    deleteBtn.setAttribute('id','plzdelete');
    console.log('testing setattibute ' + deleteBtn.id);
    deleteBtn.innerHTML = 'Delete';
    //deleteBtn.addEventListener("click",removeItem(parsedOld[i].id));
    //deleteBtn.setAttribute('onclick', 'removeItem(1)');
    deleteBtn.setAttribute('onclick', 'removeItem(parsedOld[' + forI + '].id)');
    //deleteBtn.onclick=function (){removeItem(parsedOld[forI].id)};
    console.log("testing to see what for i is getting " +parsedOld[forI].id);
    //console.log("this is id", parsedOld[i].id);
    //deleteBtn.setAttribute('value','parsedOld[i].id');
    var originalBun = document.createElement("IMG");
    originalBun.setAttribute("src","original-01.png");
    originalBun.setAttribute("width","130px");
    originalBun.setAttribute("height","120px");
    originalBun.setAttribute("margin", "30px");
    originalBun.style.margin = "30px";

  document.getElementById("rid").appendChild(originalBun);
  document.getElementById("rid").appendChild(div);
  document.getElementById("rid").appendChild(editBtn);
  document.getElementById("rid").appendChild(deleteBtn);

//  document.getElementById("test").appendChild(originalBun);
//  console.log(i)
  //console.log(key)
  //console.log()

}
}



/* function removeCart (){

    for (var i = 0; i < localStorage.length; i++){
    // this removes all local storage
    localStorage.removeItem('itemsArray')
    var el = document.getElementById("rid");
    el.parentNode.removeChild(el);
    //this removes just text
}
} */

// get local storage, remove item that you dont want, and then put it back.
// https://stackoverflow.com/questions/39725221/remove-an-item-from-an-array-inside-a-local-storage-object-with-javascript

//var obj = JSON.parse(localStorage.getItem("itemsArray")) || {};
function removeItem(id) {
  //console.log("this is id" + id);
  //var obj = JSON.parse(localStorage.getItem("itemsArray")) || {};
  //console.log(obj) //fetch cart from storage
  //var items = obj.itemsArray || []; //get the products
  for (var i = 0; i < parsedOld.length; i++) { //loop over the collection
    //console.log("for loop triggered")
    //console.log("this is obj id ", parsedOld[i].id)
    //console.log("FIRST TEST this is parsed old",parsedOld[i].id,"this is id", id)
    console.log ('1. this is i', i)
    if (parsedOld[i].id === id){
      console.log("this is i " + i)
      //id = -1;
      console.log("this is parsedold- first if" + parsedOld[i].id + " this is the id- first if" + id)
      parsedOld.splice(i,1);
      //id -= 1;

      //var removeThis = document.getElementById("rid");
      //removeThis.parentNode.removeChild(removeThis);

    }

    //else if (parsedOld[i].id == id) {
      //see if ids match
      //i +=1;
      //console.log("this is i else if" + i)
      //parsedOld.splice(i,1);
      //console.log(obj[i].id) //remove item from array
      //break; //exit loop
      //console.log("this is parsedold else" + parsedOld[i].id + "this is the id else" + id)
      //break;
    //}

    else {
      //console.log("this is i" + i)
      //console.log("this is parsedold" + parsedOld[i].id + " this is the id" + id)
      console.log('this didnt work');
    }
  }

  localStorage.setItem("itemsArray", JSON.stringify(parsedOld)); //set item back into storage
  //document.getElementById('plzdelete').onclick = "removeItem(parsedOld[i].id)";
  //remove elements
  location.reload();
}


console.log("this is local storage" + localStorage.itemsArray);



//var parsedOld = JSON.parse(localStorage.getItem('itemsArray'));
//console.log(parsedOld)







/*function onLoad2() {

  // get the savedOrderlist in local storage if one exists
  for (var i = 0; i <localStorage.length; i++){
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    document.getElementById("text1").innerHTML=value;

  }
}

//DON"T DELETE

/* function addOrder(){
  //var glaze = addGlaze();
  //if (currentOrder.quantity !=null && currentOrder.glaze != null){
  var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
  var orderList = {
    'glaze' : currentOrder.glaze,
    'quantity' : currentOrder.quantity
  };

oldItems.push(orderList);

localStorage.setItem('itemsArray'+ counter, JSON.stringify(oldItems));
for (var i = 0; i < localStorage.length; i++){
  var key = localStorage.key(i);
  var value = localStorage.getItem(key);
  document.getElementById("test").innerHTML=value;
//  console.log(i)
  //console.log(key)
  console.log(value)
  console.log(counter + "this is counter")

}
counter +=1 ;
} */

/*function addOrder(){
  //var glaze = addGlaze();
  //if (currentOrder.quantity !=null && currentOrder.glaze != null){
  var oldItems = JSON.parse(localStorage.getItem('itemsArray')) || [];
  var orderList = {
    'glaze' : currentOrder.glaze,
    'quantity' : currentOrder.quantity
  }
  oldItems.push(orderList);


localStorage.setItem('itemsArray'+ counter, JSON.stringify(oldItems));

}*/ //Reference: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow
//for the Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
