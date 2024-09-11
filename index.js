// The assignment operators with addition subtraction multiplication

var total = 10 //reassigned the value to 15
//addition
total += 5
console.log(total);

//subtraction
total -= 3 //now it minuses the value 3 from 15 not 10
console.log(total); //12


//multiplication
total *= 2 //now it multiplies the value 2 from 12 not 15
console.log(total); //24

//now the final answer is 24 because these are assignment operators and they reassigns the value also

// prompt and +prompt (+ shows that it will take input in numbers)

// +prompt

var addOne = +prompt ("Write first values for addition")
var addTwo = +prompt ("Write second values for addition")

var addition = addOne + addTwo
alert(addition)


// prompt
// in this i concatenated the strings with the variables  

var province = prompt("write the name of largest province of Pakistan")
var city = prompt("write the name of city that starts with a letter Q and is located in Balochistan")

var cont = province + " is the largest province of Pakistan and " + city + " is the famous city of it."
alert(cont)

// concatenation
// strings + variables concatenation

var book = "Jannat k Pattay"
var writer = "Nimra Ahmed"
var date = "1999."

var sentences = "the book " + book + " was written by " + writer + "in " + date 
console.log(sentences)



// if / else statements

var num = +prompt ("Please write any number")

if ( num % 2 === 0){ // this shows that it will divide the number by 2
    alert ("you entered an even number")
} else {
    alert ("you entered an odd number")
}


// grade calculation task (if else or else if statements)

var grade = +prompt ("Writ the percentage you scored in intermediate")

if (grade > 100){
    alert ("The percentage you entered is invalid")
}

else if ( grade >= 90) {
    alert ("Congratulations A+ grade")
}

else if ( grade >= 80) {
    alert ("Congratulations A grade")
}

else if ( grade >= 70) {
    alert ("Congratulations B grade")
}

else if ( grade >= 60) {
    alert ("Congratulations C grade")
}

else if ( grade >= 50) {
    alert ("Congratulations D grade")
}


else if ( grade >= 40) {
    alert ("Congratulations E grade")
}


else if ( grade <= 40) {
    alert ("you are FAIL")
}

else if ( grade < -1) {
    alert ("The percentage you entered is invalid")
}

else {
    alert  ("invalid numbers")
}





