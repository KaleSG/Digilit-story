monogatari.script ({

    'Chapter2':[

        'show scene newColumbia with fadeIn',
        'show character Sai pointing with left',
        'sai I wonder if I\'m getting any closer . . I\'ve been walking for forever.',

        'Behind you, a conversation is happening between 2 friends Ami and Orion',
        'show character Ami talking with left',
        'ami Orionis, I think I found the solution to this epidemic!!',
        'show character orionis learning with right',
        'orionis What',
        'ami We can have the analysts evenly distribute the medicine to everyone for free!',
        'orionis What do you think this is, communism?',
        'orionis There\'s now way to convince those people to do that.',
        'orionis It logically makes no sense.',
        'ami We never know until we try. They might have a change of heart!',
        'show character orionis sad with right',
        'orionis What we really need is to implement strict measures to contain the spread, ',
        'orionis and find practical treatments that don\'t cost as much as the medicine.',

        'show character sai pensive with left',

        'jump journey'
    ],

    'journey':[
        {'Choice': {
            'Dialog': 'What will you do?',
            'Walk': {
                'Text': 'Continue to walk past Ami and Orion',
                'Do': 'jump walk'
            },
            'Talk': {
                'Text': 'Strike up a conversation with Ami and Orion',
                'Do': 'jump talk'
            }
        
        }}
    



    ],

    'walk':[

        'show scene black with fadeIn',
        'You continue to walk and walk with no end in sight',
        'You soon die due to starvation',

        'jump Chapter1'

    ],
    'talk':[

        'show scene newColumbia with fadeIn',
        'show character sai pointing with left',
        'show character ami neutral with right',

        'sai Hey, sorry to interrupt but do you guys know if I\'m going the right way to Silicon Circuit?',
        'ami Oh, you\'re going to Silicon Circuit? That\'s quite a journey.',
        'ami Are you okay? Can we do anything to help you?',
        
        'show character orionis neutral with right',
        
        'orionis You shouldn\'t have wandered out this far kid.',
        'orionis You\'re going the right way but you will probably end up crossing the borders of Elgin.',
        'sai Well, I guess I don\'t have much of an option. Thanks guys, I really appreciate it.',
        'show character ami neutral with right',
        'ami Bue, Sai! Stay safe and good luck!!',

        'jump Chapter3'



    ],































}); //put script stuff here