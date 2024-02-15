Ext.define('ExtractApp.view.main.MyGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'mygrid',

    title: 'My Grid',
    viewModel: 'main',

    columns: [
        {
            text: 'Field Name',
            width: 150,
            xtype: 'widgetcolumn',
            dataIndex: 'mode',
            widget: {
                xtype: 'combo',
                bind: '{record.mode}',
                store: {
                    storeId: 'opt',
                    fields: ['option', 'id'],
                    data: [
                        { option: 'Local', id: 'name' },
                        { option: 'Remote', id: 'desc' }
                    ]
                },
                displayField: 'option',
                valueField: 'id',
            },
            flex: 1
        }, {
            text: 'Data', dataIndex: 'data', flex: 3,
        }
    ],

    // plugins: {
    //     ptype: 'cellediting',
    // },

    tbar: {
        items: [
            {
                xtype: 'button',
                text: 'Save',
                handler: 'onSaveButtonClick' // Link the button to the handler method in the ViewController
            }
        ]
    },
    store: {
        type: 'personnel'
    }
});
