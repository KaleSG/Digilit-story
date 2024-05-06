monogatari.script ({

    'Chapter1':[
        'show scene black with fadeIn',
        'In the year 3012, the world is plagued with SDD',
        'and you can only fix it with Herobin . . .',
        'The world as we know it is now divided up based off MBTI (Myers-Briggs Type Indicator)',
        'The types are your personality preferences in four dimensions:',
        'Extraversion (E) or Introversion (I)',
        'Sensing (S) or Intuition (N)',
        'Thinking (T) or Feeling (F)',
        'Judging (J) or Perceiving (P)',
        '4 letters, 16 different combinations, and one life . . .',
        'There are 4 districts that the 16 personalities are divided into: ',
        'show scene circuit',
        'Analysts.',
        'show scene newColumbia',
        'Sentinels',
        'show scene jijago',
        'Diplomats', 
        'show scene tristanwork',
        'and Explorers . . .',
      
        
        'These districts serve as the heartbeats of civilization, ',
        'each embodying distinct values, strengths, and ideologies',
        
        'show scene circuit with fadeIn',
        'Silicon Circuit: the Analysis capital',
       

        'show scene home with fadeIn',
        'You walk in to the living room and your mom and dad are discussing details about the family business',
        'show character mom neutral with left',
        'mom Darling, have you seen the latest figures from our offshore investments?',
        'show character dad point with right',
        'dad Yes dear. It seems our profits have increased yet agaain.',
        'dad We didn\'t claw our way to the top by showing mercy to the downtrodden. Power is earned through ruthlessness and ambition.',
        'show character mom neutral with right',
        'mom Cheers to that, we are unstoppable.',
        'show character sai pointing with left',
        'sai Hey . . . can I come in?',
        'dad Where have you been Sai? You should\'ve been at the office, not gallivanting around.',
        'sai Just out exploring Dad. There\'s more to life than work.',
        'show character mom mad with right',
        'mom EXPLORING?!?! Are you out of your mind?! Acting like one of those mindless fools?!',
        'dad You\'re a disgrace!! Get out of my sight!!!',
        'sai Fine, I\'ll leave.',

        'show scene black with fadeIn',
        'You walk through the Silicone Circuit, ',
        'and eventually . . .',
        'you walk outside and into the border',

        'show scene newColumbia with fadeIn duration 5s',

        'show character sai pointing with left',
        'sai Oh shoot, I don\'t know where I am anymore . . .',
        'show character toona shocked with right',
        'toona Yoona, look!! I think I found a wandering Analysis kid!',
        'show character yoona mad with right',
        'yoona Toona, I told you not to get close to those people.',
        'toona Hey, why do you get to tell me what to do?',
        'yoona I\'m literally 16 seconds older than you, it\'s my right as the first born.',
        'Toona ignores Yoona',
        'show character toona talking with right',
        'toona Hey! Are you lost? You look lost! We can help you!.',


        'jump Friends'

    ],

    'Friends':[


    {'Choice': {
        'Dialog': 'What will you choose?',
        'helps': {
            'Text': 'Let Yoona and Toona help you',
            'Do': 'jump helps'
        },
        'leaves': {
            'Text': 'Dont let Yoona and Toona help you',
            'Do': 'jump leaves'
        }
    
    }}


    ],

    'helps':[

        'show scene newColumbia with fadeIn',
        'show character sai pointing with left',
        'sai Thanks, I can use the help. I know my parents are the ones that kicked me out the house',
        'sai but they would go crazy if I didn\'t go back sometime soon and I don\'t know my way back.',

        'show character yoona neutral with right',
        'yoona Dang . . . I guess we can help you find your way back home. What\'s your name?',
        'sai I\'m Sai. Nice to meet you.',
        'show character toona talking with right',
        'toona I\'m Toona, and this is my sister Yoona. We\'re twins, in case you couldn\'t tell.',
        'show character yoona neutral with right',
        'yoona Yeah, and I\'m still older.',
        'sai Ummmm, ok. Which direction should I take to Silicon Circuit?',
        'yoona Uhhhh . . . walk back the way you came?',
        'show character toona talking with right',
        'toona Yoona, he\'s probably directionally challenged.',
        'sai Hey, it\'s just that I took too many turns and walked too far out.',
        'show character yoona neutral with right',
        'yoona I\'m honestly impressed you ended up here all the way from Silicon Circuit.',
        'show character toona talking with right',
        'toona Just keep walking northeast for like 3 hours',
        'sai Sigh . . . alright, thanks for the help.',
        'show scene black with fadeIn',

        'jump Chapter3help'


    ],
    'leaves':[
        
        'show scene newColumbia with fadeIn',
        'show character sai pointing with left',
        'show character yoona neutral with right',
        'sai I don\'t need your help, especially not from lowly Explorers like you.',
        'sai I\'ll find my own way.',
        'yoona See? What did I tell ya, those Analysts are all the same. This is why you always listen to your elders.',
        'show character toona talking with right',
        'toona Whatever, let\'s go.',
        'show scene black with fadeIn',

        'jump Chapter3leave'


    ],


}); //put script stuff here