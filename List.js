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

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        // { text: 'Field Type', dataIndex: 'mode', flex: 2 },
        {
            text: 'Field Name',
            width: 150,
            xtype: 'widgetcolumn',
            dataIndex: 'mode',
            widget: {
                xtype: 'combo',
                // bind: '{record.mode}',
                store: {
                    type: 'option'
                    // storeId: 'opt',
                    // fields: ['option', 'id'],
                    // data: [
                    //     { option: 'Name', id: 'name' },
                    //     { option: 'Description', id: 'desc' }
                    // ]
                },
                displayField: 'option',
                valueField: 'id',
                listeners: {
                    select: function (combo, record) {
                        var mainGrid = combo.up('gridpanel'); // Adjust the selector based on your application structure
                        while (mainGrid && !mainGrid.isXType('gridpanel')) {
                            mainGrid = mainGrid.up('gridpanel');
                        }

                        if (mainGrid) {
                            var selectionModel = mainGrid.getSelectionModel();
                            var recordIndex = mainGrid.getStore().indexOf(combo.getWidgetRecord());
                            selectionModel.select(recordIndex);
                            // var grid = combo.up('grid');
                            // var selectionModel = grid.getSelectionModel();
                            // var selectedRecord = selectionModel.getSelection();
                            // console.log(selectedRecord);
                            var selectedRecord = selectionModel.getSelection()[0];
                            selectedRecord.set('mode', record.get('id'));
                        } else {
                            console.error('Main grid not found.');
                        }
                        // console.log(combo)
                        // var grid = combo.getBoundList().ownerGrid; // Get the grid where the combo box is located
                        // var selectionModel = grid.getSelectionModel();

                        // var recordIndex = grid.getStore().indexOf(combo.getWidgetRecord()); // Get the index of the record associated with the combo box

                        // // Select the corresponding row
                        // selectionModel.select(recordIndex);
                        // console.log()
                        // var grid = combo.up('grid');
                        // var selectionModel = grid.getSelectionModel();
                        // var selectedRecord = selectionModel.getSelection();
                        // console.log(selectedRecord);
                        // selectedRecord.set('mode', record.get('id'));
                    }
                }
            },
            flex: 1
        },
        { text: 'Data', dataIndex: 'data', flex: 3 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});


// listeners: {
//     select: function (combo, record) {
//         var mainGrid = combo.up('gridpanel'); // Adjust the selector based on your application structure
//         while (mainGrid && !mainGrid.isXType('gridpanel')) {
//             mainGrid = mainGrid.up('gridpanel');
//         }

//         if (mainGrid) {
//             var selectionModel = mainGrid.getSelectionModel();
//             var recordIndex = mainGrid.getStore().indexOf(combo.getWidgetRecord());
//             selectionModel.select(recordIndex);
//             // var grid = combo.up('grid');
//             // var selectionModel = grid.getSelectionModel();
//             // var selectedRecord = selectionModel.getSelection();
//             // console.log(selectedRecord);
//             var selectedRecord = selectionModel.getSelection()[0];
//             selectedRecord.set('mode', record.get('id'));
//         } else {
//             console.error('Main grid not found.');
//         }
//         // console.log(combo)
//         // var grid = combo.getBoundList().ownerGrid; // Get the grid where the combo box is located
//         // var selectionModel = grid.getSelectionModel();

//         // var recordIndex = grid.getStore().indexOf(combo.getWidgetRecord()); // Get the index of the record associated with the combo box

//         // // Select the corresponding row
//         // selectionModel.select(recordIndex);
//         // console.log()
//         // var grid = combo.up('grid');
//         // var selectionModel = grid.getSelectionModel();
//         // var selectedRecord = selectionModel.getSelection();
//         // console.log(selectedRecord);
//         // selectedRecord.set('mode', record.get('id'));
//     }
// }
