Ext.define('MalawiAtlas.view.main.OverViewMapContainer', {
  extend: 'Ext.panel.Panel',
  xtype: 'overviewmapcontainer',
  title: "Overview",


  layout: 'fit',

  height: 300,
  width: 300,
  collapsible: true,


  items: [{
    xtype: 'overviewmap'
  }]
});