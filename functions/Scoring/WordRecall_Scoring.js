function WordRecall_Scoring(data, ResponseArray, IntrusionList) {
	console.log(ResponseArray)
	// Words recalled per block
	var WordsRecalledPerBlock = Array(ResponseArray[0].length)
	console.log(WordsRecalledPerBlock)
	for (var i = 0; i < ResponseArray[0].length; i++)
	{
		currentCol = GetColumn(ResponseArray, i)	
		var count = 0;
		for(var j = 0; j < currentCol.length; ++j){
			if(currentCol[j] != -99)
				count++;
		}
		WordsRecalledPerBlock[i] = count
		TotalWordsRecalled = WordsRecalledPerBlock.reduce((a, b) => a + b, 0)
		TotalWords = ResponseArray.length*ResponseArray[0].length
	}

	Results = {}
	Results.PrimaryResults = {}
	Results.PrimaryResults['Accuracy'] = TotalWordsRecalled
	Results.PrimaryResults['ScoreName'] = 'Total words recalled'
	Results.AllResults = {}
	Results.AllResults['Total Words Recalled'] = TotalWordsRecalled
	Results.AllResults['Words Recalled Per Block'] = WordsRecalledPerBlock
	Results.AllResults['Total Words'] = TotalWords
	Results.AllResults['Response Array'] = ResponseArray
	Results.AllResults['Intrusions'] = IntrusionList
	Results.AllResults['Word List A'] = WordListA
	console.log(Results)
	return Results
}




// Total number of words recalled
// Recency effect for each block


