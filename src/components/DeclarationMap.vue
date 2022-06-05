<template>
  <div id="mapContainer"></div>
</template>

<script lang='ts'>
import {Vue} from 'vue-class-component';
//map
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default class DeclarationMap extends Vue{
  public map: any
  public marker: any

  mounted(): void  {

     this.map = L.map("mapContainer").setView([68.58, 33.05], 5);

    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    let myIcon = L.icon({
    iconUrl: require('../assets/map-mark.png'),
    iconSize: [35, 42],
    iconAnchor: [17.5, 42],
    popupAnchor: [-3, -76]
    });

    this.map.on('click', this.onClickMap);

    this.marker = L.marker([68.58, 33.05], {icon: myIcon}).addTo(this.map);
    this.marker.on('click', function() { alert('Clicked on Marker!'); });
  }

  public onClickMap(event: any) {
    console.log("Lat, Lon : " + event.latlng.lat + ", " + event.latlng.lng);
    this.marker.setLatLng(event.latlng);
  }
}
</script>

<style lang="css" scoped>
  #mapContainer {
    width: 300px;
    height:300px;
    margin: 20px;
  }
</style>
