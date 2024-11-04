<!-- App.vue -->
<template>
  <v-app>
    <v-app-bar app color="#f0f4f8" > 

      <!-- home button -->
      <v-btn icon>
        <v-icon color="black">mdi-home</v-icon>
      </v-btn>

      <!-- title -->
      <v-spacer />
      <v-app-bar-title class="docbot-title">DOCBOT</v-app-bar-title>
      <v-spacer />

      <!-- submit button -->
      <v-btn
        class="submit-btn"
        outlined
      >
        Submit
      </v-btn>

    </v-app-bar>

    <!-- main content -->
    <v-main>
      <v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { VApp, VAppBar, VAppBarTitle, VBtn, VIcon, VMain, VContainer, VSpacer } from 'vuetify/components';
</script>

<style>

.app-bar {
  padding-left: 16px; 
  padding-right: 16px; 
}

.docbot-title {
  color: #1976D2; 
  text-align: center;
  font-weight: bold; 
  font-size: 1.5rem;
}


.submit-btn {
  color: #4CAF50; 
  border: 2px solid #4CAF50; 
  font-weight: bold; 
  transition: 0.3s ease; 
}

/* hover effect */
.submit-btn:hover {
  background-color: #4CAF50; 
  color: white; 
}
</style>