Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

	var sum = function(x,y){
		return x+y;
	}




// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
	
	
	var avg = function(x,y,z){
		var add;
		var answer;
		add = x+y+z;
		answer=add/3;
		return answer;
	}




// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length
	
	var getlength = function(string){
		var i = 0;
		while(string[i]!= undefined){
			i++;
		}
	 	return i;
	}



// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.
	
	var greaterThan = function(x,y){
		if(y>x){
			console.log(true);
	    }else{
			console.log(false);
	 	}
  	 }

	
	




// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

	var greet = function(String){
		var msg = ""Hello,"+ String + "!"";
		return msg;
	}
	



// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

	var madlib = function(word1,word2,word3,word4){
		var words =[word1,word2,word3,word4];
		var sentence = ["","pink","","are","","all",""];
		for(i=0;i<words.length;i++){
			sentence[i*2] = words[i];
		 }
	return sentence;
}