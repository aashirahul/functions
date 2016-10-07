// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
    var largestNum = function(numbers){
    var count;
    var largest =numbers[0];
    for(count=1; count<numbers.length; count++){
        if(numbers[count]>largest){
            largest=numbers[count];
        }
    }
    return largest;
}




// ---------------------------
// 2. Find longest string

	var longest = function(string){
    var count;
    var word = string[0];
    for(count=1; count<string.length; count++){
        if(string[count].length>word.length){
            word=string[count];
        }
    }
    return word;
}




// ---------------------------
// 3. Find even numbers
    
    var evenNum = function(numbers){
    var count;
    var even =[];
    for(count=0; count<numbers.length; count++){
        if(numbers[count]%2===0){
            even.push(numbers[count]);
        }
    }
    return even;
}




// ---------------------------
// 4. Find odd numbers
    var oddNum = function(numbers){
    var count;
    var odd =[];
    for(count=0; count<numbers.length; count++){
        if(numbers[count]%2!=0){
            odd.push(numbers[count]);
        }
    }
    return odd;
}



// ---------------------------
// 5. Find words that contain `is`

    var search = function(strings){
    var count;
    var i;
    var contains=[];
    for(count=0; count<strings.length;count++){
        var word =strings[count];
        for(i=0;i<word.length;i++){
            if(word[i]=='i'&&word[i+1]=='s'){
                contains.push(word);
            }
        }
    }return contains;
}


// ---------------------------
// 6. Join Both Arrays Together
// ---------------------------
    var join = function(numbers,strings){
    var count;
    for(count=0; count<numbers.length; count++){
            strings.push(numbers[count]);
        }
    
    return strings;
}



// ---------------------------
// 7. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
//  var search = function(){
    var count;
    var contains=[];
    var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];
    for(count=0; count<instructors.length;count++){
        if(instructors[count].teaches=="JavaScript"){
                contains.push(instructors[count]);
            }
        }
    return contains;
}