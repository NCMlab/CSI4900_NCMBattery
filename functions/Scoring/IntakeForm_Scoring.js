function IntakeForm_Scoring(data) {
	trialData = data.filter({trial: 'Questionnaire'}).trials[0]
	var keys = Object.keys(trialData.response)
	
	Results = {}
	Results.PrimaryResults = {}

	
	Results.AllResults = {}
	Results.AllResults['ScoreName'] = trialData.title
	Results.AllResults['Accuracy'] = ''
	for ( var i = 0; i < Object.keys(trialData.response).length; i++ )
		{
			Results.AllResults[keys[i]] = trialData.response[keys[i]]
		}
	return Results
}