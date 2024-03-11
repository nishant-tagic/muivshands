
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid,useGridApiRef, GridToolbarContainer, useGridApiContext, GridEditSingleSelectCell, GridToolbarExport } from '@mui/x-data-grid';
import { policySpecificPvtCar } from './Data/data';


const columns = [
    {
        field: 'Policy Wise',
        headerName: 'Policy Wise',
        width: 130,
        editable: "true",
        // renderCell: PremiumCell,

    },
    {
        field: 'Client Name',
        headerName: 'Date',
        width: 130,
        editable: true,
        type: 'date'
    },
    {
        field: 'Premium',
        headerName: 'Premium',
        width: 130,
        editable: true,
        // renderCell: freePositiveNumber
    },
    {
        field: 'Producer Code',
        headerName: 'Producer Code',
        width: 130,
        type: 'number',
        // renderCell: PremiumCell
    },
    {
        field: 'Producer Name',
        headerName: 'Producer Name',
        width: 130
    },
    {
        field: 'Producer PAN',
        headerName: 'Producer PAN',
        width: 130
    },
    {
        field: 'Channel',
        headerName: 'Channel',
        width: 130
    },
    {
        field: 'Sub-Channel',
        headerName: 'Sub-Channel',
        width: 130
    },
    {
        field: 'Branch Location',
        headerName: 'Branch Location',
        width: 130
    },
    {
        field: 'Location Category',
        headerName: 'Location Category',
        width: 130
    },
    {
        field: 'Prodcom Month',
        headerName: 'Prodcom Month',
        width: 130, editable: true
    },
    {
        field: 'LOB1',
        headerName: 'LOB1',
        width: 130,
        editable: true,
        type: "singleSelect",
        valueOptions: ["pvtCar", "CV", "TW"]
    },
    {
        field: 'Business Type',
        headerName: 'Business Type',
        width: 130,
        editable: true,
        type: "singleSelect",
        valueOptions: ["Brand New", "Roll Over", "Renewal"]
    },
    {
        field: 'Segment',
        headerName: 'Segment',
        width: 130,
        editable: true,
        type: "singleSelect",
        valueOptions: ["Compact", "Mpv_Suv", "Mid_Size", "Ultra_High_En_Min", "High_End", "Quadricycle",]
    },
    {
        field: 'SectionText',
        headerName: 'Section Text',
        width: 130,
        editable: true,
        type: "singleSelect",
        valueOptions: ["Package", "SAOD", "SATP"],
        // renderEditCell: (params) => <CustomTypeEditComponent {...params} />,
    },
    {
        field: 'Approval Grid for OD Portion',
        headerName: 'Approval Grid for OD Portion',
        width: 130,
        type: 'number',
        // renderCell: cellValidator,
        editable: ({ params }) => {
            return params.row.type === 'SAOD' ? true : false;
        },
    },
    {
        field: 'Approval Grid for TP Portion ',
        headerName: 'Approval Grid for TP Portion',
        width: 130,
        // renderCell: cellValidator,
        type: 'number',
        editable: true,

    },
    {
        field: 'Approval Grid for Per Policy',
        headerName: 'Approval Grid for Per Policy ',
        width: 130,
        editable: true,
        type: 'number',
        // renderCell: cellValidator,
    }
];

export default function ValueGetterGrid() {
    const apiRef = useGridApiRef();
    apiRef.current.updateRows([{ id: 1, }]);



    return (
        <Box sx={{
            height: 500,
            width: '100%',
        }}>
            <DataGrid
                rows={policySpecificPvtCar}
                columns={columns}
            />
        </Box>
    );
}

