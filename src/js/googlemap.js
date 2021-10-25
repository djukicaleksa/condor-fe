import { GOOGLE_API_KEY } from './constants.js';

$(function () {
  $('.map').googleMaps({
    key: GOOGLE_API_KEY,
    points: [
      {
        lat: 40.7127,
        lng: -75.189,
        marker: true,
        title: 'Pink Panter Man',
        infoWindow: 'This is pinkmans location',
        marker: 'favicon.ico',
      },
    ],
  });
});
