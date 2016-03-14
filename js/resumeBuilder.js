var bio = {
    "name": "Anna Luquingan",
    "role": "Web Developer",
    "contacts": {
        "mobile": "510-586-8058",
        "email": "ria.cuaresma@gmail.com",
        "github": "amrcuaresma",
        "twitter": "",
        "location": "San Francisco"
    },
    "welcomeMessage": "Hello World!",
    "skills": ["front end development", "HTML", "CSS", "JavaScript", "mobile development", "accessibility", "Java", "PHP"],
    "biopic": "https://media.licdn.com/media/p/6/005/08c/00f/11b651c.jpg?zoom=2&amp;resize=300%2C300",
    "display": function (name, role, contacts, welcomeMessage, skills, biopic) {
        var formattedName = HTMLheaderName.replace("%data%", name);
        var formattedRole = HTMLheaderRole.replace("%data%", role);
        var formattedMobile = HTMLmobile.replace("%data%", contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", contacts.location);
        var formattedBiopic = HTMLbioPic.replace("%data%", biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", welcomeMessage);

        $("#header").prepend(formattedRole).prepend(formattedName);

        var contactList = $("#header").find('ul');
        contactList.append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedLocation);

        $("#header").append(formattedBiopic).append(formattedWelcomeMsg);
        $("#header").append(HTMLskillsStart);
        $(skills).each(function(index, val) {
            var formattedSkills = HTMLskills.replace("%data%", val);
            $("#skills").append(formattedSkills);
        });
        
        var footerContacts = $("#lets-connect").find('ul');
        footerContacts.append(formattedMobile).append(formattedEmail).append(formattedGithub).append(formattedLocation);        
    }
};

var work = {
    "jobs": [
        {
            "employer": "Wells Fargo",
            "title": "Web Developer",
            "location": "San Francisco, CA",
            "dates": "December 2014 - Present",
            "description": "Tech Lead for the CEO Mobile team, responsible for the design, analysis, development, maintenance, and production support for a number of products on the mobile web and native applications (iOS and Android) available for the corporate clients of Wells Fargo."
        },
        {
            "employer": "Oracle",
            "title": "Applications Engineer",
            "location": "Redwood City, CA",
            "dates": "September 2012 - November 2014",
            "description": "Lead the development of the different widgets"
        },
        {
            "employer": "Wells Fargo",
            "title": "Wells Fargo",
            "location": "San Francisco, CA",
            "dates": "September 2011 - September 2012",
            "description": "Responsible for the enhancement of Wells Fargo mobile site, and development of several projects for iPhone, iPad, Android applications."
        },
        {
            "employer": "Stanford University",
            "title": "Web Developer",
            "location": "Menlo Park, CA",
            "dates": "February 2011 - September 2011",
            "description": "Developed custom UI for the Salesforce Chatter web application of the School of Medicine."
        },                
        {
            "employer": "Wells Fargo",
            "title": "Wells Fargo",
            "location": "San Francisco, CA",
            "dates": "September 2008 - December 2010",
            "description": "Front-end developer for the Wells Fargo mobile website, iPhone, Android and Blackberry native applications."
        },
        {
            "employer": "Hudson Entertainment",
            "title": "Mobile Developer",
            "location": "Redwood City, CA",
            "dates": "September 2007 - September 2008",
            "description": "Responsible for the development and porting of mobile applications to Blackberry RIM."
        },                
        {
            "employer": "Pharmaceutical Services Corporation",
            "title": "Software Engineer",
            "location": "Pasadena, CA",
            "dates": "June 2005 - June 2007",
            "description": "Designed and implemented software applications in Java and PHP for desktop, web, and mobile platforms."
        },
        {
            "employer": "TinCan Mobile Solutions",
            "title": "Mobile Developer",
            "location": "Ortigas, Philippines",
            "dates": "January 2003 -June 2005",
            "description": "Developed several wireless applications for mobile devices using Java ME."
        }                
    ],
    "display": function (jobs) {
        if (jobs.length !== 0) {
            $.each(jobs, function(i, object) {
                var workExperience, formattedWorkEmployer, formattedWorkTitle, formattedWorkLocation, formattedWorkDates, formattedWorkDescription;
                $.each(object, function(property, value) {
                    switch (property) {
                        case 'employer':
                            formattedWorkEmployer = HTMLworkEmployer.replace("%data%", value);
                            break;
                        case 'title':
                            formattedWorkTitle = HTMLworkTitle.replace("%data%", value);
                            break;
                        case 'location':
                            formattedWorkLocation = HTMLworkLocation.replace("%data%", value);
                            break;
                        case 'dates':
                            formattedWorkDates = HTMLworkDates.replace("%data%", value);
                            break;
                        case 'description':
                            formattedWorkDescription = HTMLworkDescription.replace("%data%", value);
                            break;
                    }
                });
                workExperience = $(HTMLworkStart).append(formattedWorkEmployer + formattedWorkTitle).append(formattedWorkDates)
                    .append(formattedWorkLocation).append(formattedWorkDescription);
                $("#workExperience").append(workExperience);
            });
        } 
    }
};


var projects = {
    "projects": [
        {
            "title": "iFlames",
            "dates": "March 2009",
            "description": "A fun name game for iOS",
            "images": ['http://cdn.appcrawlr.com/imageService/aHR0cDovL2ExLm16c3RhdGljLmNvbS91cy9yMTAwMC8wNzgvUHVycGxlL2VhL2EzLzBiL216bC51bWV2dG1sby4xNzV4MTc1LTc1LmpwZw?w=150&h=150']
        },
        {
            "title": "Hand Lingo",
            "dates": "October 2009",
            "description": "iOS application for learning the American Sign Language (ASL)",
            "images": ['http://cdn.appcrawlr.com/imageService/aHR0cDovL2EyLm16c3RhdGljLmNvbS91cy9yMTAwMC8xMDMvUHVycGxlLzhlLzkyLzcyL216bC5vcGZoZ21obS4xNzV4MTc1LTc1LmpwZw?w=150&h=150']
        },
        {
            "title": "Alfabeto",
            "dates": "January 2010",
            "description": "A tool to learn the Filipino alphabet in iOS.",
            "images": ['http://images.qualityindex.com/product_icons/257117/257117_180.jpg']
        }
    ],
    "display": function (projects) {
        if (projects.length !== 0) {
            $.each(projects, function(i, object) {
                var projects, formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImages;
                $.each(object, function(property, value) {
                    switch (property) {
                        case 'title':
                            formattedProjectTitle = HTMLprojectTitle.replace("%data%", value);
                            break;
                        case 'dates':
                            formattedProjectDates = HTMLprojectDates.replace("%data%", value);
                            break;
                        case 'description':
                            formattedProjectDescription = HTMLprojectDescription.replace("%data%", value);
                            break;
                        case 'images':
                            formattedProjectImages = HTMLprojectImage.replace("%data%", value);
                            break;
                    }
                });
                projects = $(HTMLprojectStart).append(formattedProjectTitle).append(formattedProjectDates)
                    .append(formattedProjectDescription).append(formattedProjectImages);
                $("#projects").append(projects);
            });
        }
    }
};

var education = {
    "schools": [
        {
            "name": "Mapua Institute of Technology",
            "location": "Manila, Philippines",
            "degree": "Bachelor of Science",
            "majors": ["Computer Engineering"],
            "dates": "June 1996 - November 2000",
            "url": ""
        },
        {
            "name": "De La Salle University",
            "location": "Manila, Philippines",
            "degree": "Master of Computer Science",
            "majors": ["Artificial Intelligence"],
            "dates": "January 2001 - January 2003",
            "url": ""
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "date": "December 2014 - Present",
            "url": "http://www.udacity.com"
        }
    ],
    "display": function (schools, onlineCourses) {
        if (schools.length !== 0) {
            $.each(schools, function(i, object) {
                var education, formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor;
                $.each(object, function(property, value) {
                    switch (property) {
                        case 'name':
                            formattedSchoolName = HTMLschoolName.replace("%data%", value);
                            break;
                        case 'degree':
                            formattedSchoolDegree = HTMLschoolDegree.replace("%data%", value);
                            break;
                        case 'dates':
                            formattedSchoolDates = HTMLschoolDates.replace("%data%", value);
                            break;
                        case 'location':
                            formattedSchoolLocation = HTMLschoolLocation.replace("%data%", value);
                            break;
                        case 'majors':
                            formattedSchoolMajor = HTMLschoolMajor.replace("%data%", value);
                            break;
                    }
                });
                education = $(HTMLschoolStart).append(formattedSchoolName + formattedSchoolDegree).append(formattedSchoolDates)
                    .append(formattedSchoolLocation).append(formattedSchoolMajor);
                $("#education").append(education);
            });
        }

        if (onlineCourses.length !== 0) {
            $("#education").append(HTMLonlineClasses);
            $.each(onlineCourses, function(i, object) {
                var onlineCourses, formattedSchoolName, formattedSchoolDegree, formattedSchoolDates, formattedSchoolLocation, formattedSchoolMajor;
                $.each(object, function(property, value) {
                    switch (property) {
                        case 'title':
                            formattedOnlineTitle = HTMLonlineTitle.replace("%data%", value);
                            break;
                        case 'school':
                            formattedOnlineSchool = HTMLonlineSchool.replace("%data%", value);
                            break;
                        case 'date':
                            formattedOnlineDates = HTMLonlineDates.replace("%data%", value);
                            break;
                        case 'url':
                            formattedOnlineUrl = HTMLonlineURL.replace("%data%", value);
                            break;
                    }
                });
                onlineCourses = $(HTMLschoolStart).append(formattedOnlineTitle + formattedOnlineSchool).append(formattedOnlineDates)
                    .append(formattedOnlineUrl);
                $("#education").append(onlineCourses);
            });
        }        
    }
};
