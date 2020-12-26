<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ pontos }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import gql from "graphql-tag";
const PONTOS_QUERY = gql`
  query {
    allPontos {
      id
      localizacao
    }
  }
`;

export default {
  name: "Home",
  components: {},
  apollo: {
    // Simple query that will update the 'hello' vue property
    pontos: PONTOS_QUERY
  }
};
</script>
