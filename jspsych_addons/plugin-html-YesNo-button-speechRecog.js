var jsPsychHtmlButtonYesNoSpeechRecog = (function (jspsych) {
  'use strict';

  const info = {
      name: "html-YesNo-button-speechRecog",
      parameters: {
          /** The HTML string to be displayed */
          stimulus: {
              type: jspsych.ParameterType.HTML_STRING,
              pretty_name: "Stimulus",
              default: undefined,
          },
          /** Array containing the label(s) for the button(s). */
          choices: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Choices",
              default: undefined,
              array: true,
          },
          /** The HTML for creating button. Can create own style. Use the "%choice%" string to indicate where the label from the choices parameter should be inserted. */
          button_html: {
              type: jspsych.ParameterType.HTML_STRING,
              pretty_name: "Button HTML",
              default: '<button class="jspsych-btn">%choice%</button>',
              array: true,
          },
          /** Any content here will be displayed under the button(s). */
          prompt: {
              type: jspsych.ParameterType.HTML_STRING,
              pretty_name: "Prompt",
              default: null,
          },
          /** How long to show the stimulus. */
          stimulus_duration: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Stimulus duration",
              default: null,
          },
          /** How long to show the trial. */
          trial_duration: {
              type: jspsych.ParameterType.INT,
              pretty_name: "Trial duration",
              default: null,
          },
          /** The vertical margin of the button. */
          margin_vertical: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Margin vertical",
              default: "0px",
          },
          /** The horizontal margin of the button. */
          margin_horizontal: {
              type: jspsych.ParameterType.STRING,
              pretty_name: "Margin horizontal",
              default: "8px",
          },
          /** If true, then trial will end when user responds. */
          response_ends_trial: {
              type: jspsych.ParameterType.BOOL,
              pretty_name: "Response ends trial",
              default: true,
          },
          yes_input: {
            type: jspsych.ParameterType.STRING,
              pretty_name: "Yes command",
              default: "yes",
          },
          no_input: {
            type: jspsych.ParameterType.STRING,
              pretty_name: "No command",
              default: "no",
          }
      },
  };
  const YesCommand = {
    'yes': () => 
        { 
            console.log("I heard YES"); 
            end_trial();
        }
  };
  const NoCommand = {
    'no': () => 
        { 
            console.log("I heard NO"); 
            end_trial();
        }
  };
  
  /**
   * html-button-response
   * jsPsych plugin for displaying a stimulus and getting a button response
   * @author Josh de Leeuw
   * @see {@link https://www.jspsych.org/plugins/jspsych-html-button-response/ html-button-response plugin documentation on jspsych.org}
   */
  class HtmlButtonYesNoSpeechRecog {
      constructor(jsPsych) {
          this.jsPsych = jsPsych;
      }
      trial(display_element, trial) {
        annyang.addCommands(YesCommand);
        annyang.addCommands(NoCommand);
        annyang.setLanguage(LANG)
          // display stimulus
          //show prompt if there is one

          //display buttons
          var buttons = [];
          if (Array.isArray(trial.button_html)) {
              if (trial.button_html.length == trial.choices.length) {
                  buttons = trial.button_html;
              }
              else {
                  console.error("Error in html-button-response plugin. The length of the button_html array does not equal the length of the choices array");
              }
          }
          else {
              for (var i = 0; i < trial.choices.length; i++) {
                  buttons.push(trial.button_html);
              }
          }

          var html = '';
          html += '<table style="height:75vh">'
          html += '<tr>'
          html += '<td>'
          html += trial.stimulus
          html += '</tr>'
          html += '<tr style="height:25%; text-align:center">'
          html += '<td>'
          html += '<div id="jspsych-html-button-response-btngroup">';
                  for (var i = 0; i < trial.choices.length; i++) {
                      var str = buttons[i].replace(/%choice%/g, trial.choices[i]);
                      html +=
                          '<div class="jspsych-html-button-response-button" style="display: inline-block; font-size:2em; margin:' +
                              trial.margin_vertical +
                              " " +
                              trial.margin_horizontal +
                              '" id="jspsych-html-button-response-button-' +
                              i +
                              '" data-choice="' +
                              i +
                              '">' +
                              str +
                              "</div>";
                  }

          html += '</tr>'
          html += '</table>'

         
          display_element.innerHTML = html;
          // start time
          var start_time = performance.now();
          // add event listeners to buttons
          for (var i = 0; i < trial.choices.length; i++) {
              display_element
                  .querySelector("#jspsych-html-button-response-button-" + i)
                  .addEventListener("click", (e) => {
                  var btn_el = e.currentTarget;
                  var choice = btn_el.getAttribute("data-choice"); // don't use dataset for jsdom compatibility
                  after_response(choice);
              });
          }
          // store response
          var response = {
              rt: null,
              button: null,
          };
          // function to end trial when it is time
          const end_trial = () => {
              // kill any remaining setTimeout handlers
              this.jsPsych.pluginAPI.clearAllTimeouts();
              // gather the data to store for the trial
              var trial_data = {
                  rt: response.rt,
                  stimulus: trial.stimulus,
                  response: response.button,
              };
              // clear the display
              display_element.innerHTML = "";
              // move on to the next trial
              this.jsPsych.finishTrial(trial_data);
          };
          // function to handle responses by the subject
          function after_response(choice) {
              // measure rt
              var end_time = performance.now();
              var rt = Math.round(end_time - start_time);
              response.button = parseInt(choice);
              response.rt = rt;
              // after a valid response, the stimulus will have the CSS class 'responded'
              // which can be used to provide visual feedback that a response was recorded
              // display_element.querySelector("#jspsych-html-button-response-stimulus").className +=
              //     " responded";
              // disable all the buttons after a response
              var btns = document.querySelectorAll(".jspsych-html-button-response-button button");
              for (var i = 0; i < btns.length; i++) {
                  //btns[i].removeEventListener('click');
                  btns[i].setAttribute("disabled", "disabled");
              }
              if (trial.response_ends_trial) {
                  end_trial();
              }
          }
          // hide image if timing is set
          if (trial.stimulus_duration !== null) {
              this.jsPsych.pluginAPI.setTimeout(() => {
                  display_element.querySelector("#jspsych-html-button-response-stimulus").style.visibility = "hidden";
              }, trial.stimulus_duration);
          }
          // end trial if time limit is set
          if (trial.trial_duration !== null) {
              this.jsPsych.pluginAPI.setTimeout(end_trial, trial.trial_duration);
          }
      }
      simulate(trial, simulation_mode, simulation_options, load_callback) {
          if (simulation_mode == "data-only") {
              load_callback();
              this.simulate_data_only(trial, simulation_options);
          }
          if (simulation_mode == "visual") {
              this.simulate_visual(trial, simulation_options, load_callback);
          }
      }
      create_simulation_data(trial, simulation_options) {
          const default_data = {
              stimulus: trial.stimulus,
              rt: this.jsPsych.randomization.sampleExGaussian(500, 50, 1 / 150, true),
              response: this.jsPsych.randomization.randomInt(0, trial.choices.length - 1),
          };
          const data = this.jsPsych.pluginAPI.mergeSimulationData(default_data, simulation_options);
          this.jsPsych.pluginAPI.ensureSimulationDataConsistency(trial, data);
          return data;
      }
      simulate_data_only(trial, simulation_options) {
          const data = this.create_simulation_data(trial, simulation_options);
          this.jsPsych.finishTrial(data);
      }
      simulate_visual(trial, simulation_options, load_callback) {
          const data = this.create_simulation_data(trial, simulation_options);
          const display_element = this.jsPsych.getDisplayElement();
          this.trial(display_element, trial);
          load_callback();
          if (data.rt !== null) {
              this.jsPsych.pluginAPI.clickTarget(display_element.querySelector(`div[data-choice="${data.response}"] button`), data.rt);
          }
      }
  }
  HtmlButtonYesNoSpeechRecog.info = info;

  return HtmlButtonYesNoSpeechRecog;

})(jsPsychModule);
