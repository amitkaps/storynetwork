var IsnApp = angular.module('IsnApp', []);

IsnApp.factory('Members', function () {
	var Members = {};
	Members.details = [
		{name: "Geeta Ramanujam", email: "kathalaya@gmail.com", phone: "+91 80 2668 9856", 
		location: "Bangalore", organization: "Kathalaya", website: "http://kathalaya.org",
		id: "1",
		details: "Our vision is to establish Storytelling as an effective tool in all spheres of Education"
		},
		
		{name: "Amit Kapoor", email: "amit@narrativeviz.com", phone: "+91 9739 268 197",
		location: "Bangalore", organization: "NarrativeViz" ,website: "http://narrativeviz.com",
		id: "2",
		details:"Amit teaches how to craft visual stories with data. He uses storytelling and data visualization as tools for improving communication, persuasion and leadership. He conducts workshops and trainings for corporates, non-profits, colleges, and individuals. He also teaches storytelling with data as guest faculty at IIM Bangalore and IIM Ahmedabad. His background is in strategy consulting in using data-driven stories to drive change across organizations and businesses. He has more than 10 years of experience, first with AT Kearney in India and then with Booz & Company in Europe, He did my B.Tech from IIT, Delhi and PGDM from IIM, Ahmedabad."
		},
		
		{name: "Eric Miller", email: "eric@storytellinginstitute.org", phone: "+91 98403 94282",
		location: "Chennai", organization: "World Storytelling Institute" ,website: "http://www.storytellinginstitute.org",
		id: "3",
		details: "Storytelling workshops for adults and children.  Providing Storytellers -- in Tamil, English, and other languages -- for any occasion.  Helping to develop Storytelling Therapy, in collaboration with Chennai's Center for Counselling."
		},

		{name: "Sowmya Srinivasan", email: "", phone: "+91 97315 70615",
		location: "Bangalore", organization: "Soul Space",website: "http://www.ssstoryteller.blogspot.com",
		id: "4",
		details: "Storyteller and ardent advocate of creative arts as a tool for learning in children.  Sowmya tells stories and teaches many related arts and crafts, such as prop-making and puppet-making, to children.  She also teaches presentation skills to children.  She utilises her passion for books to develop customized book-/story-/theme-based performances and workshops. She is also deeply involved in collecting Personal Stories of Reinvention, of Women after 35 (www.reinventionstories.wordpress.com)"
		},

		{name: "Sariga Menon", email: "sariga.menon@gmail.com", phone: "+91 96633 97928",
		location: "Bangalore", organization: "The Storywallahs" ,website: "http://www.thestorywallahs.com",
		id: "5",
		details: "After her Masters in Communications from Symbiosis University, Sariga spent about four years working in some of India’s best advertising agencies (Ogilvy, Contract) helping companies tell the stories of their products to consumers.  Having done an Intensive course in Storytelling, Sariga believes that stories can be a means to discover the meaningful relationships and spends her free time sourcing, absorbing and telling stories.  Most performers enjoy a natural connection with children, but Sariga has the amazing gift of also connecting with adults and this is what makes her special.  She is associated with The Storywallahs and is currently spreading the magic of stories with special children at an Orphanage."
		},

		{name: "Shreya Biswas", email: "piubiswas67@gmail.com", phone: "+91 99002 34613",
		location: "Bangalore", organization: "The Storywallahs" ,website: "http://www.thestorywallahs.com",
		id: "6",
		details: "A graduate in chemistry from Calcutta University, Shreya has worked as a teacher for six years. An alumnus of Children's Little Theatre Kolkata, it was a natural transition for her from being a performer to a Storyteller.  Shreya has an amazing ability to make an instant connection with children, and often uses art as an aid for Storytelling.  Her performances are a treat for the senses, as she brings her stories alive with songs, picture cards, glove puppets and visual art.  She has told stories at schools, bookstores, schools for special children and libraries; and has conducted workshops for those aspiring to become storytellers.  Shreya is a trained storyteller, having attended a course in Storytelling, and is now a team member at The Storywallahs."
		},

		{name: "Aparna Athreya", email: "aparnaathreya@gmail.com", phone: "+91 99452 25126",
		location: "Bangalore", organization: "Kid and Parent Foundation" ,website: "http://www.facebook.com/kiddywiki",
		id: "7",
		details: "Aparna is a storyteller and storywriter, and a passionate advocate of Storytelling in education.  She works with schools and the welfare sector where she runs developmental programs using Storytelling.  Her deep involvement with stories has led her to also don the mantel of a performance storyteller, as she enjoys bringing the magic of stories to life for children and adults alike!"
		},

		{name: "Dhara Kothari", email: "kathakosa@gmail.com", phone: "+91 98200 10335",
		location: "Mumbai", organization: "Kathakosa" ,website: "http://kathakosa.com",
		id: "8",
		details: "Storyteller, Writer, and Spiritualist.  Telling all kinds of stories -- including folk tales, audience-participation stories, inspirational stories, stories about working in corporations, and spiritual stories -- for children and adults.  Stories can be created, told, and shared through poetry, puppets, games, drawings, paintings, photos, and so on.  Suiting all occasions and age groups.  Organises storytelling events, and conducts a Story Club. "
		},

		{name: "Nilum Jajodia", email: "nilum@gmail.com", phone: "+91 80979 58410",
		location: "Mumbai", organization: "Story Space Mumbai" ,website: "http://kathalaya.org/storyspace/",
		id: "9",
		details: "Nilum is an Early Childhood Educator and a trained Storyteller (Storytelling Diploma holder from The Academy of Storytelling – Kathalaya).  She tells stories to child and adult groups, including special groups like mentally-challenged adults.  She performs in schools and book stores, and for NGOs and other organisations.  She also conducts Storytelling Workshops with these groups.  Nilum keeps her audiences enraptured through the use of voice modulation and body language.  Besides this, she connects well with her audiences through the use of games and interactive stories.  She views storytelling as a means of teaching life skills; and of helping people to improve their thinking and speaking-and-listening skills, and language and communication skills in general.  She enjoys telling inspirational stories, as well as folk tales, legends and mythological stories from India and around the world, and is always looking for new ways of telling so as to keep audience interest."
		},

		{name: "Asha Sampath", email: "", phone: "+91 98408 33953",
		location: "Chennai", organization: "Storyteller" ,website: "",
		id: "10",
		details: "Storytelling performances covering a wide range of themes, to suit all occasions and age groups.  Storytelling Workshops featuring multiple trainers."
		},

		{name: "Kanupriya Keyal", email: "", phone: "+91 98404 17080",
		location: "Chennai", organization: "Storyteller" ,website: "",
		id: "11",
		details: "Storytelling with Puppetry and other Arts and Crafts."
		},

		{name: "Bhuvanesware B. G. (Bhuvana)", email: "bhuvanabg07@gmail.com", phone: "+91 98407 74659",
		location: "Chennai", organization: "Storyteller" ,website: "",
		id: "12",
		details: "Storytelling trainer and coach for parents, and for teachers and other professionals.  Storytelling performer for children at special occasions like Christmas, New Year, and Birthday parties.  Designer of theme-based Storytelling Camps for children on topics such as Environment Conservation, and Life Skills.  I am an Arts-based Therapy Practitioner -- when working with children, I use Storytelling and other arts as therapeutic tools (M.Sc, Psychology, University of Madras; M.Sc, Institute of Psychotherapy and Counselling, Mumbai; 10-month Certificate Course in Arts-based Therapies, World Centre for Creative Learning Foundation, Pune).  Here is a photo of myself in a Storytelling discussion session with children."
		},

		{name: "Sabapathy Narayanan (Saba)", email: "sabapathyn@gmail.com", phone: "+91 96000 02325",
		location: "Chennai", organization: "Storyteller" ,website: "http://telltaleclub.com",
		id: "13",
		details: "My specialty is purpose-driven storytelling in organizational settings. For me, an anecdote is a story, an example is a story, and a conversation between two people is a story.  I am a firm believer in the importance of personal stories. There are numerous types of personal stories, suiting all occasions and situations.  I dig up stories from real-life and make them palatable for audiences in different age groups.  I can also coach others to find, shape, and tell such stories.      I am also fond of animal stories, especially about squirrels, elephants, and rabbits.      I maintain a storytelling blog at http://telltaleclub.com , where a number of people contribute stories.  I am currently doing research on untold stories in and around Karaikudi and Madurai and I am looking at publishing them as a book."
		},

		{name: "Ameen Haque", email: "ameen@thestorywallahs.com", phone: "+91 98455 36114",
		location: "Bangalore", organization: "The Storywallahs" ,website: "http://www.thestorywallahs.com",
		id: "14",
		details: "Ameen has led a double life in Advertising and Theater.  A trained actor and storyteller, he has attended an Intensive course in Storytelling and passionately believes in the power of stories to change the world.  He is using the power of stories to bring about a change in Education, to train teachers, work with special children and also train leaders from the world of business in the art of Storytelling.  Drawing upon his experience from theater, work with special children and advertising, his workshops and training programs are ideal for those who want to become better storytellers.  As a performer and storyteller he uses music (harmonica), masks, picture cards and songs to bring alive his characters and stories.  Comfortable with Hindi, English and Gujarati, Ameen also writes and tells original stories in the form of poetry.  When not conducting workshops, he can be found spreading the magic of stories at schools, bookstores or an orphanage."
		},

		{name: "M S Bose", email: "", phone: "+91 82812 61981",
		location: "Cochin", organization: "Storyteller", website: "",
		id: "15",
		details: "Mr. Bose loves telling stories!  He tells various types of Theme/Curriculum based stories, including Fairytales and other types of Folktales.  He utilises multiple media tools, which makes children's learning more fun."
		},

		{name: "Kala Ramesh", email: "", phone: "+91 98601 08443",
		location: "Pune", organization: "Storyteller", website: "",
		id: "16",
		details: "Creative Writing Workshop Leader. Previously a Hindustani classical musician, now a passionate haiku exponent, Kala has been telling stories through music and writing for many years. She has conducted Creative Writing workshops with children and adults in Chennai, Hyderabad, Pune, Mumbai and Delhi — teaching them ways to capture an image, a moment, and showcase it in their own little story — a haiku! / spring breeze / — I catch the tune /she leaves behind / Kala's vision is to help people of all ages tell their life moments and stories through haiku and its allied forms, such as tanka (five-line poem) or haibun (prose embedded with poems). She strongly feels each art form feeds into the other, enriching the root source of one’s creativity.Kala lives in Pune and is happy to travel to lead workshops."
		},

		{name: "Nancy Katyal", email: "nancykatyal@gmail.com", phone: "+91 98902 67892",
		location: "Pune", organization: "Storyteller", website: "",
		id: "17",
		details: "A Storyteller and an ardent believer in the power of storytelling to open doors, build new relationships, help one to serve others effectively, and enhance one's leadership abilities. Nancy is a post-graduate in Human Resources, and is a practicing Speech and Drama Facilitator/Trainer/Coach.  She has rich experience -- in both corporate settings and in schools -- in helping people to discover and develop their inner talents."
		},

		{name: "Sapna Chheda", email: "contactstoryhouse@gmail.com", phone: "+91 98203 84049",
		location: "Mumbai", organization: "Storyteller", website: "",
		id: "18",
		details: "A passionate storyteller, Sapna uses unique and various innovative styles of narrating stories.  She specializes in Storytelling for children of all age groups.  She conducts workshops and individual/group storytelling sessions for children.  Sapna focuses on developing confidence, increasing vocabulary, teaching moral values, and enhancing imagination and listening skills in children, while also having some fun through stories. "
		},

		{name: "Usha Venkatraman", email: "usha@puppetwonders.com", phone: "+91 98201 79303",
		location: "Mumbai", organization: "PuppetWonders", website: "http://www.puppetwonders.com",
		id: "19",
		details: "Usha's storytelling and puppetry performances are filled with drama, music, movement and singing.  She provides value-based education through this art. She especially seeks to educate and entertain young people, but her performances often keep people of all ages spellbound.  Usha’s background is in education and the performing arts.  She tells Indian folktales and mythology, folktales from around the world, and true-life incidents.  She has performed at schools, cultural associations, social clubs, museums, book stores, NGOs, children’s wings of hospitals, the Kala Ghoda Festival, International Storytelling Festivals in India and Sweden, and for Doordarshan TV; and is a member of the International Storytelling Network.  Usha conducts storytelling and puppetry workshops -- for teachers and students -- at schools, NGOs, etc"
		},


		{name: "Dr. Sandhya Ruban", email: "sandyhobday@upcchennai.org", phone: "+91 98401 77215",
		location: "Chennai", organization: "Eloquens" ,website: "http://www.facebook.com/pages/Eloquens/295935603789774",
		id: "20",
		details: "Creative Head, Eloquens. 1) Storytelling performances for children, with associated Art and Craft activities.  2) Storytelling performances for adults, on customised topics.  3) Customized Workshops for any category of people.  In workshops for children, the focus is on developing Speech, and Interpersonal Communication and Social Skills. 4) Public Speaking classes. 5) Soft Skills training (improving Interpersonal Skills, etc) for professionals, and for those seeking employment. 6) Translation Services, verbal and written (English to Tamil and Hindi, etc). "
		},

		{name: "K. Shanmugasundaram (Shan)", email: "artworkshop@gmail.com", phone: "+91 98845 02478",
		location: "Chennai", organization: "Art Workshop", website: "http://www.artworkshop.co.in",
		id: "21",
		details: "Artworkshop & Communications: Storytelling, Mind Games and Mind Mapping."
		},
								

		{name: "Sheetal N.", email: "sheetal_rayathatha@yahoo.com", phone: "+91 98400 91290",
		location: "Chennai", organization: "Rainbow High", website: "",
		id: "22",
		details: "Co-founder, Rainbow High (activities for children, 3 to 10 years old). 1) Storyteller with 7 years of experience in schools and activity centers. 2) Passion for Dance -- Choreographer for annual functions in schools, competitions, weddings. 3) Trainer, Kidz4mation, www.kidz4mation.com. 4) Teacher, Guruskul (value education and sloka classes for children), www.guruskul.webs.com. 5) Trained phonics teacher. 6) Teacher for training children in computers. With constant innovation for betterment of education, and bringing out talent in children.  All of the above can be customised."
		},
	]

	return Members;
})

function MainController($scope, Members) {
    $scope.members = Members;
}
