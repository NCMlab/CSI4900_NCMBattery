var Cancellation_Default = {
    NRows: 6,
    NCols: 52,
    NTargets: 104,
    non_target_labels: ["A","B","C","D","E","F","G","I"],
    target_labels: "H",
	ShowWelcome: true,
	ShowThankYou: true,
    AskForNotes: true, 
    RecordGIF: true,
}

var Cancellation_001 = {
    NRows: 10,
    NCols: 13,
    font_size: 28,
    NTargets: 40,
    non_target_labels: ["A","B","C","D","E","F","G","I"],
    target_labels: "H",
    ShowWelcome: true,
    ShowThankYou: false,
    AskForNotes: false, 
    RecordGIF: true,
}

  add('Cancellation_Default', function(){ parameters = Cancellation_Default});
  add('Cancellation_001', function(){ parameters = Cancellation_001});
