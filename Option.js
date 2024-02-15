Ext.create('ExtractApp.store.Option', {
    extend: 'Ext.data.Store',
    alias: 'store.options',
    fields: ['abbr', 'name'],
    data: [
        { "abbr": "AL", "name": "Alabama" },
        { "abbr": "AK", "name": "Alaska" },
        { "abbr": "AZ", "name": "Arizona" }
    ]
});
