<template>
  <v-app id="inspire">
    <v-app-bar class="app-bar">
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon color="black">mdi-text</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-btn variant="plain" @click="allBookList(onmountDataList)">
              All
            </v-btn>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-btn variant="plain" @click="novelBookList(onmountDataList)">
              novel
            </v-btn>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-btn
              variant="plain"
              @click="enlightenmentBookList(onmountDataList)"
            >
              enlightenment
            </v-btn>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-btn variant="plain" @click="scienceBookList(onmountDataList)">
              science
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-toolbar-title>
        <v-icon color="green" icon="mdi-vuetify"></v-icon>
        my book shelf
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/book/form"> form book </v-btn>
      <v-spacer></v-spacer>
      <v-btn> comment </v-btn>
      <v-spacer></v-spacer>
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon color="black">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-btn to="/profile" variant="plain">profile</v-btn>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-btn variant="plain">logout</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main class="main">
      <v-container>
        <v-row>
          <v-col v-for="data in dataList" :key="data.id" cols="4">
            <v-card class="card" height="200">
              <div class="card-items">
                <p>{{ data.title }}</p>
                <p>{{ data.author }}</p>
                <v-icon
                  v-if="data.rating >= 3"
                  icon="mdi-thumb-up"
                  color="blue-lighten-2"
                />
                <v-icon v-else icon="mdi-thumb-down" color="red-lighten-2" />
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import db from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";

const dataList = ref([]);
const onmountDataList = ref([]);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "booklist"));
  for (let i = 0; i < querySnapshot.docs.length; i++) {
    dataList.value.push(querySnapshot.docs[i].data());
    onmountDataList.value.push(querySnapshot.docs[i].data());
  }
  console.log(dataList.value);
});

function allBookList(data: []) {
  dataList.value.splice(0);
  for (let i = 0; i < onmountDataList.value.length; i++) {
    dataList.value.push(onmountDataList.value[i]);
  }
}

function novelBookList(data: []) {
  dataList.value.splice(0);
  for (let i = 0; i < onmountDataList.value.length; i++) {
    if (onmountDataList.value[i].item === "小説") {
      dataList.value.push(onmountDataList.value[i]);
    }
  }
  console.log(dataList.value);
}

async function enlightenmentBookList(data: []) {
  dataList.value.splice(0);
  for (let i = 0; i < onmountDataList.value.length; i++) {
    if (onmountDataList.value[i].item === "自己啓発") {
      dataList.value.push(onmountDataList.value[i]);
    }
  }
  console.log(dataList.value);
}

async function scienceBookList(data: []) {
  dataList.value.splice(0);
  for (let i = 0; i < onmountDataList.value.length; i++) {
    if (onmountDataList.value[i].item === "理学書") {
      dataList.value.push(onmountDataList.value[i]);
    }
  }
  console.log(dataList.value);
}
</script>
<style scoped>
.app-bar {
  background-color: blue;
}
.category-icon {
  /*color: white;*/
}
.card {
  background-color: white;
  color: black;
}

.main {
  background-color: black;
}
</style>
