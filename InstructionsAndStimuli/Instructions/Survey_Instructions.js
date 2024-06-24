// =========================================================================
// =========================================================================
var FormTitle = 'MHRI Intake Form'
var pages = [
    [
        {
            type: 'multi-choice',
            prompt: 'Gender',
            name: 'Gender',
            options: ['Male', 'Female', 'Neutral'],
            required: true,
        },

    ]
]
var EN_IntakeForm_Music = {}
EN_IntakeForm_Music.title = FormTitle;
EN_IntakeForm_Music.pages = pages;
EN_IntakeForm_Music.Instructions01 = [
    {
        'page': '<p class="Instructions">Instructions are written here.',
    }
]
add('EN_Instructions_Music', function(){ Instructions = EN_IntakeForm_Music });

// =========================================================================