var gamePattern=[];
var userClickedPattern=[];
var buttonColors=["red", "blue", "green", "yellow"];
var level=0; 
var seqNo=0;
var started = false;
$(".rules").click(function(){
    alert(" RULES OF SIMON GAME:\n 1.Press a key in the keyboard. Simon will give the first signal. \n 2.Repeat the signal by pressing the same color lens. \n 3.Simon will duplicate the first signal and add one. Repeat these two   signals by pressing the same color lenses, in order.\n 4.Simon will duplicate these first two signals and add one.Continue playing as long as you can repeat each sequence of signals correctly.");
});
function playSound(name){
    
        var audio=new Audio("sounds/"+name+".mp3");
        audio.play();
    
    
}
function animatePress(currentColour){
    
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100)
}
$(".btnn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log("here");
    playSound(userChosenColour);
    animatePress(userChosenColour);
    seqNo=userClickedPattern.length-1;
    if(gamePattern[seqNo]!=userClickedPattern[seqNo]){
        playSound("wrong");
        
        $("h1").text("Game Over, Press Any Key to Restart");
        started = false;
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        gamePattern=[];
        userClickedPattern=[];
        return;
    }
    
    if(seqNo===gamePattern.length-1){
        userClickedPattern=[];
        
    
        
        setTimeout(function(){
            nextSequence();
        },1000);
        
    }
    
    
});
function nextSequence(){
    level=gamePattern.length+1;
    $("h1").text("level "+level); 
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour);
    playSound(randomChosenColour);
    console.log(gamePattern);
    
    
}
$(document).keydown(function(){
    if (!started) {
        $("h1").text("level 1");
        setTimeout(function(){
            nextSequence();
        },400);
        started = true;
      }
    
    
    
    
    
});
$("#click").click(function(){
    if (!started) {
        $("h1").text("level 1");
        setTimeout(function(){
            nextSequence();
        },400);
        started = true;
      }
    
    
    
});
// var z=0;
// var number;

//     $(document).keydown(function game(){
//         do{
//             z=1;
//             alert('working');
//             number=0;
//             $("h1").text("Level "+z);
//             randomGeneration();
//             var colorPressed;
//             $(".btn").click(function(){
//                 colorPressed=$(this).attr("id");
//                 if(buttons[arr[number]]!=colorPressed){
//                     $("h1").text("game over Press any key to restart the game");
//                     z=-1;
//                     return;
//                 }
//                 else{
//                     number++;
//                 } 
//                 if(number==z){
//                     z=2;
//                 }
                
//             });    
//         }while(z%2===0)
//         alert("here");         
//     })
// function randomGeneration(){
    
//     arr.push(randomNumber);
    
//     $("#"+buttons[randomNumber]).fadeOut(100).fadeIn(100);
// }
