project 2 reflections

## 12/1/2014 - Loose Equality - important to remember

	Strict equality (===) vs Loose equality (==)

	When you use three equal signs, ===, no type conversion is done prior to the comparison. If the values are different types, for example, a String and a Number, they can't ever be equal. To return true, the values must be equal and the types must be the same.

	Loose equality, ==, checks to see if the two values are the same type and if not, converts to a common type before the conversion. If the types are already the same, there is no difference between the result of === and ==. When they aren't it can cause unexpected results.

	Check the link to an article on Mozilla Developer Network to see what values get converted into what.

	According to Jacques Favreau, the lead front-end engineer at Udacity, you should never use ==. It's a frequent source of bugs. In fact, if a Udacity engineer tries to commit code with ==, it automatically gets rejected.

	Though it wasn't mentioned in the video, the same conditions apply for strict inequality (!==) and loose inequality (!=). Loose inequality is more forgiving than loose equality so you might not see strict inequality as often.

## 12/1/2014 - working from a plane.  
Copying and pasting my code here as I'm having trouble with my connection on the shuttle on my way to Oregon.  

	var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
	};

	// Use console.log() to figure out if dot and/or bracket notation
	// will work to access the properties below. Mark true if you can use dot/bracket
	// notation to access the property, otherwise mark false.

	// For example, uncomment the line below to see if you can use dot notation to access `property1`.
	// console.log(weirdObject.property1);

	console.log(weirdObject.property);
	console.log([weirdObject](property));

	// I'll give you the first answer. The rest are set to false. Try out each property and
	// if you can use dot or bracket notation to access it, change the answer to true!

	// property
	var dotNotation0 = true;
	var bracketNotation0 = true;

	// property1
	var dotNotation1 = true;
	var bracketNotation1 = true;

	// property-2
	var dotNotation2 = false;
	var bracketNotation2 = true;

	// property 3
	var dotNotation3 = false;
	var bracketNotation3 = true;

	// property$
	var dotNotation4 = true;
	var bracketNotation4 = true;

	// *space*property
	var dotNotation5 = false;
	var bracketNotation5 = true;

	// property()
	var dotNotation6 = false;
	var bracketNotation6 = true;

	// property[]
	var dotNotation7 = false;
	var bracketNotation7 = true;

	// 8property
	var dotNotation8 = false;
	var bracketNotation8 = true;

## 11/28/2014 - buliding out my objects
Build my objects out in resumeBuilder.js.  Not feeling well today.  Yesterday was thanksgiving and half way through the day came down with a bad sore throat.  Feel kinda terrible today.  calling it a day for now. 

## 11/26/2014 - string manipulation.  
Not sure if this is the most efficient way of doing this but created an array and filled it with words using the split function to split the original string based on spaces.  Then I assumed only two word names and made the first proper case using the slice trick and the last all uppercase using the uppercase function.  I used plunker and imported jQuery to push the HTML out to the browser where I could test and see my changes.  Here's my code: 

	var finalName = "AlbERt EINstEiN";

	var myStringArray = [];
	myStringArray = finalName.split(" "); // splits the the final name string into separate strings by using the " ".

	var firstName = myStringArray[0].toLowerCase();
	var lastName = myStringArray[1].toUpperCase();
	var firstLetter = firstName.charAt(0).toUpperCase();
	finalName = firstLetter + firstName.slice(1) + " " + lastName;

	var myOutput = finalName;


	//firstName.slice(1)
	/* will give me the first and last name now I need to make the first name proper case */ //firstName + " " + lastName;
	/* finds the location of the space */  //oldName.indexOf(" ")
	/* makes the entire oldName Uppercase*/ //oldName.toUpperCase();



	$("#innerHTML").append(myOutput);

## 11/26/2014 - quiz troubles and understanding. 
Took me a little bit to understand why my code was failing.  I was doing everything in the console and it was working fine.  I had to relize that they were passing a value into the function that i was supposed to use instead of their sample array.  Once I figured that out it was easy.  Also as you can see in the commented out code below I attempted this a harder way first.  

	var sampleArray = [0,0,7];

	var incrementLastArrayElement = function(_array) {
	    var newArray = [];
	   
	    // Your code should make newArray equal to an array that has the same
	    // values as _array, but the last number has increased by one.
	    
	    // For example:
	    // _array = [1, 2, 3];
	    // turn into:
	    // newArray = [1, 2, 4];
	    
	    // Your code goes in here!
	    
	    //sampleArray[sampleArray.length-1] = sampleArray[sampleArray.length-1] + 1;
	    //newArray = sampleArray;
	    
	    _array.push(_array.pop()+1);
	    newArray = _array;
	    
	    // Don't delete this line!
	    return newArray;
	};

	// Did your code work? The line below will tell you!
	console.log(incrementLastArrayElement(sampleArray));


