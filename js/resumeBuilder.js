var bio = {
    "name": "Joshua Cork",
    "role": "web developer extrodinaire",
    "contactInfo": {
        "email": "joshua.cork@gmail.com",
        "mobile": "602.903.5153",
        "twitter": "@joshCork",
        "gitHub": "@joshcork",
        "location": "Gilbert, AZ",
    },
    "pictureURL": "images/bioPic.jpg",
    "welcomeMessage": "Hello, and welcome to my world.",
    "skills": ["Business Intelligence", "Analytics", "Handsomeness", "Interpersonal Communication"]
};

var work = {
    "jobs": [{
        "employer": "Intel Corporation",
        "datesWorked": "August 2000 to June 2001",
        "title": "School Year Intern - Webmaster",
        "location": "Chandler, AZ",
        "description": "Built websites and databases for the Logistics Organization."
    }, {
        "employer": "Intel Corporation",
        "datesWorked": "June 2001 to December 2002",
        "title": "Logistics Analyst",
        "location": "Chandler, AZ",
        "description": "Responsible for transportation forecasting of a $300M transportation budget."
    }, {
        "employer": "Intel Corporation",
        "datesWorked": "December 2002 to Present",
        "title": "Information Solutions Engineering",
        "location": "Chandler, AZ",
        "description": "Worked my way up from data analyst to manager of the organization. Currently working as a scrum master and software apps engineer."
    }],
    "currentPosition": "scrum master",
    "employer": "Intel Corporation",
    "yearsWorked": "14",
    "city": "Chandler, AZ"
};


var education = {
    "schools": [{
        "location": "Tempe, AZ",
        "degree": "BS",
        "majors": ["Computer Information Systems (CIS)"],
        "minors": ["Accounting"],
        "graduationYear": 2000,
        "name": "Arizona State University",
        "datesAttended": "August 1996 to May 2001"
    }, {
        "location": "Tempe, AZ",
        "degree": "MS",
        "majors": ["Information Management (MSIM)"],
        "minors": ["n/a"],
        "graduationYear": 2006,
        "name": "Arizona State University",
        "datesAttended": "June 2005 to May 2006"
    }],
    "onlineCourses": [{
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": 2014,
        "url": "I need to find this"
    }, {
        "title": "Web Developer Nano-Degree",
        "school": "Udacity",
        "dates": 2014,
        "url": "I need to find this"
    }]
};

var projects = {
    "projects": [{
        "title": "The Sale Ring (eSaleRing.com)",
        "datesWorked": "October 2014",
        "description": "Created a landing page for The Sale Ring digial magazine.",
        "images": ["URL of PROJECT IMAGES"]
    }, {
        "title": "GESDATE Landing Page (GESDATE.com)",
        "datesWorked": "August 2014",
        "description": "Created a landing page for a startup GESDATE.",
        "images": ["URL of PROJECT IMAGES"]
    }]
};


 if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (i in bio.skills) {
		var myHTMLskills = HTMLskills.replace("%data%", bio.skills[i])
		$("#header").append(myHTMLskills)	
	}
} else {
	// do nothing.
};

if (work.jobs.length > 0 ) {
	for (i in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var myEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
		var myTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
		var myWorkEntry = myEmployer.concat(myTitle);
		$(".work-entry:last").append(myWorkEntry);
	}
} else {
	// do nothing
}


HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
HTMLheaderRole = HTMLheaderRole.replace('%data%', bio.role);

//HTMLskills = HTMLskills.replace("%data%", bio.skills.join(", "));
HTMLemail = HTMLemail.replace('%data%', bio.contactInfo.email);
HTMLbioPic = HTMLbioPic.replace("%data%", bio.pictureURL);
HTMLWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
HTMLworkDescription = HTMLworkDescription.replace('%data%', work.currentPosition);
HTMLschoolName = HTMLschoolName.replace('%data%', education.lastSchool);

$("#header").prepend(HTMLWelcomeMsg);
$("#header").prepend(HTMLheaderRole);
$("#header").prepend(HTMLheaderName);

$("#header").append(HTMLbioPic);
$("#header").append(HTMLemail);
//$("#header").append(HTMLskills);
$("#header").append(HTMLworkDescription);
$("#header").append(HTMLschoolName);
