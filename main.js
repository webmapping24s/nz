let lat = -39.2;
let lng = 175.583333;

let map = L.map('map').setView([lat, lng], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([lat, lng]).addTo(map);
marker.bindPopup("<h2>Hello world!</h2><br>I am a popup.").openPopup();