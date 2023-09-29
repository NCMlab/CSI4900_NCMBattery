var ComponentList = []

ComponentList.push({name:'Stroop Color', iconFileName:'StroopColor.png'})
ComponentList.push({name:'Stroop Word', iconFileName:'StroopWord.png'})
ComponentList.push({name:'Stroop Color/Word', iconFileName:'StroopColorWord.png'})
ComponentList.push({name:'Trail Making', iconFileName:'TrailMaking.png'})
ComponentList.push({name:'Word Recall', iconFileName:'WordRecall.png'})
ComponentList.push({name:'Matrix Reasoning', iconFileName:'ICARMatrixReasoning.png'})
ComponentList.push({name:'Image Copy', iconFileName:'ShapeCopy.png'})
ComponentList.push({name:'Likert', iconFileName:'Likert.png'})
ComponentList.push({name:'MultipleChoice', iconFileName:'MultiChoice.png'})
ComponentList.push({name:'Digit Span', iconFileName:'DigitSpan.png'})
ComponentList.push({name:'Serial Subtraction', iconFileName:'SerialSubtraction.png'})
ComponentList.push({name:'Fluency', iconFileName:'Fluency.png'})
ComponentList.push({name:'Line Bisection', iconFileName:'LineBisection.png'})
ComponentList.push({name:'Clock Drawing', iconFileName:'ClockDrawing.png'})
ComponentList.push({name:'Verbal DMS', iconFileName:'VerbalDMS.png'})
ComponentList.push({name:'Cancellation Task', iconFileName:'Cancellation.png'})
ComponentList.push({name:'Spatial DMS', iconFileName:'SpatialDMS.png'})
ComponentList.push({name:'Questionnaire', iconFileName:'MultiChoice.png'})
ComponentList.push({name:'Word Recognition', iconFileName:'WordRecog.png'})
ComponentList.push({name:'Consent Form', iconFileName:'ConsentForm.png'})
ComponentList.push({name:'Reading Test', iconFileName:'ReadingTest.png'})
ComponentList.push({name:'Questionnaire AES', iconFileName:'MultiChoice.png'})
// What battery was passed?

// I think I can use the name instead of the index
add('Stroop Color', function(){jatos.startComponent(3)});
add('Stroop Word', function(){jatos.startComponent(4)});
add('Stroop Color/Word', function(){jatos.startComponent(5)});
add('Trail Making', function(){jatos.startComponent(17)});
add('Word Recall', function(){jatos.startComponent(6)});
add('Matrix Reasoning', function(){jatos.startComponent(12)});
add('Image Copy', function(){jatos.startComponent(11)});
add('Reading Test',function(){jatos.startComponent(14)});
add('Likert',function(){jatos.startComponent(15)});
add('Digit Span',function(){jatos.startComponent(16)});
add('Serial Subtraction',function(){jatos.startComponent(18)});
add('Fluency',function(){jatos.startComponent(19)});
add('Line Bisection',function(){jatos.startComponent(20)});
add('Clock Drawing',function(){jatos.startComponent(10)});
add('Verbal DMS',function(){jatos.startComponent(22)});
add('Cancellation Task',function(){jatos.startComponent(9)});
add('Spatial DMS',function(){jatos.startComponent(24)});
add('Questionnaire',function(){jatos.startComponent(26)});
add('Word Recognition',function(){jatos.startComponent(28)});
add('Consent Form',function(){jatos.startComponent(29)});
add('Questionnaire AES',function(){jatos.startComponent(31)});
const BatteryHtmlID = 1
const UserChoiceHtmlID = 21
const UsageManagerHtmlID = 23
