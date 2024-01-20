/* PATCH NAME: Onscreen Keyboard
 * PATCH EFFECT: Add a working onscreen keyboard 
 */

function setup(){
  + makeKeyBoard();
}

  + function makeKeyBoard() {
  +  let keyBoard = document.createElement("div");
  +  let guesses = document.getElementById("guesses");
  +  keyBoard.setAttribute("id","keyboard");
  +  guesses.appendChild(keyBoard);
  +  let alphabet =   "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
  +  const keyletters = alphabet.split(',');
  +   for (let i =0; i <26; i++) {
  +     makeKey(keyletters[i]);
  +   }
  + }

  + function makeKey(letter) {
  +  let newKey = document.createElement("button");
  +  newKey.innerHTML = letter;
  +  let keyBoard = document.getElementById("keyboard");
  +  newKey.addEventListener('click', myFunc, false);
  +  newKey.myParam = letter;
  +  function myFunc(evt) {
  +     keyGuess(evt.currentTarget.myParam);
  +  }
  +  keyBoard.appendChild(newKey);
  + }

  + function keyGuess(letter){
  +  let guesses = document.getElementById("guesses");
  +  let letters = document.getElementById("feedback");
  +  let letterBox =document.getElementById("entryBox");
  +  let message = "";
  +  if (checkLetter(letter) == true) {
  +    if (guessedLetters.join() == answerLetters.join()) {
  +      message = "You win! The answer was " + answer;
  +     }
  +     else { 
  +       message = "Good guess! Your letters are now: <br>"+ guessedLetters;
  +     }
  +   }
  +   else if(nextPartId == parts.length){
  +   message = "You lose! The answer was "+answer;
  +  }
  +  else {
  +   message = "Bad guess! Your letters are still: <br>"+ guessedLetters;
  +   badGuess();
  +  }
  + }
  + feedback.innerHTML = message;
  + }
