/**
 * This class represents the display area for formatted and JSON data in the application.
 * @class ExtractApp.view.main.DisplayArea
 * @extends Ext.panel.Panel
 * @xtype app-displayArea
 * @alias view.displayArea
 */
Ext.define('ExtractApp.view.main.DisplayArea', {
    extend: 'Ext.panel.Panel',
    alias: 'view.displayArea',

    reference: 'refDisplayArea',
    maxWidth: '100%',
    items: [
        {
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            id: 'display-area',
            defaults: {
                xtype: 'panel',
                cls: 'display-item',
                height: 550,
                scrollable: true,
                flex: 1,
                maxWidth: 800,
            },
            items: [{
                title: 'Formatted Data',
                cls: 'panel-with-scroll',
                bind: { html: '{getFormattedOutputFromJson}' },
                margin: '0 30 20 0',
                scrollable: {
                    x: false
                },

                border: true,
            },
            {
                title: 'JSON Data',
                layout: 'fit',
                items: [{
                    xtype: 'textareafield',
                    cls: 'clsTextareaReadonly',
                    bind: '{jData}',
                    editable: false,
                }],
                margin: '0 0 20 30'
            }]
        },
        {
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            items: [{
                xtype: 'button',
                id: 'idResetBtn',
                text: 'Reset',
                tooltip: 'Remove and Delete JSON Data',
                margin: '20 0 20 15',
                handler: 'ResetView',
            }]
        }
    ]
});
