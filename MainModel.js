/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ExtractApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',
    record: {},

    // controller: 'main',
    data: {
        name: 'ExtractApp',
        JsonDataArr: [],
        JData: '',
    },
    formulas: {
        getFormattedOutputFromJson: function (get) {
            const LJsonDataStr = get('JData');
            if (!LJsonDataStr) return '';

            const LDataArr = JSON.parse(LJsonDataStr);
            let LDisplayOutputHtmlStr = '';

            for (const LItemObj of LDataArr) {
                let LHtmlComponent = '';
                if (LItemObj.name) {
                    LHtmlComponent += `<h3 class="data-head">Name: ${LItemObj.name}</h3>`;
                }
                if (LItemObj.description) {
                    LHtmlComponent += `<p class="data-body"><b>Description:</b> ${LItemObj.description}</p>`;
                }
                LHtmlComponent += '<span class="diff-line"></span>';
                LDisplayOutputHtmlStr += LHtmlComponent;
            }

            return LDisplayOutputHtmlStr;
        },
        displayJson: function (get) {
            return get('JData');
        },


    }

    //TODO - add data, formulas and/or methods to support your view
});
