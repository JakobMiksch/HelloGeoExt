Ext.define('MalawiAtlas.view.main.OverviewMap', {
  extend: 'GeoExt.component.OverviewMap',
  xtype: 'overviewmap',

  layers: [
    new ol.layer.Tile({
      source: new ol.source.TileWMS({
        url: 'http://ows.terrestris.de/osm-gray/service',
        params: {
          layers: 'OSM-WMS'
        }
      }),
      opacity: 0.8
    })
  ],

  initComponent: function () {
    var me = this;

    var olMap = Ext.ComponentQuery.query('mappanel')[0].getMap();

    me.setParentMap(olMap);

    me.callParent();
  }
  
});




