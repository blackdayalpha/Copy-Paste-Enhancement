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
    GDataArr: [],
    init: function () {
        let LControllerObj = Ext.create('controller.main');
        this.GDataArr = LControllerObj.GDataArray;
    },


    title: 'Data Grid',
    store: {
        type: 'personnel'
    },
    // store: {
    //     fields: ['mode', 'data'],
    //     data: this.GDataArr.map(item => (item))
    // },
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
                        { option: 'Name', id: 'name' },
                        { option: 'Description', id: 'desc' }
                    ]
                },
                displayField: 'option',
                valueField: 'id',
            },
            flex: 1
        },
        { text: 'Data', dataIndex: 'data', flex: 2 }
    ]

});
// store: {
//     fields: ['mode', 'data'],
//     data: p_arrData.map(item => ({ data: item }))
// },
// columns: [
//     {
//         text: 'Field Name',
//         width: 150,
//         xtype: 'widgetcolumn',
//         dataIndex: 'mode',
//         widget: {
//             xtype: 'combo',
//             bind: '{record.mode}',
//             store: {
//                 storeId: 'opt',
//                 fields: ['option', 'id'],
//                 data: [
//                     { option: 'Name', id: 'name' },
//                     { option: 'Description', id: 'desc' }
//                 ]
//             },
//             displayField: 'option',
//             valueField: 'id',
//         },
//         flex: 1
//     },
//     { text: 'Data', dataIndex: 'data', flex: 2 }
// ]
