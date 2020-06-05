var game=[];

var buttoncolors=["green","red","yellow","blue"];

var usersequence=[];

var userChosenColor;

var level =-1;
$(document).keypress(NextSequence);


$(".btn").click(function(event)
{
userChosenColor = event.target.id;
usersequence.push(userChosenColor);

  $("."+userChosenColor).addClass("pressed");
  setTimeout(function(){ $("#"+userChosenColor).removeClass("pressed"); }, 100);
  playsound(userChosenColor);


  checkanswer(usersequence.length -1);
});







function checkanswer(curr)
{
  if(game[curr]===usersequence[curr])
  {
    if( game.length===usersequence.length)
    {
      setTimeout(function () {NextSequence();}, 1000);
    }
  }
  else
  {
    playsound("wrong");
    $("#level-title").text("Game over! enter any key to restart");

    $("body").addClass("game-over");

      setTimeout(function(){ $("body").removeClass("game-over"); }, 200);
      startover();
  }
}



function NextSequence()
{
  level++;
console.log(game);
usersequence=[];
  $("#level-title").text("level: "+level);
var randomnumber = Math.floor(Math.random()*4);

var randomChosenColor = buttoncolors[randomnumber];

game.push(randomChosenColor);

$("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

playsound(randomChosenColor);
}

function startover()
{
  level=-1;;
  game=[];
}



function playsound(name)
{
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}
