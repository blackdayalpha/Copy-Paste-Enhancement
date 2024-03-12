 pvtExtractTableData(p_arrData) {
            let LMe = this;
            if (!p_arrData || p_arrData.length === 0) {
                console.error("No data to extract");
                return;
            }
            /*
                        // let LTotalNumberOfColumns = LMe.pvtGetTotalColumnCount(p_arrData);
                        // if (!LTotalNumberOfColumns || LTotalNumberOfColumns <= 0) return;
                        // console.log("total col : ", LTotalNumberOfColumns);
            
                        let LHeaderOfTableArr = LMe.pvtGetTableHeaders(p_arrData);
                        if (!LHeaderOfTableArr || LHeaderOfTableArr.length < 0) return;
                        console.log("header of table : ", LHeaderOfTableArr);
            
            
                        let LTotalNumberOfColumns = LHeaderOfTableArr.length;
                        console.log("total col : ", LTotalNumberOfColumns);
            
                        const LRegexForTrData = /<tr[^>]*>[\s\S]*?<\/tr>/g;
            
                        let trData = p_arrData[0].match(LRegexForTrData);
                        // p_arrData = LMe.pvtRemoveSelectedTag(p_arrData, /<table[^>]*>|<\/table>/ig);
                        // p_arrData = LMe.pvtRemoveSelectedTag(p_arrData, /<tbody[^>]*>|<\/tbody>/ig);
                        // p_arrData = LMe.pvtRemoveSelectedTag(p_arrData, /<colgroup[^>]*>|<\/colgroup>|<col[^>]*>/ig);
            
                        // let firstRow = [trData[0]];
                        // let firstRowDataCell = LMe.pvtRemoveSelectedTag(trData, /<[^>]*>|<\/>|&nbsp;|[\r\n\t]/g);
                        // firstRowDataCell = firstRow.match(/<[^>]*>|<\/>|&nbsp;/g);  
            
                        // if (firstRowDataCell[0].toLowerCase() === "name" && firstRowDataCell[1].toLowerCase() === "description") {
                        //     trData.shift();
                        //     console.log(firstRowDataCell);
                        //     // p_arrData = trData;
                        // }
            
                        //Testing
                        let RegexForTr = /<td[^>]*>[\s\S]*?<\/td>/ig;
                        trData = trData.map(str => str.match(RegexForTr)).flat();
            
                        //
            
            
                        // trData = LMe.pvtRemoveSelectedTag(trData, /<tr[^>]*>|<\/tr>/ig);
            
            
                        // trData = LMe.pvtRemoveSelectedTag(trData, /[\r\n\t]/ig);
                        // trData = LMe.pvtRemoveSelectedTag(trData, /[\r\n\t]/g);
                        console.log("trData:", trData)
                        // trData = LMe.pvtSplitDataByTag(trData, /<td[^>]*>[\s\S]*?<\/td>/ig);
            
            
            
            
                        // trData = LMe.pvtRemoveSelectedTag(trData, /<td[^>]*>|<\/td>/ig, true);
                        // trData = trData.map(str => {
                        //     const match = str.match(/<td[^>]*>(.*?)<\/td>/);
                        //     return match ? match[1].trim() : '';
                        // });
                        // trData = trData.map(cell => {
                        //     const regex = /<td[^>]*>(.*?)<\/td>/gi; 
                        //     const matches = [...cell.matchAll(regex)];
                        //     return matches.map(match => match[1]);
                        // });; 
            
                        // trData = LMe.pvtRemoveSelectedTag(trData, /[\n\r\t]/ig);
                        // trData = trData.map(str => LMe.extractTextFromTd(str))
            
            
                        // trData = trData.map(str => str.replace(/<[^>]+>/g, ""))
            
                        trData = trData.map(str => str.replace(/<td[^>]*>|<\/td>/g, ""))
            
                        console.log('trData', trData)
                        */

            let trData = [];
            let parser = new DOMParser();
            let doc = parser.parseFromString(p_arrData[0], "text/html");
            trData = doc.getElementsByTagName("tr");

            let LHeaderOfTableArr = trData[0].getElementsByTagName("td");
            let LTotalNumberOfColumns = LHeaderOfTableArr.length;
            console.log(trData, LHeaderOfTableArr, LTotalNumberOfColumns)
            let LFinalArrwithTdData = [];
            for (let child of trData) {
                let tempArr = child.getElementsByTagName("td");

                for (let cell of tempArr) {
                    LFinalArrwithTdData.push(cell.innerHTML);
                }
            }
            trData = LFinalArrwithTdData

            let LFormattedObjectForStoreArr = [];
            let flag = true;
            for (let i = 0; i < trData.length; i++) {
                if (LHeaderOfTableArr[i % LTotalNumberOfColumns].innerText.toLowerCase().startsWith("desc")) {
                    flag = false
                }
                LFormattedObjectForStoreArr.push({
                    fieldType: flag ? 'name' : 'desc',
                    extractedData: trData[i]
                });
                flag = true;
            }
            console.log('LFormattedObjectForStoreArr', LFormattedObjectForStoreArr)

            return LFormattedObjectForStoreArr;
        },
