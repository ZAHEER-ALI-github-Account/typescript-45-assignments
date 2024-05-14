// question no 25

//write an if statement to test whether the alien's color is green. if it is, print 
//a message that the player just earn 5 points:
let alien_color = "green";
if(alien_color === `green`){
    console.log("Player just earn 5 points!");
}

//write one version of this program that passes the if test and another that fails
//(the version that fails will have no output.);
alien_color = "yellow";
if(alien_color === `green`){
    console.log("Player just earn 5 points!");
}