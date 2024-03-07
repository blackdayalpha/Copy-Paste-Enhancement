/**
 * @desc This utility class provides methods for splitting data based on specified parameters.
 * @class ExtractApp.view.main.Utility.SplitData
 * @Uses 
 * @singleton
 */
Ext.define('ExtractApp.view.main.Utility.GenUtils', {
    alternateClassName: 'clsHeaderUtils',

    statics: {
        /**
        * Splits the data into an array of strings based on specified parameters.
        * @param {string} p_strData The data to be split. 
        * @param {string[]} p_arrParams Parameters to specify splitting criteria.
        * If none are passed then newline i.e. ("\r" or "\n") will be considered
        * User can pass Array of string containing criteria such as "newline", "paragraph","division","bullet","comment"
        * @returns {string[]} An array of split data strings.
        */
        SplitDataUsingInputFormatters: function (p_strData, p_arrParams) {
            let LMe = this;
            let LFinalResult = [p_strData]; // Initialize the result array with the original data
            let Lset = new Set(p_arrParams.map(p_strConstraint => p_strConstraint.toLowerCase()));
            let LConstraintsAvailable = {
                HTML_PARAM: "html",
                // DIVISION_PARAM: "division",
                BULLET_PARAM: "bullet",
                // COMMENT_PARAM: "comment",
                PARAGRAPH_PARAM: "paragraph",
                NEWLINE_PARAM: "newline",
                TABLE_PARAM: "table",
            };

            if (this.pvtIsCopiedDataFromSpreadSheet(LFinalResult)) {
                console.log("Copied from excel")
                LFinalResult = LMe.pvtExtractTableData(LFinalResult);
                let LControllerReference = Ext.create('ExtractApp.view.main.MainController');
                LControllerReference.pvtGenerateGrid(LFinalResult);
                return null
            }

            // LFinalResult = LMe.pvtRemoveSelectedTag(LFinalResult, /<[^>]*>|<\/>|&nbsp;/g)

            // LFinalResult = LMe.pvtRemoveSelectedTag(LFinalResult, /<table[^>]*>|<\/table>/ig);
            // LFinalResult = LMe.pvtRemoveSelectedTag(LFinalResult, /<colgroup[^>]*>|<\/colgroup>/ig);
            // LFinalResult = LMe.pvtRemoveSelectedTag(LFinalResult, /<tr[^>]*>|<\/tr>/ig);
            // LFinalResult = LMe.pvtRemoveSelectedTag(LFinalResult, /<tbody[^>]*>|<\/tbody>/ig);
            // LFinalResult = LMe.pvtRemoveSelectedTag(LFinalResult, /<td[^>]*>|<\/td>/ig); 

            // LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /<ul[^>]*>[\s\S]*<\/ul>|<ol[^>]*>[\s\S]*<\/ol>/ig);


            //check if no array is passed or is an empty array
            if (!p_arrParams || p_arrParams.length == 0) {
                LFinalResult = LMe.pvtRemoveSelectedTag(LFinalResult, /<br[^>]*>/gi);
            }
            else {
                //Use constants instead of Strings directly
                if (Lset.has(LConstraintsAvailable.HTML_PARAM)) {
                    LFinalResult = LMe.pvtRemoveSelectedTag(LFinalResult, /<[^>]*>|<\/>|&nbsp;/g)
                }
                //extracting table
                // if (Lset.has(LConstraintsAvailable.TABLE_PARAM))
                //     LFinalResult = LMe.pvtExtractTableData(LFinalResult);

                if (Lset.has(LConstraintsAvailable.DIVISION_PARAM)) {
                    LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /<div[^>]*>|<\/div>/gi);
                }
                if (Lset.has(LConstraintsAvailable.BULLET_PARAM)) {
                    LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /<ul[^>]*>[\s\S]*<\/ul>|<ol[^>]*>[\s\S]*<\/ol>/ig);
                    LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /<li[^>]*>(?:\s|\S)*?<\/li>/ig);
                    // LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /<li>|<\/li>|<ul>|<\/ul>|<ol>|<\/ol>/ig);
                    // LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /<ul[^>]*>(?:\s|\S)*?<\/ul>|<ol[^>]*>(?:\s|\S)*?<\/ol>|<li[^>]*>(?:\s|\S)*?<\/li>/ig);
                    // LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /<ul[^>]*>(?:\s|\S)*?<\/ul>|<ol[^>]*>(?:\s|\S)*?<\/ol>/ig);
                }
                // if (Lset.has(LConstraintsAvailable.COMMENT_PARAM)) {
                //     LFinalResult = LMe.pvtRemoveComments(LFinalResult);
                // }
                if (Lset.has(LConstraintsAvailable.PARAGRAPH_PARAM)) {
                    // LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /<p[^>]*>[\s\S]*<\/p>/gi);
                    LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /<p[^>]*>(?:\s|\S)*?<\/p>/gi);
                }
                if (Lset.has(LConstraintsAvailable.NEWLINE_PARAM)) {
                    LFinalResult = LMe.pvtRemoveSelectedTag(LFinalResult, /<br[^>]*>/gi);
                    // LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /<span[^>]*>(?:\s|\S)*?<\/span>/gi);
                }
            }
            return LFinalResult.filter(str => str.trim() !== '').map(LFormattedString => LFormattedString.trim());
        },
        pvtIsCopiedDataFromSpreadSheet: function (p_strData) {
            let LMe = this;
            // Define patterns to match typical spreadsheet data characteristics
            const spreadsheetPatterns = [
                /<google-sheets-html-origin\b[^>]*>|<\/google-sheets-html-origin>/gi, 
            ];

            // Check if any pattern matches the data
            for (const pattern of spreadsheetPatterns) {
                p_strData = LMe.pvtRemoveSelectedTag(p_strData,pattern);
                // if (pattern.test(p_strData)) {
                //     return true; // Return true if any pattern matches
                // }
            }

            let TotalArr = LMe.pvtSplitDataByTag(p_strData,/<table[^>]*>(?:\s|\S)*?<\/table>/gi)
            if(!TotalArr)return false;
            return TotalArr.length === 1; // Return false if no pattern matches
        },

        pvtGetTotalColumnCount: function (p_arrTableData) {
            if (p_arrTableData.length === 0) {
                console.error("No table to Extract Data")
                return;
            }
            let LColGroupTagData = p_arrTableData[0].match(/<colgroup\b[^>]*>[\s\S]*?<\/colgroup>/gi);
            if (LColGroupTagData <= 0) return;

            let LColumnsDataArr = LColGroupTagData[0].match(/<col\b[^>]*>/gi)
            if (LColumnsDataArr <= 0) {
                console.error("No column selected");
                return
            }

            return LColumnsDataArr.length;

        },
        pvtGetTableHeaders: function (p_arrTableData) {
            const regex = /<tr[^>]*>[\s\S]*?<\/tr>/ig;
            const LMe = this;
            let trData = p_arrTableData[0].match(regex);
            if (trData <= 0) return;
            let LHeadersRow = LMe.pvtRemoveSelectedTag([trData[0]], /<[^>]*>|<\/>|&nbsp;|[\r\n\t]|<br[^>]*>/g);
            if (LHeadersRow.length == 0) { console.error("Select proper Data"); return; }
            return LHeadersRow.map(p_strHeading => p_strHeading.toLowerCase());
        },

        pvtExtractTableData(p_arrData) {
            let LMe = this;
            if (!p_arrData) {
                console.error("No data to extract");
                return;
            }

            let LTotalNumberOfColumns = LMe.pvtGetTotalColumnCount(p_arrData);
            if (LTotalNumberOfColumns <= 0) return;
            console.log("total col : ", LTotalNumberOfColumns);

            let LHeaderOfTableArr = LMe.pvtGetTableHeaders(p_arrData);
            if (LHeaderOfTableArr.length < 0) return;
            console.log("header of table : ", LHeaderOfTableArr);

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
            trData = LMe.pvtRemoveSelectedTag(trData, /<tr[^>]*>|<\/tr>|[\r\n\t]/ig);
            // trData = LMe.pvtRemoveSelectedTag(trData, /[\r\n\t]/g);
            console.log("trData:", trData)
            trData = LMe.pvtSplitDataByTag(trData, /<td[^>]*>(.*?)<\/td>/ig);

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


            // trData = trData.map(str => LMe.extractTextFromTd(str))
            trData = trData.map(str => str.replace(/<[^>]+>/g, ""))

            console.log('trData', trData)

            let LFormattedObjectForStoreArr = [];
            let flag = true;
            for (let i = 0; i < trData.length; i++) {
                if (LHeaderOfTableArr[i % LTotalNumberOfColumns].startsWith("desc")) {
                    flag = false
                }
                LFormattedObjectForStoreArr.push({ fieldType: flag ? 'name' : 'desc', extractedData: trData[i] });
                flag = true;
            }
            console.log('LFormattedObjectForStoreArr', LFormattedObjectForStoreArr)

            return LFormattedObjectForStoreArr;
        },

        //  extractTextFromTd: function(tdString) {
        //     // Remove everything beyond the closing </td> tag.
        //     const cleanedString = tdString.replace(/(.*?)<td>/ig, "");

        //     // Remove leading and trailing whitespace.
        //     const trimmedString = cleanedString.trim();

        //     // Remove any remaining HTML tags using a regular expression.
        //     const text = trimmedString.replace(/<[^>]+>/g, "");

        //     return text;
        //   },

        RemoveTagsFromNameField: function (p_strData) {
            let LGeneratedArr =  this.pvtRemoveSelectedTag([p_strData], /<[^>]*>|<\/>|&nbsp;/g)
            return LGeneratedArr.join(" ").trim() || null;
        },


        /**
        * Helper function to split data by HTML tag.
        * @private
        * @param {string[]} p_arrdata The array of data strings to be split.
        * @param {RegExp} p_regTag The regular expression for tag matching.
        * @returns {string[]} An array of split data strings.
        */
        pvtSplitDataByTag: function (p_arrdata, p_regTag) {
            // return p_arrdata.flatMap(str => str.split(p_regTag).map((item, index, array) => {
            //     // Append the regex match to the end of each split except for the last split
            //     return index < array.length - 1 ? item + p_regTag : item;
            // }));
            // return p_arrdata.flatMap(str => str.split(p_regTag).filter(Boolean));
            return p_arrdata.flatMap((str) => {
                const matches = str.matchAll(p_regTag);

                // Initialize an empty result array
                const result = [];

                // Iterate through the original string and matches
                let startIndex = 0;
                for (const match of matches) {
                    // Extract the matched text and its starting index
                    const matchedText = match[0];
                    const matchIndex = match.index;

                    // Add the substring before the match (if any)
                    if (startIndex < matchIndex) {
                        result.push(str.substring(startIndex, matchIndex));
                    }

                    // Add the matched text itself
                    result.push(matchedText);

                    // Update the starting index for the next iteration
                    startIndex = matchIndex + matchedText.length;
                }

                // Add the remaining substring after the last match (if any)
                if (startIndex < str.length) {
                    result.push(str.substring(startIndex));
                }

                return result;
            });
        },

        pvtRemoveSelectedTag: function (p_arrData, p_regTag) { 
            return p_arrData.flatMap(str => str.split(p_regTag).filter(Boolean));
        },

        /**
         * Helper function to remove comments from the data.
         * @private
         * @param {string[]} p_regTag The array of data strings to remove comments from.
         * @returns {string[]} An array of data strings without comments.
         */
        pvtRemoveComments: function (p_regTag) {
            const LCommentRegex = /(?<!\S)\/\/[\s\S]*?\n|\/\*[\s\S]*?\*\/|\<!--[\s\S]*--\>/g; // Regex to match both single-line and multi-line comments
            return p_regTag.flatMap(str => str.split(LCommentRegex)); // Remove comments from each string
        },
    }
})








// SplitDataUsingInputFormatters: function (p_strData, p_arrParams) {
//     let LMe = this;
//     let LFinalResult = [p_strData]; // Initialize the result array with the original data
//     let Lset = new Set(p_arrParams.map(p_strConstraint => p_strConstraint.toLowerCase()));
//     let LConstraintsAvailable = {
//         HTML_PARAM: "html",
//         DIVISION_PARAM: "division",
//         BULLET_PARAM: "bullet",
//         COMMENT_PARAM: "comment",
//         PARAGRAPH_PARAM: "paragraph",
//         NEWLINE_PARAM: "newline",
//     };

//     //check if no array is passed or is an empty array
//     if (!p_arrParams || p_arrParams.length == 0) {
//         LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /\r?\n/);
//     }
//     else {
//         //Use constants instead of Strings directly
//         if (Lset.has(LConstraintsAvailable.HTML_PARAM)) {
//             LFinalResult = LMe.pvtRemoveSelectedTag(LFinalResult, /<[^>]*>|<\/>/g)
//         }
//         if (Lset.has(LConstraintsAvailable.DIVISION_PARAM)) {
//             LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /<div[^>]*>|<\/div>/gi);
//         }
//         if (Lset.has(LConstraintsAvailable.BULLET_PARAM)) {
//             // LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /<li>|<\/li>|<ul>|<\/ul>|<ol>|<\/ol>/ig);
//             LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /<ul[^>]*>[\s\S]*<\/ul>|<ol[^>]*>[\s\S]*<\/ol>/ig);
//         }
//         if (Lset.has(LConstraintsAvailable.COMMENT_PARAM)) {
//             LFinalResult = LMe.pvtRemoveComments(LFinalResult);
//         }
//         if (Lset.has(LConstraintsAvailable.PARAGRAPH_PARAM)) {
//             LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /<p[^>]*>[\s\S]*<\/p>/gi);
//         }
//         if (Lset.has(LConstraintsAvailable.NEWLINE_PARAM)) {
//             LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /\r?\n/);
//         }
//     }

//     return LFinalResult.filter(str => str.trim() !== '').map(LFormattedString => LFormattedString.trim());
// },




//from top team functino

// /**
//        * Splits the data into an array of strings based on specified parameters.
//        * @param {string} p_strData The data to be split.
//        * @param {string[]} p_arrParams Parameters to specify splitting criteria.
//        * If none are passed then newline i.e. ("\r" or "\n") will be considered
//        * User can pass Array of string containing criteria such as "newline", "paragraph","division","bullet","comment"
//        * @returns {string[]} An array of split data strings.
//        */
// SplitDataUsingInputFormatters: function (p_strData, p_arrParams) {
//     let LMe = this;
//     let LFinalResult = [p_strData]; // Initialize the result array with the original data
//     let Lset = new Set(p_arrParams.map(p_strConstraint => p_strConstraint.toLowerCase()));
//     let LConstraintsAvailable = {
//       HTML_PARAM: "html",
//       DIVISION_PARAM: "division",
//       BULLET_PARAM: "bullet",
//       COMMENT_PARAM: "comment",
//       PARAGRAPH_PARAM: "paragraph",
//       NEWLINE_PARAM: "newline",
//     };

//     //check if no array is passed or is an empty array
//     if (!p_arrParams || p_arrParams.length == 0) {
//       LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /\r?\n/);
//     }
//     else {
//       //Use constants instead of Strings directly
//       if (Lset.has(LConstraintsAvailable.HTML_PARAM)) {
//         LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /<[^>]*>|<\/>/g)
//       }
//       if (Lset.has(LConstraintsAvailable.DIVISION_PARAM)) {
//         LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /<div[^>]*>|<\/div>/gi);
//       }
//       if (Lset.has(LConstraintsAvailable.BULLET_PARAM)) {
//         LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /<li>|<\/li>|<ul>|<\/ul>|<ol>|<\/ol>/ig);
//       }
//       if (Lset.has(LConstraintsAvailable.COMMENT_PARAM)) {
//         LFinalResult = LMe.pvtRemoveComments(LFinalResult);
//       }
//       if (Lset.has(LConstraintsAvailable.PARAGRAPH_PARAM)) {
//         LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /\r?\n[\r?\n]*\r?\n/);
//       }
//       if (Lset.has(LConstraintsAvailable.NEWLINE_PARAM)) {
//         LFinalResult = LMe.pvtSplitDataByTag(LFinalResult, /\r?\n/);
//       }
//     }

//     return LFinalResult.filter(str => str.trim() !== '').map(LFormattedString => LFormattedString.trim());
//   },
//  /**
//     * Helper function to split data by HTML tag.
//     * @private
//     * @param {string[]} p_arrdata The array of data strings to be split.
//     * @param {RegExp} p_regTag The regular expression for tag matching.
//     * @returns {string[]} An array of split data strings.
//     */
//  pvtSplitDataByTag: function (p_arrdata, p_regTag) {
//     return p_arrdata.flatMap(str => str.split(p_regTag).filter(Boolean));
// },



// /**
//  * Helper function to remove comments from the data.
//  * @private
//  * @param {string[]} p_regTag The array of data strings to remove comments from.
//  * @returns {string[]} An array of data strings without comments.
//  */
// pvtRemoveComments: function (p_regTag) {
//     const LCommentRegex = /(?<!\S)\/\/[\s\S]*?\n|\/\*[\s\S]*?\*\/|\<!--[\s\S]*--\>/g; // Regex to match both single-line and multi-line comments
//     return p_regTag.flatMap(str => str.split(LCommentRegex)); // Remove comments from each string
// },
