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

myName = HTMLheaderName.replace("%data%", bio.name);
myRole = HTMLheaderRole.replace('%data%', bio.role);
myEmail = HTMLemail.replace('%data%', bio.contactInfo.email);
myPic = HTMLbioPic.replace("%data%", bio.pictureURL);
myWelcome = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);

$("#header").prepend(myWelcome);
$("#header").prepend(myRole);
$("#header:last").prepend(myName);

$("#header:last").append(myPic);

$("#main").append(internationalizeButton);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    // for (skill in bio.skills) {
    var mySkills = bio.skills.join(' / ')
    var myFormattedSkills = '<div class=\'white-text\'>' + mySkills + '</div>'
        // HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills:last").append(myFormattedSkills);

    // }
} else {
    // do nothing.
};


function displayWork() {
    if (work.jobs.length > 0) {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var myEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
            var myTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
            var myWorkExperience = myEmployer + myTitle;
            var myWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].datesWorked);
            var myWorkDescripton = HTMLworkDescription.replace('%data%', work.jobs[job].description);
            $(".work-entry:last").append(myWorkExperience);
            $(".work-entry:last").append(myWorkDates);
            $(".work-entry:last").append(myWorkDescripton);
        }
    }

}

function inName(fullName) {
	if (fullName.length > 0) {

		var myNameArray = fullName.split(" ");
		var fName = myNameArray[0];
		var lName = myNameArray[1];

		var inName = fName + " " + lName.toUpperCase();
		
	} else {

		var inName = "invalid NAME";
	
	}
	return inName;
}

displayWork();
console.log(inName(bio.name));
