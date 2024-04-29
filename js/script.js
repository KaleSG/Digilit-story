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
		'toona It make\'s sense if you think about it.',
		'toona Money and food is scarce down here.',
		'toona The spread of disease down here is probably even worse.',
		'toona People use it as an escape...',
		'toona or just to feel something...',
		
		'sai But shouldn\'t someone atleast try to do something about it?',
		
		'toona Like what Sai?',
		
		'You and Toona keep walking until you reach a shelter.',
		
		'yoona Tristane!',
		
		'You see a man in the distance look up at you both.',
		
		'tristane Yoona! Toona! What\'s good?!',
		'toona Nothing. Have you received any medicine lately?',
		'tristane No… I’m so sorry.', 
		'tristane I am having Lorci reach out to the analysts.', 
		'tristane But for now all we can do is wait',
		'yoona Great. . .',
		'tristane Who’s your friend here?'
		
		
		
		
		
	
	]

	
});