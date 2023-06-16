function speed(){
    var momentum = parseInt(prompt("Enter speed"));
    var momentumlimit = 70;
    let pace = (momentum - momentumlimit);
    let points = pace*0.2;

    if (momentum <= 70){
        document.writeln("Ok")
    }else{
        if (points > 12){
            document.writeln("Licence suspended")
        }else {
            document.writeln(points)
        }
        
    }
}
//speed();