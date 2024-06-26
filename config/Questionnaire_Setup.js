
/* Making the questionnaire as a list allows the use of criteria 
to define which questionnaire in the list to use */
var AES_001 = { 
    questionnaire: ['aes'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,
 }
var STAI_S_001 = { 
    questionnaire: ['stai_state'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false, 
}

var STAI_S_002 = { 
    questionnaire: ['stai_state'], 
    criteria: [],
    variable: [],
    AskForNotes: true,
    ShowWelcome: false,
    ShowThankYou: true,
    ShowInstructions: false, 
}
var STAI_T_001 = { 
    questionnaire: ['stai_trait'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

const DepressionQuestionnaires = ['bdi', 'gds']
const DepressionQuestionnaireVariable = 'Age'
const DepressionQuestionnairesCriteria = ['( XXX > 17 ) && ( XXX < 31 )', '( XXX > 59 )']
var BDI_001 = { 
    questionnaire: DepressionQuestionnaires, 
    criteria: DepressionQuestionnairesCriteria,
    variable: DepressionQuestionnaireVariable,
    AskForNotes: true,
    ShowWelcome: false,
    ShowThankYou: true,
    ShowInstructions: false,  
}

var BDI_002 = { 
    questionnaire: ['bdi'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

var GDS_001 = { 
    questionnaire: ['gds'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

var EQ5D_001 = { 
    questionnaire: ['eq5d'], 
    criteria: [],
    variable: [],
    AskForNotes: false,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}

var GAS10_001 = { 
    questionnaire: ['gas10'], 
    criteria: [],
    variable: [],
    AskForNotes: true,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}
var CESAM_001 = { 
    questionnaire: ['cesam'], 
    criteria: [],
    variable: [],
    AskForNotes: true,
    ShowWelcome: false,
    ShowThankYou: false,
    ShowInstructions: false,  
}


add('AES_001', function(){ parameters = AES_001});
add('STAI_S_001', function(){ parameters = STAI_S_001});
add('STAI_S_002', function(){ parameters = STAI_S_002});
add('STAI_T_001', function(){ parameters = STAI_T_001});
add('BDI_001', function(){ parameters = BDI_001});
add('BDI_002', function(){ parameters = BDI_002});
add('GDS_001', function(){ parameters = GDS_001});
add('EQ5D_001', function(){ parameters = EQ5D_001});
add('GAS10_001', function(){ parameters = GAS10_001});
add('CESAM_001', function(){ parameters = CESAM_001});