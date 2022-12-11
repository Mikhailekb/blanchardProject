ymaps.ready(init);
function init() {
    let myMap = new ymaps.Map(
        "map",
        {
            center: [55.76033534577601, 37.61479241699063],
            zoom: 14,
            controls: ["geolocationControl", "zoomControl"],
        },
        {
            geolocationControlFloat: "none",
            geolocationControlPosition: {
                bottom: "310px",
                right: "18px",
            },
            zoomControlSize: "medium",
            zoomControlPosition: {
                bottom: "370px",
                right: "18px",
            },
        }
    );

    let myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {},
        {
            iconLayout: "default#image",
            iconImageHref: "img/location.svg",
            iconImageSize: [20, 20],
        }
    );

    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove("trafficControl");
    myMap.controls.remove("typeSelector");
    myMap.controls.remove("rulerControl");
    myMap.controls.remove("searchControl");
    myMap.controls.remove("fullscreenControl");
    myMap.behaviors.disable("scrollZoom");
}