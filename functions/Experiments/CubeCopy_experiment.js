
var timeline = []
var NeckerCubeFileName = 'NeckerCube.png'

var trial = {
  type: jsPsychSketchpad,
  prompt: Instructions+'<p><img src="'+NeckerCubeFolder+NeckerCubeFileName+'" width="300vw" height="300vh" border="2px">',
  prompt_location: 'abovecanvas',
  canvas_width: "500vw",
  canvas_height: "400vh",
  background_color: "#000000",
  //background_image: '../assets/CubeCopyBackground.png',
  canvas_border_width: 2,
  show_countdown_trial_duration: true,
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

var welcome = {
      timeline: [Instructions],
      timeline_variables: WelcomeText,
      randomize_order: false,
      repetitions: 1,
    }

var thank_you = {
      timeline: [Instructions],
      timeline_variables: ThankYouText,
      randomize_order: false,
      repetitions: 1,
 }
 
timeline.push(welcome)
timeline.push(trial)
timeline.push(thank_you)

