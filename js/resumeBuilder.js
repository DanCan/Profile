// 'use strict'; // This doesn't work when variables are stretch to helper.js and resumeBuilder.js
//               // It would be nice to know how to get this to work.

 var bio = {
   'name': 'Daniel Cannova',
   'role': 'Engineer',
   'contacts': {
     //'mobile': '815-404-0425',
     'email': 'dancannova@gmail.com',
     'github': 'DanCan',
     'twitter': 'dancannova',
     'location': 'Seattle, WA'
   },
   'welcomeMessage': 'Welcome! Below you will find quick viewings of my skills and framworks. Further down you will find more indepth explanation of jobs where I have used these skills.',
   'skills': [
				[ 'Web Programming', 'HTML, CSS, JavaScript', 'Angular 4, Typescript, Jasmine, Koa'],
				['Engineering', 'C#, SQL', 'Jenkins, AWS'], 
				['UI/UX', 'Xbox & Xbox One - Lua, Xui & JS', 'Proprietary'], 
				['Game Programming', 'Game Engine, Gameplay', 'Unity3D, ActionScript'],
				'Fundamentals in C++'
			],
   'biopic': 'images/cropped/me.jpg',
   display: function() {
     // Head
     $('#header').append (rd (rd (HTMLheaderName_Role, this.name, 'Name') ,this.role, 'Role') );

     // Start
     $('#header').append(HTMLInfoStart);
     // Info and Footer CONTACTS
     const info = ['#info', '#footerContacts'];
     info.forEach( function( infoStr ) {
       $(infoStr).append(rd(HTMLemail, this.contacts.email));
       $(infoStr).append(rd(HTMLmobile, this.contacts.mobile));
       $(infoStr).append(rd(HTMLgithub, this.contacts.github));
       $(infoStr).append(rd(HTMLtwitter, this.contacts.twitter));
       $(infoStr).append(rd(HTMLlocation, this.contacts.location));
     }.bind(this));

     // WHO
     $('#header').append(rd(HTMLbioPic, this.biopic));
     $('#header').append(rd(HTMLwelcomeMsg, this.welcomeMessage));

     // Skills
     if (this.skills && this.skills.length && this.skills.length > 0) {
       $('#header').append(HTMLskillsStart);
	   $more = $(HTMLskillsMore);

       this.skills.forEach(function(elm){
		if (Array.isArray(elm)) {
			$('#skills').append(rd(rd(rd(HTMLskillsAndFrameworks, elm[1], "Skills"), elm[2], "Frameworks"), elm[0]));
		
		} else {
			$more.append(rd(HTMLskills, elm));
		}         
       });

	   $more.appendTo($('#skills'));
     }
   }
 };

 var work = {
   'jobs': [
     {
       'title': 'Engineer',
       'employer': 'Apex Learning',
       'url': 'https://www.apexlearning.com/',
       'years': '1.4',
       'location': 'Seattle, WA',
       'dates': 'Feb 2016 - Present',
       'description': `
			<div class="row">
				<div class="col-md-12"><div class="col-xs-12 col-md-8"><h5 class="inline-block">Software Engineer</h5><div class="inline-block offset work-skill-sub">Web Programming, UI/UX</div></div></div>
				<div class="work-exp"><ul>
					<li>Built improved UI and UX designs in online digital curriculum</li>
					<li>Created Components to injest content to help teach for an array of students needs.</li>
					<li>Collaborated in the development of upgrading legacy system.</li>
					<li>Facilitated downloadable course materials and pipeline.</li>
					<li>Used C# and SQL to maintain content creation of learning catalog.</li>
					<li>Built a transformation app to update content for a new platform.</li>
					<li>Wrote high quality code that is loosely coupled, easy to maintain, and testable.</li>
					<li>Create/Extend technical documentation for internally developed libraries and frameworks</li>
				</ul></div>
			</div>
			<div>
				<ul>
				</ul>
			</div>
			`
     }, // TODO: Created Components ... expand on this.
     {
       'title': 'UI Programmer',
       'employer': 'Microsoft',
       'url': 'https://advertising.microsoft.com/',
       'years': '3',
       'location': 'Seattle, WA',
       'dates': 'Mar 2013 - Feb 2016',
       'description': 'Lorem ipsum dolor sit amet, qualisque ullamcorper cu his, tale aperiri vituperata sit te, sed ea nobis nominavi accommodare. Ad sit vulputate argumentum. Ea duo alterum accommodare. Ad vix iusto gubergren, eos et minimum tacimates, ex cibo prodesset eos. No erat argumentum percipitur has, sanctus admodum at nec.'
     }
   ],
   display: function () {
     if (this.jobs) {
       var $lastWorkEntry;
       var titleStr;
       this.jobs.forEach(function(jobObj) {
         // Start
         $('#workExperience').append(HTMLworkStart);

         // Title
         $lastWorkEntry = $('.work-entry:last');
         titleStr = rd(HTMLworkEmployer,jobObj.employer+rd(HTMLworkTitle,jobObj.title));
         if (jobObj.hasOwnProperty('url')) titleStr = titleStr.replace('#',jobObj.url);

         // Meat
         $lastWorkEntry.append(titleStr,
           rd(HTMLworkDates,jobObj.dates),
           rd(HTMLworkLocation,jobObj.location),
           rd(HTMLworkDescription,jobObj.description));

       });
     }
   }
 };

var education = {
   'schools': [
   {
       'name': 'DeVry',
       'location': 'Tinley Park, IL',
       'degree': 'Bachelors in Computer Science focued on Game Development',
       'majors': ['Computer Science'],
       'dates': 'July 2006 - March 2009 : 2yr 8mo',
       'url': 'https://www.devry.edu/universities/illinois/tinley-park-campus.html'
   }
 ],
 //TODO: patterns course
 'onlineCourses': [
     {
       'title': 'Nano Degree',
       'school': 'Udacity',
       'dates': '2017',
       'url': 'https://classroom.udacity.com/nanodegrees',
       'urlOnline': 'https://www.udacity.com/'
     },
     {
       'title': 'Design Patters',
       'school': 'Udemy',
       'dates': '2017',
       'url': 'https://www.udemy.com/experience-design-patterns/learn/v4/overview',
       'urlOnline': 'https://www.udemy.com/courses/'
     },
     {
       /*jshint scripturl:true*/
       'title': 'Javascript: Understanding the weird pards',
       /*jshint scripturl:false*/
       'school': 'Udemy',
       'dates': '2017',
       'url': 'https://www.udemy.com/understand-javascript/learn/v4/overview',
       'urlOnline': 'https://www.udemy.com/courses/'
     }
   ],
   display: function() {
     var $educationEntryLast;
     if (this.schools) {
       this.schools.forEach(function(schoolObj) {
         // Start
         $('#education').append(HTMLschoolStart);
         $educationEntryLast = $('.education-entry:last');

         // Meat
         $educationEntryLast.append((
           rd(HTMLschoolName, schoolObj.name)+rd(HTMLschoolDegree, schoolObj.degree) ).replace('#',schoolObj.url),
           rd(HTMLschoolDates, schoolObj.dates),
           rd(HTMLschoolLocation, schoolObj.location)
         );
         // Majors
         if (schoolObj.majors && schoolObj.majors.length && schoolObj.majors.length > 0) {
           schoolObj.majors.forEach(function(major){
             $educationEntryLast.append(rd(HTMLschoolMajor, schoolObj.majors));
           });
         }
       });
      }

      if (this.onlineCourses) {
        // Head
        $('#education:last').append(HTMLonlineClasses);
        this.onlineCourses.forEach(function(eduObj) {
          // Start
          $('#education:last').append(HTMLschoolStart);
          $educationEntryLast = $('.education-entry:last');
          // Meat
          $educationEntryLast.append(
            ( rd(HTMLonlineTitle, eduObj.title)+rd(HTMLonlineSchool, eduObj.school) ).replace('#', eduObj.url),
            rd(HTMLonlineDates, eduObj.dates),
            rd(HTMLonlineURL, eduObj.url)
          );
        });
      }
    }
};

var projects = {
  display: function() {
    var $projectEntryLast;
    var projectTitle;
    this.projects.forEach(function(proj) {
      // Start
      $('#projects').append(HTMLprojectStart);
      $projectEntryLast = $('.project-entry:last');
      // Title
      projectTitle = rd(HTMLprojectTitle, proj.title);
      if (proj.titleLink) projectTitle = projectTitle.replace('#', proj.titleLink);

      // Meat
      $projectEntryLast.append(projectTitle,
        rd(HTMLprojectDates, proj.dates),
        rd(HTMLprojectDescription, proj.description)
      );

	  
      // links and images
      $projectEntryLast.append(HTMLprojectImageContainer);
	  $imageContainer = $('.project-image-container:last');
	  proj.images.forEach(function(link) {
        $imageContainer.append(rd(HTMLprojectImage, link));
      });
    });
  },
  // TODO: HTML git hub & separate gamejam and course "prouds"
  'projects': [
    {
      'title': 'Illuminare: Spirit',
      'titleLink': 'http://globalgamejam.org/2016/games/illuminare-spirit',
      'dates': '2016',
      'description': 'This is a 2.5D game where you move around using (awsd). You shine a light in the direction of the mouse, and you can shoot light at enemies by clicking.',
      'images' : [
        'images/spirit1.jpg',
        'images/spirit2.jpg',
      ]
    },
    {
      'title': 'Super Astro Breakers',
      'dates': '2015',
      'titleLink': 'http://globalgamejam.org/2015/games/super-astro-breakers',
      'description': 'Clear the debris from this region of space to make the way safe. In Super Astro Breakers, ‘buddy system’ takes on a whole new meaning as you and your buddy independently control two ships. Cooperate with your buddy to survive, or fight them and meet certain disaster. Take care to watch out for any dangers lurking in the blackness!',
      'images' : [
        'images/super1.png',
        'images/super2.png',
      ]
    }
  ]
};

function rd(html, str, extra='') {
	if (str)
		return html.replace('%data'+extra+'%', str);
	
	return $('');
}

function displayData() {
  bio.display();
  //work.display();
  projects.display();
  education.display();

  // $('#main').prepend(internationalizeButton);

  $('#mapDiv').append(googleMap);

}

displayData();
