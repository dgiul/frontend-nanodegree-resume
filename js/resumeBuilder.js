/**
 * Biography info for the user
 */
var bio = {
    "name": "Dan Giulvezan",
    "role": "Software Developer",
    "contacts": {
        "mobile": "408-555-1212",
        "email": "dan.giulvezan@gmail.com",
        "github": "dgiul",
        "twitter": "@dgiul",
        "location": "San Jose, CA"
    },
    "welcomeMessage": "Software developer with a passion for great user experience",
    "skills": ['HTML', 'CSS', 'JavaScript', 'Java', "PL/SQL", "Project Management", "PhotoShop"],
    "biopic": "images/me.jpg",
    "display": function() {
        // Format and display the basic user and contact info
        var formattedName = HTMLheaderName.replace("%data%", bio.name),
            formattedRole = HTMLheaderRole.replace("%data%", bio.role),
            formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic),
            formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),
            formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile),
            formattedEmail = HTMLemail.replace("%data%", bio.contacts.email),
            formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github),
            formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter),
            formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedLocation);

        // If there are any skills listed in the bio object, add them
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            bio.skills.forEach(function(item) {
                $('#skills').append(HTMLskills.replace("%data%", item));
            });
        }
    }
};

/**
 * Education info for the user (both traditional and online)
 */
var education = {
    "schools": [{
        "name": "Stanford University",
        "location": "Stanford, CA",
        "degree": "Bachelor of Engineering",
        "major": ["Computer Programming"],
        "dates": "1990",
        "url": "http://exploredegrees.stanford.edu/schoolofengineering/"
    }],
    "onlineCourses": [{
        "title": "Introduction to Programming",
        "school": "Udacity",
        "dates": "2016 - 2017",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }],
    "display": function() {
        if (education.schools.length > 0) {
            education.schools.forEach(function(item) {
                $("#education").append(HTMLschoolStart);

                $('.education-entry:last').append(HTMLschoolName.replace("%data%", item.name).replace("%url%", item.url) + HTMLschoolDegree.replace("%data%", item.degree));
                $('.education-entry:last').append(HTMLschoolDates.replace("%data%", item.dates));
                $('.education-entry:last').append(HTMLschoolLocation.replace("%data%", item.location));
                $('.education-entry:last').append(HTMLschoolMajor.replace("%data%", item.major));
            });
        }

        if (education.onlineCourses.length > 0) {
            education.onlineCourses.forEach(function(item) {
                $("#education").append(HTMLonlineClasses);
                $("#education").append(HTMLschoolStart);

                $('.education-entry:last').append(HTMLonlineTitle.replace("%data%", item.title).replace("%url%", item.url) + HTMLonlineSchool.replace("%data%", item.school));
                $('.education-entry:last').append(HTMLonlineDates.replace("%data%", item.dates));
                $('.education-entry:last').append(HTMLonlineURL.replace("%data%", item.url).replace("%url%", item.url));
            });
        }
    }
};

/**
 * Work history
 */
var work = {
    "jobs": [{
            "employer": "Google",
            "title": "Senior Software Developer",
            "location": "Mountain View, CA",
            "dates": "June 2014 - Present",
            "description": "Front end software developer on Google Maps",
            "url": "https://www.google.com/"
        },
        {
            "employer": "nVidia",
            "title": "Software Developer",
            "location": "Santa Clara, CA",
            "dates": "Sept 2009 - June 2014",
            "description": "Front end software developer on support partner programs",
            "url": "https://www.nvidia.com/"
        },
        {
            "employer": "Yahoo",
            "title": "Software Developer",
            "location": "Sunnyvale, CA",
            "dates": "May 2007 - Sept 2009",
            "description": "Front end software developer on Yahoo Mail",
            "url": "https://www.yahoo.com/"
        }
    ],
    "display": function() {
        if (work.jobs.length > 0) {

            work.jobs.forEach(function(item) {
                $("#workExperience").append(HTMLworkStart);

                $('.work-entry:last').append(HTMLworkEmployer.replace("%data%", item.employer).replace("%url%", item.url) + HTMLworkTitle.replace("%data%", item.title));
                $('.work-entry:last').append(HTMLworkDates.replace("%data%", item.dates));
                $('.work-entry:last').append(HTMLworkLocation.replace("%data%", item.location)); // Example in course was missing location
                $('.work-entry:last').append(HTMLworkDescription.replace("%data%", item.description));
            });
        }
    }
};

/**
 * Projects of note worked on and/or led by the user
 */
var projects = {
    "projects": [{
            "title": "Google Maps - Routing Upgrades",
            "dates": "2016 - 2017",
            "description": "Improved the accuracy of time estimate calculations used in navigation directions",
            "images": [
                "http://3.bp.blogspot.com/-NprYSCSFTqc/VUy3Af5OfII/AAAAAAACDC8/7U_kVtyfCC8/s1600/new-maps-ui-4.png",
                "http://www.themarysue.com/wp-content/uploads/2012/03/google-maps.png"
            ]
        },
        {
            "title": "Google Maps - Updated Map Components",
            "dates": "2014 - 2016",
            "description": "Assisted with refactoring several map components that had been written in an older verion of Polmer",
            "images": []
        },
        {
            "title": "nVidia - Partner Success Engineer",
            "dates": "2009 - 2014",
            "description": "Worked closely with 3rd party partners to help them prepare for tradeshows",
            "images": []
        }
    ],
    "display": function() {
        if (projects.projects.length > 0) {

            projects.projects.forEach(function(item) {
                $("#projects").append(HTMLprojectStart);

                $('.project-entry:last').append(HTMLprojectTitle.replace("%data%", item.title));
                $('.project-entry:last').append(HTMLprojectDates.replace("%data%", item.dates));
                $('.project-entry:last').append(HTMLprojectDescription.replace("%data%", item.description));

                // Display any images that are associated with the project (if there are any)
                item.images.forEach(function(image) {
                    $('.project-entry:last').append(HTMLprojectImage.replace("%data%", image));
                });
            });
        }
    }
};

// Execute the display function for each of the objects above
bio.display();
education.display();
work.display();
projects.display();

// Collect clicks on the page
$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});

// Give users the option to display names in an international format
/*function inName(name) {
    var arr = name.trim().split(' ');
    $("#name").text(arr[0].slice(0, 1).toUpperCase() + arr[0].slice(1).toLowerCase() + ' ' + arr[1].toUpperCase());
};*/

// $('#main').append(internationalizeButton);

// Add the Googel Map so helper.js can initialize it and add markers
$('#mapDiv').append(googleMap);

/*var udacityizer = function(s) {  
	// Right now, the variable s === "audacity"
	// Manipulate s to make it equal to "Udacity"
	// Your code goes here!
	return s.charAt(1).toUpperCase() + s.slice(2);
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));*/