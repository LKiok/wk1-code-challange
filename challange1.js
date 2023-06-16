function grade() {
    var marks = parseInt(prompt("Enter marks"))
    
    if (marks > 79 && marks <= 100){
        document.writeln("A");
    }else if (marks >= 60 && marks <= 79){
        document.writeln("B");
    }else if (marks >= 49 && marks <= 59){
        document.writeln("C");
    }else if(marks >= 40 && marks < 49){
        document.writeln("D");
    }else if (marks < 40){
        document.writeln("E");
    }
}
//grade();