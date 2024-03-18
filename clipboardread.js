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
