<template>
  <v-app class="custom-theme">
    <!-- Header -->
    <v-app-bar app color="#f0f4f8" class="app-bar">
      <v-btn icon>
        <v-icon color="black">mdi-home</v-icon>
      </v-btn>
      <v-spacer />
      <v-app-bar-title class="docbot-title">DOCBOT</v-app-bar-title>
      <v-spacer />
      <v-btn class="submit-btn" outlined>Submit</v-btn>
    </v-app-bar>

    <!-- Sidebar for Patient Info -->
    <v-navigation-drawer app v-model="drawer" permanent color="#f0f4f8">
      <v-list dense>
        <v-list-item>
          <v-list-item-title class="sidebar-title">Patient #1 Profile</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>

        <!-- Patient Info Cards -->
        <v-list-item>
          <!-- Demographics -->
          <v-card class="patient-info-card" flat>
            <v-card-title class="info-title">
              <v-icon left color="blue">mdi-account</v-icon> Demographics
            </v-card-title>
            <v-card-text>
              <p><strong>Race:</strong> {{ patientProfile.race }}</p>
              <p><strong>Age:</strong> {{ patientProfile.age }}</p>
              <p><strong>Gender:</strong> {{ patientProfile.gender }}</p>
            </v-card-text>
          </v-card>
        </v-list-item>

        <v-list-item>
          <!-- Symptoms -->
          <v-card class="patient-info-card" flat>
            <v-card-title class="info-title">
              <v-icon left color="red">mdi-heart-pulse</v-icon> Symptoms
            </v-card-title>
            <v-card-text>
              <ul class="symptoms-list">
                <li v-for="(symptom, index) in patientProfile.symptoms" :key="index">{{ symptom }}</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main style="background-color: white">
      <v-container class="fill-height" fluid>
        <v-responsive class="align-center fill-height mx-auto" max-width="1200px">

          <!-- Diagnosis Cards -->
          <v-row class="mb-5" :style="{ marginTop: '-28vh' }"> 
            <v-col cols="12" md="6" lg="6" v-for="(diagnosis, index) in diagnoses" :key="index">
              <v-card class="custom-card" rounded="lg" style="height: 150px;">
                <v-card-title class="text-h6">Diagnosis: {{ diagnosis.name }}</v-card-title>
                <v-card-actions>
                  <v-row justify="center" style="width: 100%;">
                    <v-menu offset-y>
                      <template #activator="{ props }">
                        <v-btn outlined color="blue" v-bind="props">
                          {{ diagnosis.selectedBias }} 
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-item @click="handleOption(index, 'High Bias')">
                          <v-list-item-title>High Bias</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="handleOption(index, 'Medium Bias')">
                          <v-list-item-title>Medium Bias</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="handleOption(index, 'Low Bias')">
                          <v-list-item-title>Low Bias</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="handleOption(index, 'No Bias')">
                          <v-list-item-title>No Bias</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-row>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <!-- Return to Home Button -->
          <v-row justify="center" class="mt-8">
            <v-btn color="#1976D2" style="width: 200px; height: 50px;" href="/">Return to Home</v-btn>
          </v-row>

        </v-responsive>
      </v-container>
    </v-main>
  </v-app>
</template>

<!-- SCRIPT -->
<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(true);
const patientProfile = ref({
  race: 'White',
  age: 55,
  gender: 'Male',
  symptoms: ['Migraines', 'Excessive Sweating', 'Dry Skin', 'Nausea'],
});

const diagnoses = ref([
  { name: "Dehydration", selectedBias: 'Select Bias Level' },
  { name: "Anemia", selectedBias: 'Select Bias Level' },
  { name: "Heatstroke", selectedBias: 'Select Bias Level' },
  { name: "Food Poisoning", selectedBias: 'Select Bias Level' },
]);

const handleOption = (index: number, option: string) => {
  diagnoses.value[index].selectedBias = option; 
  console.log(`Selected for ${diagnoses.value[index].name}: ${option}`);
};
</script>

<!-- STYLE -->
<style>
.custom-theme .docbot-title {
  color: #1976D2;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}

.custom-theme .submit-btn {
  color: #4caf50;
  border: 2px solid #4caf50;
  font-weight: bold;
  transition: 0.3s ease;
}

.custom-theme .submit-btn:hover {
  background-color: #4caf50;
  color: white;
}

.custom-theme .sidebar-title {
  font-weight: bold;
  width: 100%; 
  font-size: 1.2rem;
  padding: 16px;
}

.custom-theme .patient-info-card {
  margin: 8px 0;
}

.custom-theme .info-title {
  font-size: 1.1rem;
  font-weight: bold;
}

.custom-theme .custom-card {
  border: 2px solid rgba(109, 105, 105, 0.2);
  background-color: white;
  color: black;
}

.custom-theme .v-icon {
  color: black;
}

.custom-theme .symptoms-list {
  padding-left: 16px; 
  list-style-type: disc; 
  margin: 8px 0; 
}

.custom-theme .custom-card {
  text-align: center;
  border: 1px solid rgba(109, 105, 105, 0.2); 
  background-color: white !important; 
  padding: 16px;
}

.custom-theme .bias-select {
  border: 2px solid blue; 
  border-radius: 4px; 
}

.custom-theme .bias-select:hover {
  background-color: rgba(0, 0, 255, 0.1); 
}
</style>
