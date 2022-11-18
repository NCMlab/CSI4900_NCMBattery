// =======================================================================
// Define internal variables
var timeline = [];
var stimList; //this is going to house the ordering of the stimuli for each trial
var stimListOfFiles;
var idx = 0; //for indexing the current letter to be presented
var exitLetters; //for exiting the letter loop
var TrialCount = 1;

// =======================================================================
var FDSstaircase = new Stair(FDSCurrent, MinValue, MaxValue, MaxReversals, FDSMaxTrials, StepSize, NUp, NDown, FastStart, MaxTime)
console.log(FDSstaircase)

// =======================================================================
var enter_fullscreen = {
  type: jsPsychFullscreen,
  fullscreen_mode: true
}
// =======================================================================
// Initial setup procedures
// preload audio
var preload_digits = {
  type: jsPsychPreload,
  audio: function() {
    var initList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var List = MakeListOfStimuli(FolderOfAudioFiles, initList)
    console.log(initList)
    console.log(List)
    return List
  },
  on_finish: function() {
    console.log("All is good")
  },
};
// =======================================================================
// Define all of the different the stimuli 

// Define instructions

// set-up screen
// This screen is required so that the audio can be loaded and played
var setup_fds = {
  type: jspsychHtmlButtonResponseTouchscreen,
  stimulus: "HELLO",  //function() {return '<p>Trial '+ TrialCount +' of '+ FDSMaxTrials +'</p>';},
  choices: ['BegXXXXin'],
  prompt: "DF ",
  //post_trial_gap: TimeGapBetweenAudioLetters,
 /* on_finish: function(){
    console.log(FDSstaircase.Current)
    stimList = CreateDigitList(FDSstaircase.Current)
    stimListOfFiles = MakeListOfStimuli(FolderOfAudioFiles, stimList)
    console.log(stimListOfFiles)
    TrialCount += 1
    idx = 1; //reset the index prior to the letter presentation
  }*/
};

// letter audio presentation
var letter_fds = {
  on_load: function() {console.log('HERE')},
  type: jsPsychAudioKeyboardResponse,
  stimulus: function(){
    console.log("Making stimuli")
    return stimListOfFiles[idx]},
  choices: 'NO_KEYS',
  post_trial_gap: TimeGapBetweenAudioLetters,
  trial_ends_after_audio: true,
  on_finish: function(){
    idx += 1; //update the index
    //check to see if we are at the end of the letter array
    if (idx == stimList.length) {
      exitLetters = 1;
    } else  {
      exitLetters = 0;
    }
  }
};

var NumberPadResponse = {
    type: jsPsychNumberPadResponse,
    //button_html: '<button class="jspsych-btn">%choice%</button>',
    button_html: '<button class="button" >%choice%</button>',
    stimulus: '<p style="font-size:14px; color:black;">What number list did you hear?</p>',
    choices: ['1','2','3','4','5','6','7','8','9','0','<i class="material-icons">backspace</i>','Enter'],
    margin_vertical: '2px',
    response_ends_trial: false,
    response_disables: false,
    prompt: '',
    on_finish() {
      // get the entered response
      var trial_data = jsPsych.data.getLastTrialData().values();
      var response = trial_data[0].response;
      // Is this the correct response?
      var accuracy = CheckResponse(stimList, response)
      // update the staircase
      FDSstaircase.Decide(accuracy)
      if (accuracy) {
        console.log('Correct!')
      }
      else {
        console.log('Incorrect!')
      }
    }
  };

// Define instructions
var Instructions = {
      type: jspsychHtmlButtonResponseTouchscreen,
      stimulus: function()
      {
        var stim = jsPsych.timelineVariable('page') // Variable in the config file
        return stim
      },
      post_trial_gap: 0,
      margin_horizontal: GapBetweenButtons,
      prompt: '',
      choices: ['Next'], 
    }

// =======================================================================
// Define any logic used in the experiment


var letter_proc = {
    timeline: [letter_fds],
    loop_function: function(){
      if ( exitLetters == 0 ){
        return true;
      } else {
        return false;
      }
    }
  };

// procedure that loops over trials
var procedure = {
  timeline: [setup_fds, letter_proc],//, NumberPadResponse],
  loop_function: function(){
    // The criteria for stopping are: 
    //    reached the max number of trials.
    // This will differ based on the type of experiment
    if ( TrialCount > FDSMaxTrials ) { 
      return false;
    } else {
      return true;
    }
  }
};

// =======================================================================    
// Define procedures using the stimuli
 var instr_procedure = {
      timeline: [Instructions],
      timeline_variables: AudioInstructions,
      randomize_order: false,
      repetitions: 1,
    }

// ======================================================================= 
  // Add procedures to the timeline

  //timeline.push(preload_digits)
  //timeline.push(instructions_proc)
timeline.push([setup_fds])
  



