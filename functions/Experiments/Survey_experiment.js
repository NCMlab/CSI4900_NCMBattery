var timeline = []


// Survey with a single text entry question.
const survey_json = {
  elements: [
    {
      "name": "date",
      "type": "text",
      "title": "Select a future date",
      "inputType": "date",
      "defaultValueExpression": "today()",
      "minValueExpression": "today()",
      "isRequired": true,
    }
    
    ],
    "showQuestionNumbers": false
};



const survey_trial = {
  type: jsPsychSurvey,
  survey_json: survey_json
};

/*
var SendData = {
  type: jsPsychCallFunction,
  func: function() {
    var data = jsPsych.data.get()
    Results = IntakeForm_Scoring(data, parameters.ScoringMethod)
    jsPsych.finishTrial(Results)
  }
}
*/


//timeline.push(Instructions01)
timeline.push(survey_trial);


