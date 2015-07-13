
// 	QUIZ CODE 1
//
//	Quiz: Take off the "a" and capitalize the "u".
//
// 	var s = "audacity";
//	s = s[1].toUpperCase() + s.slice(2);
//	
//	-------------------------------------------
//	
//	Let's break it down.
//	
//	s[1]
//	
//	First, I want the "U" to be uppercase, so I use the index of the "U", which is 1, to grab it with brackets. JavaScript lets us use brackets to select one character of a string (and later, you'll see that you can do the same with an array).
//	
//	s[1].toUpperCase()
//	
//	.toUpperCase() is a string method, meaning it acts on the string it's attached to, which in this case is the "U" from s[1].
//	
//	At this point, s[1].toUpperCase() is equal to "U".
//	
//	+
//	
//	The + concatenates, or adds together, strings. For instance "Hello " + "JS students!" will result in "Hello JS students!".
//	
//	s.slice(2)
//	
//	.slice() is another string method, which acts on the string s in this case. .slice(start, [end]) will grab the part of the string from the index of start to the index of end. The fact that [end] shows up in brackets means that it's optional. If it isn't there, then .slice() will select all of the string from start to the very end of the string. s.slice(2) gives us "dacity".
//	
//	Concatenated together, we get "Udacity"!





//	QUIZ CODE 2
//
//	var sampleArray = [0,0,7];
//	
//	var incrementLastArrayElement = function(_array) {
//	    var newArray = [];
//	  
//	    var arrayLength = _array.length;
//	 
//	        for (i=0; i < arrayLength; i++){
//	 
//	                if(i + 1 != arrayLength){
//	                        newArray.push(_array[i]);
//	                } else {
//	                       newArray.push(_array[i]+1);
//	               }
//	
//	       }
//	  
//	    return newArray;
//	};
//	
//	console.log(incrementLastArrayElement(sampleArray));




//	QUIZ CODE 3
//	
//	var name = "AlbERt EINstEiN";
//	
//	function nameChanger(oldName) {
//	    var finalName = oldName;
//	
//	    var names = oldName.split(" ");
//	    names[1] = names[1].toUpperCase();
//	    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
//	    finalName = names.join(" ");
//	    
//	    return finalName;
//	}
//	
//	console.log(nameChanger(name));





//	QUIZ CODE 4
//
//
//	var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';
//
//	var charEscape = function(_html) {
//	    var newHTML = _html;
//	    // How will you make sure that newHTML doesn't contain any < or > ?
//	    // Your code goes here!
//	
//	    newHTML = _html.replace(/</g, "&lt;");
//	    newHTML = newHTML.replace(/>/g, "&gt;");
//	    
//	    // Don't delete this line!
//	    return newHTML;
//	};
//	
//	// Did your code work? The line below will tell you!
//	console.log(charEscape(html));





// NOTES NOTES NOTES NOTES NOTES

// $("#main").append("Jonathan Graham");
// [string].replace([old],[new])

var email = "jograham@expedia.com";
var newEmail = 
	email.replace("expedia","gmail");

console.log(email);
console.log(newEmail);

//

var awesomeThoughts = 
	"My name is Jonathan Graham and I am AWESOME!";
var funThoughts = 
	awesomeThoughts.replace("AWESOME","FUN");

// $("#main").append(funThoughts);

//

var name = "Jonathan Graham";
var role = "Sr. Web Designer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//

var skills = 
	["awesomeness","UX design","HTML/CSS","JS"]

// $("#main").append(skills[0]);

var bio = {
	"name" : "Jonathan Graham",
	"role" : "Sr Web Designer",
	"contacts" : {
		"mobile" : "425-531-5741",
		"email" : "jograham@expedia.com",
		"location" : "Bellevue"
	}, 
	"welcomeMessage" : "Lorem ipsum dolor sit amet",
	"skills" : [
		"awesomeness","UX design","HTML/CSS","JS"
	], 
	"bioPic" : "images/me.jpg"
};

// $("#main").append(bio.name);

var work = {};
work.position = "Sr Web Designer";
work.employer = "Expedia";
work.years = 4;

var education = {};
education["name"] = "Westwood College";
education["years"] = "2002-2005";
education["city"] = "Anaheim";

// $("#main").append(work["position"]);
// $("#main").append(education.name);

// Javascript Object Notation (JSON)

// While loop example
// 
// var jonathan = {};
// jonathan.job = "course dev";
// 
// var makeCourse = function() {
// 	// make a course
// 	console.log("Made a course");
// }
// 
// var courses = 0;
// while(jonathan.job === "course dev") {
// 	makeCourse();
// 	courses = courses + 1;
// 	if(courses === 10) {
// 		jonathan.job = "learning specialist";
// 	}
// }
// 
//


