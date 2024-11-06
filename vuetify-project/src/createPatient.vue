<template>
  <v-app>
    <v-app-bar :elevation="2" color="white"> <!-- Set background color to white -->
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-spacer></v-spacer>
    <v-app-bar-title class="text-center" style="color: blue;">Create a Patient</v-app-bar-title> <!-- Set title color to blue -->
    <v-spacer></v-spacer>
  </v-app-bar>
  <v-container fill-height class="d-flex align-center justify-center">
    <v-container class="pt-16" style="max-width: 600px; width: 100%;">
      <v-text-field
        label="Name"
        outlined
      ></v-text-field>

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
  </v-app>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.spacer {
  height: 32px; /* Adjust height to increase or decrease space */
}

</style>
