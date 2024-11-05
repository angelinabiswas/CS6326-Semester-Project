<template>
  <v-app class="custom-theme">
      <v-app-bar app color="#f0f4f8" class="app-bar">
      <v-btn icon>
        <v-icon color="black">mdi-home</v-icon>
      </v-btn>
      <v-spacer />
      <v-app-bar-title class="docbot-title">Create A Patient</v-app-bar-title>
      <v-spacer />
    </v-app-bar>
    <v-main style="background-color: white">
      <v-container  class="fill-height d-flex align-center justify-center">
        <v-container class="pt-16" style="max-width: 600px; width: 100%;">
          <v-text-field
            label="Name"
            outlined>
          </v-text-field>
          <v-row>
            <v-col cols="4">
              <v-text-field
                label="Age"
                outlined
                type="number"
                min="0"
              ></v-text-field>
            </v-col>

            <v-col cols="4">
              <v-select
                label="Race"
                outlined
                :items="['White', 'Asian', 'American Indian or Alaskan Native', 'Black/African American', 'Native Hawaiian or Pacific Islander']"
              ></v-select>
            </v-col>

            <v-col cols="4">
              <v-select
                label="Gender"
                outlined
                :items="['Male', 'Female', 'Transgender', 'Other']"
              ></v-select>
            </v-col>
          </v-row>

          <v-text-field
            label="Symptoms"
            outlined
          ></v-text-field>
          <v-row justify="center" class="mt-4">
            <v-btn color="green" class="submit-button">Submit</v-btn>
          </v-row>
        </v-container>
      </v-container>
    </v-main>
  </v-app>

</template>

<script lang="ts" setup>
</script>

<style>
.spacer {
  height: 32px; /* Adjust height to increase or decrease space */
}
 
/* trying to change border color */
.custom-theme .v-text-field {
  border-color: gray;
}

.custom-theme .v-text-field label {
  color: black;
}

.custom-theme .v-card-title, .v-card-subtitle, .v-card-text {
  color: black;
}

.custom-theme.v-icon{
  background: none !important;
  color: black;
}

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
  margin-right: 50px;
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

.custom-theme .v-icon {
  color: black;
}

.custom-theme .symptoms-list {
  padding-left: 16px; 
  list-style-type: disc; 
  margin: 8px 0; 
}

.custom-theme .bias-select {
  border: 2px solid blue; 
  border-radius: 4px; 
}

.custom-theme .bias-select:hover {
  background-color: rgba(0, 0, 255, 0.1); 
}
</style>