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
    'escort': [
        'show scene crackhouse',
        'show character sai neutral with left',
        'show character tristane neutral with right',
        'tristane Kid. I think it\'s time to go.',
        'tristane Sir, we don\'t want any trouble at the moment',
        'hide character sai',
        'show character chase smirk with left',
        'chase I would hope not.',
        'show character chase neutral with left',
        'chase For your sake.',
        
        'show scene black with fadeIn duration 3s',
        'Tristane escorts you back to the edge of Silicon Circuit',
        'show scene circuit with fadeIn duration 3s',
        'show character tristane neutral with right',
        'tristane Well,',
        'show character tristane walking with right',
        'tristane I\'ll see you around kid.',
        'tristane Stay outta trouble.',
        'show character sai surprised with left',
        'sai WAIT-',
        'show character tristane neutral with right',
        'tristane ?',
        'show character sai pensive with left',
        'sai I want you to meet my family!',
        'show character tristane smile with right',
        'tristane Well, I\'m not legally allowed to cross the border into Silicon Circuit without a permit.',
        'show character sai neutral with left',
        'sai Wait what?',
        'show character tristane neutral with right',
        'tristane Dang man.',
        'tristane You really do live under a rock, huh.',
        'show character sai pensive with left',
        'sai Sorry Tristane...',
        'sai I\'ll see you soon..',
        
        'show scene black with fadeIn duration 3s',
        'You walk home, wondering if you can really do anything to change all of this.',
        'show scene home with fadeIn duration 3s',
        'show character mom mad with left',
        'mom SAI!',
        'mom WHERE THE HELL HAVE YOU BEEN!?',
        'mom YOU STUPID IDIOT.',
        'show character dad point with right',
        'dad I\'ve had the entire city looking for you.',
        'dad Where have you been?',
        'show character mom neutral with left',
        'show character dad point with right',
        'mom You stupid little boy, I was so scared.',
        'hide character dad',
        'show character sai pensive with right',
        'sai Sorry sorry.. I\'m fine.',
        'hide character mom',
        'show character dad point with left',
        'dad Well, where the heck have you been?',
        'sai I-',
        'sai I got caught in Explorer land',
        'show character dad grin with left',
        'dad What the blazes were you doing there?',
        
        {'Choice': {
			'Dialog': 'What will you do?',
			'thugitout': {
				'Text': 'Thug it out and ignore the question',
				'Do': 'jump Ch5ThugItOut'
			},
			'truth': {
				'Text': 'Tell them about everything you saw',
				'Do': 'jump Ch5TheTruth'
			}
		
		}}
        
    ],
    'goaway':[
        'show scene crackhouse',
        'show character sai pensive with left',
        'sai Go away Tristane,',
        'sai I\'ll deal with this myself.',
        'show character tristane neutral with right',
        'tristane . . .',
        'tristane Okay.',
        'Tristane seems to have trusted you in handling this yourself and leaves.',
        'hide character tristane',
        
        'show character sai neutral with left',
        'show character chase smirk with right',
        'sai Chase, this isn\'t okay and you know it.',
        'show character sai pensive with left',
        'sai I know my family is probably what caused all of this',
        'show character sai neutral with left',
        'sai But I didn\'t know!',
        
        'show character chase smile with right',
        'chase You know what.',
        'sai ??',
        'chase I\'m tired of this.',
        
        'show scene #fff',
        
        '. . . ',
        '. . .',
        'Before you even knew it,',
        'Chase shot you in the head.',
        'so much for trying to do the right thing huh?',
        {'Choice': {
    		
            'idk': {
                'Text': 'Return to beginning',
                'Do': 'jump Start'
            },
            
        
        }}
        
        
    ],
    
    'Ch5TheTruth':
    [
        'show character sai neutral with right',
        'sai Everyone in Elgin',
        'sai they\'re all struggling so much.',
        'show character sai surprised with right',
        'sai There’s crime and poverty everywhere.',
        'sai People are scraping to survive!',
        '. . .',
        'show character sai neutral with right',
        'show character dad point with left',
        'dad Okay?',
        'mom . . .',
        'show character sai pointing with right',
        'sai Aren’t we rich? We have to help them out.',
        'sai In the elder days, we had something to help people.',
        'sai Like, I don’t know Will Good?',
        'dad Sai, look, we have to tell you something.',
        'hide character sai',
        'show character mom neutral with right',
        'mom Honey, we wanted to tell him when he turned 21.',
        'dad eh 17 is old enough',
        'dad Sai, we create and sell the cure to Synaptic Disconnect Disorder.',
        'dad We are only one of two families who can create this drug.',
        'hide character mom',
        'show character sai surprised with right',
        'sai WHAT!?',
        'dad Yes. So, because there is so little stock, we price it as high as we can.',
        'dad So does our competitor.',
        'show character sai neutral with right',
        'dad This way, we generate the most revenue than anyone in the entire world.',
        'hide character dad',
        'show character mom neutral with left',
        'mom Because of this, the Explorers cannot afford the cure.',
        'mom This has led to many of their people to go into poverty and has caused their government to completely crumble.',
        'show character sai surprised with right',
        'sai WHAT. That’s awful.',
        'sai We have so much of the cure, let’s just give some of it to them.',
        'sai The diplomats can then go help them rebuild.',
        'mom Are you not listening to us?',
        'show character sai neutral with right',
        'mom Their own misfortune brought this upon them.',
        'mom This is THEIR fault.',
        'mom The weak deserve nothing more than to kneel before the strong.',
        'show character sai surprised with right',
        'sai You’re both insane.',
        'sai How could you let this happen?!',
        'show character dad point with left',
        'hide character mom',
        'dad Shut up Sai. I’m sick of this conversation.',
        'dad Go to your room.',
        
        'show scene black with fadeIn duration 3s',
        'You go back to you\'re room.',
        
        'You realize that they aren\'t going to change no matter what you say.',
        'If you really want things to change, you have to leave this comfortable lifestyle.',
        'What will you do?',
        
        {'Choice': {
			'Dialog': 'You need to escape, how will you do it?',
			'optionOne': {
				'Text': 'Sneak out the back door',
				'Do': 'jump Chapter6'
				
			},
			'optionTwo': {
				'Text': 'Sneak out your window',
				'Do': 'jump Chapter6'
			}
		
		}}
        
        
        
        
        
    ],
    'Ch5ThugItOut':
    [
        'show character sai neutral with right',
        'sai You know what, I\'m going to bed.',
        'sai Good night.',
        'show scene black with fadeIn duration 3s',
        
        'Instead of facing your problems head on, you ignore them and completely forget about everything you saw today.',
        {'Choice': {
		
			'idk': {
				'Text': 'Return to beginning',
				'Do': 'jump Start'
			},
			
		
		}}
    ]

}) //put script stuff here