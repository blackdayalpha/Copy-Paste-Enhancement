/**
 * Controller class for the main view of the application.
 * @class ExtractApp.view.main.MainController
 * @extends Ext.app.ViewController
 */
Ext.define('ExtractApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires: ['ExtractApp.view.main.Utility.GenUtils'],

    /**
    * Displays a toast message.
    * @param {String} s The message to display.
    */
    showToast: function (s) {
        Ext.toast({
            html: s,
            closable: false,
            align: 't',
            slideDUration: 200,
            maxWidth: 400
        });
    },

    /**
     * @description Ask User for confirmation to Paste the Data
     * @method HandleOnClickingPasteBtn
     * @public
     */
    HandleOnClickingPasteBtn: function () {
        let LMe = this;
        Ext.Msg.show({
            title: 'Paste Data',
            message: 'Do you want to Paste Data',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (btn) {
                if (btn === 'yes') {
                    LMe.ExtractDataFromClipboard();
                }
            }
        });
    },

    /**
     * @method ExtractDataFromClipboard
     * @description Retrieves text from the clipboard, splits it based on specified splitters,
     * and generates formatted data for display in a grid.
     * @private
     */
    ExtractDataFromClipboard: async function () {
        let LMe = this;

        let LRawDataObj = await this.pvtGetClipboardText(); // Access copiedData using getConfig method  
        if (!LRawDataObj) { return }
        console.log(LRawDataObj.text)
        let LSplitters = ["paragraph"];
        const LIsCopiedDataHtml = LRawDataObj.type == "text/html";

        const GDataArray = clsHeaderUtils.SplitDataUsingInputFormatters(LRawDataObj.text, LSplitters);
        console.log(GDataArray)
        if(!GDataArray)return
        LStoreData = LMe.pvtGetDataForStore(GDataArray);

        LMe.pvtGenerateGrid(LStoreData);

    },

    // pvtSetStoreAndCreateGrid : function (p_arr) {},
    pvtGetClipboardText: async function () {
        try {
            // Check if clipboard API is supported
            if (!navigator.clipboard) {
                throw new Error("Clipboard API not supported by your browser");
            }

            const items = await navigator.clipboard.read(["text/uri-list"]);

            if (!items || items.length === 0) {
                throw new Error("Clipboard is empty");
            }

            // const type = items[0].types.find(type => ["text/html" ].includes(type));
            const htmlIndex = items[0].types.findIndex(type => type === "text/html");
            const plainIndex = items[0].types.findIndex(type => type === "text/plain");
             const url = items[0].types.findIndex(type => type === "text/uri-list");
            console.log(url)
            let prioritizedType;
            if(url !== -1)
                prioritizedType = "text/uri-list";
            else if (htmlIndex !== -1) {
                // Found "text/html"
                prioritizedType = "text/html";
            } else if (plainIndex !== -1) {
                // Fallback to "text/plain"
                prioritizedType = "text/plain";
            } else {
                throw new Error("No supported text format found in the clipboard");
            }
        
            const blob = await items[0].getType(prioritizedType);

            if (!blob) {
                throw new Error("Failed to retrieve text data for the given type");
            }

            const text = await blob.text();
            return { text:text, type:prioritizedType };
        } catch (error) { 
            console.log(error)
            // TS.App.Feedback.ShowErrMsg("Error while accessing the clipboard");
            return null; // Or handle the error differently as needed
        }
    },

    HandleOnPasteAgainBtnClick : function(){
        let LMe = this;
        Ext.Msg.show({
            title: 'Paste New Data',
            message: 'Extracted Data will be removed',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (btn) {
                if (btn === 'yes') {

                    LMe.ExtractDataFromClipboard();
                }
            }
        });
    },

    /**
     * @public
     * Adds the selected option to the store.
     * @param {Object} p_objCombo The combo box component.
     * @param {Object} p_arrRecord The selected record.
     */
    HandleOnSelectingFieldType: (p_objCombo, p_arrRecord) => {
        let LMainGrid = Ext.getCmp('idMainList');

        if (LMainGrid) {

            const LSelectionModel = LMainGrid.getSelectionModel();
            if (!LSelectionModel) { return }


            const LGetStore = LMainGrid.getStore();
            if (!LGetStore) return

            const LRecordIndex = LGetStore.indexOf(p_objCombo.getWidgetRecord());

            LSelectionModel.select(LRecordIndex);
            const LSelectedRecord = LSelectionModel.getSelection()[0];
            if (!LSelectedRecord) return

            LSelectedRecord.set('fieldType', p_arrRecord.get('id'));
        } else {
            this.showToast('Main grid not found.')
        }
    },

    /**
     * @public
     * @description Generates JSON data based on the data in the grid store and updates the view model.
     */
    HandleOnGenerateJsonClick: function () {
        let LMe = this;

        const LCurrentStore = Ext.getStore('GridDataStore');
        if (!LCurrentStore) {
            LMe.showToast("Error while Getting Store");
            return;
        }


        const LJsonObjectsArr = [];
        let LCurrentObject = {};
        let isFirstItem = true;
        for (let i = 0; i < LCurrentStore.getCount(); i++) {
            const LItemObj = LCurrentStore.getAt(i);

            if (!LItemObj) {
                LMe.pvtShowError("Cannot Generate JSON");
                return;
            }

            const LCurrentRowFieldType = LItemObj.get('fieldType');
            let LCurrentData = LItemObj.get('extractedData');

            if (isFirstItem && LCurrentRowFieldType === 'desc') {
                LMe.showToast("First item must have dataField 'Name'");
                return;
            }

            if (LCurrentRowFieldType === 'desc') {
                LCurrentObject.description = (LCurrentObject.description || '') + LCurrentData + ' ';
            } else if(LCurrentRowFieldType === 'idSkipRow'){
                continue;
            }
            else{
                LCurrentData = clsHeaderUtils.RemoveTagsFromNameField(LCurrentData);
                if (LCurrentData === null) continue
                isFirstItem = false;
                if (Object.keys(LCurrentObject).length !== 0) {
                    LJsonObjectsArr.push(LCurrentObject);
                }
                LCurrentObject = { name: LCurrentData };
            }
        }

        if (Object.keys(LCurrentObject).length !== 0) {
            LJsonObjectsArr.push(LCurrentObject);
        }

        const LJsonGenerated = JSON.stringify(LJsonObjectsArr, null, 2);

        LMe.pvtSetJsonDataInViewModel(LJsonGenerated);

        // destroy grid
        LMe.CancelJsonGeneration();
        // generate display area
        LMe.pvtGenerateDisplayArea();
    },


    pvtShowError: function (p_strErrorMessage) {
        this.showToast(p_strErrorMessage);
    },


    pvtSetJsonDataInViewModel: function (p_strJsonData) {
        // Update jsonData in view model
        var LCurrentViewModel = this.getViewModel();
        if (LCurrentViewModel) {
            LCurrentViewModel.set('jData', p_strJsonData);
        }
    },

    /**
     * @public
     * Cancels the generation of JSON data.
     */
    CancelJsonGeneration: function () {
        let LMe = this;
        let LGridView = LMe.lookupReference('refGridView');
        if (LGridView) {
            LGridView.destroy()
        }
    },

    /**
     * @public
     * Resets the view.
     */
    ResetView: function () {
        let LMe = this;
        Ext.Msg.show({
            title: 'Reset Data',
            message: 'Do you want to Reset?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (btn) {
                if (btn === 'yes') {
                    let LDisplayView = LMe.lookupReference('refDisplayArea');
                    if (LDisplayView) {
                        LDisplayView.destroy()
                    }
                }
            }
        });
    },

    /**
     * @public
     * Sets the Default value of the combobox before Rendering it .
     * @param {Object} p_objCombobox The Combobox Item
     */
    HandleOnAfterRenderingSelectDefault: function (p_objCombobox) {
        // var LDefaultValue = p_objCombobox.defaultValue;
        // // Set the default value
        // p_objCombobox.setValue(LDefaultValue);
        setTimeout(() => {
            var LDefaultValue = p_objCombobox.defaultValue;
            // Set the default value
            p_objCombobox.setValue(LDefaultValue);
        }, 0);
    },

    /**
     * @private
     * Generates the display area.
     */
    pvtGenerateDisplayArea: function () {
        let LDisplayArea = Ext.create('view.displayArea');
        this.pvtAppendItemToContainer(LDisplayArea)

    },

    /**
     * @private
     * Generates the grid and updates its store data.
     * @param {Object[]} p_objFormattedData An array of formatted data objects.
     */
    pvtGenerateGrid: function (p_objFormattedData) {   
        let LGridComponent = Ext.create("view.gridView");
        this.pvtUpdateStoreData(p_objFormattedData);
        this.pvtAppendItemToContainer(LGridComponent)
    },

    /**
     * @private
     * Appends an item to the container.
     * @param {Object} p_objItem The item to append.
     */
    pvtAppendItemToContainer(p_objItem) {
        // let LShowContainer = this.lookupReference('refParentContainer');
        let LShowContainer = Ext.getCmp('idParentContainer');
        try {
            LShowContainer.removeAll();
            LShowContainer.add(p_objItem);
        } catch (err) {
            this.showToast('Error while Displaying the Grid. Please Try Again')
            this.CancelJsonGeneration()
        }
    },

    /**
     * @private
     * Formats data for the store.
     * @param {string[]} p_arrData An array of data strings.
     * @returns {Object[]} An array of formatted data objects.
     */
    pvtGetDataForStore: function (p_arrData) {
        return p_arrData.map(item => ({ fieldType: 'name', extractedData: item }));
    },

    /**
     * @private
     *@description Updates the store data with the provided array of data objects.
     * @param {Object[]} p_arrData An array of data objects.
     */
    pvtUpdateStoreData: function (p_arrData) {
        var LCurrentStore = Ext.getStore('GridDataStore');
        if (LCurrentStore) {
            LCurrentStore.removeAll();
            LCurrentStore.loadData(p_arrData);
        } else {
            this.showToast('Store Not Found')
        }
    },
});



        // let LGridPreview = LMe.lookupReference("refGridView");
        // // If grid already exists   
        // if (LGridPreview) { LMe.CancelJsonGeneration() }

        // navigator.clipboard.readText().then(clipText => {
        //     let LSplitters = ["paragraph", "division", "bullet","comment","newline"];
        //     //Use alternateClassName or alias
        //     const GDataArray = clsHeaderUtils.SplitDataUsingInputFormatters(clipText, LSplitters);
        //     let LStoreData = LMe.pvtGetDataForStore(GDataArray);

        //     LMe.pvtGenerateGrid(LStoreData);
        // }).catch(err => {
        //     LMe.showToast("Please Allow to read Clipbaord");
        // })

        // navigator.clipboard.read().then(items => {
        //     items[0].getType("text/html").then(blob => {
        //         blob.text().then(text => { console.log(text) });
        //     });
        // });



        

        // navigator.clipboard.read().then(items => {
        //     // items[0].getTypes("text/html").then(blob =>{
        //     //     console.log(blob)
        //     // })

        //     console.log(items[0])
        //     items[0].getType("text/html").then(blob => {
        //         blob.text().then(text => { console.log(text) });
        //     });
        // })
        // let str;
        // this.getClipboardText((text) => {
        //     if (text) {

        //         console.log(text); // Output retrieved text
        //     } else {
        //         console.log("No compatible text found in the clipboard.");
        //     }
        // });

        
        // (async () => {
        //     try {
        //         const items = await navigator.clipboard.read();
        //         if (items[0].types.includes("text/html")) {
        //             const blob = await items[0].getType("text/html");
        //             if (blob) {
        //                 const text = await blob.text();
        //                 let LSplitters = [ "paragraph","newline", "bullet"]; 
        //                 const GDataArray = clsHeaderUtils.SplitDataUsingInputFormatters(text, LSplitters);
        //                 let LStoreData = LMe.pvtGetDataForStore(GDataArray);

        //                 LMe.pvtGenerateGrid(LStoreData);
        //                 console.log(text); // Return text/html if found

        //             }
        //         } else if (items[0].types.includes("text/plain")) {
        //             const blob = await items[0].getType("text/plain");
        //             if (blob) {
        //                 const text = await blob.text();
        //                 console.log(text); // Return text/html if found
        //             }
        //         }
        //     } catch (error) {
        //         console.error('Error reading clipboard:', error);
        //     }
        // })();



        
    // pvtGetClipboardText: async function () {
    //     try {
    //         const LItemsInClipboard = await navigator.clipboard.read();
    //         if (LItemsInClipboard[0].types.includes("text/html")) {
    //             const blob = await LItemsInClipboard[0].getType("text/html");
    //             if (blob) {
    //                 const text = await blob.text();
    //                 return {
    //                     text: text,
    //                     type: "text/html"
    //                 };
    //             }
    //         } else if (LItemsInClipboard[0].types.includes("text/plain")) {
    //             const blob = await LItemsInClipboard[0].getType("text/plain");
    //             if (blob) {
    //                 const text = await blob.text();
    //                 return {
    //                     text: text,
    //                     type: "text/plain"
    //                 }
    //             }
    //         }
    //     } catch (error) {
    //         TS.App.Feedback.ShowErrMsg("Error while accessing the clipboard"); 
    //     }
    // },
