/* eslint-disable react-hooks/rules-of-hooks */

import * as React from 'react';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import { GridActionsCellItem, GridCellModes, GridCellModesModel, GridCellParams, GridRenderCellParams, GridRowId, GridRowModes, GridRowModesModel, GridRowsProp } from '@mui/x-data-grid';
import { DataGrid, GridToolbarContainer, GridColDef } from '@mui/x-data-grid';
import { policySpecificPvtCar, policy } from './Data/data';
import { Button } from '@mui/material';
import { randomId } from '@mui/x-data-grid-generator';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';

// Functions------------------------------------------------------------
const tenDigitValidator = ({ value }: GridRenderCellParams<any, any, any, any>) => {
    if (!/^\d{10}$/.test(value)) {
        return <span style={{ color: 'red' }}>{value}</span>;
    } else {
        return <span>{value}</span>;
    }
};

const freePositiveNumber = ({ value }: GridRenderCellParams<any, any, any, any>) => {
    if (/^[1-9]\d*$/.test(value)) {
        return value;
    } else {
        return <span style={{ color: 'red' }}>{value}</span>;
    }
};

const valueBetweenZeroToHundred = ({ value }: GridRenderCellParams<any, any, any, any>) => {
    const min = 0;
    const max = 100;

    if (value < min || value > max) {
        return <span style={{ color: 'red' }}>{value}</span>;
    } else {
        return value;
    }
};

interface EditToolbarProps {
    setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
    setRowModesModel: (
        newModel: (oldModel: GridRowModesModel) => GridRowModesModel,
    ) => void;
}

function EditToolbar(props: EditToolbarProps) {
    const { setRows, setRowModesModel } = props;

    const handleClick = () => {
        const id = randomId();
        setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
        setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
        }));
    };

    return (
        <GridToolbarContainer>
            <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
                Add record
            </Button>
        </GridToolbarContainer>
    );
}
//----------------------------------------------------------------------

//TODO:change it to config driven
const initialRows: GridRowsProp = policySpecificPvtCar;

export default function policyDataGrid() {

    const [rows, setRows] = React.useState(initialRows);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});

    const handleDeleteClick = (id: GridRowId) => () => {
        setRows(rows.filter((row) => row.id !== id));
    };

    const [cellModesModel, setCellModesModel] = React.useState<GridCellModesModel>({});

    const handleCellClick = React.useCallback(
        (params: GridCellParams, event: React.MouseEvent) => {
            if (!params.isEditable) {
                return;
            }

            // Ignore portal
            if (!event.currentTarget.contains(event.target as Element)) {
                return;
            }

            setCellModesModel((prevModel) => {
                return {
                    // Revert the mode of the other cells from other rows
                    ...Object.keys(prevModel).reduce(
                        (acc, id) => ({
                            ...acc,
                            [id]: Object.keys(prevModel[id]).reduce(
                                (acc2, field) => ({
                                    ...acc2,
                                    [field]: { mode: GridCellModes.View },
                                }),
                                {},
                            ),
                        }),
                        {},
                    ),
                    [params.id]: {
                        // Revert the mode of other cells in the same row
                        ...Object.keys(prevModel[params.id] || {}).reduce(
                            (acc, field) => ({ ...acc, [field]: { mode: GridCellModes.View } }),
                            {},
                        ),
                        [params.field]: { mode: GridCellModes.Edit },
                    },
                };
            });
        },
        [],
    );

    const handleCellModesModelChange = React.useCallback(
        (newModel: GridCellModesModel) => {
            setCellModesModel(newModel);
        },
        [],
    );

    const handlePolicyNumberChange = (event) => {
        const newValue = event.target.value;

        // Check if the entered value is a valid 10-digit policy number
        if (newValue) {
            // Update the corresponding cells with data from the policy object
            const updatedRows = rows.map((row) => {
                return { ...row, ...policy };
            });

            setRows(updatedRows);
        }
    };

    //TODO:change it to config driven
    const columns: GridColDef[] = [
        {
            field: 'Policy Wise',
            headerName: 'Policy Wise',
            width: 130,
            editable: true,
            renderCell: tenDigitValidator,
            renderEditCell: (params) => (
                <input
                    type="text"
                    value={params.value || ""}
                    onChange={handlePolicyNumberChange}
                />
            ),
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
            renderCell: freePositiveNumber
        },
        {
            field: 'Producer Code',
            headerName: 'Producer Code',
            width: 130,
            type: 'number',
            renderCell: tenDigitValidator
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
        },
        {
            field: 'Approval Grid for OD Portion',
            headerName: 'Approval Grid for OD Portion',
            width: 130,
            type: 'number',
            renderCell: valueBetweenZeroToHundred,
            editable: true,


        },
        {
            field: 'Approval Grid for TP Portion',
            headerName: 'Approval Grid for TP Portion',
            width: 130,
            renderCell: valueBetweenZeroToHundred,
            type: 'number',
            editable: true,

        },
        {
            field: 'Approval Grid for Per Policy ',
            headerName: 'Approval Grid for Per Policy ',
            width: 130,
            editable: true,
            type: 'number',
            renderCell: valueBetweenZeroToHundred,
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                const commonAction = (
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />
                );
                return [commonAction];
            },

        },
    ];

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    height: 650,
                    width: '100%',
                    py: 5,
                    // bgcolor: (theme) => (theme.palette.mode === 'light' ? 'grey.200' : 'grey.800'),
                    '& .actions': {
                        color: 'text.secondary',
                    },
                    '& .textPrimary': {
                        color: 'text.primary',
                    },
                }}
            >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    editMode="row"
                    columnBuffer={Number.MAX_SAFE_INTEGER}
                    columnThreshold={2}
                    cellModesModel={cellModesModel}
                    onCellModesModelChange={handleCellModesModelChange}
                    onCellClick={handleCellClick}
                    slots={{ toolbar: EditToolbar, }}
                    slotProps={{
                        toolbar: { setRows, setRowModesModel },
                    }}

                />
            </Box>
            <Button
                variant="contained"
                
                style={{
                    position: "absolute",
                    padding: "10px 50px",
                    margin: "68",
                    right: "10px",
                }}
            >
                Submit
            </Button>

        </Box>
    );
}
