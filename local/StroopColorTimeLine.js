
import * from '../config/Language_Config.js'

import * from "../config/"+Language+"/Stroop_Setup_TouchScreen.js"

import * from "../config/"+Language+"/General_Setup.js"

var timeline = [];

  var enter_fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: true
  }
  
   /* Create the initial welcome and instructions for practice.
   This uses the built in instructions module. Make sure it gets imported above */ 
    var ColorInstr = {
      type: jspsychHtmlButtonResponseTouchscreen,
      stimulus: jsPsych.timelineVariable('page'), // Variable in the config file
      post_trial_gap: 0,
      margin_horizontal: GapBetweenButtons,
      prompt: '',
      choices: ['Next'], 
    }

    /* After practice is completed the performance is being checked. If accuracy is below 50% then the practice is repeated.*/


  var fixation = {
    type: jspsychHtmlButtonResponseTouchscreen,
    stimulus: function()
    {
      stim = PutStimIntoTable(StroopColorPrompt, '<p class="Fixation">+</p>');
      return stim
    },
    choices: ResponseButtons,
    post_trial_gap: 0,
    margin_horizontal: GapBetweenButtons,
    prompt: StroopColorPrompt,
    trial_duration: function(){
      return jsPsych.randomization.sampleWithoutReplacement([250, 500, 750, 1000, 1250, 1500, 1750, 2000], 1)[0];
    },
    data: {task: 'fixation'}
    }

  var feedback = {
    type: jspsychHtmlButtonResponseTouchscreen,
    stimulus: function(){
      var last_trial_correct = jsPsych.data.get().last(1).values()[0].correct;
      if (last_trial_correct) {
        var stim = '<p style="font-size:'+FeedbackFontSize+'";>Correct</p>';
      } else {
        var stim = '<p style="font-size:'+FeedbackFontSize+'";>Incorrect</p>';
      }
      return PutStimIntoTable(StroopColorPrompt, stim)
    },
    choices: ResponseButtons,
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    prompt: StroopColorPrompt,
    trial_duration: FeedbackLength,
  }  

  // This creates the stimulus
  var Stimulus = {
    type: jspsychHtmlButtonResponseTouchscreen,
    stimulus: function()
    {
      var color = jsPsych.timelineVariable('Color')
      var stim = '<svg width="200" height="100"><rect width="200" height="100" style="fill:rgb'+color+'; stroke-width:3;stroke:rgb(0,0,0)" /></svg>'

      stim = PutStimIntoTable(StroopColorPrompt, stim) 
      return stim
    },
    choices: ResponseButtons, 
    margin_horizontal: GapBetweenButtons,
    post_trial_gap: 0,
    prompt: StroopColorPrompt, //Add this to config file
    on_finish: function(data){
      // check to see if the response is correct 
      data.correct = data.response == data.button;
      },
  };
  
  // This is used for labelling trials in the output data
  var prac_stimulus = Object.assign({}, Stimulus)
    prac_stimulus = Object.assign(prac_stimulus, {    
      data: {
        button: jsPsych.timelineVariable('button'),
        task: 'practice trial'
      }
  })

  var test_stimulus = Object.assign({}, Stimulus)
    test_stimulus = Object.assign(test_stimulus, {    
      data: {
        letter: jsPsych.timelineVariable('button'),
        task: 'test trial'
      }
  })

  // Define a practie procedure which provides feedback
  var instr_procedure = {
      timeline: [ColorInstr],
      timeline_variables: ColorInstrText,
      randomize_order: false,
      repetitions: 1,
    }
  
  var instr_test_procedure = {
      timeline: [ColorInstr],
      timeline_variables: ColorTestInstrText,
      randomize_order: false,
      repetitions: 1,
    }

  var instr_poor_performance = {
      timeline: [ColorInstr],
      timeline_variables: ColorInstrPoorPerformanceText,
      randomize_order: false,
      repetitions: 1,
    }
  
  var thank_you = {
      timeline: [ColorInstr],
      timeline_variables: ColorThankYouText,
      randomize_order: false,
      repetitions: 1,
    }

  var practice_procedure = {
      timeline: [fixation, prac_stimulus, feedback],
      timeline_variables: StroopWordList,
      randomize_order: true,
      repetitions: WordPracticeRepeats,
    }
  // Define the test procedure which does NOT provide feedback
  var test_procedure = {
      timeline: [fixation, test_stimulus],
      timeline_variables: StroopWordList,
      randomize_order: true,
      repetitions: WordTestRepeats, 
  }

      // Prepare debriefing for after the practice trials
    var debrief = {
      prompt: '',
      type: jspsychHtmlButtonResponseTouchscreen,
      stimulus: function() {
            var DataFromThisPracticeRun = jsPsych.data.get().filter({task: 'practice trial'}).last(4*WordPracticeRepeats)
            console.log(DataFromThisPracticeRun)
            var total_trials = DataFromThisPracticeRun.count();
            var NumberCorrect = DataFromThisPracticeRun.filter({correct: true}).count()
            var accuracy = Math.round(NumberCorrect / total_trials * 100);
            return "<p>You responded correctly on <strong>"+accuracy+"%</strong> of the "+total_trials+" trials.</p> " +
            "<p>Press any key to continue the experiment. </p>";
          },
      choices: ['Next'], 
    }
  // This a conditional block which checks to see if the performance during practice was good enough
    // if performance on the practice is above 50% accurate then the test procedure is done.
    // otherwise practice is done again
    // If accuracy is below 50% then run what is in the  if_node timeline, else skip it
    var if_node = {
      timeline: [instr_poor_performance, practice_procedure, debrief],
      conditional_function: function(){
        // check performance on the practice
            var DataFromThisPracticeRun = jsPsych.data.get().filter({task: 'practice trial'}).last(4*WordPracticeRepeats)
              var total_trials = DataFromThisPracticeRun.count();
              var NumberCorrect = DataFromThisPracticeRun.filter({correct: true}).count()
              var accuracy = Math.round(NumberCorrect / total_trials * 100);
          if (accuracy < 50) {
            return true;
          } else {
            return false;
          }
      }
    }

  timeline.push(instr_procedure);
  // run the practice trials
  timeline.push(practice_procedure);
  // provide feedback as to their performance
  timeline.push(debrief);
  // decide if the person did well enough
  timeline.push(if_node);
  // decide if the person did well enough
  timeline.push(if_node);
  // Present test instructions
  timeline.push(instr_test_procedure);
  // run the test
  timeline.push(test_procedure);
  timeline.push(thank_you);
