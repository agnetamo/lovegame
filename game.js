var name1 = prompt("Enter your name");
var name2 = prompt("Enter your person's name");
var max = 100;
var min = 10;

matchScore = Math.floor(Math.random() * (max - min +1) + min);
if(matchScore <=40){
    alert("Your score is " + matchScore + "%, You don't love each other");
} else if(matchScore <70){
    alert("Your score is " + matchScore + "%, mm you might love each other");
} else {
    alert("Your score is "+ matchScore + "%. Congratulations, you def love each other");
}
