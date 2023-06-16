function netPay(){
    var taxable = parseInt(prompt("enter income"));//allows for input of income.
    let rate ;
    
    if (taxable <= 24000) {
        let rate = 0.1;
        document.writeln(taxable*rate);
    }else if (taxable >= 24001 && taxable <= 32333){
        let rate = 0.25;
        document.writeln(taxable*rate);
    }else if (taxable > 32333){
        let rate = 0.3;
        document.writeln(taxable*rate);
    }//shows the amount of money taken as paye.

    let benefits;
    let loan = parseInt(prompt("enter \n 1;No loan \n 2;Taken loan"));//alows a person to choose whether they have taken a loan or not.

    if (loan === 1){
        benefits = 0;
        if (benefits = 0){
            document.writeln(0)
        }//shows they have no Fringe benefit tax if they have not taken a loan.
    }
    let months = parseInt(prompt("enter range of months \n 1;January to March \n 2;April to June \n 3;July to September \n 4;October to December"));//allows for choosing the range of months
    if (loan === 2){
       if (months = 1){
        benefits = taxable*0.07;
        document.writeln(taxable*0.07);//calculates Fringe benefit tax for the first range of months.
       } else if (months = 2){
        benefits = taxable*0.07;
        document.writeln(taxable*0.07)//calculates Fringe benefit tax for the second range of months.
       }else if (months = 3){
        benefits = taxable*0.08;
        document.writeln(taxable*0.08);//calculates Fringe benefit tax for the third range of months.
       }else if (months = 4){
        benefits = taxable*0.09;
        document.writeln(taxable*0.09);//calculates Fringe benefit tax for the fourth range of months.
       }
    }

    let NHIFDeductions;

    if (taxable <= 5999){
        let NHIFDeductions = 150;
        document.writeln(taxable - NHIFDeductions);
    }else if (taxable >= 6000 && taxable <=7999){
        let NHIFDeductions = 300;
        document.writeln(taxable - NHIFDeductions);
    }else if (taxable >= 8000 && taxable <= 11999){
        let NHIFDeductions = 400;
        document.writeln(taxable - NHIFDeductions);
    }else if (taxable >= 12000 && taxable <= 14999){
        let NHIFDeductions = 500;
        document.writeln(taxable - NHIFDeductions);
    }else if (taxable >= 15000 && taxable <= 19999){
        let NHIFDeductions = 600;
        document.writeln(taxable - NHIFDeductions);
    }else if (taxable >=20000 && taxable <= 24999){
        let NHIFDeductions = 750;
        document.writeln(taxable - NHIFDeductions);
    }else if ( taxable >= 25000 && taxable <=29999){
        let NHIFDeductions = 850;
        document.writeln(taxable - NHIFDeductions);
    }else if (taxable >= 30000 && taxable <= 34999){
        let NHIFDeductions = 900;
        document.writeln(taxable - NHIFDeductions);
    }else if (taxable >= 35000 && taxable <= 39999){
        let NHIFDeductions = 950;
        document.writeln(taxable - NHIFDeductions);
    }else if (taxable >= 40000 && taxable <= 44999){
        let NHIFDeductions = 1000;
        document.writeln(taxable - NHIFDeductions);
    }else if ( taxable >= 45000 && taxable <= 49999){
        let NHIFDeductions = 1100;
        document.writeln(taxable - NHIFDeductions);
    }else if (taxable >= 50000 && taxable <= 59999){
        let NHIFDeductions = 1200;
        document.writeln(taxable - NHIFDeductions);
    }else if (taxable >= 60000 && taxable <= 69999){
        let NHIFDeductions = 1300;
        document.writeln(taxable - NHIFDeductions);
    }else if (taxable >= 70000 && taxable <= 79999){
        let NHIFDeductions = 1400;
        document.writeln(taxable - NHIFDeductions);
    }else if (taxable >= 80000 && taxable <= 89999){
        let NHIFDeductions = 1500;
        document.writeln(taxable - NHIFDeductions);
    }else if (taxable >= 90000 && taxable <= 99999){
        let NHIFDeductions = 1600;
        document.writeln(taxable - NHIFDeductions);
    }else if (taxable >= 100000){
        let NHIFDeductions = 1700;
        document.writeln(taxable - NHIFDeductions);
    }//calculates the money left after NHIF deductions in each range of
     
    let pension;
    let Tier = parseInt(prompt("choose you Tier \n 1;Tier 1 \n 2;Tier 2"))//allows choosing of ties.
     
    if (Tier === 1){
         pension = taxable*0.06;
        if (pension <= 360){
            document.writeln(pension);  
        }else {
            pension = 360;
            document.writeln(pension)
        }//calculates the pension for tier 1.
    }
    else if (Tier === 2){
        pension = taxable*0.06;
        if (pension <= 1080){
            document.writeln(pension);
        }else {
            pension = 1080;
            document.writeln(pension);
        }//calculates the pension for tier 2.
    } 
     
}
netPay();//calls the function allowing to run.