

for (let i=1; i<=10; i++){
    console.log("Hellow World");
    console.log(i);
}

let marks = [33, 44, 55, 66, 77];

for (let i=0; i<=7; i++){
    
    if(marks[i]>=80){
        console.log(marks[i]+"=the grade is A+");
    }
    else if(marks[i]>=70){
        console.log(marks[i]+"=the grade is A");
    }
    else if(marks[i]>=60){
        console.log(marks[i]+"=the grade is A-");
    }
    else if(marks[i]>=50){
        console.log(marks[i]+"=the grade is B");
    }
    else if(marks[i]>=40){
        console.log(marks[i]+"=the grade is C");
    }
    else if(marks[i]>=33){
        console.log(marks[i]+"=the grade is D");
    }
    else(marks[i]+"=the grade is F");
}