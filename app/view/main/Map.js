Ext.define("MalawiAtlas.view.main.Map", {
  extend: "GeoExt.component.Map",
  xtype: 'mappanel',

  map: new ol.Map({
    controls: ol.control.defaults({
      attributionOptions: {
        collapsible: true,
        collapsed: false
      }
    }),
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
        name: 'OpenStreetMap'
      }),
      new ol.layer.Tile({
        source: new ol.source.TileWMS({
          url: 'http://ows.terrestris.de/osm/service',
          params: {
            layers: 'OSM-WMS'
          }
        }),
        name: 'OSM WMS (terrestris)'
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([34.3015278, -13.2512161]),
      zoom: 7
    })
  })

});