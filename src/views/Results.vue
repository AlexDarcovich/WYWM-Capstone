<template>
  <div>
    <h1 class="mainTitle">Survey Results</h1>
    <div class="entryTable" v-for="survey in surveys" :key="survey.id">
      <div class="entryLabel">Entry #{{survey.id}}</div>
        <li class="propertyItem" v-for="(property, _, index) in survey" :key="index" v-show="isString(property)">
          {{getQuestion(index)}}
          <span class="response"> {{property}} </span>
        </li>
      </div>
  </div>
</template>

<script>

  import {json} from "../data/survey_json.js";

  export default { 

    // surveys stores the survey responses while surveyQuestions stores the corresponding questions
    data() {
        return {
        surveys: null,
        surveyQuestions: json.pages[0].elements
        }
    },

    // surveys are retrieved as the page is created
    created() {
      this.getSurveys();
    },

    methods: {

      // method uses a GET request to populate tables with the submitted surveys and their information
      async getSurveys() {
            
        try {
          const response = await this.$http.get('https://localhost:3000/survey-results');    
          this.surveys = response.data;
        } catch (error) {
          return error;
        }

      }, 

      // method verifies whether a property in a submitted survey is a string
      isString(property) {
        return typeof property == "string";
      }, 

      // method returns the survey question corresponding to the current index
      getQuestion(index) {
        if (index != 0) {
          return this.surveyQuestions[index - 1].title;
        }
      }

    }

};

</script>

<style>

  .mainTitle{
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  .entryTable {
    border: 1px solid black;
    border-width: 50%;
    width: 70%;
    margin: auto;
    margin-bottom: 50px;
    padding-bottom: 10px;
  }

  .entryLabel {
    border: none;
    color: white;
    padding: 15px 32px;
    font-size: 16px;
    background-color: black;
    width: 100%;
    margin-bottom: 10px;
  }

  .propertyItem {
    font-family: monospace;
    padding-left: 20px;
    padding-bottom: 5px;
  }

  .response {
    color: blue;
    display: table;
  }

</style>
    