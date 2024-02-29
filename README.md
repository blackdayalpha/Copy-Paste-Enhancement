# Copy-Paste-Enhancement
egwgew ggreg
sencha -sdk D:\ExtJs\ext\ext generate app --theme theme-neptune --name DemoApp --path d:\Dipesh EXT\MyApp\DemoApp --classic

 navigator.clipboard.read().then(items => { 
                items[0].getType("text/html").then(blob => {
                    blob.text().then(text => { console.log(text) });
                });
            }); 
