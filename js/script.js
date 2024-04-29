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
		'sai What the hell.',
		'sai Did you see that?',
		'sai He just ate it!',
		'sai its like all of his problems just vanished ????',
		
		'yoona Don\'t worry about that.',
		'yoona Jace is just selling Herobrin.',
		
		'sai Herobrin??',
		
		'toona Yeah',
		'toona It\'s just a drug that makes people happy.',
		'toona It makes sense if you think about it.',
		'toona Money and food is scarce down here.',
		'toona The spread of disease down here is probably even worse.',
		'toona People use it as an escape...',
		'toona or just to feel something...',
		
		'sai But shouldn\'t someone atleast try to do something about it?',
		
		'toona Like what Sai?',
		
		'You walking until you reach a shelter.',
		
		'yoona Tristane!',
		
		'You see a man in the distance look up at you both.',
		
		'tristane Yoona! Toona! What\'s good?!',
		'toona Nothing. Have you received any medicine lately?',
		'tristane No… I’m so sorry.', 
		'tristane I\'m having Lorci reach out to the analysts.', 
		'tristane But for now all we can do is wait',
		'yoona Great. . .',
		'tristane Who’s your friend here?',
		'sai I’m Sai. Who are you? You sure don’t look like you belong in Elgin',
		'tristane I\'m Tristane.',
		'tristane You’re right, Elgin is quite foreign to me.',
		'tristane I\'m actually from New JiJago',
		'tristane Hyde Park specifically.',
		
		'sai Why come all the way here?',
		'tristane I’m a diplomat and I came to Elgin to help the explorers here',
		'tristane I hope to eventually get them out of this mess one day.',
		'tristane But, for now it\'s riddled with Synaptic Disconnect Disorder.',
		'tristane The analysts\' price the treatments are always so high.',
		'tristane  It’s almost hopeless. But, I believe that with effort we can help build Elgin to something beautiful',
		
		'toona Thanks Tristane.',
		'toona We should get going guys.',
		'tristane Alright,',
		'tristane I hope i\'ll see you guys soon.',
		'tristane Take care!',
		
		'You, Yoona, and Toona keep on walking until you reach their house.',
		'It looks like it\'s completely in shambles.',
		'Someone raided the house.',
		
		'yoona WHAT!!?',
		'toona NO!',
		'toona MAMA!',
		'toona PAPA!',
		
		'You all run into the house.',
		'The house is practically empty.',
		'You find Yoona and Toona\'s parents sitting on a blanket in a disheveled living room.',
		
		'toona Mama!',
		'toona Papa!',
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
		'You walk around to see if you could find anything anyway',
		'There\'s absolutely nothing to be found',
		'sai Dang, these raiders took everything.',
		'sai Assuming there was much to take to begin with.',
		'You walk into the bathroom',
		'sai Not even any hygiene products',
		'sai No toilet paper',
		'You notice that even the toilet seat is gone',
		'It\'s just the hinges now.',
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