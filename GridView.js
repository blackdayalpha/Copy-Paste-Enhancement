Ext.define('ExtractApp.view.main.GridView', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-gridView',
    alias: 'view.gridView',
    id: 'id-gridview',

    // controller: 'main',
    // viewModel: 'main',
    autoscroll: true,

    items: [{
        id: 'gridView',
        xtype: 'mainlist',
        height: 400,
        autoscroll: true,
    },
    {
        layout: 'hbox',
        items: [{
            xtype: 'button',
            id: 'cancel-btn',
            text: 'Cancel',
            handler: 'CancelJsonGeneration',
        }, {
            xtype: 'button',
            id: 'genBtn',
            text: 'Generate JSON',
            handler: 'generateJson',
        }]
    },


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
