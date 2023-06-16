function speed(){
    var momentum = parseInt(prompt("Enter speed"));//alows for input of the cars speed.
    var momentumlimit = 70;
    let pace = (momentum - momentumlimit);//calculates by how much the car has passed the speed limit.
    let points = pace*0.2;

    if (momentum <= 70){
        document.writeln("Ok")//when the speedlimit is not exceeded their is no issues hence the "Ok".
    }else{
        if (points > 12){
            document.writeln("Licence suspended")//when points allocated exceeds 12 points it says licence suspended.
        }else {
            document.writeln(points)//allows for allocation of points when speedlimit is exceeded.
        }
        
    }
}
speed();//calls the function allowing it to run.