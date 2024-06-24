var title = "Geriatric Anxiety Scale - 10 Item Version"

var description = "Below is a list of common symptoms of anxiety or stress. Please read each item in the list carefully. Indicate how often you have experienced each symptom during the PAST WEEK, INCLUDING TODAY by checking under the corresponding answer."

var likert_scale_values = [
    {value:0, text: "Not at all (0)"},
    {value:1, text: "Sometimes (1)"},
    {value:2, text: "Most of the time (2)"},
    {value:3, text: "All of the time (3)"}
]
var RequiredQuestions = false
var EN_pages = [
    [
        {
            type: 'likert',
            prompt: 'I was irritable',
            name: 'GAS-10_01',
            likert_scale_values: likert_scale_values,
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'I felt detached or isolated from others.',
            name: 'GAS-10_02',
            likert_scale_values: likert_scale_values,
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'I felt like I was in a daze.',
            name: 'GAS-10_03',
            likert_scale_values: likert_scale_values,
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'I had a hard time sitting still.',
            name: 'GAS-10_04',
            likert_scale_values: likert_scale_values,
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'I could not control my worry.',
            name: 'GAS-10_05',
            likert_scale_values: likert_scale_values,
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'I felt restless, keyed up, or on edge.',
            name: 'GAS-10_06',
            likert_scale_values: likert_scale_values,
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'I felt tired.',
            name: 'GAS-10_07',
            likert_scale_values: likert_scale_values,
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'My muscles were tense.',
            name: 'GAS-10_08',
            likert_scale_values: likert_scale_values,
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'I felt like I had no control over my life.',
            name: 'GAS-10_09',
            likert_scale_values: likert_scale_values,
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'I felt like something terrible was going to happen to me.',
            name: 'GAS-10_10',
            likert_scale_values: likert_scale_values,
            required: RequiredQuestions,
        },

    ]
]

var EN_gas10 = {}
EN_gas10.title = title
EN_gas10.pages = EN_pages
EN_gas10.description = description
