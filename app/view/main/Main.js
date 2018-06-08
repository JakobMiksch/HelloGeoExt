/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('HelloGeoExt.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'HelloGeoExt.view.main.MainController',
        'HelloGeoExt.view.main.MainModel',
        'HelloGeoExt.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    layout: 'border',
    items: [{
            title: 'South Region is resizable',
            region: 'south',     // position for region
            xtype: 'panel',
            height: 100,
            split: true,         // enable resizing
            margin: '0 5 5 5'
        },{
            // xtype: 'panel' implied by default
            title: 'West Region is collapsible',
            region:'west',
            xtype: 'panel',
            margin: '5 0 0 5',
            width: 200,
            collapsible: true,   // make collapsible
            id: 'west-region-container',
            layout: 'fit'
        },{
            title: 'Center Region',
            region: 'center',     // center region is required, no width/height specified
            xtype: 'mappanel',
            layout: 'fit',
            margin: '5 5 0 0'
        }],

});
