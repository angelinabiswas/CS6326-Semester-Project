<!-- App.vue -->
<template>
  <v-app>
    <v-app-bar app color="#f0f4f8" class="app-bar">
      <v-btn icon>
        <v-icon color="black">mdi-home</v-icon>
      </v-btn>

      <v-spacer />
      <v-app-bar-title class="docbot-title">DocBot</v-app-bar-title>
      <v-spacer />

      <v-btn class="submit-btn" outlined>Submit</v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" permanent>
      <v-list>
        <v-list-item>
          <v-list-item-title class="sidebar-title">Patient #1 Profile</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <p><strong>Race:</strong> {{ patientProfile.race }}</p>
            <p><strong>Age:</strong> {{ patientProfile.age }}</p>
            <p><strong>Gender:</strong> {{ patientProfile.gender }}</p>
            <p><strong>Symptoms:</strong> {{ patientProfile.symptoms.join(', ') }}</p>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { VApp, VAppBar, VAppBarTitle, VBtn, VIcon, VMain, VContainer, VRow, VCol, VCard } from 'vuetify/components';

// patient profile data
const patientProfile = ref({
  race: 'White',
  age: 55,
  gender: 'Male',
  symptoms: ['migraines', 'dry skin'],
});
</script>

<style>

.docbot-title {
  color: #1976D2; 
  font-size: 1.5rem; 
  font-weight: bold; 
  text-align: center;
}

/* Styling for the green outlined Submit button */
.submit-btn {
  color: #4CAF50; 
  border: 2px solid #4CAF50; 
  font-weight: bold;
  transition: 0.3s ease; 
}

/* Hover effect: green background and white text */
.submit-btn:hover {
  background-color: #4CAF50; 
  color: white;
}

.sidebar-title {
  font-weight: bold;
  font-size: 1.2rem;
  padding: 16px;
}
</style>