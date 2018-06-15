/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MalawiAtlas.view.main.Main', {
  extend: 'Ext.panel.Panel',
  xtype: 'app-main',

  requires: [
    'Ext.plugin.Viewport',
    'Ext.window.MessageBox',

  ],

  layout: 'border',

  defaults: {
    split: true,
    bodyPadding: 10
  },

  header: {
    height: 50,
    layout: {
        align: 'stretchmax'
    },

    iconCls: 'fa-map-o',

    items: [{
      xtype: 'image',
      src: 'http://zgis186.geo.sbg.ac.at/malawi_atlas/images/gi4drr.jpg',
      width: 180,
      height: 40
    }
  ]
},

  items: [
  
    // main map
    {
      title: 'Center Region',
      region: 'center',
      xtype: 'mappanel',
      layout: 'fit'
    },
      // side-bar
      {
        xtype: 'panel',
        region: 'west',
        layout: {
          type: 'vbox',
          align: 'stretch'
        },
        items: [{
          xtype: 'overviewmapcontainer'
        }, {
          xtype: 'listcontainer'
        }, {
          xtype: 'mytreepanel'
        }]
      },
    // top toolbar
    {
      title: 'This is the toolbar',
      region: 'north',
      xtype: 'mytoolbar',
      height: 50

    }
  ]

});