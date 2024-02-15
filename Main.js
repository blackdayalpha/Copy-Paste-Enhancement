/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtractApp.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    id: 'main',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'ExtractApp.store.Personnel',
        'ExtractApp.view.main.MainController',
        'ExtractApp.view.main.MainModel',
        'ExtractApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    store: 'datastore', 

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        autoscroll: true,
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'button',
            text: "Paste Here",
            handler: 'generateGrid'
        },]
    }],

});
