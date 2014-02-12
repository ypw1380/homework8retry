var numDollars = Math.random()*100

if(numDollars < 10) {
	//stuff you do if it's true
	alert("The number is else than 10!");
}
else {
	//stuff you do if it's false
	alert("You chose "+numDollars+" and it is greater than 10!");
}

console.log(numDollars);


function addThree(some_number) {
	return some_number + 3;
}

addThree(6);

function sayHi(name)
{
	alert("Hi "+name+"!");
}

sayHi("Young");

function theName(name) {
	alert("The name you entered is "+name);
}

theName("john");

function random() {
	console.log("Hello!");
}

random();

function prize(door) 
{
	if(door===1) 
	{
		console.log("You have won a car!");
	}
	else if(door===2)
	{
		console.log("You have won a boat!");
	}
	else
	{
		console.log("You have won a gift certificate!");
	}
}

prize(0);
