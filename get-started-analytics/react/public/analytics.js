var surveyJson = {
  elements: [
    {
      name: "satisfaction-score",
      title: "How would you describe your experience with our product?",
      type: "radiogroup",
      choices: [
        { value: 5, text: "Fully satisfying" },
        { value: 4, text: "Generally satisfying" },
        { value: 3, text: "Neutral" },
        { value: 2, text: "Rather unsatisfying" },
        { value: 1, text: "Not satisfying at all" },
      ],
      isRequired: true,
    },
    {
      name: "nps-score",
      title:
        "On a scale of zero to ten, how likely are you to recommend our product to a friend or colleague?",
      type: "rating",
      rateMin: 0,
      rateMax: 10,
    },
  ],
  showQuestionNumbers: "off",
  completedHtml: "Thank you for your feedback!",
};

var survey = new Survey.Model(surveyJson);

var surveyResults = [
  {
    "satisfaction-score": 5,
    "nps-score": 10,
  },
  {
    "satisfaction-score": 5,
    "nps-score": 9,
  },
  {
    "satisfaction-score": 3,
    "nps-score": 6,
  },
  {
    "satisfaction-score": 3,
    "nps-score": 6,
  },
  {
    "satisfaction-score": 2,
    "nps-score": 3,
  },
];

var vizPanelOptions = {
  allowHideQuestions: false,
};

var vizPanel = new SurveyAnalytics.VisualizationPanel(
  survey.getAllQuestions(),
  surveyResults,
  vizPanelOptions
);
vizPanel.showHeader = false;

vizPanel.render(document.getElementById("surveyVizPanel"));
