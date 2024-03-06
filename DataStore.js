Ext.define('ExtractApp.store.DataStore', {
    extend: 'Ext.data.Store',
    model: 'ExtractApp.model.DataModel',

    alias: 'store.datastore',
    storeId: 'dataStore',

    data: [],
 // filters: [
    //     function(item) {
    //         LCurrentData = clsHeaderUtils.RemoveTagsFromNameField(item.get('extractedData')); 
    //         return LCurrentData !== null;
    //     }
    // ],

    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        },
        root: 'data'
    },
    // autoLoad: true,

})
