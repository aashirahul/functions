// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
if(x>y){
		return x;
	}else{
		return y;
	}
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
	if(x>=y&&x>=z){
		return x;
	}
	if (y>=x&&y>=z){
		return y;
	}else{
		return z;
	}
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
	var vowel = ["a","e","i","o","u","A","E","I","O","U"];
	for(i=0; i<=vowel.length; i++){
		if(vowel[i] = char){
			return true;
		}
	}
return false;
}   


// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------




// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
	var i;
	var rev = "";
	for(i=string.length-1;i>=0;i--){
		rev = rev+string[i];
	}
return rev;
}