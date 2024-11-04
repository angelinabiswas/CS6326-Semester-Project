<template>
  <v-app>
    <v-app-bar :elevation="2" color="white"> <!-- Set background color to white -->
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-spacer></v-spacer>
      <v-app-bar-title class="text-center" style="color: blue;">DocBot</v-app-bar-title> 
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main style="background-color: white">
      <v-container class="fill-height">
        <v-responsive
          class="align-center fill-height mx-auto"
          max-width="900"
        >
          <v-row>
            <v-col cols="6">
              <v-card
                class="custom-card"
                rounded="lg"
                subtitle="Matt Damon"
                target="_blank"
                title="Patient 1"
              >
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn style="color: grey"
                      :icon="show[1] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                      @click="toggleDropdown(1)"
                    ></v-btn>
                  </v-card-actions>
                  <v-expand-transition>
                    <div v-show="show[1]">
                      <v-divider></v-divider>
                      <v-card-text>
                        Age: 55
                        <br>Race: White
                        <br>Gender: Male
                      </v-card-text>
                    </div>
                  </v-expand-transition>
              </v-card>
            </v-col>

            <v-col cols="6">
              <v-card
              class="custom-card"
                rounded="lg"
                subtitle="Jaden Smith"
                target="_blank"
                title="Patient 2"
              >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn style="color: grey"
                    :icon="show[2] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                    @click="toggleDropdown(2)"
                  ></v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="show[2]">
                    <v-divider></v-divider>
                    <v-card-text>
                      Age: 14
                      <br>Race: African American
                      <br>Gender: Male
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>

            <v-col cols="6">
              <v-card
                class="custom-card"
                rounded="lg"
                subtitle="Constance Wu"
                target="_blank"
                title="Patient 3"
              >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn style="color: grey"
                    :icon="show[3] ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                    @click="toggleDropdown(3)"
                  ></v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="show[3]">
                    <v-divider></v-divider>
                    <v-card-text>
                      Age: 23
                      <br>Race: Asian
                      <br>Gender: Female
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-col>

            <v-col cols="6">
              <v-card
                href="createPatient.vue"
                class="custom-card"
                rounded="lg"
                target="_blank"
                title="Create a Patient"
                append-icon="mdi-plus"
              >
              </v-card>
            </v-col>
          </v-row>
          <v-row justify="center" class="mt-4">
            <v-btn color="green" class="submit-button">Submit</v-btn>
          </v-row>
        </v-responsive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  //
  import { ref } from 'vue'
// Array to hold the dropdown state for each card
const show = ref([false, false, false]) // Use as many slots as you have cards

// Function to toggle the dropdown for a specific card
const toggleDropdown = (index: number) => {
  show.value[index] = !show.value[index]
  console.log("card " + index)
}
</script>

<style>
.bg-white {
  background-color: white;
}

.custom-card {
  border: 2px solid rgba(109, 105, 105, 0.2); /* Light gray border */
  color: black;
  background-color: white !important; /* Force a white background */
}

.v-card-title, .v-card-subtitle, .v-card-text {
  color: black
}

.v-icon{
  background: none !important;
  color: black;
}
</style>
