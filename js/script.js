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
		'show scene Elgin',
		'show character ami neutral with left',
		'ami hey i\'m ami and im going to destroy your will to live!',
		'show character ami walking with left',
		'ami Enjoy your life loser!'
		
	],

	
});