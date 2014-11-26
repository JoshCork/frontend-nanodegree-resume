project 2 reflections

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