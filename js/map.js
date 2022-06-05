window.onload = function(){
    key = "AIzaSyA-llwfT3Zqj6j3i-4Kkt-qi_kSZ7ZgrWk";
    const config = {
        latitude  : 48.865460,
        longitude : 2.321120,
        location  : 'Paris, Ile de France, France'
    };

    // Création d'un objet pLatLng pour stocker les coordonnées
    let latlng = new google.maps.LatLng(config.latitude, config.longitude);

    // Options de la carte
    let myOptions = {
        zoom: 2,
        center: latlng,
        // mapTypeId: google.maps.MapTypeId.SATELLITE
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Création et affichage de la carte dans le div map_canvas
    let map = new google.maps.Map(document.getElementById("map"), myOptions);

    // Ajout d'un marqueur sur la carte
    let mark = new google.maps.Marker({
        position: latlng,
        map:      map,
        title:    config.location
    });
}