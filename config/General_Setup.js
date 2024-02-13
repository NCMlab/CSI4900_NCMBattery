var FeedbackLength = 400; // This is in milliseconds
var FeedbackFontSize = "30px";
var GapBetweenButtons = "0px";

var FullScreenMode = false;
var TextFontSize = "30px";
var StimulusFontSize = '60px';
var GIFDisplayTime = 100; // milliseconds
var GIFRecorderTime = 500; // milliseconds

var WelcomeTime = 4000; // milliseconds

var SaveLocalFile = false

var EN_LabelNames = {}
EN_LabelNames.NoYes = ['No','Yes']
EN_LabelNames.Home = 'Home'
EN_LabelNames.Restart = 'Restart'
EN_LabelNames.Stop = 'Stop'
EN_LabelNames.Quit = 'Quit'
EN_LabelNames.Skip = 'Skip'
EN_LabelNames.Finished = 'Finished'
EN_LabelNames.Clear = 'Clear'
EN_LabelNames.Undo = 'Undo'
EN_LabelNames.Redo = 'Redo'
EN_LabelNames.Repeat = 'Repeat'
EN_LabelNames.Next = 'Next'
EN_LabelNames.Continue = 'Continue'
EN_LabelNames.Previous = 'Previous'
EN_LabelNames.Enter = 'Enter'
EN_LabelNames.Submit = 'Submit'
EN_LabelNames.CurrentAnswer = 'Current Answer'
EN_LabelNames.Correct = 'Correct'
EN_LabelNames.Incorrect = 'Incorrect'
EN_LabelNames.Same = 'Same'
EN_LabelNames.Different = 'Different'
EN_LabelNames.PressNext = 'Press Next to Continue'
EN_LabelNames.WordListA = 'List A'
EN_LabelNames.WordListB = 'List B'
EN_LabelNames.ProgressBar = 'Completion Progress'
EN_LabelNames.PleaseRead = 'Please read the following sentence out loud'
EN_LabelNames.SelectMicrophone = '<p>Please select the microphone you would like to use.</p>'
EN_LabelNames.UseThisMicrophone = 'Use this microphone.'
EN_LabelNames.NoteInputBox = "Please, type in any notes or feedback you have about this task. (Optional)"
EN_LabelNames.NonEligible = (" I am sorry to say that you are not eligible for this study.")
EN_LabelNames.BroswerNonEligible = ("You are eligible, but our software does not work your browser yet. Please try again using the Chrome browser on a laptop computer.")
EN_LabelNames.StopStudy = "This will stop the study but not remove your data. Are you sure?"
EN_LabelNames.ExitStudy = 'This will remove all data collected so far. Are you sure?'
EN_LabelNames.SkipTask = "This will SKIP the current task. Are you sure?"


var FR_LabelNames = {}
FR_LabelNames.NoYes = ['No','Oui']
FR_LabelNames.Home = "Page d'accueil"
FR_LabelNames.Restart = 'Recommencer'
FR_LabelNames.Stop = 'Arrêt'
FR_LabelNames.Quit = 'Quitter'
FR_LabelNames.Skip = 'Passer'
FR_LabelNames.Finished = 'Terminé'
FR_LabelNames.Clear = 'Effacer'
FR_LabelNames.Undo = 'Défaire'
FR_LabelNames.Redo = 'Refaire'
FR_LabelNames.Repeat = 'Répéter'
FR_LabelNames.Next = 'Suivant'
FR_LabelNames.Continue = 'Continuer'
FR_LabelNames.Previous = 'Précédent'
FR_LabelNames.Enter = 'Entrer'
FR_LabelNames.Submit = 'Soumettre'
FR_LabelNames.CurrentAnswer = 'Réponse Actuelle'
FR_LabelNames.Correct = 'Correct'
FR_LabelNames.Incorrect = 'Incorrect'
FR_LabelNames.Same = 'Mêmes'
FR_LabelNames.Different = 'Différent'
FR_LabelNames.PressNext = 'Appuyez sur Suivant pour continuer'
FR_LabelNames.WordListA = 'Liste A'
FR_LabelNames.WordListB = 'Liste B'
FR_LabelNames.ProgressBar = 'Progrès'
FR_LabelNames.PleaseRead = 'Veuillez lire la phrase suivante à haute voix.'
FR_LabelNames.SelectMicrophone = '<p>Veuillez sélectionner le microphone que vous souhaitez utiliser.</p>'
FR_LabelNames.UseThisMicrophone = 'Utilisez ce micro.'
FR_LabelNames.ProgressBar = 'Progrès'
FR_LabelNames.NoteInputBox = "Veuillez saisir toutes les notes ou commentaires que vous avez sur cette tâche. (Facultatif)"
FR_LabelNames.NonEligible = "Je suis désolé de vous annoncer que vous n'êtes pas éligible pour cette étude."
FR_LabelNames.StopStudy = "Cela arrêtera l\'étude mais ne supprimera pas vos données. Êtes-vous sûr?"
FR_LabelNames.ExitStudy = "Cela supprimera toutes les données collectées jusqu'à présent. Êtes-vous sûr?"
FR_LabelNames.SkipTask = "Cela va SAUTER la tâche en cours. Etes-vous sûr?"

add('EN_LabelNames', function(){ LabelNames = EN_LabelNames});
add('FR_LabelNames', function(){ LabelNames = FR_LabelNames});