Ext.define('MalawiAtlas.view.main.ListContainer', {
  extend: 'Ext.panel.Panel',
  xtype: 'listcontainer',
  title: 'A List container',

  layout: 'fit',

  height: 300,
  width: 300,
  collapsible: true,
  collapsed: true,


  items: [{
    xtype: 'mainlist'
  }]
});