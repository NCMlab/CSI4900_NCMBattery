
var EN_Instructions = {}
EN_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">Welcome to the Word Recall Task.</p>'},
]
EN_Instructions.RecallInstructions = 'Please repeat the entire word list'
EN_Instructions.GetReadyInstructions = 'Get ready for the next trial'
EN_Instructions.Instructions01 = [
	{'page': '<p class="Instructions">You are going to hear a list of words. Listen carefully. At the end of the list you are to repeat back as many words as you can recall.</p>'},
	{'page': '<p class="Instructions">It does not matter in what order you repeat them, just try to recall as many as you can.<br/><br/>Press Next to begin.</p>'},
	]
EN_Instructions.Instructions02 = [
	{'page': '<p class="Instructions">Now you will hear the same words again, and once again, at the end of the list repeat back as many words as you can recall, including words you said the first time. </p>'},
	{'page': '<p class="Instructions">It does not matter in what order you say them, just say as many words as you can remember, whether or not you said them before.<br/><br/>Press next to begin.</p>'},
	]
EN_Instructions.Instructions03 = [
	{'page': '<p class="Instructions">Now you will hear a second list of words. Listen carefully, for at the end of the list you are to repeat back as many words as you can remember. It does not matter in what order you repeat them, just try to remember as many as you can.<br/><br/> Press next to begin.</p>'},
	]
EN_Instructions.Instructions04 = [
	{'page': '<p class="Instructions">Now repeat back all the words you can recall from the first list, the list you heard a number of times.<br/><br/>Press next to begin.</p>'},
	]

EN_Instructions.InstructionsDelayed = [
	{'page': '<p class="Instructions">Recall all the words you can remember from the list you heard a number of times.</p>'},
	]	

EN_Instructions.WordPrompt = 'empty'
EN_Instructions.ThankYouText = [{'page': 'Thank you'}]

EN_Instructions.WordRecallPrompt = 'Which words were recalled?'
add('EN_Instructions_Default', function(){ Instructions = EN_Instructions});

// ====================================================


var FR_Instructions = {}
FR_Instructions.WelcomeText = [
    {'page': '<p class="Instructions">FR: Welcome to the Word Recall Task.</p>'},
]
FR_Instructions.RecallInstructions = 'FR: Please repeat the entire word list'
FR_Instructions.GetReadyInstructions = 'FR: Get ready for the next trial'
FR_Instructions.Instructions01 = [
	{'page': '<p class="Instructions">Vous entendrez une liste de mots. Ecoutez attentivement, en fin de liste vous devrez répéter tous les mots dont vous vous souviendrez. </p>'},
	{'page': '<p class="Instructions">Peu importe l\'ordre dans lequel vous les répétez, essayez juste de vous souvenir autant que vous le pouvez.</p>'},
	]
FR_Instructions.Instructions02 = [
	{'page': '<p class="Instructions">Maintenant vous entendrez les mêmes mots, et encore une fois en fin de liste vous dites autant de mots dont vous vous souvenez, y compris les mots que vous avez dits la première fois. </p>'},
	{'page': '<p class="Instructions"> Peu importe l\'ordre dans lequel vous les dites, dites simplement autant de mots dont vous pouvez vous souvenir, que vous les aviez dits ou pas avant.</p>'},
	]

FR_Instructions.Instructions03 = [
	{'page': '<p class="Instructions">FR: Now you will hear a second list of words. Listen carefully, for at the end of the list you are to repeat back as many words as you can remember. It does not matter in what order you repeat them, just try to remember as many as you can.<br/><br/> Press next to begin.</p>'},
	]
FR_Instructions.Instructions04 = [
	{'page': '<p class="Instructions">Dites tous les mots dont vous vous souvenez parmi cette liste.</p>'},
	]
FR_Instructions.WordPrompt = 'empty'
FR_Instructions.ThankYouText = [{'page': 'Merci'}]
add('FR_Instructions_Default', function(){ Instructions = FR_Instructions});


