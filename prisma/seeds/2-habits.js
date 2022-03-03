const { createCheckmarksForCurrentYear } = require("../../utils/checkmarks")

const habits = [
  {
    id: "1",
    title: "Work on Bussiness",
    description: "Deliberate work for 1hour",
    color: "rgb(250, 204, 21, 0.9)",
    checkmarks: JSON.stringify(createCheckmarksForCurrentYear),
    userId: '1'
  },
  {
    id: "2",
    title: "Exercise",
    description: "Walk for 30mins",
    color: "rgb(217, 70, 239, 0.9)",
    checkmarks: JSON.stringify(createCheckmarksForCurrentYear),
    userId: '1'
  },
  {
    id: "3",
    title: "Meditate",
    description: "Relax with eyes closed for 30mins",
    color: "rgb(22, 163, 74, 0.9)",
    checkmarks: JSON.stringify(createCheckmarksForCurrentYear),
    userId: '1'
  },
  {
    id: '4',
    title: "Sleep",
    description: "Wake up 7am & go to bed 10pm",
    color: " rgb(14, 165, 233, 0.9)",
    checkmarks: JSON.stringify(createCheckmarksForCurrentYear),
    userId: '1'
  },
  // {
  //   id: 'ckzywzytm00413svi6jezdk1o',
  //   title: "Clean Diet",
  //   description: "No junk food, limit coffee",
  //   color: "rgb(225, 29, 72, 0.9)",
  //   checkmarks: JSON.stringify(createCheckmarksForCurrentYear),
  //   userId: '1'
  // },
  // {
  //   id: 'ckzywzytm00986svi6jezdk1o',
  //   title: "Dont Do Drugs",
  //   description: "Always do sober what you said you would do intoxicated.",
  //   color: "rgb(225, 29, 72, 0.9)",
  //   checkmarks: JSON.stringify(createCheckmarksForCurrentYear),
  //   userId: '1'
  // },
]

module.exports = {habits}