<template>
  <div class="map" :style="{ height }">
    <MglMap
      :accessToken="token"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      :center="hasMarkers ? center : defaultCoord"
      :zoom="hasMarkers ? 10 : 3"
      :attributionControl="false"
    >
      <MglNavigationControl position="top-right" />
      <MglGeolocateControl position="top-left" />

      <MglMarker
        v-for="marker in markers"
        :key="marker.id"
        :coordinates="center"
      >
        <div slot="marker" class="marker">
          <span>
            <v-icon color="primary" size="22">mdi-target</v-icon>
          </span>
        </div>
        <MglPopup :offset="35" anchor="bottom" class="popup">
          <div class="caption">
            <h3>{{ marker.nome }}</h3>
            <v-chip>{{ marker.preciso }}</v-chip>
            <v-chip>{{ marker.ofereco }}</v-chip>
          </div>
        </MglPopup>
      </MglMarker>
    </MglMap>
  </div>
</template>
<script>
export default {
  components: {
    MglMap: () => {
      if (window) {
        return import("vue-mapbox")
          .then(m => m.MglMap)
          .catch();
      }
    },
    MglMarker: () => {
      if (window) {
        return import("vue-mapbox")
          .then(m => m.MglMarker)
          .catch();
      }
    },
    MglNavigationControl: () => {
      if (window) {
        return import("vue-mapbox")
          .then(m => m.MglNavigationControl)
          .catch();
      }
    },
    MglPopup: () => {
      if (window) {
        return import("vue-mapbox")
          .then(m => m.MglPopup)
          .catch();
      }
    },
    MglGeolocateControl: () => {
      if (window) {
        return import("vue-mapbox")
          .then(m => m.MglGeolocateControl)
          .catch();
      }
    }
  },
  props: {
    markers: Array,
    height: {
      type: String,
      default: "500px"
    }
  },
  data() {
    return {
      token: process.env.VUE_APP_MAPBOX_API_KEY,
      map: null,
      defaultCoord: [-47.46, -14.06]
    };
  },
  computed: {
    center() {
      return this.hasMarkers > 0 ? this.markers[0].coords : this.defaultCoord;
    },
    hasMarkers() {
      return this.markers.length > 0;
    }
  },
  mounted() {
    window.mapboxgl = require("mapbox-gl");
    this.map = new window.mapboxgl.Map("mapbox://styles/mapbox/streets-v11");
  }
};
</script>
<style>
.map,
map {
  background: grey;
  width: 100%;
}
.marker {
  width: 0;
  height: 0;
}

.marker span {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  color: #000;
  background: #fff;
  border: solid 2px;
  border-radius: 0 70% 70%;
  box-shadow: 0 0 2px #000;
  cursor: pointer;
  transform-origin: 0 0;
  transform: rotateZ(-135deg);
}
.marker span * {
  transform: rotateZ(135deg);
}
.popup {
  z-index: 999;
}
.button {
  position: absolute;
  bottom: 50px;
  right: 45vw;
  left: 45vw;
  width: 45vw;
}
.z-max {
  z-index: 99;
}
</style>
