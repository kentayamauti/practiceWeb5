var map;
function initMap(){
    map = new google.maps.Map(document.getElementById('maps'),{
        center:{
            lat:34.7019399,
            lng:135.51002519999997
        },
        zoom:19
    });
}