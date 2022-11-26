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
            <v-btn variant="plain">All</v-btn>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-btn variant="plain">novel</v-btn>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-btn variant="plain">enlightenment</v-btn>
          </v-list-item>
          <v-divider />
          <v-list-item>
            <v-btn variant="plain">science</v-btn>
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
            <v-btn variant="plain">profile</v-btn>
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

.list-item-contanier {
  position: relative;
  text-align: center;
}
</style>
