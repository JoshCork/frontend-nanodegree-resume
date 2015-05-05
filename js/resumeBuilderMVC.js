$(function() {

    var model = {
        init: function() {
            if (!localStorage.bio) {
                localStorage.bio = JSON.stringify(model.bio);
            }
            if (!localStorage.work) {
                localStorage.work = JSON.stringify(model.work);
            }
            if (!localStorage.education) {
                localStorage.education = JSON.stringify(model.education);
            }
            if (!localStorage.project) {
                localStorage.project = JSON.stringify(model.project);
            }
        },
        bio: {
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
        },
        work: {
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
        },
        education: {
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
        },
        project: {
            "projects": [{
                "title": "The Sale Ring (eSaleRing.com)",
                "datesWorked": "October 2014",
                "description": "Created a landing page for The Sale Ring digial magazine.",
                "images": ["images/ProjOne1.png", "images/ProjOne2.png"]
            }, {
                "title": "GESDATE Landing Page (GESDATE.com)",
                "datesWorked": "August 2014",
                "description": "Created a landing page for a startup GESDATE.",
                "images": ["images/ProjTwo1.png", "images/ProjTwo2.png", "images/ProjTwo3-JDHANCOCK.png"]
            }]
        }
    };
    var controller = {
        init: function() {
            model.init();
            headerView.init();
            bioView.init();
            workView.init();
            projectView.init();
            educationView.init();
            cleanupView.init();
        },
        inName: function(fullName) {

            if (fullName.length > 0) {

                var myNameArray = fullName.split(" ");
                var fName = myNameArray[0];
                var lName = myNameArray[1];

                fName = fName.slice(0, 1).toUpperCase() + fName.slice(1).toLowerCase();
                var inName = fName + " " + lName.toUpperCase();

            } else {

                var inName = "invalid NAME";

            }
            return inName;
        },
        getProjects: function() {
            return JSON.parse(localStorage.project);
        },
        getEducation: function() {
            return JSON.parse(localStorage.education);
        },
        getWork: function() {
            return JSON.parse(localStorage.work);
        },
        getBio: function() {
            return JSON.parse(localStorage.bio);
        },

    };
    var bioView = {
        init: function() {
            this.bio = controller.getBio();
            bioView.display();
        },
        display: function() {
            var bio = this.bio;
            if (bio.skills.length > 0) {
                $("#header").append(HTMLskillsStart);
                // for (skill in bio.skills) {
                var mySkills = bio.skills.join(' / ');
                var myFormattedSkills = '<div class=\'white-text\'>' + mySkills + '</div>';
                // HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills:last").append(myFormattedSkills);

                // }
            } else {
                // do nothing.
            }

        }
    };
    var workView = {
        init: function() {
            this.work = controller.getWork();
            workView.display();
        },
        display: function() {
            var work = this.work;
            if (work.jobs.length > 0) {
                for (var job in work.jobs) {
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
            //TODO: Need to decide what to display if the jobs array is empty.
        },
    };
    var educationView = {
        init: function() {
            this.education = controller.getEducation();
            educationView.display();
        },
        display: function() {
            var education = this.education;
            if (education.schools.length > 0) {

                for (var school in education.schools) {
                    $('#education').append(HTMLschoolStart);
                    var formattedSchName = HTMLschoolName.replace('%data%', education.schools[school].name);
                    var formattedSchDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
                    var formattedSchDates = HTMLschoolDates.replace('%data%', education.schools[school].datesAttended);
                    var formattedSchLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
                    var formattedSchMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors[0]);
                    var schoolHeader = formattedSchName.concat(formattedSchDegree);

                    $(".education-entry:last").append(formattedSchLocation);
                    $(".education-entry:last").append(schoolHeader);

                    $(".education-entry:last").append(formattedSchDates);
                    $(".education-entry:last").append(formattedSchMajor);
                }

            } else {
                //do nothing
            }

            if (education.onlineCourses.length > 0) {

                $('#education:last').append(HTMLonlineClasses);

                for (var course in education.onlineCourses) {
                    $('#education:last').append(HTMLonlineStart);

                    var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
                    var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
                    var formattedOnlineHeader = formattedOnlineTitle.concat(formattedOnlineSchool);

                    var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
                    var formattedOnlineUrl = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);


                    $('.online-entry:last').append(formattedOnlineHeader);
                    $('.online-entry:last').append(formattedOnlineDates);
                    $('.online-entry:last').append(formattedOnlineUrl);

                }
            }
        },
    };
    var projectView = {
        init: function() {
            this.project = controller.getProjects();
            projectView.display();
        },
        display: function() {
            var project = this.project;
            // should .append() all of my project's information to the projects section.
            // start each new project with a HTMLprojectStart helper.

            for (var proj in project.projects) {
                $("#projects").append(HTMLprojectStart);
                var myProjectTitle = HTMLprojectTitle.replace('%data%', project.projects[proj].title);
                var myProjectDate = HTMLprojectDates.replace('%data%', project.projects[proj].datesWorked);
                var myProjDescription = HTMLprojectDescription.replace('%data%', project.projects[proj].description);


                $(".project-entry:last").append(myProjectTitle);
                $(".project-entry:last").append(myProjectDate);
                $(".project-entry:last").append(myProjDescription);

                if (project.projects[proj].images.length > 0) {
                    for (var pic in project.projects[proj].images) {
                        var myProjImage = HTMLprojectImage.replace('%data%', project.projects[proj].images[pic]);
                        $(".project-entry:last").append(myProjImage);
                    }
                }

            }

        },
    };
    var mapView = {
        init: function() {
            mapView.display();
        },
        display: function() {
            // $("#mapDiv").append(googleMap);
        },
    };
    var headerView = {
        init: function() {
            var bio = controller.getBio();
            this.myName = HTMLheaderName.replace("%data%", bio.name);
            this.myRole = HTMLheaderRole.replace('%data%', bio.role);
            this.myEmail = HTMLemail.replace('%data%', bio.contactInfo.email);
            this.myPic = HTMLbioPic.replace("%data%", bio.pictureURL);
            this.myWelcome = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
            headerView.display();
        },
        display: function() {
            $("#header").prepend(this.myWelcome);
            $("#header").prepend(this.myRole);
            $("#header:last").prepend(this.myName);
            $("#header:last").append(this.myPic);

            // $("#main").append(internationalizeButton);

        },
    };
    var cleanupView = {
        init: function() {
            cleanupView.render();
        },
        render: function() {
            if (document.getElementsByClassName("flex-item").length === 0) {
                document.getElementById("topContacts").style.display = "none";
            }
            if (document.getElementsByTagName("h1").length === 0) {
                document.getElementById("header").style.display = "none";
            }
            if (document.getElementsByClassName("work-entry").length === 0) {
                document.getElementById("workExperience").style.display = "none";
            }
            if (document.getElementsByClassName("project-entry").length === 0) {
                document.getElementById("projects").style.display = "none";
            }
            if (document.getElementsByClassName("education-entry").length === 0) {
                document.getElementById("education").style.display = "none";
            }
            if (document.getElementsByClassName("skills-entry").length === 0) {
                document.getElementById("skillsChart").style.display = "none";
            }
            if (document.getElementsByClassName("flex-item").length === 0) {
                document.getElementById("letsConnect").style.display = "none";
            }
            if (document.getElementById("map") === (undefined || null)) {
                document.getElementById("mapDiv").style.display = "none";
            }

            console.log("htmle script complete");
        }
    };

    controller.init();
    console.log("ALL DONE");

});
