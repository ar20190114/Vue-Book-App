<template>
  <div class="card">
    <div class="card-box">
      <v-form ref="form" lazy-validation>
        <v-card-title>Update Profile</v-card-title>
        <v-card-text>
          <v-text-field v-model="username" label="username"></v-text-field>
        </v-card-text>
      </v-form>
      <v-card-actions>
        <div class="d-flex justify-space-between">
          <v-btn color="error" class="mr-4" @click="resetForm">
            Reset Form
          </v-btn>
          <v-btn color="success" class="mr-4"> create </v-btn>
        </div>
      </v-card-actions>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";

const username: Ref<string> = ref("");

function resetForm() {
  username.value = "";
}
</script>
<style scoped>
.card-box {
  width: 50%;
  margin: 0 auto;
  color: white;
}

.card {
  padding-top: 200px;
  background-color: black;
  height: 100vh;
  color: white;
}

.d-flex {
  margin: 0 auto;
  padding-bottom: 10px;
  padding-top: 20px;
}

.star-rating {
  color: blue;
}
</style>
