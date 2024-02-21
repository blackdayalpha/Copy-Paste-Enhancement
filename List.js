/**
 * This view is an example list of people.
 */
Ext.define('ExtractApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    alias: 'view.mainlist',
    requires: [
        'ExtractApp.store.Personnel'
    ],
    margin: '0 0 15 0',
    padding: '10 10 10 10',
    border: true,

    markDirty: false,
    store: {
        type: 'personnel'
    },

    columns: [{
        text: 'Field Name',
        width: 150,
        xtype: 'widgetcolumn',
        dataIndex: 'mode',
        value: 'name',
        markDirty: false,

        widget: {
            xtype: 'combo',
            store: {
                type: 'option'
            },
            displayField: 'option',
            valueField: 'id',
            listeners: {
                select: 'AddSelectedOptionToStore'
            }
        },
        flex: 1
    },
    {
        text: 'Data', dataIndex: 'data', flex: 3, sortable: false
    }
    ],
});
