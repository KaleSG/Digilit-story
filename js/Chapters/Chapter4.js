monogatari.script ({
    'Chapter4': [
	
		'show scene crackhouse with fadeIn duration 2s',  //scene change
	
		'show character sai surprised with left',
		'sai What the hell.',
		'show character sai pointing with left',
		'sai Did you see that?',
		'show character sai surprised with left',
		'sai He just ate it!',
		'show character sai surprised with left',
		'sai its like all of his problems just vanished ????',
		
		'hide character sai',
		'show character yoona walking with left',
		'yoona Don\'t worry about that.',
		'yoona Jace is just selling Herobin.',
		'hide character yoona',
		
		'show character sai pensive with left',
		'sai Herobin??',
		
		'hide character sai',
		'show character toona neutral with left',
		'toona Yeah',
		'show character toona neutral with left',
		'toona It\'s just a drug that makes people happy.',
		'show character toona talking with left',
		'toona It makes sense if you think about it.',
		'show character toona talking with left',
		'toona Money and food is scarce down here.',
		'show character toona nervous with left',
		'toona The spread of disease down here is probably even worse.',
		'show character toona nervous with left',
		'toona People use it as an escape...',
		'show character toona nervous with left',
		'toona or just to feel something...',
		
		'hide character toona',
		'show character sai neutral with left',
		'sai But shouldn\'t someone atleast try to do something about it?',
		
		'show character toona neutral with right',
		'toona Like what Sai?',
		'toona What could we possible do?',
		
		'show scene tristanwork with fadeIn duration 3s', //scene change
		
		'You keep walking until you reach a shelter in a small alleyway',
		
		'show character yoona neutral with left',
		'yoona Tristane!',
		
		'You see a man in the distance look up at you both.',
		
		'show character tristane smile with right',
		'tristane Yoona! Toona! What\'s good?!',
		'hide character yoona',
		'show character toona neutral with left',
		'toona Nothing. Have you received any medicine lately?',
		'show character tristane neutral with right',
		'tristane No… I’m so sorry.',
		'show character tristane smile with right',
		'tristane I\'m having Lorci reach out to the analysts.', 
		'show character tristane neutral with right',
		'tristane But for now all we can do is wait',
		'hide character toona',
		
		'show character yoona neutral with left',
		'yoona Great. . .',
		'show character tristane laughing with right',
		'tristane Who\'s your friend here?',
		
		'hide character yoona',
		
		'show character sai neutral with left',
		'sai I’m Sai. Who are you? You sure don’t look like you belong to Elgin',
		'show character tristane neutral with right',
		'tristane I\'m Tristane.',
		'show character tristane smile with right',
		'tristane You’re right, Elgin is quite foreign to me.',
		'tristane I\'m actually from New JiJago',
		'show character tristane neutral with right',
		'tristane Hyde Park specifically.',
		
		'show character sai pensive with left',
		'sai Why come all the way here?',
		'show character tristane smile with right',
		'tristane I’m a diplomat and I came to Elgin to help the explorers here',
		'tristane I hope to eventually get them out of this mess one day.',
		'show character tristane neutral with right',
		'tristane But, for now it\'s riddled with Synaptic Disconnect Disorder.',
		'tristane The analysts always price the treatments so high.',
		'tristane  It’s almost hopeless. But, I believe that with effort we can help build Elgin into something beautiful',
		
		'hide character sai',
		'show character toona neutral with left',
		'toona Thanks Tristane.',
		'show character toona talking with left',
		'toona We should get going guys.',
		'show character tristane smile with right',
		'tristane Alright,',
		'tristane I hope i\'ll see you guys soon.',
		'show character tristane walking with right',
		'tristane Take care!',
		
		'show scene yoonahome with fadeIn duration 3s',
		'You, Yoona, and Toona keep on walking until you reach their house.',
		
		
		'It looks like it\'s completely in shambles.',
		'Someone raided the house.',
		
		'show character yoona mad with left',
		'yoona WHAT!!?',
		'show character toona talking with right',
		'toona NO!',
		'show character toona nervous with right',
		'toona MAMA!',
		'toona PAPA!',
		
		
		'show scene livingroom with fadeIn duration 2s',
		'You all run into the house.',
		
		
		'The house is practically empty.',
		'You find Yoona and Toona\'s parents sitting on a blanket in a disheveled living room.',
		
		'show character toona nervous with left',
		'toona Mama!',
		'toona Papa!',
		'show character toona talking with left',
		'toona Are you alright?',
		'hide character toona',
		
		{'Choice': {
			'Dialog': 'What will you do?',
			'Explore': {
				'Text': 'Explore the house',
				'Do': 'jump Ch4HomeChoiceExplore'
			},
			'Help': {
				'Text': 'Try to help Yoona and Toona\'s parents',
				'Do': 'jump Ch4HomeChoiceHelp'
			}
		
		}}
		
	
	],

	'Ch4HomeChoiceHelp': [ //Chapter 4 selection
		'show character sai pointing with left',
		'sai Sir! Sir! are you alrght?',
		'show character sai neutral with left',
		'sai Can you hear me?',
		'Yoona runs off. And you\'re not quite sure where.',
		'sai Why aren\'t they answering us?',
		'show character toona talking with right',
		'toona They have synaptic disconnect.',
		'show character toona nervous with right',
		'toona The disease that plagues practically all of us explorers.',
		'show character sai neutral with left',
		'sai Well, do you have medicine?',
		'show character toona neutral with right',
		'toona What do you think?!',
		'show character toona nervous with right',
		'toona Analyst....',
		'show character sai pensive with left',
		'sai Uhh, im guessing no then.',
		
		'hide character sai',
		
		'show character toona neutral with left',
		'Yoona runs back into the room.',
		
		'show character yoona mad with right',
		'yoona Everything of value is gone.',
		'show character toona shocked with left',
		'toona WHAT!?!',
		'yoona All of our money.',
		'yoona All of our food.',
		'toona WHAT!!!!',
		'yoona Anything that could be sold.',
		'yoona it\'s all gone. . .',
		'show character toona nervous with left',
		'toona . . .',
		'toona . . .',
		'toona Sai.',
		
		'hide character yoona',
		'show character sai neutral with right',
		
		'sai ???',
		'show character toona talking with left',
		'toona Get out.',
		'show character sai pointing with right',
		'sai What?',
		'sai Why?',
		'sai How is this my faul-',
		'hide character toona',
		'show character yoona mad with left',
		'yoona Because of YOUR people, our people have to steal and scrape to survive',
		'yoona All because you analysts can\'t just share a cure that you can EASILY make.',
		'yoona Our lives are in ruin because of YOU.',
		'yoona GET OUT!!!',
		
		'show character sai neutral with right',
		'sai Okay! Okay, I\'ll leave.',
		
		'you walk out of the house.',
		
		'show scene yoonahome with fadeIn duration 5s',
		
		'jump Ch4ThrownOut'
		
		
		
	],
	
	'Ch4HomeChoiceExplore': [ //Chapter 4 selection
		'show character sai pointing with left',
		'sai I\'ll go see what other damage they did',
		'Yoona and Toona didn\'t seem to hear you',
		'show scene attic with fadeIn', //scene change
		'You walk around to see if you could find anything anyway',
		'There\'s absolutely nothing to be found',
		'show character sai neutral with left',
		'sai Dang, these raiders took everything.',
		'show character sai pensive with left',
		'sai Assuming there was much to take to begin with.',
		
		'show scene bathroom with fadeIn', //scene change
		'You walk into the bathroom',
		'show character sai neutral with left',
		'sai Not even any hygiene products',
		'show character sai pensive with left',
		'sai No toilet paper',
		'You notice that even the toilet seat is gone',
		'It\'s just the hinges now.',
		'show scene kitchen fadeIn',
		'You walk into the kitchen',
		'show character sai pointing with left',
		'sai Is there no food anywhere?',
		'sai No fridge.',
		'show character sai neutral with left',
		'sai No utensils?',
		'sai it\'s just empty..',
		
		
		'You hear footsteps behind you',
		'You turn around.',
		
		'show character yoona mad with right',
		
		'yoona WHAT ARE YOU DOING?',
		'show character sai pensive with left',
		'sai I-I was just-',
		'yoona this is all YOUR fault.',
		'yoona You and your stupid analyst ideals.',
		'show character sai neutral with left',
		'yoona Because of YOUR people, our people have to steal and scrape to survive.',
		'yoona All because you analysts\' can\'t seem to share a damn cure you can EASILY make.',
		'yoona GET OUT!!',
		'show character sai pensive with left',
		'sai Yoona please- I didn\'t-',
		'She won\'t listen.',
		'GET OUT!',
		'she physically grabs your and throws you out of the house.',
		'show scene yoonahome with fadeIn duration 5s',
		'she would slam the door behind her,',
		'but the raiders took that too...',
		'nice going with that one.',
		
		'jump Ch4ThrownOut'
		
		
		
	],
	
	'Ch4ThrownOut': [ //Chapter 4 selection for second choice occurence
		'show scene yoonahome',
		
		'Well what now?',
		'Yoona and Toona hate your guts',
		'Now the question is,',
		'Do you really care?',
		
		'show character sai with left',
		
		
		{'Choice': {
			'Dialog': 'What will you do?',
			'help': {
				'Text': 'Find Tristan and help the explorers out of this mess.',
				'Do': 'jump Chapter5'
			},
			'selldrugs': {
				'Text': 'Find the drug dealer you saw earlier and try and make a quick buck.',
				'Do': 'jump selldrugs'
			}
		
		}}
		
	],
	
	'selldrugs': [
		'You go off to search for the drug dealer you saw selling herobin earlier.',
		'show scene crackhouse with fadeIn duration 3s',
        'show character ikaika neutral with left',
        'ikaika MAN this stuff is nice..',
        'hide character ikaika',
        'show character sai surprised with left',
        
        'sai HEY!',
        'hide character sai',
        'show character ikaika neutral with left',
        'ikaika Huh-',
        'show character ikaika talking with left',
        'ikaika BRO you told me this was a secret spot!!',
        'show character jace neutral with right',
        'jace Ugh, get outta here!',
        'show character jace smirk with right',
        'jace I\'ll cover for you.',
        
        'hide character ikaika',
        
        'Ikaika runs off in the distance',
        
        'show character jace surprised with left',
        'sai Hey, hey you!!',
        'show character jace neutral with right',
        'jace Huh? What',
        'show character sai pensive with left',
        'sai What are you doing here?',
        'show character jace puff with right',
        'jace What are YOU doing here Sai?',
        'show character sai surprised with left',
        'sai Huh!? How do you know me?',
        'show character jace smirk with right',
        'jace Dude. It\'s me. Chase!',
        'show character sai pointing with left',
        'sai CHASE? What are you doing here?',
        'show character jace neutral right',
        'chase I\'m on an important mission.',
        'chase What\'s it to you?',
        'sai What? What do you mean.',
        'sai You\'re an ANALYST.',
        'chase H-Huh?! SAI BE QUIET.',
        
        'hide character sai',
        
        'show character ikaika neutral with left',
        'ikaika Excuse me? You\'re an analyst?',
        'ikaika You lied to me!?',
        
		'show character jace smirk right',
        'chase Huh? What?',
        'chase No! He\'s lying!',
        'ikaika Lookie here you analyst piece of-',
        'hide character ikaika',
        'show character sai neutral with left',
        'sai Uhh, well I am out of here!',
        
		'show scene #000 with fadeIn duration 3s',
		
		'As you tried to run away,',
		'you slipped on a bannana peel and died.',
		
		{'Choice': {
		
			'idk': {
				'Text': 'Return to beginning',
				'Do': 'jump Start'
			},
			
		
		}}
        
        
	
	]

})