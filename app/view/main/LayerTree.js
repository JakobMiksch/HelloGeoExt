Ext.define('MalawiAtlas.view.main.LayerTree', {
    extend: 'Ext.tree.Panel',
    xtype: 'malawi_layertree',

    requires: [
        'MalawiAtlas.view.main.LayerTreeController',
        'MalawiAtlas.view.main.LayerTreeModel'
    ],

    controller: 'malawi_layertree',
    viewModel: {
        type: 'malawi_layertree'
    },

    title: 'Tree Example',
    width: 300,
    height: 250,

    viewConfig: {
        plugins: {
            ptype: 'treeviewdragdrop'
        }
    },

    rootVisible: false,
    flex: 1,
    border: false,

    initComponent: function () {
        var me = this;

        var olMap = Ext.ComponentQuery.query('mappanel')[0].getMap();

        var treeStore = Ext.create('GeoExt.data.store.LayersTree', {
            layerGroup: olMap.getLayerGroup()
        });

        me.store = treeStore ;

        me.callParent();
    }
    
});