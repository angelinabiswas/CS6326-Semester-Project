<template>
  <v-app class="custom-theme">
    <v-app-bar app color="#f0f4f8" class="app-bar">
      <v-btn icon>
        <v-icon color="black">mdi-home</v-icon>
      </v-btn>
      <v-spacer />
      <v-app-bar-title class="docbot-title">DOCBOT</v-app-bar-title>
      <v-spacer />
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
                :class="['custom-card', { 'highlighted-card': selectedCard === 1 }]"
                rounded="lg"
                subtitle="Matt Damon"
                target="_blank"
                title="Patient 1"
                @click="selectCard(1)"
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
                :class="['custom-card', { 'highlighted-card': selectedCard === 2 }]"
                rounded="lg"
                subtitle="Jaden Smith"
                target="_blank"
                title="Patient 2"
                @click="selectCard(2)"
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
                :class="['custom-card', { 'highlighted-card': selectedCard === 3 }]"
                rounded="lg"
                subtitle="Constance Wu"
                target="_blank"
                title="Patient 3"
                @click="selectCard(3)"
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
                class="custom-card"
                rounded="lg"
                target="_blank"
                title="Create a Patient!"
                @click="selectCard(4)"
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

  import { ref } from 'vue'
// Array to hold the dropdown state for each card
const show = ref([false, false, false]) // Use as many slots as you have cards
const selectedCard = ref<number | null>(null);

// Function to toggle the dropdown for a specific card
const toggleDropdown = (index: number) => {
  show.value[index] = !show.value[index]
  console.log("card " + index)
}

const selectCard = (index: number) => {
  selectedCard.value = selectedCard.value === index ? null : index;
  console.log("selected card " + selectedCard.value);
}
</script>

<style>
.custom-card {
  border: 2px solid rgba(109, 105, 105, 0.2);
  color: black;
  background-color: white !important; 
}

.highlighted-card {
  background-color: #46b3d8 !important; /* Light blue background */
  color: black;/* Change text color for contrast */
}

.custom-theme .v-card-title, .v-card-subtitle, .v-card-text {
  color: black
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