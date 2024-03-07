/**
 * This class represents the main list view for the application.
 * It extends Ext.grid.Panel and displays personnel data.
 * @class ExtractApp.view.main.List
 * @extends Ext.grid.Panel
 * @xtype mainlist
 * @alias view.mainlist
 */
Ext.define('ExtractApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    requires: [
        'ExtractApp.store.GridDataStore'
    ],

    margin: '0 0 15 0',
    padding: '10 10 10 10',
    border: true,  

    store : {
        type : "gridStore"
    },
    id: 'idMainList',
    emptyText: 'No Data to Display',
    emptyCls: 'empty-text',


    columns: [
        {
            text: 'Field Name',
            width: 150,
            xtype: 'widgetcolumn',
            dataIndex: 'fieldType',
            widget: {
                xtype: 'combo', 
                store: {
                    type: 'option'
                },
                displayField: 'option',
                valueField: 'id',
                defaultValue: 'name',
                markDirty: false,
                value: 'name',
                editable: false,
                listeners: {
                    // beforerender: 'HandleOnAfterRenderingSelectDefault',
                    select: 'HandleOnSelectingFieldType'
                },
            },
            flex: 1
        },
        {
            text: 'Data',
            dataIndex: 'extractedData',
            flex: 3,
            sortable: false,
            /**
             * @cfg {Function} renderer
             * Function to customize the rendering of data in this column.
             * It encodes HTML entities in the value.
             * @param {String} value The value to be rendered.
             * @return {String} The HTML-encoded value.
             */
            renderer: function (value, metaData) {
                metaData.tdAttr = 'data-qtip="' + Ext.util.Format.htmlEncode(value) + '"';
                return value; 
            },
        }
    ],
});
