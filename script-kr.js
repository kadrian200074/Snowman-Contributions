/* PATCH NAME: Fix You Lose
* PATCH EFFECT: fixes background for you lose image 
*/

+ function youLose() {
  + let endScreen = document.createElement("div");
  + endScreen.setAttribute("id","endScreen");
  + document.body.appendChild(endScreen);
+ }

function checkBackround() { 
  @ snowman.classList.add("redshift");
  }
+ else if (nextPartId == 6) {
  + youLose();
+ }
}

/* add to css */
// #endScreen {
//   left:0;
//   top:0;
//   position:absolute;
//   width:900px;
//   height:700px;
//    background-image: url("youlose.jpg");
//    background-repeat: no-repeat;
//    background-size:cover;
//    background-color:#C6D1D3;
// }

@ var parts = ["abdomen","thorax","head","left","right","nose"];
-,"lose"
+ ,"blank"

