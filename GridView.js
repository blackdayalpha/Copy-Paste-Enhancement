Ext.define('ExtractApp.view.main.GridView', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-gridView',
    alias: 'view.gridView',
    id: 'id-gridview',
    reference: 'id-gridview',
    autoscroll: true,
    maxWidth: 800,
    frame: true,
    title: 'Select Fields',

    margin: "10 0 0 0",
    padding: '25 25 25 25',

    items: [{
        id: 'gridView',
        xtype: 'mainlist',
        height: 450,
        autoscroll: true,
    },
    {
        layout: {
            type: 'hbox',
            align: 'middle',
            pack: 'start'
        },
        margin: '25 0 0 0',
        items: [{
            xtype: 'button',
            id: 'cancel-btn',
            text: 'Cancel',
            tooltip: 'Remove the Grid',
            handler: 'CancelJsonGeneration',
        }, {
            xtype: 'button',
            id: 'genBtn',
            text: 'Generate JSON',
            tooltip: 'Generate and View JSON Data',
            handler: 'GenerateJsonHandle',
        }]
    },
    ]
});
