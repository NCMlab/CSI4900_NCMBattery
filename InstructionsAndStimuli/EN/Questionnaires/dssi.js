var title = "Duke Social Support Index"
var instructions = " "
var reference = ""
var values = [0, 1, 2, 3, 4]
const RequiredQuestion = false
var pages = [
				[
					{
						type: 'multi-choice',
						prompt: 'Other than members of your family, how many persons in your local area do you feel you can depend on or feel very close to?', 
						name: 'dssi_01',
						options: 
							["None", 
							"1 to 2 people", 
							"More than 2"],
                        add_other_option: false,
                        other_option_text: "Other", 
						required: RequiredQuestion,
					},
                    {
						type: 'multi-choice',
						prompt: 'How many times during the past week did you spent time with someone who does not live with you, that is, you went to see them or they came to visit you or you went out together?', 
						name: 'dssi_02',
						options: 
							["None", 
							"Once", 
							"Twice",
                            "3 times"],
                        add_other_option: true,
                        other_option_text: "If more than 3, enter number:", 
						required: RequiredQuestion,
					},
                    {
						type: 'multi-choice',
						prompt: 'How many times did you talk to someone (friends, relative or others) on the telephone in the past week (either called you, or you called them)?', 
						name: 'dssi_03',
						options: 
							["None", 
							"Once", 
							"Twice",
                            "3 times"],
                        add_other_option: true,
                        other_option_text: "If more than 3, enter number:", 
						required: RequiredQuestion,
					},
                    {
						type: 'multi-choice',
						prompt: 'About how often did you go to meetings of clubs, religious meetings, or other groups that you belong to in the past week?', 
						name: 'dssi_04',
						options: 
							["None", 
							"Once", 
							"Twice",
                            "3 times"],
                        add_other_option: true,
                        other_option_text: "If more than 3, enter number:", 
						required: RequiredQuestion,
					},
                    {
						type: 'multi-choice',
						prompt: 'Does it seem that your family and friends (people who are important to you) understand you?', 
						name: 'dssi_05',
						options: 
							["Hardly ever", 
							"Some of the time", 
							"Most of the time"],                      
                        add_other_option: false,
						required: RequiredQuestion,
					},
                    {
						type: 'multi-choice',
						prompt: 'Do you feel useful to your family and friends (people who are important to you)?', 
						name: 'dssi_06',
						options: 
							["Hardly ever", 
							"Some of the time", 
							"Most of the time"],                      
                        add_other_option: false,
						required: RequiredQuestion,
					},
                    {
						type: 'multi-choice',
						prompt: 'Do you know what is going on with your family and friends?', 
						name: 'dssi_07',
						options: 
							["Hardly ever", 
							"Some of the time", 
							"Most of the time"],                      
                        add_other_option: false,
						required: RequiredQuestion,
					},
                    {
						type: 'multi-choice',
						prompt: 'When you are talking with your family and friends, do you feel you are being listened to?', 
						name: 'dssi_08',
						options: 
							["Hardly ever", 
							"Some of the time", 
							"Most of the time"],                      
                        add_other_option: false,
						required: RequiredQuestion,
					},
                    {
						type: 'multi-choice',
						prompt: 'Do you feel you have a definite role (place) in your family and among your friends?', 
						name: 'dssi_09',
						options: 
							["Hardly ever", 
							"Some of the time", 
							"Most of the time"],                      
                        add_other_option: false,
						required: RequiredQuestion,
					},
                    {
						type: 'multi-choice',
						prompt: 'Can you talk about your deepest problems with at least some of your family and friends?', 
						name: 'dssi_10',
						options: 
							["Hardly ever", 
							"Some of the time", 
							"Most of the time"],                      
                        add_other_option: false,
						required: RequiredQuestion,
					},
                    {
						type: 'multi-choice',
						prompt: 'How satisfied are you with the kinds of relationships you have with your family and friends?', 
						name: 'dssi_11',
						options: 
							["Very dissatisfied", 
							"Somewhat satisfied", 
							"Satisfied"],                      
                        add_other_option: false,
						required: RequiredQuestion,
					},
				]
			]	

var EN_dssi = {}
EN_dssi.title = title
EN_dssi.description = "PLEASE CHECK THE BOX NEXT TO YOUR RESPONSE TO THE QUESTIONS PRESENTED BELOW."
EN_dssi.pages = pages
EN_dssi.values = values
EN_dssi.QuestionnaireType = 'multi-choice'
