/**
 * ExtJS controller class for the tsclsClipboardReader view.
 */
Ext.define('TS.view.forms.reusable.tsclsClipboardReaderController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tsclsClipboardReadercontroller',

    /**
     * Initializes the controller by retrieving references to the window and grid components.
     */
    InitObject: function () {
        let LMe = this;
        LMe.FFieldTypeSelectionWindow = LMe.getView().FWindow;
        LMe.FFieldTypeSelectionGrid = LMe.getView().FGrid;
        if (!LMe.FFieldTypeSelectionWindow || !LMe.FFieldTypeSelectionGrid) {
            LMe.pvtShowErrorAndDestroyWindow("Error while generating views to display grid. Please check for Errors!!");
        }
    },

    /**
     * @public
     * Extracts data from the clipboard, splits it using specified splitters,
     * transforms it into a suitable format, and updates the grid store.
     *
     * @returns {Promise<void>} A promise that resolves when the grid store has been updated.
     *
     * @throws {Error} If an error occurs while retrieving clipboard data or updating the store.
     */
    ExtractDataFromClipboard: async function (p_arrSplitByContraints) {
        let LMe = this;
        let LDataFromClipboardObj;

        // let LFieldTypeSelectionGrid = Ext.getCmp('idFieldTypeGridView');
        let LFieldTypeSelectionGrid = LMe.FFieldTypeSelectionGrid;

        // **Optional loading indicator for field type selection grid:** 
        LFieldTypeSelectionGrid.setLoading(true);

        try {
            LDataFromClipboardObj = await LMe.pvtGetClipboardText(); // Fetch data from clipboard  
        } catch (error) {
            LMe.pvtShowErrorAndDestroyWindow(error);
            return; // Exit if error occurs
        }

        // Validate retrieved data format
        if (!LDataFromClipboardObj || !LDataFromClipboardObj.hasOwnProperty("type") || !LDataFromClipboardObj.hasOwnProperty("text")) {
            LMe.pvtShowErrorAndDestroyWindow("Error while Extracting Data");
        }



        // Defer execution to ensure loading masks (if enabled) are displayed
        Ext.defer(function () {
            LFieldTypeSelectionGrid.suspendLayouts(); // Suspend layout updates for efficiency

            const LIsCopiedDataHtml = LDataFromClipboardObj.type === "text/html";

            let LExtractedDataArr = gtsCommonUtils().SplitDataUsingInputFormatters(LDataFromClipboardObj.text, p_arrSplitByContraints, LIsCopiedDataHtml);

            // Handle case where data splitting fails or if the data is table/excel
            if (!LExtractedDataArr) {
                LFieldTypeSelectionGrid.setLoading(false);
                return;
            }

            let LDataForStore = LMe.pvtGetDataForStore(LExtractedDataArr); // Transform data for store

            LMe.pvtUpdateStoreData(LDataForStore); // Update the grid store with transformed data
            
            LFieldTypeSelectionGrid.setLoading(false); // Hide loading indicator
            LFieldTypeSelectionGrid.resumeLayouts(); // Resume layout updates
        }, 100); // Delay execution 
    },


    /**
     * @private 
     *  Checks whether the user's browser is compatible or not.
     * 
     * @returns {Boolean} true if the browser supports the Clipboard read method 
     */
    pvtIsBrowserCompatible: function () {
        var LBrowserVersion = 0;
        let LIsCompatibleBool = false;

        //get which browser is being used???
        if (Ext.isEdge === true) {
            LBrowserVersion = Ext.ieVersion;
            LIsCompatibleBool = LBrowserVersion > 78
        }
        else if (Ext.isChrome === true) {
            LBrowserVersion = Ext.chromeVersion;
            LIsCompatibleBool = LBrowserVersion > 65
        }
        else if (Ext.isOpera === true) {
            LBrowserVersion = Ext.operaVersion;
            LIsCompatibleBool = LBrowserVersion > 62
        }
        else if (Ext.isSafari === true) {
            LBrowserVersion = Ext.safariVersion;
            LIsCompatibleBool = LBrowserVersion > 13
        }
        return LIsCompatibleBool;
    },

    /**
     * @private
     * Asynchronously retrieves the text content from the clipboard.
     * 
     * @returns {Promise<string|null>} A promise that resolves with an object containing the retrieved text content and its type, 
     *                                 or null if an error occurs.
     *                                 
     * @throws {Error} - If the Clipboard API is not supported by the browser.
     *                - If the clipboard is empty.
     *                - If no supported text format ("text/html" or "text/plain") is found in the clipboard.
     *                - If an error occurs while retrieving the text data for the chosen type.
     *                - If no text data is found in the clipboard.
     */
    pvtGetClipboardText: async function () {
        if (!this.pvtIsBrowserCompatible()) { throw new Error("Browser is not compatible with functionality to read the clipboard. Please use another browser or try upgrading to latest version to read the clipboard") };

        let LClipBoard = navigator.clipboard;

        // Check if clipboard API is supported
        if (!LClipBoard) {
            throw new Error("Clipboard API not supported by your browser");
        }

        const LItemsExtractedFromClipboard = await LClipBoard.read();

        if (!LItemsExtractedFromClipboard || LItemsExtractedFromClipboard.length === 0) {
            throw new Error("Clipboard is empty");
        }
        // check if the html type available
        const LIsHtmlTextTypeAvailable = LItemsExtractedFromClipboard[0].types.findIndex(type => type === "text/html");
        const LIsPlainTextTypeAvailable = LItemsExtractedFromClipboard[0].types.findIndex(type => type === "text/plain");

        let LSelectedDataType;
        if (LIsHtmlTextTypeAvailable !== -1) {
            // Found "text/html"
            LSelectedDataType = "text/html";
        } else if (LIsPlainTextTypeAvailable !== -1) {
            // Fallback to "text/plain"
            LSelectedDataType = "text/plain";
        } else {
            throw new Error("No supported text format found in the clipboard");
        }

        const LDataItemForGivenType = await LItemsExtractedFromClipboard[0].getType(LSelectedDataType);

        if (!LDataItemForGivenType) {
            throw new Error("Failed to retrieve text data for the given type");
        }

        const LCopiedText = await LDataItemForGivenType.text();
        if (!LCopiedText) throw new Error("No Data Copied!");

        return { text: LCopiedText, type: LSelectedDataType };
    },


    /**
     * @method HandleOnWindowResize
     * @private
     * @description Event handler for window resize.
     * @param {Ext.window.Window} window - The window being resized.
     * @param {Number} width - The new width of the window.
     * @param {Number} height - The new height of the window.
     */
    HandleOnWindowResize: function (window, width, height) {
        // Store window size in localStorage
        TS.App.UserSettings().SetUserSettings('windowSize', { width: width, height: height })
    },

    /**
     * @private
     * @description Retrieves data for the grid store.
     * @param {Array} p_arrData - The array of data to be loaded into the store.
     * @returns {Array} The formatted data for the grid store.
     */
    pvtGetDataForStore: function (p_arrData) {
        return p_arrData.map(item => ({ fieldType: 'name', extractedData: item }));
    },

    /**
     * @private
     * @description Updates the grid store with new data.
     * @param {Array} p_arrData - The data to update the store with.
     */
    pvtUpdateStoreData: function (p_arrData) {
        let LMe = this;
        var LCurrentStore = Ext.getStore('idPastingDataGrid');
        if (LCurrentStore) {
            LCurrentStore.removeAll();
            try {
                LCurrentStore.loadData(p_arrData);
            } catch (error) {
                LMe.pvtShowErrorAndDestroyWindow(error);
            }
        } else {
            pvtShowErrorAndDestroyWindow("Store not found");
        }
    },

    /**
     * Displays an error message and destroys the window containing the grid.
     * @param {string} err - The error message to display.
     */
    pvtShowErrorAndDestroyWindow: function (err) {
        LMe = this;
        LMe.pvtRemoveWindowContainingGrid();
        TS.App.Feedback.ShowErrMsg(err);
    },

    /**
     * @private
     * Handles the click event on the "Paste Again" button.
     * Prompts the user for confirmation before replacing existing extracted data.
     */
    HandleOnPasteAgainBtnClick: function () {
        const LMe = this;

        Ext.Msg.show({
            title: 'Paste Again',
            message: `Extracted data will be replaced will new one`,
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (btn) {
                if (btn === 'yes') {
                    LMe.ExtractDataFromClipboard(LMe.getView().getSplitDataBy());
                }
            }
        });
    },

    /**
     * @public
     * Handles the click event on the "Load" button.
     * Retrieves data from the grid store, generates JSON objects, and fires the 'jsonGenerated' event.
     */
    HandleOnGenerateJsonClick: function () {
        let LMe = this;

        // Retrieve the current store
        const LCurrentStore = Ext.getStore('idPastingDataGrid');
        if (!LCurrentStore) {
            TS.App.Feedback.ShowErrMsg("Error while Getting Store");
            return;
        }
        // Generate JSON objects from store data
        let LJsonObjectsArr = LMe.pvtGenerateObjectContainingFormattedData(LCurrentStore);

        // Convert JSON objects array to string
        const LJsonGenerated = JSON.stringify(LJsonObjectsArr, null, 2);

        // Get reference to the display window and fire event to pass generated JSON
        // let view = Ext.getCmp('idDisplayWindow')
        let LCurrentWindowView = LMe.getView();
        if (!LCurrentWindowView) {
            LMe.pvtShowErrorAndDestroyWindow("Couldn't fire Event because no window reference found");
        }

        LCurrentWindowView.fireEvent('jsonGenerated', LJsonGenerated);

        // Remove window containing grid
        LMe.pvtRemoveWindowContainingGrid();
    },

    /**
     * @private
     * Generates an array of JSON objects containing formatted data from the provided store data.
     * @param {Ext.data.Store} p_strStoreData The store containing data to be formatted into JSON objects.
     * @returns {Array} An array of JSON objects containing formatted data.
     */
    pvtGenerateObjectContainingFormattedData(p_strStoreData) {
        const LJsonObjectsArr = [];
        let LCurrentObject = {};
        let isFirstItem = true;

        // Iterate through the store's data
        for (let i = 0; i < p_strStoreData.getCount(); i++) {
            const LItemObj = p_strStoreData.getAt(i);

            if (!LItemObj) {
                TS.App.Feedback.ShowErrMsg("Cannot Load Data");
                return;
            }

            // Extract field type and data
            const LCurrentMode = LItemObj.get('fieldType');
            let LCurrentData = LItemObj.get('extractedData');

            // Validate the first item
            if (isFirstItem && LCurrentMode === 'desc') {
                TS.App.Feedback.ShowErrMsg("First item must have dataField 'Name'");
                return;
            }

            // Concatenate description or push the current object
            if (LCurrentMode === 'desc') {
                LCurrentObject.description = (LCurrentObject.description || '') + LCurrentData + ' ';
            } else if (LCurrentMode === 'idSkipRow') {
                continue;
            } else {
                LCurrentData = gtsCommonUtils().RemoveTagsFromNameField(LCurrentData);
                if (LCurrentData === null) continue
                isFirstItem = false;
                if (Object.keys(LCurrentObject).length !== 0) {
                    LJsonObjectsArr.push(LCurrentObject);
                }
                LCurrentObject = { text: LCurrentData };
            }
        }

        // Push the last object
        if (Object.keys(LCurrentObject).length !== 0) {
            LJsonObjectsArr.push(LCurrentObject);
        }

        return LJsonObjectsArr;
    },

    /**
   * @public
   * Handles the click event on the "Cancel" button.
   * Displays a confirmation dialog and removes the window containing the grid if confirmed.
   */
    HandleOnCancelJsonClk: function () {
        const LMe = this;
        Ext.Msg.show({
            title: 'Cancel',
            message: 'Do you want to cancel Editing?',
            buttons: Ext.Msg.YESNO,
            icon: Ext.Msg.QUESTION,
            fn: function (btn) {
                if (btn === 'yes') {
                    LMe.pvtRemoveWindowContainingGrid();
                }
            }
        });
    },

    /**
     * @private
     * destroy the container containing the window and grid.
     */
    pvtRemoveWindowContainingGrid: function () {
        // Get reference to the display window and close it 
        let LMe = this;
        let FSelectTypeWindow = LMe.getView();
        FSelectTypeWindow.destroy();
    },

    /**
     * @public
     * Sets the default value for the combo box after it's rendered.
     * @param {Ext.form.field.ComboBox} p_objCombobox The combo box component.
    */
    HandleOnAfterRenderingSelectDefault: function (p_objCombobox) {
        // Set default value for the combo box after rendering
        setTimeout(() => {
            var LDefaultValue = p_objCombobox.defaultValue;
            p_objCombobox.setValue(LDefaultValue);
        }, 0);
    },

    /**
     * @public
     * Handles the selection of field type in the combo box.
     * Updates the selected record's field type in the "idFieldTypeGridView" grid.
     * @param {Ext.form.field.ComboBox} p_objCombo The combo box component.
     * @param {Ext.data.Model} p_arrRecord The selected record in the combo box.
     */
    HandleOnSelectingFieldType: function (p_objCombo, p_arrRecord) {
        let LMe = this;
        // let LMainGrid = Ext.getCmp('idFieldTypeGridView');
        let LSelectionGridPanel = LMe.FFieldTypeSelectionGrid;

        // Check if main grid exists
        if (LSelectionGridPanel) {
            // Get selection model and store
            const LSelectionModel = LSelectionGridPanel.getSelectionModel();
            if (!LSelectionModel) { return }

            const LGetStore = LSelectionGridPanel.getStore();
            if (!LGetStore) return

            // Get index of the selected record and update field type
            let LRecordIndex = LGetStore.indexOf(p_objCombo.getWidgetRecord());

            LSelectionModel.select(LRecordIndex);
            const LSelectedRecord = LSelectionModel.getSelection()[0];
            if (!LSelectedRecord) return

            LSelectedRecord.set('fieldType', p_arrRecord.get('id'));

        } else {
            LMe.pvtShowErrorAndDestroyWindow('Main grid not found.')
        }
    }
})
