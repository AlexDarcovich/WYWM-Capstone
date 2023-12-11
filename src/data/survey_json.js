export const json = {
  title: "Course Completion Survey",
  showProgressBar: "top",
  pages: [{
    elements: [
      {
      type: "radiogroup",
      name: "material",
      title: "How satisfied are you with the course material?",
      choices: [
        "Very Satisfied",
        "Satisfied",
        "Neutral",
        "Dissatisfied",
        "Very Dissatisfied"
      ]
    },
    {
      type: "radiogroup",
      name: "communication",
      title: "How would you rate the instructor's communication skills?",
      choices: [
        "Excellent",
        "Good",
        "Fair",
        "Poor",
        "Very Poor"
      ]
    },
    {
      type: "radiogroup",
      name: "content",
      title: "How challenging did you find the course content?",
      choices: [
        "Very Challenging",
        "Challenging",
        "Moderate",
        "Easy",
        "Very Easy"
      ]
    }, 
    {
      type: "radiogroup",
      name: "workload",
      title: "Was the course workload manageable?",
      choices: [
        "Highly Manageable",
        "Manageable",
        "Neutral",
        "Unmanageable",
        "Very Unmanageable"
      ]
    }, 
    {
      type: "radiogroup",
      name: "professional",
      title: "How relevant was the course content to your professional needs?",
      choices: [
        "Highly Relevant",
        "Relevant",
        "Neutral",
        "Irrelevant",
        "Highly Irrelevant"
      ]
    },
    {
      type: "radiogroup",
      name: "instructions",
      title: "How would you rate the clarity of the assignment instructions?",
      choices: [
        "Very Clear",
        "Clear",
        "Neutral",
        "Unclear",
        "Very Unclear"
      ]
    },
    {
      type: "dropdown",
      name: "pace",
      title: "Which of the following best describes the pace of the course?",
      choices: [
        "Too Fast",
        "Fast",
        "Just Right",
        "Slow",
        "Too Slow"
      ]
    },
    {
      type: "dropdown",
      name: "satisfaction",
      title: "How often did you participate in class discussions?",
      choices: [
        "Always",
        "Frequently",
        "Occasionally",
        "Rarely",
        "Never"
      ]
    },
    {
      type: "comment",
      name: "enjoy",
      title: "Please describe what you enjoyed most about the course?  Please describe below."
    },
    {
      type: "comment",
      name: "improve",
      title: "Do you have any specific comments or suggestions for improving the course? Please provide them below."
    }]
  }]
};