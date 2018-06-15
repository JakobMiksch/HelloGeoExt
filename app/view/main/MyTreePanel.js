Ext.define('MalawiAtlas.view.main.MyTreePanel', {
  extend: 'Ext.tree.Panel',
  xtype: 'mytreepanel',

  requires: [
    'MalawiAtlas.view.main.MyTreePanelController',
    'MalawiAtlas.view.main.MyTreePanelModel'
  ],

  controller: 'main-mytreepanel',
  viewModel: {
    type: 'main-mytreepanel'
  },

  title: 'Simple Tree',
  width: 300,
  height: 250,
  root: {
    text: 'Root',
    expanded: true,
    children: [{
        text: 'Child 1',
        leaf: true
      },
      {
        text: 'Child 2',
        leaf: true
      },
      {
        text: 'Child 3',
        expanded: true,
        children: [{
          text: 'Grandchild',
          leaf: true
        }]
      }
    ]
  }
});

//var olMap = Ext.ComponentQuery.query('mappanel')[0].getMap();

console.log("Hallo, : ");