Ext.define('TS.view.forms.reusable.tsclsClipboardReader', {
    extend: 'Ext.container.Container',
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
        LMe.getController().InitObject();
    },


    GetData: function () {
        let LMe = this;
        LMe.LWindow = LMe.GetWindow();
        LMe.LWindow.show();

        LMe.getController().ExtractDataFromClipboard(LMe.getSplitDataBy());
    },

    GetWindow: function () {
        let LMe = this;
        if (LMe.LWindow) {
            return LMe.LWindow;
        }
        if (!LMe.Grid) {
            LMe.LGrid = LMe.GetGrid();
        }

        LMe.LWindow = Ext.create("Ext.window.Window", {
            id: 'idDisplayWindow',
            reference: 'refGridDisplayWindow',
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
                // LMe.LGrid
                // , 
                {
                    // Main Grid
                    xtype: 'gridstructure',
                    store: {
                        type: 'pastingDataGrid'
                    },
                    style: 'border: 1px solid rgb(213, 213, 213);',
                    flex: 1
                },
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
                            LMe.getController().HandleOnGenerateJsonClick()
                        },
                    }, {
                        xtype: 'button',
                        text: 'Paste Again',
                        tooltip: 'Replace the Data with recently copied Data',
                        style: "margin: 15px 10px 0 0;",
                        width: 100,
                        handler: function () {
                            LMe.getController().HandleOnPasteAgainBtnClick()
                        },

                    }, {
                        xtype: 'button',
                        text: 'Cancel',
                        tooltip: 'Remove the Grid',
                        cls: 'tsBlueOutlineBtn',
                        style: "margin: 15px 3px 0 10px;",
                        handler: function () {
                            LMe.getController().HandleOnCancelJsonClk()
                        },
                    }]
                }],
            listeners: {
                beforeclose: function () {
                    let LMe = this;
                    let GridView = LMe.lookupReference('refCopiedGridPanel');
                    if (Ext.isEmpty(GridView) === false) {
                        Ext.destroy(GridView);
                    }
                }
            }
        })
        return LMe.LWindow;
    },


    GetGrid: function () {
        let LMe = this;
        if (LMe.LGrid) {
            return LMe.LGrid;
        }

        LMe.LGrid = Ext.create("Ext.grid.Panel", {
            // store: {
            //     type: 'pastingDataGrid'
            // },
            alias: 'widget.gridstructure',
            margin: '0 0 10 0',
            border: true,
            height: 400,
            cls: 'tsGridStructureForSelection',
            loadMask: true,
            reference: 'refCopiedGridPanel',
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
            viewconfig: {
                markDirty: false
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
                                scope: LMe.getController()
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
        })

        return LMe.LGrid;
    },
})
