Ext.define('Explorer.model.DataModel', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'fileName', type: 'string' },
        { name: 'fType', type: 'string' },
        { name: 'date', type: 'date', defaultValue: new Date() }],

    validators: {
        fileName: 'presence',
        fType: {
            type: 'inclusion', // Inclusion validator (checks if the value is in a specified list)
            list: ['file', 'folder'],
        },
        date: {
            type: 'presence', // Presence validator (checks if the value is present)
            message: 'Date is required' // Error message}
        }
    }
}
)
