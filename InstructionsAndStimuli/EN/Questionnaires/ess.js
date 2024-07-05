var title = "The Epworth Sleepiness Scale"
var shortTitle = 'ESS'
var description = "How likely are you to doze off or fall asleep in the following situations, in contrast to feeling just tired? This refers to how you are feeling today only. Even if you have not done some of these things today, try to work out how they would have affected you."

var likert_scale_values = [
    {value:0, text: "0 = No chance of dozing"},
    {value:1, text: "1 = slight chance of dozing"},
    {value:2, text: "2 = moderate chance of dozing"},
    {value:3, text: "3 = high chance of dozing"}
]

var RequiredQuestions = false
var EN_pages = [
    [
        {
            type: 'likert',
            prompt: 'Sitting and reading',
            name: 'ESS_01',
            likert_scale_values: likert_scale_values,
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'Watching TV',
            name: 'ESS_02',
            likert_scale_values: likert_scale_values,
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'Sitting inactive in a public place (e.g. a theater or a meeting)',
            name: 'ESS_03',
            likert_scale_values: likert_scale_values,
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'As a passenger in a car for an hour without a break',
            name: 'ESS_04',
            likert_scale_values: likert_scale_values,
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'Lying down to rest in the afternoon when circumstances permit',
            name: 'ESS_05',
            likert_scale_values: likert_scale_values,
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'Sitting and talking to someone',
            name: 'ESS_06',
            likert_scale_values: likert_scale_values,
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'Sitting quietly after a lunch without alcohol',
            name: 'ESS_07',
            likert_scale_values: likert_scale_values,
            required: RequiredQuestions,
        },
        {
            type: 'likert',
            prompt: 'In a car, while stopped for a few minutes in traffic',
            name: 'ESS_08',
            likert_scale_values: likert_scale_values,
            required: RequiredQuestions,
        },
    ]
]

var EN_ess = {}
EN_ess.title = title
EN_ess.shortTitle = shortTitle
EN_ess.pages = EN_pages
EN_ess.description = description
EN_ess.QuestionnaireType = 'likert'