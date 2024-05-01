monogatari.script ({
    'Chapter5': [
        
        'You walk back into the city to find Tristane.',
        
        'show scene tristanwork with fadeIn duration 4s',
        'As you walk down the alleyway, you spot Tristane.',
        
        'show character sai surprised with left',
        'sai Hey!! Tristane!',
        'Tristane turns around',
        
        'show character tristane laughing with right',
        'tristane Hey Sai!',
        
        'show character sai neutral with left',
        'tristane You\'re back soon.',
        'show character tristane neutral with right',
    
        'tristane What\'s up?',
        
        'show character sai pensive with left',
        'sai I wanna help!',
        'show character tristane walking with right',
        'tristane Help what?',
        'show character sai neutral with left',
        'sai I wanna help peeple in Elgin.',
        'sai Do whatever the heck you\'ve been doing I guess.',
        
        'show character tristane smile with right',
        'tristane Oh!',
        'tristane Weel, I mean, the work I do isn\'t typical for analysts,',
        'tristane but you\'re welcome to tag along.',
        'show character tristane neutral with right',
        'sai Bet-',
        'show character sai pointing with left',
        'sai wait-how did you know I was an analyst?',
        'show character tristane laughing with right',
        'tristane I mean-just look at you.',
        'show character tristane neutral with right',
        'tristane Anyways, why do you want to help now?',
        'tristane What do you want to help with?',
        'show character sai neutral with left',
        'sai Umm, well,',
        'sai Toona and Yoona mentioned a drug.',
        'sai Herobrin I think?',
        'sai Anyway, It seems bad and seems to make people go absolutely bonkers.',
        'show character tristane walking with right',
        'tristane That is very true.',
        'tristane Drug busting isn\'t really my field of expertise.',
        'tristane I don\'t want us to get hurt.',
        'sai Well we have to do something.',
        'sai We can\'t just sit around and watch these people lose their minds.',
        'show character tristane neutral with right',
        'tristane I think you forget that people have *actually* lost their minds thanks to your people.',
        'sai . . .',
        'sai . . .',
        'tristane Alas,',
        'tristane what would you like to do about the Herobrin?',
        
        
        'sai Follow me!',
        'show character sai pointing with left',
        
        'hide character sai',
        'you start running back to the entrance of the city you first saw herobin being sold.',
        
        'tristane DUDE GET BACK HERE!',
        'show character tristane walking with right',
        
        'jump Chapter5Ikaika'
        
        
        
        
        
    ],
    
    'Chapter5Ikaika': [
        'show scene crackhouse with FadeIn duration 2s',
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
        'show character jace neutral with right',
        '. . .',
        'show character sai pointing with left',
        'sai You think this is cool man?',
        'sai You\'re destroing peoples\' lives!',
        'jace Sai what the heck.',
        'jace Knock it off. What are you doing?!',
        'sai HUH. OH HECK NAW!',
        'sai How do you know me?!',
        'jace Sai.',
        'show character jace puff with right',
        'jace Look at me.',
        'show character sai neutral with left',
        'sai . . .',
        'sai Looks like a bald baboon to me..',
        'show character jace smile with right',
        'jace No you dumb- It\'s me-',
        'show character jace neutral with right',
        'Chase!',
        'show character sai surprised with left',
        'sai WHAT?',
        'You stare at him for a few seconds, trying to process what he just said.',
        'show character sai neutral with left',
        'sai Chase, what the heck are you doing here?',
        
        'show character jace smirk with right',
        'chase what are YOU doing here?',
        'chase Doesn\'t mommy and daddy keep you locked up?',
        'show character sai pensive with left',
        'sai Pfft, well',
        'show character jace neutral with right',
        'sai yeah.',
        'sai But I got out.',
        'show character sai neutral with left',
        'sai Either way,',
        'show character sai pointing with left',
        'sai Why are you selling Herobin?',
        'sai You\'re driving these people into complete ruin.',
        'sai You\'re a monster for this Chase.',
        'show character sai neutral with left',
        'sai What happened to you?',
        
        
        'show character jace smile with right',
        'chase That\'s rich coming from YOU.',
        'chase Get it? Rich?',
        'show character jace smirk with right',
        'chase Your family is the reason the whole world is in this mess',
        'show character sai neutral with left',
        'sai My family sells medicine.',
        'show character sai surprised with left',
        'sai We\'re the ones HELPING people.',
        'show character jace smile with right',
        'chase Yeah Sai,',
        'chase and what medicine do you sell again?',
        'show character jace neutral with right',
        'chase and for what price?',
        'show character sai pensive with left',
        'sai Umm,',
        'sai I never really thought abo-',
        'show character jace smirk with right',
        'chase Of course you haven\'t.',
        'chase I always hated your stuck-up attitude.',
        'chase I always hated existence.',
        'show character jace neutral with right',
        'show character sai neutral with left',
        'sai . . .',
        'chase You\'re lucky I don\'t end you right now.',
        'chase Why don\'t yo go along and run home.',
        'chase You don\'t have to speak of this.',
        
        'You see Tristane running towards you.',
        'hide character jace',
        'show character tristane walking with right',
        'tristane HEY!',
        'tristane SAI! WHAT ARE YOU DOING?',
        
        {'Choice': {
			'Dialog': 'What will you do?',
			'goaway': {
				'Text': 'Tell Tristane to go away and you’ll deal with this yourself',
				'Do': 'jump goaway'
			},
			'escort': {
				'Text': 'Have Tristane escort you back home',
				'Do': 'jump escort'
			}
		
		}},
		
	
        
    
    ],
    'escort': [],
    'goaway':[]

}) //put script stuff here