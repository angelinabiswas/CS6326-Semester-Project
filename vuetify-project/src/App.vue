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
      <v-container class="fill-height">
        <v-responsive class="align-center fill-height mx-auto" max-width="900">

      <!-- Diagnosis Cards -->
      <v-row>
        <v-col cols="12" md="6" lg="6" v-for="(diagnosis, index) in diagnoses" :key="index">
          <v-card class="custom-card" rounded="lg" style="height: 150px;"> 
            <v-card-title class="text-h6">Diagnosis: {{ diagnosis }}</v-card-title>
            <v-card-actions>
              <v-row justify="center" style="width: 100%;">
                <v-menu offset-y>
                  <template #activator="{ on }">
                    <v-btn outlined color="blue" v-on="on">
                      {{ selectedBias[index] || 'Select Bias Level' }}
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(option, optionIndex) in biasOptions"
                      :key="optionIndex"
                      @click="selectBias(index, option)"
                    >
                      <v-list-item-title>{{ option }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- Return to Home Button -->
      <v-row justify="center" class="mt-6"> 
        <v-btn color="#1976D2" text="Return to Home" href="/"></v-btn>
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
const showSymptoms = ref(false);
const patientProfile = ref({
  race: 'White',
  age: 55,
  gender: 'Male',
  symptoms: ['Migraines', 'Excessive Sweating', 'Dry Skin', 'Nausea'],
});

const diagnoses: string[] = ["Dehydration", "Anemia", "Heatstroke", "Food Poisoning"];
const biasOptions: string[] = ["High bias", "Medium bias", "Low bias", "No bias"];
const selectedBias = ref<string[]>(Array(diagnoses.length).fill(""));

const selectBias = (index: number, option: string) => {
  selectedBias.value[index] = option; // Update selected bias
  console.log(`Selected bias for ${diagnoses[index]}: ${option}`);
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
  padding-left: 16px; /* Indent for the bullet list */
  list-style-type: disc; /* Adds bullet points */
  margin: 8px 0; /* Adds spacing around the list */
}

.custom-theme .custom-card {
  text-align: center;
  border: 1px solid rgba(109, 105, 105, 0.2); /* Light gray border */
  background-color: white !important; /* Force white background */
  padding: 16px;
}

.custom-theme .bias-select {
  border: 2px solid blue; /* Change to your desired outline color */
  border-radius: 4px; /* Adjust border radius if needed */
}

.custom-theme .bias-select:hover {
  background-color: rgba(0, 0, 255, 0.1); /* Optional: Change background on hover */
}
</style>