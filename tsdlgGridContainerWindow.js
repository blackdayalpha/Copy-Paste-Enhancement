/**
 * @class TS.view.editing.classes.tsdlgGridContainerWindow
 * @extends Ext.window.Window
 * @alias view.gridwindow 
 * @description Represents a custom window for displaying a grid structure.
 *              It's used for displaying data extracted from the clipboard,
 *              allowing the user to view and manipulate it.
 * 
 */
Ext.define('TS.view.editing.classes.tsdlgGridContainerWindow', {
    extend: 'Ext.window.Window',
    alias: 'view.gridwindow',

    controller: 'pasteEnhancementcontroller',

    maximizable: true,
    cls: 'tsGrdPasteWinCls',

    constructor: function () {
        let LMe = this;
        LMe.callParent(arguments); // Call the parent constructor  

        // Get a reference to the controller
        var LControllerReference = LMe.getController();
        Assert(!LControllerReference, "Controller not found")

        // gets the already stored data from the localstorage 
        let LStoredWindowSize = TS.App.UserSettings().GetUserSettings('windowSize');
        if (LStoredWindowSize) {
            LMe.setSize(LStoredWindowSize.width, LStoredWindowSize.height);
        }
        // Listen for window resize event to store the size
        LMe.on('resize', LControllerReference.HandleOnWindowResize, LMe);

        // Call the method from the controller
        LControllerReference.ExtractDataFromClipboard();
    },



    //UI for the window Pop Up
    id: 'idDisplayWindow',
    reference: 'refGridDisplayWindow',
    modal: true,
    shadow: false,
    scrollable: true,

    width: 850,
    height: 700,
    minHeight: 300,
    minWidth: 500,
    closeAction: 'destroy',
    margin: '10 0 0 0',
    padding: '20 30 25 30',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    items: [{
        //Label
        xtype: 'label',
        text: 'Select Field Types for Copied Data',
        cls: 'tsHeadAttrCustom',
        style: "margin-bottom: 15px;",
    }, {
        // Main Grid
        xtype: 'gridstructure', 
        store: {
            type: 'pastingDataGrid'
        },
        style: 'border: 1px solid rgb(213, 213, 213);',
        flex: 1
    }, {
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
            handler: 'HandleOnGenerateJsonClick'
        }, {
            xtype: 'button',
            text: 'Paste Again',
            tooltip: 'Replace the Data with recently copied Data',
            style: "margin: 15px 10px 0 0;",
            width: 100,
            handler: 'HandleOnPasteAgainBtnClick'

        }, {
            xtype: 'button',
            text: 'Cancel',
            tooltip: 'Remove the Grid',
            cls: 'tsBlueOutlineBtn',
            style: "margin: 15px 3px 0 10px;",
            handler: 'HandleOnCancelJsonClk'
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

});
