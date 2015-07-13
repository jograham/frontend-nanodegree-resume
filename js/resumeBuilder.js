// Javascript Object Notation (JSON)

// MY OBJECTS
// BIO
var bio = {
	"name": "Jonathan Graham",
	"role": "Sr. Web Designer",
	"contacts": {
		"mobile": "425-531-5741",
		"email": "jonathanmichaelgraham@gmail.com",
		"github": "https://github.com/jograham/",
		"twitter": "N/A",
		"location": "Bellevue, WA"
	},
	"skills": [
		"awesomeness",
		"UX",
		"HTML &amp; CSS",
		"Photoshop",
		"Illustrator",
		"Motion graphics",
		"Photography"
	],
	"bioPic": "images/goku.jpg",
	"welcomeMessage": "Lorem ipsum dolor sit amet."
	// display: function() {}
};

// EDUCATION
var education = {
	"schools": [
		{
			"name": "Westwood College",
			"location": "Anaheim, CA",
			"degree": "BS",
	 		"majors": ["Visual Communication"],
	 		"dates": 2005,
	 		"url": "http://www.westwood.edu/"
		}
	],
	"onlineCourses" : {
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": 2015,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}
	// display: function() {}
};

// WORK
var work = {
	"jobs" : [
		{ 	
			"employer": "Microsoft",
			"title": "Web Developer",
			"location": "Redmond, WA",
			"dates": "2006-2007",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		}, 
		{
			"employer": "Newegg.com",
			"title": "Lead Web Designer",
			"location": "City of Industry, CA",
			"dates": "2007-2011",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
		}, 
		{
			"employer": "Expedia",
			"title": "Sr Web Designer",
			"location": "Bellevue, WA",
			"dates": "2011 - Present",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		}
	]
	// display: function() {}
};

// PROJECTS
var projects = {
	"projects": [
		{
			"title": "Project 1",
			"dates": 2015,
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	 		"images": [
	 			"images/vegeta.jpg",
	 			"images/vegeta.jpg"
	 		]
		},
		{
			"title": "Project 2",
			"dates": 2015,
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	 		"images": [
	 			"images/gohan.jpg",
	 			"images/gohan.jpg"
	 		]
		},
		{
			"title": "Project 3",
			"dates": 2015,
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	 		"images": [
	 			"images/picollo.jpg",
	 			"images/picollo.jpg"
	 		]
		}
	]
	// display: function() {}
};

// END OF MY OBJECTS

// HEADER display

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// BIO CONTACTS display (header & footer)

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts, #footerContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts, #footerContacts").append(formattedEmail);

var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts, #footerContacts").append(formattedGitHub);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts, #footerContacts").append(formattedTwitter);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts, #footerContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

// SKILLS display
// Checking for skills under bio object and replacing %data% placeholder with real data
if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skills").append(formattedSkill);
}

// WORK display
function displayWork (){
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork ();

// PROJECTS display function
projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();

// EDUCATION display function
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedSchoolMajor);
	}
	
}
education.display();

$(".education-entry:last").append(HTMLonlineClasses);

var formattedCoursesTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses.title);
$(".education-entry:last").append(formattedCoursesTitle);

var formattedCoursesSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses.school);
$(".education-entry:last").append(formattedCoursesSchool);

var formattedCoursesDates = HTMLonlineDates.replace("%data%", education.onlineCourses.dates);
$(".education-entry:last").append(formattedCoursesDates);

var formattedCoursesUrl = HTMLonlineURL.replace("%data%", education.onlineCourses.url);
$(".education-entry:last").append(formattedCoursesUrl);

// MAP please

$("#mapDiv").append(googleMap);
initializeMap();

// More WORK - locationizer takes in the work object and then initializes an array. 
// The for in loop iterates through all my jobs and creates a blank variable called 
// "newLocation". This variable will copy each location within each job and push them 
// into the array to create the array.
function locationizer (work_obj) {
    var locationArray = [];2

    for (job in work_obj.jobs) {
      var newLocation = work_obj.jobs[job].location;
      locationArray.push(newLocation);
    }

    return locationArray;
}

// Let's collect some clicks
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

// Name internationalization button (switches between name formats)
// function inName(name) {
// 	name = name.trim().split(" ");
// 	console.log(name);
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
// 
// 	return name[0] +" "+ name[1];
// }
// 
// $("#main").append(internationalizeButton);