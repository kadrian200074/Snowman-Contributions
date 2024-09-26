/* Patch Name: You Lose ix */

/* add to style.css */
// #endScreen {
//   left:0;
//   top:0;
//   position:absolute;
//   width:900px;
//   height:678px;
//   background-image:url("youlose.jpg");
//   background-repeat: no-repeat;
//   background-size:cover;
//   background-color:#C6D1D3;
//}
function checkBackground(){
@   snowman.classList.add("redshift"); 
@ }
  +  else if (nextPartId == 6) {
  +  youLose();
  +  }
/* Add new function youLose*/
  + function youLose() {
  +   let endScreen = document.createElement("div");
  +   endScreen.setAttribute("id","endScreen");
  +   document.body.appendChild(endScreen);
  + }
