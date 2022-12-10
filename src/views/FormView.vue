<template>
  <div class="card">
    <div class="card-box">
      <v-form ref="form" lazy-validation>
        <v-card-title>New Book</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="bookInformation.bookTitle"
            label="タイトル"
          ></v-text-field>

          <v-text-field
            v-model="bookInformation.bookAuthor"
            label="著者"
          ></v-text-field>

          <v-select
            v-model="bookSubject"
            :items="bookInformation.bookItems"
            label="Item"
          ></v-select>

          <div class="text-center">
            <p>評価</p>
            <v-rating
              v-model="bookInformation.bookRating"
              class="star-rating"
              hover
              half-increments
            ></v-rating>
            <pre>{{ bookInformation.bookRating }}</pre>
          </div>
        </v-card-text>
      </v-form>
      <v-card-actions>
        <div class="d-flex justify-space-between">
          <v-btn color="error" class="mr-4" @click="resetForm">
            Reset Form
          </v-btn>
          <v-btn color="success" class="mr-4" @click="postForm"> create </v-btn>
        </div>
      </v-card-actions>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, reactive } from "vue";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase.js";
import router from "@/router";

const bookSubject: Ref<string> = ref("");
const bookInformation = reactive({
  bookTitle: "",
  bookAuthor: "",
  bookItems: ["小説", "自己啓発", "理学書"],
  bookRating: 0,
});

function resetForm() {
  bookInformation.bookTitle = "";
  bookInformation.bookAuthor = "";
  bookSubject.value = "";
  bookInformation.bookRating = 0;
}

async function postForm() {
  try {
    const docRef = await addDoc(collection(db, "booklist"), {
      title: bookInformation.bookTitle,
      author: bookInformation.bookAuthor,
      rating: bookInformation.bookRating,
      item: bookSubject.value,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  await router.push({ name: "home" });
}
</script>
<style scoped>
.card-box {
  width: 60%;
  margin: 0 auto;
  color: white;
}

.card {
  padding-top: 150px;
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
