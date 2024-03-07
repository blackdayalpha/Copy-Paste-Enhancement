/**
 * This class represents the grid view for selecting fields in the application.
 * It extends Ext.panel.Panel and provides options to select fields and generate JSON data.
 * @class ExtractApp.view.main.GridView
 * @extends Ext.panel.Panel
 * @xtype app-gridView
 * @alias view.gridView
 */
Ext.define('ExtractApp.view.main.GridView', {
    extend: 'Ext.panel.Panel',
    alias: 'view.gridView',

    reference: 'refGridView',

    autoscroll: true,
    maxWidth: 800,
    frame: true,
    title: 'Select Fields',

    margin: "10 0 0 0",
    padding: '25 25 25 25',

    items: [{ 
        reference: 'gridView',
        xtype: 'mainlist',
        height: 450,
        autoscroll: true,
        loadMask: true,
    },
    {
        layout: {
            type: 'hbox',
            align: 'middle',
            pack: 'start'
        },
        margin: '10 0 0 0',
        items: [{
            xtype: 'button',
             text: 'Cancel',
            tooltip: 'Remove the Grid',
            handler: 'CancelJsonGeneration',
        }, {
            xtype: 'button',
             text: 'Generate JSON',
            tooltip: 'Generate and View JSON Data',
            handler: 'HandleOnGenerateJsonClick',
        }, {
            xtype: 'button',
            text: 'Paste Again',
            tooltip: 'Generate and View JSON Data',
            handler: 'HandleOnPasteAgainBtnClick',
        }]
    },
    ]
});
