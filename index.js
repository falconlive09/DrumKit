var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrumButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        handleClick(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}
function handleClick(c1)
{
    switch (c1) {
        case "w":
                var audio=new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;
        case "a":
                var audio=new Audio("./sounds/tom-2.mp3");
                audio.play();
                break;
        case "s":
                var audio=new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;    
        case "d":
                var audio=new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;
        case "j":
                var audio=new Audio("./sounds/snare.mp3");
                audio.play();
                break;
        case "k":
                var audio=new Audio("./sounds/crash.mp3");
                audio.play();
                break;
        case "l":
                var audio=new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;     
        default: console.log(c1);
    }
}

function buttonAnimation(c1)
{
     var activeButton= document.querySelector("."+c1); //button that we add animation to
     activeButton.classList.add("pressed");
     setTimeout(function(){
        activeButton.classList.remove("pressed");
     },100); 
}
document.addEventListener("keydown",function(event){
    handleClick(event.key);
    buttonAnimation(event.key);
    console.log(event.key);
});


// var audio=new Audio("./sounds/tom-1.mp3");
// audio.play();