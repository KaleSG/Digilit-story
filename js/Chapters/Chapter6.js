monogatari.script ({
    'Chapter6': [
        'show scene circuit with fadeIn duration 3s',
        'show character sai neutral with left',
        'You hear your dad screaming from the house',
        'dad SAI GET BACK HERE YOU UNGRATEFUL LITTLE SH-',
        'show character sai surprised with left',
        'sai Okay uh. Time to run now.',
        'show scene jijago with fadeIn 3s',
        
        'After running to who knows where, you take a moment to look around.',
        'You find yourself in a forest surrounded by trees.',
        'show character sai neutral with left',
        'sai Whoo, whoo,',
        'sai . . .',
        'show character sai pensive with left',
        ,'sai I don\'t know where the heck I am...',
        
        'You hear a tree branch break behind you',
        
        'show character sai surprised with left',
        'sai WHO GOES THERE???!!',
        'sai I KNOW HOW TO FIGHT!',
        
        'You know you\'re lying to yourself.',
        'You\'ve never fought a day in your life.',
        
        'show character sai neutral with left',
        'Out of the woods you see a familiar figure.',
        
        'show character sai surprised with left',
        'sai TRISTANE. OH MY GOSH. IM SO SORRY ABOUT EVERYTHING.',
        'show character tristane smile with right',
        'tristane Oh, hey bro?',
        'show character sai neutral with left',
        'show character tristane neutral with right',
        'tristane Why are you in New Jijago?',
        
        'sai Huh?',
        
        'show character tristane walking with right',
        'tristane I was just chopping wood over there, this is new Jijago you know?',
        
        'show character sai pensive with left',
        'sai Oh.. I didn\'t think I ran so far..',
        'show character tristane neutral with right',
        'tristane You ran?',
        'tristane From what?',
        'tristane The money you have?',
        
        'show character sai neutral with left',
        'sai No no. You won\'t believe it.',
        'sai My parents are the ones causing the mayhem. They\'re gatekeeping the cure!',
        
        'show character tristane laughing with right',
        'tristane Dude the whole world has known that. This isn\'t new information.',
        
        'sai Man.. Tristane.. I- I am so so sorry.',
        'sai What do I do? I\'ve been an analyst my entire life.',
        
        'show character tristane smile with right',
        'tristane Well, people can change. It takes time and effort though- lots of it.',
        'show character tristane neutral with right',
        'tristane Are you willing to do whatever it takes??',
        
        'show character sai surprised with left',
        'sai Of course! Yes.',
        'sai I am.',
        'show character sai neutral with left',
        'show character tristane smile with right',
        'tristane Well, then let me take you to Diplomat Land!',
        
        'show scene diplomatland with fadeIn duration 4s',
        
        'show character tristane smile with left',
        'tristane Now then.',
        'tristane if you really want to join our mission in fixing this mess, you have 4 options.',
        'tristane You could be an advocate.',
        'tristane They help try and bridge policy reforms on behalf of the explorers.',
        'tristane You could become a mediator,',
        'tristane They help try and peacefully negotiate policies and take into account both sides of contentions',
        'tristane You could become a political leader and try to completely shift how the goverment works.',
        'tristane Or you could instead integrate yourself more deeply within the Explorer community by becoming a societal nurterer',
        'show character tristane neutral with left',
        
        {'Choice': {
			'Dialog': 'tristane Now, what will it be Sai?',
			'advocate': {
				'Text': 'Become an Advocate',
				'Do': 'jump advocate'
				
			},
			'mediator': {
				'Text': 'Become a Mediator',
				'Do': 'jump mediator'
			},
			'protagonist': {
				'Text': 'Become a political leader',
				'Do': 'jump protagonist'
				
			},
			'campaigner': {
				'Text': 'Become a Caretaker',
				'Do': 'jump campaigner'
			},
			
		
		}}
        
        
    ],
    
    'advocate': [
        'tristane Good choice.',
        'show scene black with fadeIn duration 3s',
        'You become an advocate and realise that success doesn’t come from money or status',
        'but from seeking fulfillment, helping others, and being a force for good in the world.',
        'You become a medical researcher and a politician.',
        'You work to advocate for policy reforms.',
        'Your information about the analysts is put to use and you become a crucial force in peacefully negotiating new policies.',
        'Some of these policies go into law,',
        'you ban the use of Herobin,',
        'and help the explorers tremendously.',
        'THE END',
        
        {'Choice': {
			
			'bonus': {
				'Text': 'BONUS SCENE',
				'Do': 'jump bonus'
			},
			
		
		}}

    ],
    'mediator': [
        'tristane Good choice.',
        'show scene black with fadeIn duration 3s',
        'You become a mediator and become compassionate',
        'and nonjudgmental, always willing to hear another person’s story.',
        'You are committed to authenticity.',
        'You decide to go into law,',
        'actively working on ways to reform the government structure analysts have put into play.',
        'Your information about the analysts is put to use and you become a crucial force in peacefully negotiating new policies.',
        'Most of these policies go into law and you help the explorers tremendously.',
        'THE END',
        
        {'Choice': {
			
			'bonus': {
				'Text': 'BONUS SCENE',
				'Do': 'jump bonus'
			},
			
		
		}}

    ],
    'protagonist': [
        'You become a political leader.',
        'You Prioritize being kind and generous, aiming to understand yourself and others.',
        'You are vocal about your values, including authenticity and altruism.',
        'You lead the resistance movement against the analysts, ultimately causing the power shift in the world.',
        'Your new government is effective and everyone becomes equal.',
        'THE END',
        
        {'Choice': {
			
			'bonus': {
				'Text': 'BONUS SCENE',
				'Do': 'jump bonus'
			},
			
		
		}}
    ],
    'campaigner': [
        'You become a caretaker and have profound depths fueled by your intense desire for meaningful, emotional connections with others.',
        'You are truly devoted to nurturing relationships with your understanding of the world at large.',
        'You become a therapist and educator, helping to guide Explorers to a better way of life.',
        'THE END',
        
        {'Choice': {
			
			'bonus': {
				'Text': 'BONUS SCENE',
				'Do': 'jump bonus'
			},
			
		
		}}
    ],
    

}) //put script stuff here