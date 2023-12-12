<template>
  <div class="container">
    <h1>Course Survey</h1>
    <Survey :survey="survey" v-if="success"/>
    <div class="errorBox" v-else> 
      <h1 class="errorMessage" >400: Bad Request</h1>
      <p class="errorMessage" v-if="this.missingFields > 1"> There are {{missingFields}} fields which have been left blank.</p>
      <p class="errorMessage" v-else> There is 1 field which has been left blank.</p>
      <br>
      <p class="errorMessage">Please try again.</p>
    </div>
  </div>
</template>

<script>
import { Survey, Model, StylesManager } from "survey-vue";
import "survey-vue/modern.css";
StylesManager.applyTheme("modern");
import { json } from "../data/survey_json";

export default {
  components: {
    Survey
  },
  data() {
  const model = new Model(json);
  model.onComplete.add((survey) => {
    this.sendDataToServer(survey);
  });
    return {
      survey: model,
      success: true,
      missingFields: 0
    };
  },
  methods: {
    async sendDataToServer(survey) {
      console.log('sendDataToServer is called'); // Debug line
      const surveyData = survey.data;
      try {

        // send the data to the server
        const response1 = await this.$http.post('https://localhost:3000/survey-results', surveyData);
        console.log('Data sent successfully:', response1.data);
        const response2 = await this.$http.get('https://localhost:3000/survey-results');    
        console.log('Current Data:', response2.data);

      } catch (error) {

        console.error('Error sending data:', error);
        console.log(Object.keys(surveyData).length);
        this.success = false;
        this.missingFields = 10 - Object.keys(surveyData).length;
        
      }
    }
  }
};
</script>

<style>
/* You can add your styles here */

    .errorBox {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .errorMessage {
      color: red;
      margin: auto;
    }

</style>





