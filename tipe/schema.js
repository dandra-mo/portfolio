const { createSchema } = require('@tipe/js')

module.exports = createSchema([
  /**
   * Modify and add your schema here
   * */
  {
    id: 'homePage',
    type: 'document',
    label: 'Home Page',
    previewPath: '/',
    fields: [
      {
        id: 'title',
        type: 'string',
        label: 'Title'
      },
      {
        id: 'bio',
        type: 'string',
        label: 'Bio'
      },
      {
        id: 'profilepic',
        type: 'image',
        label: 'Profile Pic'
      },
      {
        id: 'projects',
        type: 'string',
        label: 'Projects'
      },
      {
        id: 'cliTitle',
        type: 'string',
        label: 'CLI Title'
      },
      {
        id: 'cliDesc',
        type: 'string',
        label: 'CLI Description'
      },
      {
        id: 'cliInst',
        type: 'string',
        label: 'CLI Instructions'
      },
      {
        id: 'resTitle',
        type: 'string',
        label: 'Reseach Title'
      },
      {
        id: 'keyProbTitle',
        type: 'string',
        label: 'Key Problem Section Title'
      },
      {
        id: 'keyProb',
        type: 'string',
        label: 'Key Problem'
      },
       {
        id: 'keyProb1',
        type: 'string',
        label: 'Key Problem'
      },
      {
        id: 'storyboard',
        type: 'image',
        label: 'Storyboard Pic'
      },
      {
        id: 'method',
        type: 'string',
        label: 'Methodology Section Title'
      },
      {
        id: 'methods1',
        type: 'string',
        label: 'Methodology 1'
      },
      {
        id: 'methods2',
        type: 'string',
        label: 'Methodology 2'
      },
      {
        id: 'methods3',
        type: 'string',
        label: 'Methodology 3'
      },
      {
        id: 'prototype',
        type: 'string',
        label: 'Prototype Section Title'
      },
      {
        id: 'androidPro',
        type: 'string',
        label: 'Android Prototype'
      },
      {
        id: 'androidImg',
        type: 'image',
        label: 'Android Prototype Image'
      },
      {
        id: 'iPhonePro',
        type: 'string',
        label: 'iPhone Prototype'
      },
      {
        id: 'iPhoneImg',
        type: 'image',
        label: 'iPhone Prototype Image'
      },
      {
        id: 'keyFindings',
        type: 'string',
        label: 'Key Findings Section Title'
      },
      {
        id: 'userNeeds',
        type: 'string',
        label: 'User Needs Findings Title'
      },
      {
        id: 'userNeeds1',
        type: 'string',
        label: 'User Needs 1'
      },
      {
        id: 'userNeeds2',
        type: 'string',
        label: 'User Needs 2'
      },
      {
        id: 'userNeeds3',
        type: 'string',
        label: 'User Needs 3'
      },
      {
        id: 'prefTest',
        type: 'string',
        label: 'Preference Test Results Title'
      },
      {
        id: 'prefTest1',
        type: 'string',
        label: 'Preference Test Results 1'
      },
      {
        id: 'prefTest2',
        type: 'string',
        label: 'Preference Test Results 2'
      },
      {
        id: 'prefTest3',
        type: 'string',
        label: 'Preference Test Results 3'
      },
      {
        id: 'feedback',
        type: 'string',
        label: 'Feedback Title'
      },
      {
        id: 'feedback1',
        type: 'string',
        label: 'Feedback Quote 1'
      },
      {
        id: 'feedback2',
        type: 'string',
        label: 'Feedback Quote 2'
      },
      {
        id: 'feedback3',
        type: 'string',
        label: 'Feedback Quote 3'
      },
      {
        id: 'feedback4',
        type: 'string',
        label: 'Feedback Quote 4'
      },
      {
        id: 'characters',
        type: 'string',
        label: 'Characters Section Title'
      },
      {
        id: 'character1Name',
        type: 'string',
        label: 'Character 1 Name'
      },
      {
        id: 'age1',
        type: 'string',
        label: 'Character 1 Age'
      },
      {
        id: 'occupation1',
        type: 'string',
        label: 'Character 1 Occupation'
      },
      {
        id: 'location1',
        type: 'string',
        label: 'Character 1 Location'
      },
      {
        id: 'lifeStage1',
        type: 'string',
        label: 'Character 1 Life Stage'
      },
      {
        id: 'motivations',
        type: 'string',
        label: 'Character1 Motivations Title'
      },
       {
        id: 'motivation1',
        type: 'string',
        label: 'Character 1 Motivation 1'
      },
      {
        id: 'motivation2',
        type: 'string',
        label: 'Character 1 Motivation 2'
      },
      {
        id: 'motivation3',
        type: 'string',
        label: 'Character 1 Motivation 3'
      },
      {
        id: 'motivation4',
        type: 'string',
        label: 'Character 1 Motivation 4'
      },
      {
        id: 'motivation5',
        type: 'string',
        label: 'Character 1 Motivation 5'
      },
      {
        id: 'constraints',
        type: 'string',
        label: 'Character1 Constraints Title'
      },
      {
        id: 'constraints1',
        type: 'string',
        label: 'Character 1 Constraints 1'
      },
      {
        id: 'constraints21',
        type: 'string',
        label: 'Character 1 Constraints 2'
      },
      {
        id: 'constraints3',
        type: 'string',
        label: 'Character 1 Constraints 3'
      },
      {
        id: 'constraints4',
        type: 'string',
        label: 'Character 1 Constraints 4'
      },
      {
        id: 'scenarioTitle',
        type: 'string',
        label: 'Character1 Scenario Title'
      },
      {
        id: 'scenario1',
        type: 'string',
        label: 'Character 1 Scenario'
      },
      {
        id: 'character2Name',
        type: 'string',
        label: 'Character 2 Name'
      },
      {
        id: 'age2',
        type: 'string',
        label: 'Character 2 Age'
      },
      {
        id: 'occupation2',
        type: 'string',
        label: 'Character 2 Occupation'
      },
      {
        id: 'location2',
        type: 'string',
        label: 'Character 2 Location'
      },
      {
        id: 'lifeStage2',
        type: 'string',
        label: 'Character 2 Life Stage'
      },
      {
        id: 'motivations2',
        type: 'string',
        label: 'Character2 Motivations Title'
      },
       {
        id: 'motivation12',
        type: 'string',
        label: 'Character 2 Motivation 1'
      },
      {
        id: 'motivation22',
        type: 'string',
        label: 'Character 2 Motivation 2'
      },
      {
        id: 'motivation32',
        type: 'string',
        label: 'Character 2 Motivation 3'
      },
      {
        id: 'motivation42',
        type: 'string',
        label: 'Character 2 Motivation 4'
      },
      {
        id: 'motivation52',
        type: 'string',
        label: 'Character 2 Motivation 5'
      },
      {
        id: 'constraints2',
        type: 'string',
        label: 'Character2 Constraints Title'
      },
      {
        id: 'constraints12',
        type: 'string',
        label: 'Character 2 Constraints 1'
      },
      {
        id: 'constraints22',
        type: 'string',
        label: 'Character 2 Constraints 2'
      },
      {
        id: 'constraints32',
        type: 'string',
        label: 'Character 2 Constraints 3'
      },
      {
        id: 'constraints42',
        type: 'string',
        label: 'Character 2 Constraints 4'
      },
      {
        id: 'scenario2Title',
        type: 'string',
        label: 'Character2 Scenario Title'
      },
      {
        id: 'scenario2',
        type: 'string',
        label: 'Character 2 Scenario'
      }
    ]
  },
])
  