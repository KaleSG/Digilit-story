/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});





// Define the Characters
monogatari.characters ({
	'sai': {
		name: 'Sai',
		color: '#145bcc',
		directory: 'sai',
		sprites: {
			neutral: 'neutral-sai.png',
			pensive: 'pensive-sai.png',
			surprised: 'surprised-sai.png',
			pointing: 'talking-sai.png'
		}
	},
	'tristane': {
		name: 'Tristane',
		color: '#a15208',
		directory: 'tristane',
		sprites: {
			laughing: 'laughing-tristane.png',
			neutral: 'neutral-tristane.png',
			smile: 'smile-neutral-tristane.png',
			walking: 'walking-neutral-tristane.png'
		}
	},
	'yoona': {
		name: 'Yoona',
		color: '#f5da7a'
	
	},
	'toona': {
		name: 'Toona',
		color: '#d9d3ce',
		directory: 'toona',
		sprites: {
			neutral: 'neutral-toona.png',
			nervous: 'nervous-toona.png',
			shocked: 'shocked-toona.png',
			talking: 'talking-toona.png'
		}
	
	
	
	},
	'ami': {
		name: 'Ami',
		color: '#cf34eb',
		directory: 'ami',
		sprites: {
			neutral: 'neutral-ami.png',
			walking: 'walking-ami.png',
			talking: 'talking-ami.png'
		}
	
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		
		'jump Chapter4'
	],
	
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
		'yoona Don\'t worry about that.',
		'yoona Jace is just selling Herobrin.',
		
		'show character sai pensive with left',
		'sai Herobrin??',
		
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
		
		'show character toona neutral with left',
		'yoona Tristane!',
		
		'You see a man in the distance look up at you both.',
		
		'show character tristane smile with right',
		'tristane Yoona! Toona! What\'s good?!',
		'toona Nothing. Have you received any medicine lately?',
		'show character tristane neutral with right',
		'tristane No… I’m so sorry.',
		'show character tristane smile with right',
		'tristane I\'m having Lorci reach out to the analysts.', 
		'show character tristane neutral with right',
		'tristane But for now all we can do is wait',
		'hide character toona',
		
		'yoona Great. . .',
		'show character tristane laughing with right',
		'tristane Who\'s your friend here?',
		
		
		
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
		
		'yoona WHAT!!?',
		'show character toona talking with left',
		'toona NO!',
		'show character toona nervous with left',
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
		
		{'Choice': {
			'Dialog': 'What will you do?',
			'Explore': {
				'Text': 'Explore the house',
				'Do': 'jump HomeChoiceExplore'
			},
			'Help': {
				'Text': 'Try to help Yoona and Toona\'s parents',
				'Do': 'jump HomeChoiceHelp'
			}
		
		}}
		
	
	],

	'HomeChoiceHelp': [ //Chapter 4 selection
		'sai Sir! Sir! are you alrght?',
		'sai Can you hear me?',
		'Yoona runs off. And you\'re not quite sure where.',
		'sai Why aren\'t they answering us?',
		'toona They have synaptic disconnect.',
		'toona The disease that plagues practically all of us explorers.',
		'sai Well, do you have medicine?',
		'toona What do you think?!',
		'toona Analyst....',
		'sai Uhh, im guessing no then.',
		
		'Yoona runs back into the room.',
		'yoona Everything of value is gone.',
		'toona WHAT!?!',
		'yoona All of our money.',
		'yoona All of our food.',
		'toona WHAT!',
		'yoona Anything that could be sold.',
		'yoona it\'s all gone. . .',
		'toona . . .',
		'toona . . .',
		'toona Sai.',
		'sai ???',
		'toona Get out.',
		'sai What?',
		'sai Why?',
		'sai How is this my faul-',
		'yoona Because of YOUR people, our people have to steal and scrape to survive',
		'yoona All because you analysts can\'t just share a cure that you can EASILY make.',
		'yoona Our lives are in ruin because of YOU.',
		'yoona GET OUT!!!',
		
		'sai Okay! Okay, I\'ll leave.',
		
		'you walk out of the house'
		
		
		
	],
	
	'HomeChoiceExplore': [ //Chapter 4 selection
		'sai I\'ll go see what other damage they did',
		'Yoona and Toona didn\'t seem to hear you',
		'show scene attic with fadeIn', //scene change
		'You walk around to see if you could find anything anyway',
		'There\'s absolutely nothing to be found',
		'sai Dang, these raiders took everything.',
		'sai Assuming there was much to take to begin with.',
		
		'show scene bathroom with fadeIn', //scene change
		'You walk into the bathroom',
		'sai Not even any hygiene products',
		'sai No toilet paper',
		'You notice that even the toilet seat is gone',
		'It\'s just the hinges now.',
		'show scene kitchen fadeIn',
		'You walk into the kitchen',
		'sai Is there no food anywhere?',
		'sai No fridge.',
		'sai No utensils?',
		'sai it\'s just empty..',
		
		'You hear footsteps behind you',
		'You turn around.',
		
		'yoona WHAT ARE YOU DOING?',
		'sai I-I was just-',
		'yoona this is all YOUR fault.',
		'yoona You and your stupid analyst ideals.',
		'yoona Because of YOUR people, our people have to steal and scrape to survive.',
		'yoona All because you analysts\' can\'t seem to share a damn cure you can EASILY make.',
		'yoona GET OUT!!',
		'sai Yoona please- I didn\'t-',
		'She won\'t listen.',
		'GET OUT!',
		'she physically grabs your and throws you out of the house.',
		'she would slam the door behind her,',
		'but the raiders took that too...',
		'nice going with that one.'
		
		
	]
	
	
	
	
	
});