/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ExtractApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    GDataArr: [],

    getPastedCode: function () {
        let LCopiedData;
        let LDataObjArr;
        let grid = Ext.getCmp("id-gridview");
        if (grid) return
        navigator.clipboard.readText().then(clipText => {
            LCopiedData = clipText;
            let LSplitters = ["\n", "\r"]
            this.GDataArray = this.pvtSplitData(LCopiedData, LSplitters);

            LDataObjArr = this.pvtMakeDataForStore(this.GDataArray);
            return LDataObjArr;
        }).then((p_objFormattedData) => {
            console.log(p_objFormattedData)
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

        const jsonObj = JSON.stringify(jsonObjects, null, 2);
        this.GJsonData = jsonObj;

        // Update jsonData in view model
        var viewModel = this.getViewModel();
        if (viewModel) {
            viewModel.set('JData', jsonObj);
        }
        console.log(viewModel.data)

        Ext.getCmp('gridView').destroy();
        Ext.getCmp('genBtn').destroy();
        Ext.getCmp('cancel-btn').destroy();
        console.log("after ", this.GJsonData);

        this.generateDisplayArea();
    },

    getJsonData: function () {
        return this.GJsonData;
    },
    CancelJsonGeneration: function () {
        Ext.getCmp('id-gridview').destroy()
        // Ext.getCmp('gridView').destroy();
        // Ext.getCmp('genBtn').destroy();
        // Ext.getCmp('cancel-btn').destroy();
    },
    ResetView: function () {
        Ext.getCmp('id-display-content').destroy()
        // Ext.getCmp('display-area').destroy();
        // Ext.getCmp('reset-btn').destroy();
    },

    generateDisplayArea: function () {
        var viewModel = this.getViewModel();
        console.log(viewModel.data.JData)

        let LDisplayArea = Ext.create('view.displayArea');
        this.pvtAppendItemToContainer(LDisplayArea)
        // this.getView().add(LDisplayArea)
    },

    generateGrid: function (p_objFormattedData) {
        let Grid = Ext.create("view.gridView");
        this.updateStoreData(p_objFormattedData);
        this.pvtAppendItemToContainer(Grid)
        // this.getView().add(Grid);
    },

    pvtAppendItemToContainer(p_objItem) {
        let LShowContainer = Ext.getCmp('show-container');

        LShowContainer.removeAll();
        LShowContainer.add(p_objItem);
    },

    pvtMakeDataForStore: function (p_arrData) {
        return p_arrData.map(item => ({ data: item }));
    },

    //problem
    //text repeating
    pvtSplitData: function (data, splitters) {
        // Joining splitters to create a single regular expression for tag removal
        const tagsRegex = new RegExp(`<[^>]+>`, 'g');

        // Remove tags
        const cleanData = data.replace(tagsRegex, '');
        console.log(tagsRegex)
        // Joining splitters to create a single regular expression for splitting
        const splitRegex = new RegExp(splitters.join('|'), 'g');

        // Split data based on splitters
        const splitData = cleanData.split(splitRegex);

        // Filter out empty strings
        return splitData.filter(str => str.trim() !== '');

    },

    updateStoreData: function (p_arrData) {
        var store = Ext.getStore('Personnel');
        // console.log(store)
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

    displayExtractedData: function (displayField) {
        let LoutputHTML = "";
        var viewModel = this.getViewModel();
        let LDataArr = viewModel.data.JData;
        console.log(LDataArr)
        for (let data of LDataArr) {
            let LComponentHtml = `<h3 class= 'data-head'>${data.name}</h3> <p class= 'data-body'>${data.description}</p><span class="diff-line"></span>`;
            LoutputHTML += LComponentHtml;
        }
        displayField.setRawValue(LoutputHTML);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});



// const combinedPattern = new RegExp(
//     "(" +
//     splitters.join("|") +
//     "|(<li[^>]*>.*?</li>)|(<\\/?ol>|<\\/?ul>))",
//     "g"
// );

// // Split the data using the combined pattern
// let splitData = data.split(combinedPattern);
// splitData = splitData.filter(value => value != undefined)
// console.log(splitData)
// // Filter out empty lines and list item tags, and return the result
// return splitData.filter(line => line.trim() !== "" && !line.startsWith("<li"));

// const combinedSplitter = new RegExp("(" + splitters.join("|") + ")", "g");

// // Split the data using the combined splitter
// const splitData = data.split(combinedSplitter);

// // Filter out empty lines and return the result
// return splitData.filter(line => line.trim() !== "");
// // let LSplittedData = data.split(/\r?\n/);
// // return LSplittedData.filter(line => line.trim() !== "");
// let splitData = [];
// splitters.forEach(splitter => {
//     splitData = splitData.concat(data.split(new RegExp(splitter)));
// });
// return splitData.filter(line => line.trim() !== "");

// -----

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

// --------


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


