
var displayBio = function(){
	var bio = {
		"name":"ERIN LEHMKüHL",
		"role":"web developer",
		"contacts": {
			"mobile": "415-730-7330",
			"email": "erinlehmkuhl@gmail.com",
			"github": "erinlehmkuhl",
			"twitter": "erinlehmkuhl",
			"location": "Redwood City"
		},
		"welcomeMsg": "'uva uvam vivendo varia fit' - Hat Creek Cattle Company",
		"skills": ["nunchuck", "bo staff", "computer hacking"],
		"pic": "images/ErinProfilePIC.jpg"
	}

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
	var formattedWelMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGitHub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);	
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedPic);
	$("#header").append(formattedWelMsg);


	if (bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
		$("#header").append(formattedSkills);
		formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
		$("#header").append(formattedSkills);
		formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
		$("#header").append(formattedSkills);
	}
}
displayBio();







var displayEducation = function(){
    var education ={
        "schools": [
            {
                "name": "Academy of Art University",
                "location": "San Francisco, CA",
                "degree": "Masters of Fine Arts",
                "majors": ["Animation and Visual Effects"],
                "dates": 2007,
                "url": "www.academyofart.edu"
            },
            {
                "name": "University of California",
                "location": "Santa Barbara, CA",
                "degree": "Bachelor of Arts",
                "majors": ["Film Studies"],
                "dates": 2004,
                "url": "www.ucsb.edu"
            },
            {
                "onlineCourses": [
                    {
                    "title": "Front End Developer Nanodegree",
                    "school": "Udacity",
                    "date": 2015,
                    "url": "www.udacity.com"
                    }
                ]
            }
        ]
    }


    $("#education").append(HTMLschoolStart);
    for (school in education.schools){
        if (education.schools[school].onlineCourses === undefined){
            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedName);
            $(".education-entry:last").append(formattedDate);
            $(".education-entry:last").append(formattedMajor);
            
            } else {
            
            var formattedOLClasses = HTMLonlineClasses.replace("%data%", education.schools.onlineCourses);
            $(".education-entry:last").append(formattedOLClasses);
                for (course in education.schools[school].onlineCourses){
                    var formattedOLTitle = HTMLonlineTitle.replace("%data%", education.schools[school].onlineCourses[course].title);
                    var formattedOLSchool = HTMLonlineSchool.replace("%data%", education.schools[school].onlineCourses[course].school);
                    var formattedOLDate = HTMLonlineDates.replace("%data%", education.schools[school].onlineCourses[course].date);
                    var formattedOLUrl = HTMLonlineURL.replace("%data%", education.schools[school].onlineCourses[course].url);
                    
                    $(".education-entry:last").append(formattedOLTitle + formattedOLSchool);
                    $(".education-entry:last").append(formattedOLDate);
                    $(".education-entry:last").append(formattedOLUrl);
            }
        }
    }
}
displayEducation(); 








var displayWork = function(){
    var work ={
        "jobs": [
            {
                "employer": "Academy of Art University",
                "title": "Adjunct Professor",
                "location": "San Francisco, CA",
                "dates": "2008 - current",
                "description": "Teach compositing to graduate students"
            },
            {
                "employer": "PDI/DreamWorks",
                "title": "Lighter/Compositor",
                "location": "Redwood City, CA",
                "dates": "2008 - 2015",
                "description": "Create computer animated cartoons"
            },
            {
                "employer": "KEYT3",
                "title": "Commercial Editor",
                "location": "Santa Barbara, CA",
                "dates": "2003-2005",
                "description": "Edit television shows and commercials"
            }
        ]
    }
    
    $("#workExperience").append(HTMLworkStart);
    for (job in work.jobs){
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
}
displayWork(); 







var displayProjects = function(){
    var portfolio ={
        "projects": [
            {
                "title": "Feature Films",
                "dates": "2008 - 2015",
                "description": "VFX Compositor and CG Lighter for thirteen feature films, four TV specials, two shorts, HBO shows and one Broadway musical over the course of eight years in the film industry.",
                "images": ["images/GoT.jpg", "images/httyd.jpg", "images/pacific.jpg", "images/home.jpg", "images/kfp2.jpg"]
            },
            {
                "title": "Art Work",
                "dates": "2008 - 2015",
                "description": "Metal Casting: bronze belt buckle, Carpentry: arcade cabinet, Welding: iron & wood table, Photography: long exposure.",
                "images": ["images/beltBuckle.jpg", "images/cocktailComplete.jpg", "images/tableWelding.jpg", "images/photography.jpg"]
            }
        ]
    }
    $("#projects").append(HTMLprojectStart);
    for (project in portfolio.projects){
        var formattedTitle = HTMLprojectTitle.replace("%data%", portfolio.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", portfolio.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", portfolio.projects[project].description);
        //var formattedImage = HTMLprojectImage.replace("%data%", portfolio.projects[project].images);
        $(".project-entry").append(formattedTitle);
        $(".project-entry").append(formattedDates);
        $(".project-entry").append(formattedDescription);
        //console.log(portfolio.projects[project].images[0]);
        //$(".project-entry").append(formattedImage);
        
        for (image in portfolio.projects[project].images){
            console.log(portfolio.projects[project].images[image]);
            var formattedImage = HTMLprojectImage.replace("%data%", portfolio.projects[project].images[image]);
            $(".project-entry").append(formattedImage);
        }
    }
}
displayProjects(); 










