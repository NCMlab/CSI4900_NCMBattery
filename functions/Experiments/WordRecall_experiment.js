
// What is needed?
/*
- Ask participant to read a practice list of words to make sure they can be recognized by 
the computer.
- If words can not be identified decide to skip this experiment. 
- Calculate all of the scores.
- Present words a set number of time and modify the word list each time

*/

// =======================================================================
// Define internal variables
var timeline = [];
var ind = 0;
var interval
var time_left
var WordList = []
var WordListA
var SimpleWordList = []
var FullWordList = []
var WordListIndex = []
var FullListIndex = []
var TrialCount
var BlockCount = 0
var RecallProcedureB
var AudioFileListA
var AudioFileListB
var WordListAForRecall = 'empty'
var WordListBForRecall
var AudioFileDictListA
var AudioFileDictListB
var ResponseArray
var NumberBlocks
var ItemCount = 0
var countInstr01 = 0
var countInstr02 = 0
var countInstr03 = 0
var countInstr04 = 0
var countInstrDelay = 0
var IntrusionList = []
// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: FullScreenMode
}




// preload audio
// There will always be an A list
var preload_audioA = {
  type: jsPsychPreload,
  audio: function(){return AudioFileListA},
  on_start: function() {}
};
var preload_audioB = {
  type: jsPsychPreload,
  audio: AudioFileListB,
};

var if_BList_preload = {
  timeline: [preload_audioB],
  conditional_function: function(){
    console.log(WordRecall_parameters.BListFlag)
    return  WordRecall_parameters.BListFlag}
}
// Update Number of blocks variable
var HowManyBlocks = {
  type: jsPsychCallFunction,
  func: function() {
    NumberBlocks = WordRecall_parameters.NBlocks
    console.log("This task will run for "+NumberBlocks+ " blocks")
  }
}

// Make response array
var MakeResponseArray = {
  type: jsPsychCallFunction,
  func: function() {
    ResponseArray = Array.from(Array(WordRecallLists.WordListA.length), _ => Array(WordRecall_parameters.NBlocks).fill(-99))
    console.log(ResponseArray)
  }
}

var UpdateResponseArray = {
  type: jsPsychCallFunction,
  func: function() {
    console.log(WordRecall_parameters.NBlocks)
    var data = jsPsych.data.get().filter({task: 'Recall'}).last()
    console.log(data)
    console.log(WordListAForRecall.SimpleWordList)
    console.log(data.trials[0].RecallList)
    console.log("Working on Block: " + (BlockCount-1)/2)
    // find the index of each item recalled
    for ( var i = 0; i < data.trials[0].RecallList.length; i++ )
    {
      currentIndex = (WordListAForRecall.SimpleWordList.indexOf(data.trials[0].RecallList[i]))
      console.log(ResponseArray)
      console.log("Current index: " + currentIndex)
      if ( currentIndex == -1 )
      {
        // Intrusion
        IntrusionList.push(data.trials[0].RecallList[i])
      }
      else { ResponseArray[currentIndex][(BlockCount-1)/2] = i }
    }
    console.log(ResponseArray)
    BlockCount = BlockCount + 1
  }
}

var ResetCounter = {
  type: jsPsychCallFunction,
  func: function() {
    ItemCount = 0
    console.log("Resetting counter")
  }
}

ItemCount
var MakeWordListA = {
  type: jsPsychCallFunction,
  func: function() {
    console.log(WordRecall_parameters)
    SimpleWordListA = MakeAllWordsUpperCase(CreateSimpleWordList(WordRecallLists.WordListA))
    // Make a simple list of the alternative pronunciations
    AltSimpleWordListA = MakeAllWordsUpperCase(CreateSimpleWordList(WordRecallLists.AlternatePronunciationsWordListA))
    // Make a full list the words and thier alternative pronunciations
    FullWordListA = SimpleWordListA.concat(WordRecallLists.AltSimpleWordListA)
    // indices fro the primary word list
    WordListIndexA = CreateWordListIndex(WordRecallLists.WordListA)
    // indices for the world list containing the alternatives
    FullListIndexA = CreateSimpleIndexList(WordRecallLists.WordListA, WordRecallLists.AlternatePronunciationsWordListA)
    // convert WordList to a list of filenames for teh audio files for each word
    AudioFileListA = CreateAudioFileList(BaseFolderName+WordRecall_parameters.FolderName, SimpleWordListA, WordRecall_parameters.FileExtension)
    // convert it back to a list of dictionaries
    AudioFileDictListA = AudioFileListA.map(function(e) {
      return {Word: e}
    })
    // Create an array so the recall procedure can use a timelinevariable
    WordListAForRecall = {
      'WordList': WordRecallLists.WordListA,
      'SimpleWordList': SimpleWordListA,
      'FullWordList': FullWordListA,
      'WordListIndex': WordListIndexA,
      'FullListIndex': FullListIndexA,
    }
    console.log(WordListAForRecall)
  }
}

var MakeWordListB = {
  type: jsPsychCallFunction,
  func: function() {
    // PREP WORK FOR WORD LIST B
    // take list of words as dictionary items and make a simple list out of it
    SimpleWordListB = MakeAllWordsUpperCase(CreateSimpleWordList(WordRecallLists.WordListB))
    // Make a simple list of the alternative pronunciations
    AltSimpleWordListB = MakeAllWordsUpperCase(CreateSimpleWordList(WordRecallLists.AlternatePronunciationsWordListB))
    // Make a full list the words and thier alternative pronunciations
    FullWordListB = SimpleWordListB.concat(WordRecallLists.AltSimpleWordListB)
    // indices fro the primary word list
    WordListIndexB = CreateWordListIndex(WordRecallLists.WordListB)
    // indices for the world list containing the alternatives
    FullListIndexB = CreateSimpleIndexList(WordRecallLists.WordListB, WordRecallLists.AlternatePronunciationsWordListB)
    // convert WordList to a list of filenames for teh audio files for each word
    AudioFileListB = CreateAudioFileList(BaseFolderName+WordRecall_parameters.FolderName, SimpleWordListB, WordRecall_parameters.FileExtension)
    // convert it back to a list of dictionaries
    AudioFileDictListB = AudioFileListB.map(function(e) {
      return {Word: e}
    })
    // Create an array so the recall procedure can use a timelinevariable
    WordListBForRecall = {
      'WordList': WordRecallLists.WordListB,
      'SimpleWordList': SimpleWordListB,
      'FullWordList': FullWordListB,
      'WordListIndex': WordListIndexB,
      'FullListIndex': FullListIndexB,
    }
  }
}

var if_Spoken_RecallA = {
  timeline: [SpokenRecallA],
  conditional_function: function() {
    if ( WordRecall_parameters.RecallType == 'Spoken' )
    { return true }
    else { return false }
  }
}
var if_Manual_RecallA = {
  timeline: [ManualRecallA],
  conditional_function: function() {
    if ( WordRecall_parameters.RecallType == 'Manual' )
    { return true }
    else { return false }
  }
}
var if_Spoken_RecallB = {
  timeline: [SpokenRecallB],
  conditional_function: function() {
    if ( WordRecall_parameters.RecallType == 'Spoken' && WordRecall_parameters.BListFlag)
    { return true }
    else { return false }
  }
}
var if_Manual_RecallB = {
  timeline: [ManualRecallB],
  conditional_function: function() {
    if ( WordRecall_parameters.RecallType == 'Manual' && WordRecall_parameters.BListFlag)
    { return true }
    else { return false }
  }
}


// =======================================================================
// Define all of the different the stimuli 
var fixation = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: '<p class="Fixation">+</p>',
  choices: [],
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  trial_duration: FixationTimeBetweenWords
}

// Define the stimuli
var AudioStimulus = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: function()
      {
        Stim = '+'
        // find what trial index this is
        ind = (TrialCount) % WordRecallLists.NWords
        //Stim = jsPsych.timelineVariable('Word')
        Stim = AudioFileDictListA[ItemCount].Word
        // return the chosen stimulus
        console.log(Stim)
        return Stim
      },
      prompt:'<p class="Fixation">+</p>',
    choices: [],  
    trial_duration: function(){return WordRecall_parameters.TimePerWord},
    on_finish: function(data) {
      data.task = 'word'
      // updatethe trial counter
      TrialCount++
    },
  };
// NOT IMPLEMEMTED
var VisualStimulus = {
    type: jsPsychHtmlButtonResponseTouchscreen,
    stimulus: function()
      {
        // find what trial index this is
        ind = (TrialCount) % NWords
        // check to see if this trial was recalled in the previous block
        if (WordListIndex[ind] > -99) {
          // if NOT, then present the word
          Stim = jsPsych.timelineVariable('Word')
        }
        else {
          // if YES, then present the fixation cross
          Stim = '<p class="Fixation">+</p>'
        }
        // return the chosen stimulus
        console.log(Stim)        
        Stim = '<p  class="Fixation">' +Stim+'</p>'
        return Stim
      },
    choices: [], 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    trial_duration: function() {
      // if this word was recalled previously change the duration to 0 seconds also
      if (WordListIndex[ind] > -99) {
        return TimePerWord
      }
      else {
        return 0
      }
    },
    prompt: function() {return Instructions.WordRecallPrompt}, //Add this to config file
    on_finish: function(data) {
      data.task = 'word'
      // updatethe trial counter
      TrialCount++
    }
  };


// Define instructions

var Instructions01 = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.Instructions01[countInstr01].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
}

var Instructions01_loop = {
  timeline: [Instructions01],
  loop_function: function(data){
    console.log(countInstr01)
    countInstr01+=1
    if ( countInstr01 < Instructions.Instructions01.length) 
    { return true} else { return false}
  }
}
var Instructions02 = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.Instructions02[countInstr02].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
}

var Instructions02_loop = {
  timeline: [Instructions02],
  loop_function: function(data){
    console.log(countInstr02)
    countInstr02+=1
    if ( countInstr02 < Instructions.Instructions02.length){
        return true} else { return false}
  }
}
var Instructions03 = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.Instructions03[countInstr03].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
}

var Instructions03_loop = {
  timeline: [Instructions03],
  loop_function: function(data){
    console.log(countInstr03)
    countInstr03+=1
    if ( countInstr03 < Instructions.Instructions03.length){
        return true} else { return false}
  }
}
var Instructions04 = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.Instructions04[countInstr04].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
}

var Instructions04_loop = {
  timeline: [Instructions04],
  loop_function: function(data){
    console.log(countInstr03)
    countInstr04+=1
    if ( countInstr04 < Instructions.Instructions04.length){
        return true} else { return false}
  }
}

var InstructionsDelayed = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function (){return Instructions.InstructionsDelayed[countInstrDelay].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: '',
  choices: function() {return [LabelNames.Next]}, 
}

var InstructionsDelayed_loop = {
  timeline: [InstructionsDelayed],
  loop_function: function(data){
    console.log(countInstrDelay)
    countInstrDelay+=1
    if ( countInstrDelay < Instructions.InstructionsDelayed.length){
        return true} else { return false}
  }
}
var Notes = {
  type: jsPsychSurvey, 
  pages: [[{
        type: 'text',
        prompt: "Please, type in any notes or feedback you have about this task. (Optional)",
        textbox_rows: 10,
        name: 'Notes', 
        required: false,
      }]],
  on_finish: function(data)
  { data.trial = "Notes" },
}

// =======================================================================
// Add scoring procedures to the Thank you screen
var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()

    Results = WordRecall_Scoring(data, ResponseArray, IntrusionList)
    jsPsych.finishTrial(Results)
  }
}

// =======================================================================    
// Define procedures using the stimuli
// Define the test procedure which does NOT provide feedback

var PresentListOfWordsA = {
    timeline: [fixation, AudioStimulus],
    timeline_variables: AudioFileDictListA,
    repetitions: 1,
    randomize_order: false      
}

var LoopAudioFiles = {
  timeline: [AudioStimulus],
  loop_function: function(){
    if ( ItemCount < AudioFileDictListA.length-1 ) {
      ItemCount += 1
      return true
    }
    else { return false}
  }
}

var PresentListOfWordsB = {
    timeline: [fixation, AudioStimulus],
    timeline_variables: AudioFileDictListB,
    repetitions: 1,
    randomize_order: false      
}

var FirstBlock = {
      timeline: [Instructions01_loop, LoopAudioFiles, ResetCounter, if_Manual_RecallA, if_Spoken_RecallA, UpdateResponseArray],
      randomize_order: false,
      repetitions: 1
  } 

var AfterFirstBlockLoop = {
  timeline: [Instructions02_loop, LoopAudioFiles, ResetCounter, if_Manual_RecallA, if_Spoken_RecallA, UpdateResponseArray],
  randomize_order: false,
  loop_function: function(data) {
    console.log("Block Count (in loop): " + (BlockCount)/2)
    if ( ((BlockCount)/2) < NumberBlocks )
    { return true }
    else { return false }
  }
}

var BlockB = {
    timeline: [Instructions03_loop, PresentListOfWordsB, ResetCounter, if_Manual_RecallB, if_Spoken_RecallB],
    randomize_order: false,
    repetitions: 1,
} 

var FinalRecalBlockA = {
    timeline: [Instructions04_loop, if_Manual_RecallA, if_Spoken_RecallA, UpdateResponseArray],
    randomize_order: false,
    repetitions: 1,
} 

var DelayedRecalBlockA = {
  timeline: [InstructionsDelayed_loop, if_Manual_RecallA, if_Spoken_RecallA, UpdateResponseArray],
  randomize_order: false,
  repetitions: 1,
} 

var DelayedRecallNo = {
  timeline: [MakeWordListA, MakeWordListB, preload_audioA, if_BList_preload, MakeResponseArray, HowManyBlocks, FirstBlock, AfterFirstBlockLoop],
  conditional_function: function() {
    console.log(WordRecall_parameters)
    if ( WordRecall_parameters.DelayedRecallFlag)
    { return false }
    else { return true }
  }
}    
var DelayedRecallYes = {
  timeline: [MakeWordListA, MakeResponseArray, DelayedRecalBlockA],
  conditional_function: function() {
    if ( WordRecall_parameters.DelayedRecallFlag)
    { return true }
    else { return false }
  }
}      


var welcome = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {return Instructions.WelcomeText[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}

var thank_you = {
  type: jsPsychHtmlButtonResponseTouchscreen,
  stimulus: function() {return Instructions.ThankYouText[0].page},
  post_trial_gap: 0,
  margin_horizontal: GapBetweenButtons,
  prompt: 'PROMPT',
  choices: function() {return [LabelNames.Next]}, 
}

var if_Welcome = {
  timeline: [welcome],
  conditional_function: function() {
    if ( WordRecall_parameters.ShowWelcome)
    { return true }
    else { return false }
  }
}

var if_ThankYou = {
  timeline: [thank_you],
  conditional_function: function() {
    if ( WordRecall_parameters.ShowThankYou )
    { return true }
    else { return false }
  }
}

var if_Instructions01 = {
  timeline: [Instructions01_loop],
  conditional_function: function() {
        if ( WordRecall_parameters.ShowInstructions)
        { console.log('Instruct Decide 01')
        return true }
        else { return false }
  }
}
var if_Instructions02 = {
  timeline: [Instructions02_loop],
  conditional_function: function() {
        if ( WordRecall_parameters.ShowInstructions)
        { return true }
        else { return false }
  }
}
var if_Instructions03 = {
  timeline: [Instructions03_loop],
  conditional_function: function() {
        if ( WordRecall_parameters.ShowInstructions)
        { return true }
        else { return false }
  }
}
var if_Instructions04 = {
  timeline: [Instructions04_loop],
  conditional_function: function() {
        if ( WordRecall_parameters.ShowInstructions)
        { return true }
        else { return false }
  }
}

var if_Notes = {
  timeline: [Notes],
  conditional_function: function() {
    if ( WordRecall_parameters.AskForNotes)
    { return true }
    else { return false }
  }
}
// ======================================================================= 
// Add procedures to the timeline

timeline.push(if_Welcome)
timeline.push(enter_fullscreen)
timeline.push(DelayedRecallNo)
timeline.push(DelayedRecallYes)
timeline.push(if_Notes)
timeline.push(SendData)
timeline.push(if_ThankYou)


/* timeline.push(MakeWordListA)
timeline.push(MakeWordListB)
timeline.push(preload_audioA)
timeline.push(if_BList_preload)
timeline.push(MakeResponseArray)
timeline.push(FirstBlock)
timeline.push(AfterFirstBlock)

*/