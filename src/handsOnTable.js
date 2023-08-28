/* eslint-disable no-undef */
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';
import { policySpecificPvtCar } from './Data/data';
import React, { useEffect, useRef, useState } from 'react';

// register Handsontable's modules  
registerAllModules();



// const ScoreRenderer = (props) => {
//     const { value } = props;
//     const color = value > 60 ? '#2ECC40' : '#FF4136';
//     return (
//         <span style={{ color }}>{value}</span>
//     );
// };


function App1() {
    const hotRef = useRef(null);
    const [output, setOutput] = useState('Data will load from server');
    // const [isAutosave, setIsAutosave] = useState(false);

    const columnHeaders = Object.keys(policySpecificPvtCar[0]);
    let buttonClickCallback;
    let saveClickCallback;

    // const autosaveClickCallback = (event) => {
    //     setIsAutosave(event.target.checked);
    //     if (event.target.checked) {
    //         setOutput('Changes will be autosaved');
    //     } else {
    //         setOutput('Changes will not be autosaved');
    //     }
    // };


    useEffect(() => {
        const hot = hotRef.current?.hotInstance;
        const exportPlugin = hot.getPlugin('exportFile');
        // eslint-disable-next-line react-hooks/exhaustive-deps
        buttonClickCallback = () => {
            exportPlugin.downloadFile('csv', {
                bom: false,
                columnDelimiter: ',',
                columnHeaders: false,
                exportHiddenColumns: true,
                exportHiddenRows: true,
                fileExtension: 'csv',
                filename: 'Handsontable-CSV-file_[YYYY]-[MM]-[DD]',
                mimeType: 'text/csv',
                rowDelimiter: '\r\n',
                rowHeaders: true
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
        saveClickCallback = () => {
            // save all cell's data
            fetch('https://handsontable.com/docs/scripts/json/save.json', {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ data: hot.getData() })
            })
                .then(response => {
                    setOutput('Data saved');
                    console.log('The POST request is only used here for the demo purposes');
                });
        };



    });
    return (
        <>
            <HotTable
                ref={hotRef}
                data={policySpecificPvtCar}
                // minSpareRows={1}
                rowHeaders={true}
                colHeaders={columnHeaders}
                columns={[
                    {
                        "data": "id",
                        "readOnly": false,
                    },
                    {
                        "data": "Policy Wise",
                        "readOnly": false,
                        "isRequired": true,
                        "type": 'numeric',
                        // renderer: ScoreRenderer,
                        allowEmpty: false
                    },
                    {
                        "data": "Date",
                        "readOnly": false,
                        type: 'date',
                        dateFormat: 'DD/MM/YYYY',
                        correctFormat: true,
                    },
                    {
                        "data": "Premium",
                        "readOnly": false,
                    },
                    {
                        "data": "Producer Code",
                        "readOnly": false
                    },
                    {
                        "data": "Producer Name",
                        "readOnly": true
                    },
                    {
                        "data": "Producer PAN",
                        "readOnly": true
                    },
                    {
                        "data": "Channel",
                        "readOnly": true
                    },
                    {
                        "data": "Sub-Channel",
                        "readOnly": true
                    },
                    {
                        "data": "Branch Location",
                        "readOnly": true
                    },
                    {
                        "data": "Location Category",
                        "readOnly": true
                    },
                    {
                        "data": "Prodcom Month",
                        "readOnly": true
                    },
                    {
                        "data": "LOB1",
                        "readOnly": false,
                        type: 'dropdown',
                        source: ["pvtCar", "CV", "TW"]
                    },
                    {
                        "data": "Business Type",
                        "readOnly": false,
                        type: 'dropdown',
                        source: ["Brand New", "Roll Over", "Renewal"]
                    },
                    {
                        "data": "Segment",
                        "readOnly": false,
                        type: 'dropdown',
                        source: ["Compact", "Mpv_Suv", "Mid_Size", "Ultra_High_En_Min", "High_End", "Quadricycle",]
                    },
                    {
                        "data": "Section Text",
                        "readOnly": false,
                        type: 'dropdown',
                        source: ["Package", "SAOD", "SATP"]
                    },
                    {
                        "data": "(Policy Type)",
                        "readOnly": false,
                    },
                    {
                        "data": "Approval Grid for OD Portion",
                        "readOnly": false,
                        type: 'numeric'
                    },
                    {
                        "data": "Approval Grid for TP Portion",
                        "readOnly": false,
                        type: 'numeric'
                    },
                    {
                        "data": "Approval Grid for Per Policy ",
                        "readOnly": false,
                        type: 'numeric'
                    }
                ]
                }
                licenseKey="non-commercial-and-evaluation" // for non-commercial use only
            />

            <div className="controls">
                <button id="export-file" onClick={(...args) => buttonClickCallback(...args)}>Download</button>
            </div>
            <div className="controls">
                <button id="save" className="button button--primary button--blue" onClick={(...args) => saveClickCallback(...args)}>Save data</button>
            </div>
            <output className="console" id="output">{output} </output>
        </>
    );
}
export default App1;