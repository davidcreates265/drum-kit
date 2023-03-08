/* Longer Method 
document.querySelectorAll("button")[0].addEventListener("click", clicked);
document.querySelectorAll("button")[1].addEventListener("click", clicked);
document.querySelectorAll("button")[2].addEventListener("click", clicked);
document.querySelectorAll("button")[3].addEventListener("click", clicked);
document.querySelectorAll("button")[4].addEventListener("click", clicked);
document.querySelectorAll("button")[5].addEventListener("click", clicked);
document.querySelectorAll("button")[6].addEventListener("click", clicked);

*/

var numberOfDrums = document.querySelectorAll(".drum").length;

/* Making the drums clickable */
for (var i=0; i < numberOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener ("click", function() {
       
        var buttonInnerHTMLKeys = this.innerHTML;
    makeSound(buttonInnerHTMLKeys);
    buttonAnimation(buttonInnerHTMLKeys)

    });
    }



/* Event function Down Here*/

    

    document.addEventListener ("keypress", function(event){ 
        makeSound(event.key);
    });

    function makeSound(key) {

    switch (key) {
        case "w": var key1 = new Audio("sounds/tom-1.mp3");
         key1.play();

         break;
        
         case "a": var key2 = new Audio("sounds/tom-2.mp3");
         key2.play();
         
         break;

         case "s": var key3 = new Audio("sounds/tom-3.mp3");
         key3.play();
         
         break;

         case "d": var key4 = new Audio("sounds/tom-4.mp3");
         key4.play();
         
         break;

         case "j": var key5 = new Audio("sounds/snare.mp3");
         key5.play();
         
         break;

         case "k": var key6 = new Audio("sounds/crash.mp3");
         key6.play();
         
         break;

         case "l": var key7 = new Audio("sounds/kick-bass.mp3");
         key7.play();
         
         break;




        /*The default is like an else statement*/
         default: console.log(innerHTMLKeys);
    }
        } 

       

    



// var audio = new Audio("sounds/viva/viva1.mp3");
  //  audio.play();