<template>
  <div id="mapContainer"></div>
</template>

<script lang='ts'>
import {Vue} from 'vue-class-component';
//map
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import store from '../store';
import {MapPosition, mapPositionToArray} from '../store/declaration-info'

export default class DeclarationMap extends Vue{
  public map: any
  public marker: any
  private position: MapPosition = {latitude: 68.58, longitude: 33.05}

  mounted(): void  {

     const initPos: L.LatLng = L.latLng(mapPositionToArray(this.position));
     this.map = L.map("mapContainer").setView(initPos, 5);

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

    this.marker = L.marker(initPos, {icon: myIcon}).addTo(this.map);
    this.marker.on('click', function() { alert('Clicked on Marker!'); });
    this.updateMapPosition();
  }

  updateMapPosition(): void {
    store.dispatch('updateMapPosition', this.position);
  }

  public onClickMap(event: any) {
    this.position.latitude = event.latlng.lat.toFixed(2);
    this.position.longitude = event.latlng.lng.toFixed(2);
    this.updateMapPosition();
    this.marker.setLatLng(event.latlng);

    console.log("Lat, Lon : " + this.position.latitude + ", " + this.position.longitude);
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
