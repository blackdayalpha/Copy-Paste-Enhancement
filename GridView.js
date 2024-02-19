Ext.define('ExtractApp.view.main.GridView', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-gridView',
    alias: 'view.gridView',

    controller: 'main',
    viewModel: 'main',

    items: [{
        id: 'gridView',
        xtype: 'mainlist',
    },
    {
        xtype: 'button',
        id: 'genBtn',
        text: 'Generate JSON',
        handler: 'generateJson'
    }

        // {
        //     title: 'Home',
        //     iconCls: 'fa-home',
        //     // The following grid shares a store with the classic version's grid as well!
        //     items: [{
        //         xtype: 'mainlist'
        //     }]
        // }
    ]
});
