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
};
// END OF MY OBJECTS

// BIO display function (header & footer) 
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name); // Name
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role); // Role
	$("#header").prepend(formattedName + formattedRole);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile); // Mobile
	$("#topContacts, #footerContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email); // Email
	$("#topContacts, #footerContacts").append(formattedEmail);

	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github); // GitHub
	$("#topContacts, #footerContacts").append(formattedGitHub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter); // Twitter
	$("#topContacts, #footerContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location); // Location
	$("#topContacts, #footerContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic); // Image
	$("#header").append(formattedBioPic);

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage); // Welcome Message
	$("#header").append(formattedWelcomeMsg);

	// Checking for skills under bio object and replacing %data% placeholder with real data
	$("#header").append(HTMLskillsStart);
	for (var i in bio.skills) {
	    var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
	    $("#skills").append(formattedSkills);
	}
};
bio.display();

// WORK display function
work.display = function() {
	for (var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer); // Employer
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title); // Title
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates); // Dates
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description); // Description
		$(".work-entry:last").append(formattedDescription);
	}
};
work.display();

// PROJECTS display function
projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title); // Title
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates); // Dates
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description); // Description
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]); // Images
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};
projects.display();

// EDUCATION display function
education.display = function() {
	for (var school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name); // Name
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree); // Degree
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates); // Dates
		$(".education-entry:last").append(formattedSchoolDates);
		
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location); // Location
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors); // Majors
		$(".education-entry:last").append(formattedSchoolMajor);

		$(".education-entry:last").append(HTMLonlineClasses);

		var formattedCoursesTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses.title); // Title
		var formattedCoursesSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses.school); // School
		$(".education-entry:last").append(formattedCoursesTitle + formattedCoursesSchool);

		var formattedCoursesDates = HTMLonlineDates.replace("%data%", education.onlineCourses.dates); // Dates
		$(".education-entry:last").append(formattedCoursesDates);

		var formattedCoursesUrl = HTMLonlineURL.replace("%data%", education.onlineCourses.url); // URL
		$(".education-entry:last").append(formattedCoursesUrl);
	}
};
education.display();

// MAP 
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