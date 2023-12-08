var EN_Instructions = {}
EN_Instructions.Instructions01 = [
	{'page': '<p class="Instructions"> '+
        'For this task you will see four cards at the top of the screen. What they display will differ based on three dimensions: '+
        'color, number of objects, shape of objects. '+
        'You will also see a card at the bottom of the screen which you will match to one of the four cards at the top.'},
    {'page': '<div class="InstructImage"><img src=assets/InstructionalImages/CardSortInstructions.png max-width="600px"></img></div>'},
    {'page': '<p class="Instructions"> Select one of the four cards displayed at the top of the screen such '+
    'that the selected card matches the card displayed at the bottom of the screen. '},
    {'page': '<p class="Instructions"> You will be given feedback on whether the selected card was RIGHT or WRONG. Using this feedback, determine which dimension is targeted, and select the card accordingly. The targeted dimension may change from time to time without notice.'}
],
EN_Instructions.Instructions02 = [
    {'page': '<p class="Instructions">You will now perform a few practice trials.'}
]
EN_Instructions.Instructions03 = [
    {'page': '<p class="Instructions">You will now perform the actual task.'}
]

EN_Instructions.ThankYouText = [{'page':'Thank you.'}]

EN_Instructions.WelcomeText = [{'page': '<p class="Instructions">This is the Card Sort Task.</p>'}]
add('EN_CardSortTask_Instructions_Default', function(){ Instructions = EN_Instructions});
/*

In this task, you will see four stimulus cards at the top of the screen. The cards will differ on three dimensions: color 
(red, green, blue, yellow), shape (circle, star, triangle, cross), and number of shapes (one, two, three, or four). 
You will see a single response card at the bottom of the screen, which also has a color, shape, and number. You are 
to the response card to the correct card at the top of the screen based on a specific dimension (e.g. shape), or matching rule. 
There will also be a discard pil on the left of the screen showing you the previous card you saw.  


    'Select one of the four cards displayed at the top of the screen such '
                              +'that the selected card matches the card displayed at the bottom of the screen. '
                              +'The cards can be matched based on three dimensions - color, number of objects '
                              +'or the shape of the objects they display. You will be given feedback whether the '
                              +'selected card was RIGHT or WRONG. Use the feedback to determine which '
                              +'dimension is targeted by feedback and based on it select the right card. The '
                              +'targeted dimension may change from time to time without notice.</p>'},

*/