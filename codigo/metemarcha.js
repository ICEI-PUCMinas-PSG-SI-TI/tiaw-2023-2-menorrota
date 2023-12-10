mapboxgl.accessToken = 'pk.eyJ1IjoiZWRyZWkiLCJhIjoiY2xwbGxvaXFrMDFibTJpdWhyN21yZWhkciJ9.eX2dPi6y4vTFg-p-ay4RTQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/edrei/clpq7c1wk00n801p7cvcg6arr',
    zoom: 5,
    center: [-43.9542, -19.8157]
});

var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    marker: true,
});

var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        trackUserLocation: true,
        showUserLocation: true
});
map.addControl(geocoder, 'top-left')

map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
map.on('load', function() {

    geocoder.on('result', function(event) {
        console.log(event.result);
        new Promise(function(resolve) {
            $('.marker').remove()
            resolve()
        }).then(() => {
            new mapboxgl.Marker($('<div class="marker"><i class="fa fa-map-marker-alt"></i></div>')[0])
                .setLngLat(event.result.geometry.coordinates)
                .setPopup(
                    new mapboxgl.Popup({ offset: 25 })
                    .setHTML(
                        `<div>${event.result.place_name}</div><small class='text-muted'>${parseFloat(event.result.center[0]).toLocaleString('pt-BR')}, ${parseFloat(event.result.center[1]).toLocaleString('pt-BR')}</small>`
                    )
                )
                .addTo(map)
        }).then(() => {
            $('.marker').click()
        })

    });
    geocoder.container.setAttribute('id', 'geocoder-search')
});

function direction_reset() {
    directions.actions.clearOrigin()
    directions.actions.clearDestination()
    directions.container.querySelector('input').value = ''
}

$(function() {
    $('#get-direction').click(function() {
        map.addControl(directions, 'top-left');
        directions.container.setAttribute('id', 'direction-container')
        $(geocoder.container).hide()
        $(this).hide()
        $('#end-direction').removeClass('d-none')
        $('.marker').remove()

    })
    $('#end-direction').click(function() {
        direction_reset()
        $(this).addClass('d-none')
        $('#get-direction').show()
        $(geocoder.container).show()
        map.removeControl(directions)
    })

})