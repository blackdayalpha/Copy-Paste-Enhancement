/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ExtractApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    GDataArr: [],
    bind: {
        GJsonData: '{jsonData}',
    },


    getPastedCode: function () {
        let LCopiedData;
        // let personnelStore = Ext.getStore('Personnel');
        let LDataObjArr
        navigator.clipboard.readText().then(clipText => {
            LCopiedData = clipText;
            let LSplitters = ["\n", "\r"]
            this.GDataArray = this.pvtSplitData(LCopiedData, LSplitters);

            LDataObjArr = this.pvtMakeDataForStore(this.GDataArray);
            return LDataObjArr;
        }).then((p_objFormattedData) => {
            this.generateGrid(p_objFormattedData)
        })
    },
    generateJson: function () {
        const store = Ext.getStore('Personnel');
        const items = store.getData().items;

        let jsonObjects = [];
        let currentObject = {};

        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const mode = item.get('mode');
            const data = item.get('data');

            if (mode === 'name') {
                if (Object.keys(currentObject).length !== 0) {
                    jsonObjects.push(currentObject);
                    currentObject = {};
                }
                currentObject.name = data;
            } else {
                currentObject.description = (currentObject.description || '') + data;
            }
        }

        if (Object.keys(currentObject).length !== 0) {
            jsonObjects.push(currentObject);
        }

        // const jsonObj = JSON.stringify(jsonObjects, null, 2);
        // this.GJsonData = jsonObj;

        // // console.log("before", this.GJsonData);
        // console.log("after ", this.GJsonData);
        // console.log(this.getJsonData())
        // // bind this.GJsonData to the jsonData var in viewModel
        // // Update jsonData in view model
        // var viewModel = this.getViewModel();
        // if (viewModel) {
        //     viewModel.set('jsonData', jsonObj);
        // }

        // Ext.getCmp('gridView').destroy();
        // Ext.getCmp('genBtn').destroy();
        // // .get('genBtn').disable = true;
        // this.generateDisplayArea();
        const jsonObj = JSON.stringify(jsonObjects, null, 2);
        this.GJsonData = jsonObj;

        // Update jsonData in view model
        var viewModel = this.getViewModel();
        if (viewModel) {
            viewModel.set('jsonData', jsonObj);
        }

        // console.log("before", this.GJsonData);
        Ext.getCmp('gridView').destroy();
        Ext.getCmp('genBtn').destroy();
        console.log("after ", this.GJsonData);
        console.log(this.getJsonData())

        // .get('genBtn').disable = true;
        this.generateDisplayArea();
    },
    getJsonData: function () {
        return this.GJsonData;
    },

    generateDisplayArea: function () {

        var viewModel = this.getViewModel();
        console.log(viewModel.data.jsonData)

        let LDisplayArea = Ext.create('view.displayArea');
        this.getView().add(LDisplayArea)

    },

    generateGrid: function (p_objFormattedData) {
        let Grid = Ext.create("view.gridView");
        this.updateStoreData(p_objFormattedData);
        this.getView().add(Grid);
        // this.updateStoreData(p_objFormattedData);
        console.log(this.GDataArray)

    },

    pvtMakeDataForStore: function (p_arrData) {
        return p_arrData.map(item => ({ data: item }));
    },

    //problem
    //text repeating
    pvtSplitData: function (data, splitters) {
        let LSplittedData = data.split(/\r?\n/);
        return LSplittedData.filter(line => line.trim() !== "");
        // let splitData = [];
        // splitters.forEach(splitter => {
        //     splitData = splitData.concat(data.split(new RegExp(splitter)));
        // });
        // return splitData.filter(line => line.trim() !== "");
    },

    updateStoreData: function (p_arrData) {
        var store = Ext.getStore('Personnel');
        console.log(store)
        if (store) {
            store.removeAll();
            store.loadData(p_arrData);
        } else {
            console.error('Store "datastore" not found.');
        }
    },
    onItemSelected: function (sender, record) {
        console.log(Ext.getStore('Personnel'))
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});



// let LCopiedData;
// // let personnelStore = Ext.getStore('Personnel');
// let LDataObjArr
// navigator.clipboard.readText().then(clipText => {
//     LCopiedData = clipText;
//     let LSplitters = ["\n"]
//     this.GDataArray = this.pvtSplitData(LCopiedData, LSplitters);

//     LDataObjArr = this.pvtMakeDataForStore(this.GDataArray);
//     return LDataObjArr;
// }).then((p_objFormattedData) => {
//     let Grid = Ext.create("view.mainlist");
//     this.getView().add(Grid);
//     this.updateStoreData(p_objFormattedData);
//     console.log(this.GDataArray)
// })
