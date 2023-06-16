function grade() {
    var marks = parseInt(prompt("Enter marks"))//allows for input of marks.
    
    if (marks > 79 && marks <= 100){
        document.writeln("A");//gives the range of marks that fall into the category of A grade.
    }else if (marks >= 60 && marks <= 79){
        document.writeln("B");//gives the range of marks that fall into the category of B grade.
    }else if (marks >= 49 && marks <= 59){
        document.writeln("C");//gives the range of marks that fall into the category of C grade.
    }else if(marks >= 40 && marks < 49){
        document.writeln("D");//gives the range of marks that fall into the category of D grade.
    }else if (marks < 40){
        document.writeln("E");//gives the range of marks that fall into the category of E grade.
    }
}
grade();//calls the function allowing it to run.