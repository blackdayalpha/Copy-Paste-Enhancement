Ext.define('ExtractApp.view.main.DisplayArea', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-displayArea',
    alias: 'view.displayArea',

    // controller: 'main',
    // viewModel: 'main',
    id: 'id-display-content',
    alert: console.log('Display Area created!'),
    items: [
        {
            layout: 'hbox',
            id: 'display-area',
            items: [{
                xtype: 'panel',
                emptyText: 'hello',
                title: 'Formatted Data',
                flex: 1,
                bind: { html: '{getFormattedOutputFromJson}' },
                cls: 'display-item',
                height: 350,
                scrollable: true
            },
            {
                xtype: 'panel',
                // bind: '{JData}',
                title: 'JSON',
                bind: {
                    html: '{JData}'
                },
                flex: 1,
                height: 350,
                cls: 'display-item',
                scrollable: true,
            }]
        },
        {
            xtype: 'button',
            id: 'reset-btn',
            text: 'Reset',
            handler: 'ResetView',
        }
    ]
});
