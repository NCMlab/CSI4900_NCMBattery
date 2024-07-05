
var title = "The Centre of Excellence Self Administered questionnaire)"
var shortTitle = "CESAM"
var description = "PLEASE CHECK THE BOX NEXT TO YOUR RESPONSE TO THE QUESTIONS PRESENTED BELOW."


var RequiredQuestions = false
var EN_pages = [
    [
        {
            type: 'likert',
            prompt: 'Have you unwillingly lost weight in the past year?',
            name: 'CESAM_001',
            likert_scale_values: [{value:1, text: "Yes"},{value:0, text: "No"}],
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'If yes, was the loss of weight above 3 kg (6lbs)?',
            name: 'CESAM_001A',
            likert_scale_values: [{value:1, text: "Yes"},{value:0, text: "No"}],
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'How many different types of drugs do you take on a daily basis?',
            name: 'CESAM_002',
            likert_scale_values: [{value:0, text:"0"},{value:1, text:"1 to 4"},{value:2, text:"5 to 9"},{value:3, text:"10 or more"}],
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'Do you have vision problems?',
            name: 'CESAM_003',
            likert_scale_values: [{value:1, text: "Yes"},{value:0, text: "No"}],
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'Do you have hearing problems?',
            name: 'CESAM_004',
            likert_scale_values: [{value:1, text: "Yes"},{value:0, text: "No"}],
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'Has someone close to you expressed concern about your memory?',
            name: 'CESAM_005',
            likert_scale_values: [{value:1, text: "Yes"},{value:0, text: "No"}],
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'Do you receive home care support?',
            name: 'CESAM_006',
            likert_scale_values: [{value:1, text: "Yes"},{value:0, text: "No"}],
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'If yes, from whom?',
            name: 'CESAM_006A',
            likert_scale_values: [{value:0, text:'Family'},{value:1, text:'Friends'},{value:2, text:'Professional'}],
            required: RequiredQuestions,
        },
    ]
]
var EN_cesam = {}
EN_cesam.title = title
EN_cesam.shortTitle = shortTitle
EN_cesam.pages = EN_pages
EN_cesam.description = description
EN_cesam.QuestionnaireType = 'likert'