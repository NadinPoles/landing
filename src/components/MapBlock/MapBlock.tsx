import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const MapBlock = () => {
  const mapState = {
    center: [53.909181, 27.59675],
    zoom: 17,
    controls: ["zoomControl", "fullscreenControl"],
    behaviors: ["disable('scrollZoom')"],
  };

  return (
    <div id="map">
      <YMaps>
        <Map
          width="100%"
          height="50vh"
          defaultState={mapState}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark
            geometry={[53.909181, 27.59675]}
            options={{
              iconColor: "#7AC517",
            }}
            properties={{
              hintContent: "г. Минск, ул. Платонова, 20Б/3, оф.60",
              balloonContent: "г. Минск, ул. Платонова, 20Б/3, оф.60",
            }}
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
          />
        </Map>
      </YMaps>
    </div>
  );
};

export default MapBlock;
