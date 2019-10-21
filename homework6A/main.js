//new code added
//
var count=0;
function changeCartNumber2(){
  if (clickedobject != null && clickedobject2 !=null) {
    count +=1;
    document.getElementById("cart").innerHTML=count;

  }

};
//use this for glaze type//
var clickedobject=null;

function myFunction(elmnt,clr,clr2) {
  if (clickedobject!= null){
    clickedobject.style.color="rgb(105, 105, 105)";
    clickedobject.style.backgroundColor="rgb(255, 242, 245)";
  }
  clickedobject = elmnt;
  clickedobject.style.color = clr;
  clickedobject.style.backgroundColor=clr2;
};
//use this for quantity type//
var clickedobject2=null;

function myFunction2(elmnt,clr,clr2) {
  if (clickedobject2!= null){
    clickedobject2.style.color="rgb(105, 105, 105)";
    clickedobject2.style.backgroundColor="rgb(255, 242, 245)";
  }
  clickedobject2 = elmnt;
  clickedobject2.style.color = clr;
  clickedobject2.style.backgroundColor=clr2;
};
//update cart number//
// if clickedobject2 != null and clickedobject !=null, then functionchangecart number. each time clicked, do plus 1
/*function changeCartNumber()
{
document.getElementById("cart").src="shopping-cart1.png";
} */
