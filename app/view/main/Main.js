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

    items: [{
      xtype: 'image',
      src: 'http://zgis186.geo.sbg.ac.at/malawi_atlas/images/gi4drr.jpg',
      width: 180,
      height: 40
    }]
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
      title: 'sidebar',
      layout: {
        type: 'vbox',
        align: 'stretch'
      },
      items: [{
          xtype: 'panel',
          title: "Overview",
          layout: 'fit',
          height: 300,
          width: 300,
          collapsible: true,
          items: [{
            xtype: 'overviewmap'
          }]
        },
        {
          xtype: 'malawi_layertree'
        }
      ]
    },
    // top toolbar
    {
      xtype: 'toolbar',
      region: 'north',
      title: 'This is the toolbar',
      height: 50,
      items: [{
          xtype: 'image',
          src: 'http://zgis186.geo.sbg.ac.at/malawi_atlas/images/gi4drr.jpg',
          width: 180,
          height: 40
        }, 'Malawi Atlas',
        {
          xtype: 'tbspacer',
          width: 600
        },

        'A Atlas about Malawi'
      ]

    }
  ]

});