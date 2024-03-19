Ext.define('TS.view.forms.reusable.tsclsClipboardReader', {
    extend: 'Ext.container.Container', 
    // extend: 'TS.view.classes.app.tsclsBase', 
    alias: 'view.tsclsClipboardReader',
    controller: 'tsclsClipboardReadercontroller',

    require: [
        'TS.store.tsstrPastingGridData'
    ],
    config: {
        splitDataBy: [],
    },

    constructor: function () {
        let LMe = this;
        LMe.callParent(arguments);
        LMe.LController = LMe.getController();
    },

    /**
    * Retrieves data and displays it.
    */
    GetData: function () {
        let LMe = this;
        LMe.FWindow = LMe.pvtGetWindow();
        LMe.LController.InitObject();
        LMe.FWindow.show();

        LMe.LController.ExtractDataFromClipboard(LMe.getSplitDataBy());
    },


    /**
    * Retrieves or creates the window containing the data grid.
    * @returns {Ext.window.Window} The window containing the data grid.
    */
    pvtGetWindow: function () {
        let LMe = this;
        if (LMe.FWindow) {
            return LMe.FWindow;
        }
        if (!LMe.FGrid) {
            LMe.FGrid = LMe.pvtGetGrid();
        }

        LMe.FWindow = Ext.create("Ext.window.Window", {
            // id: 'idDisplayWindow',
            // reference: 'refGridDisplayWindow',

            maximizable: true,
            cls: 'tsGrdPasteWinCls',
            modal: true,
            shadow: false,
            scrollable: true,

            width: 850,
            height: 700,
            minHeight: 300,
            minWidth: 500,
            margin: '10 0 0 0',
            padding: '20 30 25 30',

            layout: {
                type: 'vbox',
                align: 'stretch'
            },

            items: [
                {
                    //Label
                    xtype: 'label',
                    text: 'Select Field Types for Copied Data',
                    cls: 'tsHeadAttrCustom',
                    style: "margin-bottom: 15px;",
                },
                LMe.FGrid
                ,
                // {
                //     // Main Grid
                //     xtype: 'gridstructure',
                //     store: {
                //         type: 'pastingDataGrid'
                //     },
                //     style: 'border: 1px solid rgb(213, 213, 213);',
                //     flex: 1
                // },
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        align: 'middle',
                        pack: 'end'
                    },
                    defaults: {
                        minWidth: 75,
                        width: 80,
                        padding: '5 5 5 5',
                    },
                    items: [{
                        xtype: 'button',
                        text: 'Load Data',
                        tooltip: 'Add the Data into display area',
                        style: "margin: 15px 10px 0 0;",
                        handler: function () {
                            LMe.LController.HandleOnGenerateJsonClick()
                        },
                    }, {
                        xtype: 'button',
                        text: 'Paste Again',
                        tooltip: 'Replace the Data with recently copied Data',
                        style: "margin: 15px 10px 0 0;",
                        width: 100,
                        handler: function () {
                            LMe.LController.HandleOnPasteAgainBtnClick()
                        },
                    }, {
                        xtype: 'button',
                        text: 'Cancel',
                        tooltip: 'Remove the Grid',
                        cls: 'tsBlueOutlineBtn',
                        style: "margin: 15px 3px 0 10px;",
                        handler: function () {
                            LMe.LController.HandleOnCancelJsonClk()
                        },
                    }]
                }],
            // listeners: {
            // beforeclose: function () {
            // //     let LMe = this;
            // //     let GridView = LMe.lookupReference('refCopiedGridPanel');

            //         if (Ext.isEmpty(LMe.FGrid) === false) {
            //             Ext.destroy(LMe.FGrid);
            //         }
            //     }
            // }
        })
        return LMe.FWindow;
    },

    /**
    * Retrieves or creates the data grid.
    * @returns {Ext.grid.Panel} The data grid.
    */
    pvtGetGrid: function () {
        let LMe = this;
        if (LMe.FGrid) {
            return LMe.FGrid;
        }

        LMe.FGrid = Ext.create("Ext.grid.Panel", {
            store: {
                type: 'pastingDataGrid'
            },
            alias: 'widget.gridstructure',
            margin: '0 0 10 0',
            border: true,
            height: 400,

            style: 'border: 1px solid rgb(213, 213, 213);',
            flex: 1,

            markDirty: false,

            cls: 'tsGridStructureForSelection',
            loadMask: true,
            // // reference: 'refCopiedGridPanel',
            // id: 'idFieldTypeGridView',
            emptyText: 'No Data to Display',
            emptyCls: 'empty-text',
            bodyBorder: false,
            border: false,
            style: 'border: 1px solid rgb(213, 213, 213);',
            scrollable: {
                y: true,
                x: false
            },
            columns: [
                {
                    text: 'Field Name',
                    xtype: 'widgetcolumn',
                    dataIndex: 'fieldType',
                    markDirty: false,
                    minWidth: 150,
                    widget: {
                        xtype: 'combo',
                        store: {
                            fields: ['option', 'id'],
                            data: [
                                { option: 'Name', id: 'name' },
                                { option: 'Description', id: 'desc' },
                                { option: 'Skip Row', id: 'idSkipRow' }
                            ],
                        },
                        displayField: 'option',
                        valueField: 'id',
                        defaultValue: 'name',
                        value: 'name',

                        editable: false,
                        variableRowHeight: true,
                        listeners: {
                            // beforerender: 'HandleOnAfterRenderingSelectDefault',
                            select: {
                                fn: 'HandleOnSelectingFieldType',
                                scope: LMe.LController
                            }
                        },
                    },
                    flex: 1,
                },
                {
                    text: 'Data',
                    dataIndex: 'extractedData',
                    flex: 3,
                    sortable: false,
                    variableRowHeight: true,
                    renderer: function (value, metaData) {
                        metaData.tdAttr = 'data-qtip="' + Ext.util.Format.htmlEncode(value) + '"';
                        return value;
                    },
                }
            ],
        });

        return LMe.FGrid;
    },

    /**
     * Destructor function to clean up resources.
     */
    listeners: {
        beforedestroy: function () {
            let LMe = this;
            if (Ext.isEmpty(LMe.FGrid) === false) {
                Ext.destroy(LMe.FGrid);
            }
            if (Ext.isEmpty(LMe.FWindow) === false) {
                Ext.destroy(LMe.FWindow);
            }
            if (Ext.isEmpty(LMe.LController) === false) {
                Ext.destroy(LMe.LController);
            }
        }
    }
})

/*
Ext.define('TS.view.forms.reusable.tsclsClipboardReader', {
    // extend: 'Ext.container.Container', 
    extend: 'TS.view.classes.app.tsclsBase',
    alias: 'view.tsclsClipboardReader',
    // controller: 'tsclsClipboardReadercontroller',

    require: [
        'TS.store.tsstrPastingGridData'
    ],
    config: {
        breakBy: [],
        outputType: "text/html"
    },

    constructor: function () {
        let LMe = this;
        LMe.callParent(arguments);
    },

    /**
    * Retrieves data and displays it.
    */
    GetData: async function () {
        let LMe = this;
        const LDataStore = await LMe.pvtExtractDataFromClipboard(LMe.getBreakBy());
        if (!LDataStore) {
            TS.App.Feedback.ShowErrMsg("No data extracted from clipboard.");
            return null;
        }
        return LDataStore;
    },

    pvtExtractDataFromClipboard: async function (p_arrSplitByContraints) {
        let LMe = this;
        try {
            const { text, type } = await LMe.pvtGetClipboardText();

            if (!text || !type) {
                throw new Error("Failed to retrieve data from clipboard.");
            }

            const LIsCopiedDataHtml = type === "text/html";
            let LExtractedDataArr = gtsCommonUtils().SplitDataUsingInputFormatters(text, p_arrSplitByContraints, LIsCopiedDataHtml);

            if (!LExtractedDataArr || !LExtractedDataArr.data || !LExtractedDataArr.type) {
                throw new Error("Failed to split data extracted from clipboard.");
                // return null;
            }

            let LDataForStore;
            if (LExtractedDataArr.type === 'unstructured') {
                LDataForStore = LExtractedDataArr.data.map(LDataItem => ({ fieldType: 'name', extractedData: LDataItem }));
            } else if (LExtractedDataArr.type === 'table') {
                LDataForStore = this.pvtGetDataForTableStore(LExtractedDataArr.data, LExtractedDataArr.header);
            } else {
                throw new Error("Unsupported data type extracted from clipboard.");
            }

            return LMe.pvtGenerateStoreFromData(LDataForStore, LExtractedDataArr.header);
        } catch (error) {
            TS.App.Feedback.ShowErrMsg("Error processing extracted data:", error);
            return null;
        }
    },

    pvtGenerateStoreFromData: function (p_arrData, p_arrColumnHeadName) {
        return Ext.create('Ext.data.Store', {
            fields: p_arrColumnHeadName ? p_arrColumnHeadName : ['fieldType', 'extractedData'],
            data: p_arrData,
            filters: [
                function (p_storeItem) {
                    let LCurrentData = gtsCommonUtils().RemoveTagsFromNameField(p_storeItem.get('extractedData'));
                    return LCurrentData !== null;
                }
            ]
        });
    },

    pvtGetDataForTableStore: function (p_arrCellData, p_arrColumnHeadName) {
        const LTotalNumberOfColumns = p_arrColumnHeadName.length;
        const LFormattedDataForStore = [];

        let LIsHeaderADescriptionArr = [];
        for (let LIndex = 0; LIndex < p_arrColumnHeadName.length; LIndex++) {
            let LHeaders = p_arrColumnHeadName[LIndex];

            // Check if current element exists and has innerText property
            if (!LHeaders) {
                LIsHeaderADescriptionArr.push(false); // Push false for missing headers
                continue; // Skip to next iteration
            }

            if (LHeaders.toLowerCase().includes("description")) {
                LIsHeaderADescriptionArr.push(true);
            } else {
                LIsHeaderADescriptionArr.push(false);
            }
        }

        for (let LIndex = 0; LIndex < p_arrCellData.length; LIndex++) {
            LFormattedDataForStore.push({
                header: p_arrColumnHeadName[LIndex % LTotalNumberOfColumns],
                // fieldType: p_arrColumnHeadName[LIndex % LTotalNumberOfColumns],
                extractedData: p_arrCellData[LIndex],
                fieldType: LIsHeaderADescriptionArr[LIndex % LTotalNumberOfColumns] ? 'desc' : 'name'
            });
        }

        return LFormattedDataForStore;
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
        let LMe = this;
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

        let LUserChoosenMimeType = LMe.getOutputType();
        if (!LUserChoosenMimeType.startsWith("text/")) {
            throw new Error("Please select proper mime type. Inputed mime type not available");
        }

        // check if the user choose type available
        const LIsUserChoosenMimeTypeAvaialable = LItemsExtractedFromClipboard[0].types.findIndex(type => type === LUserChoosenMimeType);
        const LIsPlainTextTypeAvailable = LItemsExtractedFromClipboard[0].types.findIndex(type => type === "text/plain");

        let LSelectedDataType;
        if (LIsUserChoosenMimeTypeAvaialable !== -1) {
            // Found user chosen mime type
            LSelectedDataType = LMe.getOutputType();
        } else if (LIsPlainTextTypeAvailable !== -1) {
            // Fallback to "text/plain"
            LSelectedDataType = "text/plain";
        } else {
            throw new Error("No supported text format found in the clipboard");
        }

        let LDataItemForGivenType = await LItemsExtractedFromClipboard[0].getType(LSelectedDataType);

        if (!LDataItemForGivenType) {
            throw new Error("Failed to retrieve text data for the given type");
        }

        let LCopiedText = await LDataItemForGivenType.text();
        if (!LCopiedText) throw new Error("No Data Copied!");

        return { text: LCopiedText, type: LSelectedDataType };
    },

    // pvtGetDataForUnstructuredStore: function (p_objData) {
    //     return p_objData.map(item => ({ fieldType: 'name', extractedData: item }));
    // },

    // pvtGetDataForTableStore: function (p_arrData, p_arrColumnHeadName) { 
    //     let LTotalNumberOfColumns = p_arrColumnHeadName.length; 

    //     let LFormattedObjectForStore = [];

    //     for (let LIndex = 0; LIndex < p_arrData.length; LIndex++) {
    //         LFormattedObjectForStore.push({
    //             fieldType: p_arrColumnHeadName[LIndex % LTotalNumberOfColumns],
    //             extractedData: p_arrData[LIndex]
    //         });
    //     }

    //     return LFormattedObjectForStore;
    // },

    // pvtGenerateStoreFromJsonOfUnstructuredData: function (p_jsonData) {
    //     let LMe = this;
    //     LMe.GeneratedStore = Ext.create('Ext.data.Store', {
    //         fields: ['fieldType', 'extractedData'],
    //         data: p_jsonData,
    //         filters: [
    //             /**
    //             * Filters out records with empty extracted data after tag removal.
    //             * @param {Ext.data.Model} p_storeItem The record being evaluated by the filter.
    //             * @returns {Boolean} True if the record's extractedData after tag removal is not null, false otherwise.
    //             */
    //             function (p_storeItem) {
    //                 LCurrentData = gtsCommonUtils().RemoveTagsFromNameField(p_storeItem.get('extractedData'));
    //                 return LCurrentData !== null;
    //             }
    //         ],
    //     });
    //     return LMe.GeneratedStore;
    // },

    // pvtGenerateStoreFromJsonOfTabularData: function (p_jsonData, p_arrColumnHeadName) {
    //     let LMe = this;
    //     LMe.GeneratedStore = Ext.create('Ext.data.Store', {
    //         fields: p_arrColumnHeadName,
    //         data: p_jsonData,
    //         filters: [
    //             /**
    //             * Filters out records with empty extracted data after tag removal.
    //             * @param {Ext.data.Model} p_storeItem The record being evaluated by the filter.
    //             * @returns {Boolean} True if the record's extractedData after tag removal is not null, false otherwise.
    //             */
    //             function (p_storeItem) {
    //                 LCurrentData = gtsCommonUtils().RemoveTagsFromNameField(p_storeItem.get('extractedData'));
    //                 return LCurrentData !== null;
    //             }
    //         ],
    //     });
    //     return LMe.GeneratedStore;
    // },


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


    // /**
    //  * Destructor function to clean up resources.
    //  */
    // listeners: {
    //     beforedestroy: function () {
    //         let LMe = this;
    //         if (Ext.isEmpty(LMe.FGrid) === false) {
    //             Ext.destroy(LMe.FGrid);
    //         }
    //         if (Ext.isEmpty(LMe.FWindow) === false) {
    //             Ext.destroy(LMe.FWindow);
    //         }
    //         if (Ext.isEmpty(LMe.LController) === false) {
    //             Ext.destroy(LMe.LController);
    //         }
    //     }
    // }
})
*/
