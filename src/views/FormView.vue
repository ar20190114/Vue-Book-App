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

          <v-file-input
            label="画像"
            variant="filled"
            prepend-icon="mdi-camera"
          ></v-file-input>

          <v-textarea
            v-model="bookInformation.bookComment"
            label="コメント"
          ></v-textarea>

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
          <v-btn color="success" class="mr-4"> create </v-btn>
        </div>
      </v-card-actions>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref, reactive } from "vue";

const bookSubject: Ref<string> = ref("");
const bookInformation = reactive({
  bookTitle: "",
  bookAuthor: "",
  bookItems: ["小説", "自己啓発", "理学書"],
  bookComment: "",
  bookRating: 0,
});

function resetForm() {
  bookInformation.bookTitle = "";
  bookInformation.bookAuthor = "";
  bookSubject.value = "";
  bookInformation.bookComment = "";
  bookInformation.bookRating = 0;
}
</script>
<style scoped>
.card-box {
  width: 80%;
  margin: 0 auto;
  color: white;
}

.card {
  padding-top: 50px;
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
