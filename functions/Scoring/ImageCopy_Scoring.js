function ImageCopy_Scoring(data) {
	Notes = data.filter({trial: 'Notes'})
	trialData = data.filter({trial: 'Image Copy'}).trials[0]
	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['ScoreName'] = 'Accuracy'
	Results.PrimaryResults['Accuracy'] = -99
	Results.AllResults = {}
	Results.AllResults['Accuracy'] = -99

	// resize the image
	//var smallPNG = drawImage(trialData.png, 0, 0, 100, 100)
	Results.AllResults['Image'] = trialData.png
	Results.AllResults['GIF'] = trialData.gif
	Results.AllResults['Response Time (ms)'] = trialData.rt
	if ( Notes.trials.length > 0 )
		{ Results.AllResults['Notes'] = Notes.trials[0].response.Notes }
	else { Results.AllResults['Notes'] = '' }

	//Results.AllResults['Notes'] = Notes.trials[0].response.Notes
	return Results
}