Young's Cheat Sheet - Javascript

1. variables - are "containers" that store information.  Can be declared using the var keyword.  Variables don't have to be declared.
	a. example is var x = 1001(declared) or var z(undeclared)

2. debugging - 
	a. comments - two different types for JS
		1.  Use // for single line comments //
		2.	Use /* for multi line */
	b. alerts - used to see the output of scripts.  
		ex. alert("Hi there") - will output a popup box with the string in quotes.
	c. console - can write arbitrary JS to test scripts.

3. data types - use the typeof function if not sure
	a. string - a series of characters for example "Hi there" and "I have 5".
	b. numbers - can be written with or without numbers for example 0, 100, 5.4576.
	c. boolean - true or false.  For example, (xyz===xyz and 3===3 would result in output true.  However, xyz===xyy would output the boolean false.)
	d. undefined - has no value.  A variable originally undefined can later be defined (var xyz)
	e. arrays - mentioned below

4. arrays - set of data that comes in many data types
	a. example is ["a", "b", "c", and "x"]
	b. different types of data can make an array.  For example ["a", 1, "John"]
	c. an array can be defined to be a variable.  For example var city = ["New York", "Boston", "Atlanta"]
	d. arrays can store multiple arrays as well.

5. testing - must be careful so don't cause bugs down the road
	a. === means equal to.  Also checks object type
	b. == advise not to use
	c. There are many other comparison operators such as <, >, >=

6. logic - control flow(statements) of the program.  (examples are if, for, else, while).  It is important to make scripts have logic that completes certain tasks.

7. functions - once declared, can later be used(called) by using its name.
	a. function young(a) {
			alert('You are "+a+" years old");
		}