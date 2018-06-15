Ext.define('MalawiAtlas.view.main.MyToolbar', {
  extend: 'Ext.toolbar.Toolbar',
  xtype: 'mytoolbar',



  width: 500,
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
});