 pvtExtractTableData(p_arrData) {
            let LMe = this;
            if (!p_arrData || p_arrData.length === 0) {
                console.error("No data to extract");
                return;
            }
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
