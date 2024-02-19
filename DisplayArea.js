Ext.define('ExtractApp.view.main.DisplayArea', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-displayArea',
    alias: 'view.displayArea',

    controller: 'main',
    viewModel: 'main',
    layout: 'hbox',
    items: [{
        xtype: 'displayfield',
        bind: {
            value: '{displayExtractedData}',
        },
        emptyText: 'hello',
        flex: 1
    },
    {
        xtype: 'displayfield',
        bind: {
            value: '{jsonData}',
        },
        flex: 1
    }
    ]
});
