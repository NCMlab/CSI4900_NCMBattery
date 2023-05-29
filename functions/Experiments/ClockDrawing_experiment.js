
var timeline = []

var trial = {
type: jsPsychSketchpad,
prompt: Instructions,
prompt_location: 'abovecanvas',
canvas_width: 600,
canvas_height: 600,
canvas_border_width: 2,
on_finish: function(data) {
  data.trial = 'Clock Drawing'
}
}

var Instructions = {
    type: jsPsychHtmlButtonResponseTouchscreen,
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

var SendData = {
  type: jsPsychCallFunction,
  func: function() {
        var data = jsPsych.data.get()
        Results = ClockDrawing_Scoring(data)
        jsPsych.finishTrial(Results)
  },
}

 var if_Welcome = {
  timeline: [Instructions],
  timeline_variables: WelcomeText,
  conditional_function: function() {
    if ( ClockDrawing_parameters.ShowWelcome)
    { return true }
    else { return false }
  }
}
var if_ThankYou = {
  timeline: [Instructions],
  timeline_variables: ThankYouText,
  conditional_function: function() {
    if ( ClockDrawing_parameters.ShowThankYou)
    { return true }
    else { return false }
  }
}
timeline.push(if_Welcome)
timeline.push(trial)
timeline.push(if_ThankYou)
timeline.push(Notes)
timeline.push(SendData)

