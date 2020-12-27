<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Redário"
          class="shrink mr-2"
          contain
          src="@/assets/rede.svg"
          transition="scale-transition"
          width="40"
        />
        <h1 class="title pl-4">Redário</h1>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <Map :markers="markers" height="93vh" />
    </v-main>
  </v-app>
</template>

<script>
import gql from "graphql-tag";
import Map from "@/components/Map.vue";
const PONTOS_QUERY = gql`
  query {
    allPontos {
      id
      nome
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

  components: {
    Map
  },
  apollo: {
    // Simple query that will update the 'hello' vue property
    allPontos: PONTOS_QUERY
  },
  computed: {
    markers() {
      if (this.allPontos) {
        return this.allPontos.map(ponto => {
          return {
            coords: [ponto.localizacao.longitude, ponto.localizacao.latitude],
            ...ponto
          };
        });
      } else return [];
    }
  }
};
</script>
