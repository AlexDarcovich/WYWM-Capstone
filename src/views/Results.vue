<template>
    <div>
        <div class="entryTable" v-for="survey in surveys" :key="survey.id">
            <div class="entryLabel">Entry #{{survey.id}}</div>
            <li class="propertyItem" v-for="(property, _, index) in survey" :key="index" v-show="isString(property)">
                Question #{{index}} - <span style="color: blue;"> {{property}} </span>
            </li>
        </div>
    </div>
</template>

<script>

    export default { 
        data() {
            return {
                surveys: null,
            }
        },
        created() {
            this.getSurveys();
        },
        methods: {
            async getSurveys() {
                try {

                    const response = await this.$http.get('https://localhost:3000/survey-results');    
                    console.log('Current Data:', response.data);   
                    this.surveys = response.data;

                } catch (error) {

                    return error;

                }
            }, 
            isString(property) {
                if (typeof property == "string")
                    return true;
                else
                    return false;
            }
        }
    };
</script>
    
<style>

    .entryTable {
        border: 1px solid black;
        border-width: 50%;
        width: 50%;
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
    }

</style>
    