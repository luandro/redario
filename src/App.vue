<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <div v-for="ponto in allPontos" :key="ponto.id">
        <v-chip>{{ ponto.preciso }}</v-chip>
        <v-chip>{{ ponto.ofereco }}</v-chip>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import gql from "graphql-tag";
const PONTOS_QUERY = gql`
  query {
    allPontos {
      id
      localizacao {
        latitude
        longitude
      }
      ofereco
      preciso
    }
  }
`;
export default {
  name: "App",

  components: {},
  apollo: {
    // Simple query that will update the 'hello' vue property
    allPontos: PONTOS_QUERY
  },
  data: () => ({
    //
  })
};
</script>
