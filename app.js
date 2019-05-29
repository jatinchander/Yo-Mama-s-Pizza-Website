var mymap = L.map('mapid').setView([40.760609, -73.830649], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiamF0aW5jaGFuZGVyIiwiYSI6ImNqdW0xMTFqdjAzanA0NGxkMWZkbXc1cmMifQ.vQ9ke0As5sl-Lkc0kxJxJw'
}).addTo(mymap);

var marker = L.marker([40.760609, -73.830649]).addTo(mymap);

var polygon = L.polygon([
    [40.760609, -73.830649]
]).addTo(mymap);

marker.bindPopup("<b> Yo Mama's Pizza</b><br>135-45 Roosevelt Avenue<br>Flushing, NY.").openPopup();
