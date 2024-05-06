monogatari.script ({
    'Chapter3help': [
        
        'You walk back when you suddenly feel rumbling underneath you',
        
        'show scene black with fadeIn',
        'show character sai pointing with left',
        'sai Wait what was that?!?!?',
        'sai Is this an earthquake?!!',
        'sai AHHHHHHH!!!!!',
        
        'show scene ravine with fadeIn',

        'show character sai pointing with left',
        'sai UGH..Ah..',
        'sai Shoot, I fell too deep into the ground, I can\'t get out',
        'sai Hello?!!!! Is anyone there??',
    
        'jump help'    
    ],
    
    'Chapter3leave': [
        
        'You walk back when you suddenly feel rumbling underneath you',
        
        'show scene black with fadeIn',
        'show character sai pointing with left',
        'sai Wait what was that?!?!?',
        'sai Is this an earthquake?!!',
        'sai AHHHHHHH!!!!!',
        
        'show scene ravine with fadeIn',

        'show character sai pointing with left',
        'sai UGH..Ah..',
        'sai Shoot, I fell too deep into the ground, I can\'t get out',
        'sai Hello?!!!! Is anyone there??',
    
        'jump leave'    
    ],
    
   
    'help': [
       'show scene ravine with fadeIn ',
       'show character toona shocked with right',
       'toona Wait? Is that Sai?',
       'Yoona appears next to Toona',
       'show character yoona confused with right',
       'yoona Huh? What\'s he doing in the bottom of the ravine',
       'show character sai surprised with left',
       'sai YOONA!! TOONA!! Thank God, can you guys help me out?',
       'toona Hold on tight Sai, we\'ll get you outta there.',
      

       'show scene newColumbia with fadeIn',

       'show character sai pointing with left',
       'sai Phew, thanks guys, I thought I was stuck down there for good.',
       'show character yoona neutral with right',
       'yoona Yeahh, just try not to throw yourself in next time, ok?',
       'show character toona neutral with right',
       'toona Yup! We don\'t want to have to rescue you again.',
       'show character sai pointing with left',
       'sai Aight, I owe you one.',
       'show character yoona neutral with right',
       'yoona Actually, it\'s going to get dark pretty soon, why don\'t come with us to our house?',
       'show character toona smile with right',
       'toona You can meet our parents! Come on, we\'ll take you to Elgin.',
       'sai Ok!',
       'show scene black with fadeIn duration 5s',



       'jump Chapter4'

        
    ],

    'leave':[
        'show character sai pointing with left',
        'show character toona talking with right',
        'toona Huh? It\'s the analyst kid! What\'s he doing down there?',
        'Yoona appears next to Toona',
        'show character yoona neutral with right',
        'yoona Who cares? He told us to leave him alone, remember? Let\'s go.',
        'Toona and Yoona walk away',
        'They leave Sai stranded alone in the ravine with no food.',
        'show scene black with fadeIn duration 6s',
        'Sai dies of starvation',

       
        
        {'Choice': {
		
			'idk': {
				'Text': 'Return to beginning',
				'Do': 'jump Start'
			},
			
		
		}}
    ]
    

}); 