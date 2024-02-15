
Ext.define('ExtractApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: ['ExtractApp.store.Personnel'],

    GDataArray: [],

    generateGrid: function () {
        let clipboardDataRead = true;
        navigator.clipboard.readText()
            .then(clipText => {
                let LcopiedData = clipText;
                let LSplitters = ["\n"]
                this.GDataArray = this.pvtSplitData(LcopiedData, LSplitters);

                let LDataObjArr = this.pvtMakeDataForStore(this.GDataArray);
                console.log(this.GDataArray)
                this.updateStoreData(LDataObjArr);
            })
            .catch(error => {
                console.log(error);
            });
    },

    pvtMakeDataForStore: function (p_arrData) {
        return p_arrData.map(item => ({ data: item }));
    },

    pvtSplitData: function (data, splitters) {
        let LSplittedData = data.split(/\r?\n/);
        return LSplittedData.filter(line => line.trim() !== "");
    },

    updateStoreData: function (p_arrData) {
        var store = this.getView().getStore();
        console.log(store)
        if (store) {
            store.removeAll();
            store.loadData(p_arrData);
        } else {
            console.error('Store "datastore" not found.');
        }
    },

    onSaveButtonClick: function () {
        var store = Ext.getStore("personnel");
        if (store) {
            store.each(record => {
                var comboValue = record.get('mode');
                console.log('Selected mode:', comboValue);
            });
        } else {
            console.error('Store "personnel" not found.');
        }
    }
});




















/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
//  */
// Ext.define('ExtractApp.view.main.MainController', {
//     extend: 'Ext.app.ViewController',
//     alias: 'controller.main',

//     requires: ['store.personnel'],

//     GDataArray: [],
//     generateGrid: function () {

//         navigator.clipboard.readText().then((clipText) => {
//             let LcopiedData = clipText;
//             console.log(clipText);
//             let LSplitters = ["\n"]
//             this.GDataArray = this.pvtSplitData(LcopiedData, LSplitters)

//             LDataObjArr = this.pvtMakeDataForStore(this.GDataArray);

//             this.updateStoreData(LDataObjArr);
//         }).catch((error) => { console.log(error) })

//         // var LGrid = Ext.create("view.mainlist");
//         // this.getView().add(LGrid);
//     },

//     pvtMakeDataForStore: function (p_arrData) {
//         LDataArr = p_arrData.map(item => ({ data: item }));
//         console.log(LDataArr)
//         return LDataArr
//     },


//     pvtSplitData: function (data, splitters) {
//         // return data.split(splitters[0]);
//         let LSplittedData = data.split(/\r?\n/);
//         LSplittedData = LSplittedData.filter(line => line.trim() !== "");

//         return LSplittedData;
//     },
//     updateStoreData: function (p_arrData) {

//         var store = Ext.getStore('personnel'); // Get reference to the store

//         if (store) {
//             store.removeAll(); // Clear the existing data from the store
//             store.loadData(p_arrData); // Load the new data into the store
//         } else {
//             console.error('Store "personnel" not found.');
//         }
//         // var grid = Ext.create('view.mainlist');
//         // this.getView().add(grid);

//         // var grid = Ext.create("view.mainlist", {
//         //     store: {
//         //         fields: ['mode', 'data'],
//         //         data: p_arrData.map(item => (item))
//         //     },
//         //     columns: [
//         //         {
//         //             text: 'Field Name',
//         //             width: 150,
//         //             xtype: 'widgetcolumn',
//         //             dataIndex: 'mode',
//         //             widget: {
//         //                 xtype: 'combo',
//         //                 bind: '{record.mode}',
//         //                 store: {
//         //                     storeId: 'opt',
//         //                     fields: ['option', 'id'],
//         //                     data: [
//         //                         { option: 'Name', id: 'name' },
//         //                         { option: 'Description', id: 'desc' }
//         //                     ]
//         //                 },
//         //                 displayField: 'option',
//         //                 valueField: 'id',
//         //             },
//         //             flex: 1
//         //         },
//         //         { text: 'Data', dataIndex: 'data', flex: 2 }
//         //     ]
//         // });
//         // this.getView().add(grid);
//     },


//     // var store = Ext.getStore('options');
//     // console.log(store)
//     // if (store) {
//     //     // Clear the existing data from the store
//     //     store.removeAll();

//     //     // Load the new data into the store
//     //     store.loadData(p_arrData);
//     // } else {
//     //     console.error('Store  not found.');
//     // }
//     // console.log(store)
//     // var view = Ext.getCmp('main');

//     // // Step 2: Access the view model
//     // var viewModel = view.getStore();
//     // console.log(viewModel)
//     // store.data = p_arrData.map(item => ({ data: item }))
//     // getData: function () {
//     //     // Step 1: Get a reference to the view
//     //     // For example, if you have the ID of the view
//     //     // var view = Ext.getCmp('yourViewId');

//     //     // Step 2: Access the view model
//     //     var viewModel = this.getView().getViewModel();

//     //     // Step 3: Access ViewModel data
//     //     var data = viewModel.getData();
//     //     console.log(data); // Output the entire data object

//     //     // Alternatively, you can access specific properties directly
//     //     var someProperty = viewModel.get('record');
//     //     console.log(someProperty); // Output the value of 'propertyName'

//     // },
//     onSaveButtonClick: function () {
//         // Get reference to the grid

//         // Get reference to the store
//         var store = Ext.getStore("personnel");
//         console.log(store)
//         // Iterate over each record in the store
//         store.each(function (record) {
//             // Get the combo value for each record
//             var comboValue = record.get('mode'); // Assuming 'mode' is the field name

//             // Do something with the combo value
//             // For example, you can save it to the server or perform any other action
//             console.log('Selected mode:', comboValue);
//         });
//     }
// });
