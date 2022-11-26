<template>
  <v-app id="inspire">
    <v-app-bar class="app-bar">
      <v-app-bar-nav-icon class="category-icon"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/book/form"> form book </v-btn>
      <v-spacer></v-spacer>
      <v-btn> comment </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="main">
      <v-container>
        <v-row>
          <v-col v-for="n in 24" :key="n" cols="4">
            <v-card class="card" height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  //
};
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
