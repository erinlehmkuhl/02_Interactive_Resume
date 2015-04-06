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

