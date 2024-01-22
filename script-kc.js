/* PATCH NAME: Check Background
* Change background in script to snowfall. 
* Shift background to yellow at errors = 4; 
* shift to red at errors = 5.
*/
*// Add into function badGuess();
function checkBackground() {
    +let snowman = document.getElementById ("snowman");
    +if(nextPartId == 4){
    +snowman.classList.add("yellowshift");
    +}
    +else if (nextPartId == 5) {
    +snowman.classList.add("redshift");
  }
}

// Add classes to css 
+ .yellowshift{
+ filter: hue-rotate(170deg);
+ }
+ .redshift{
+  filter: hue-rotate(135deg);
+ }
