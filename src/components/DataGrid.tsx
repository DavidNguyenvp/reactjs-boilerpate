/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import { DataGrid as MuiDataGrid, GridColDef } from '@mui/x-data-grid'
import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'

interface TDataGridProps<T> {
    columns: GridColDef[]
    checkboxSelection?: boolean
    rows: T[]
    handleGetIds?: any
}

function DataGrid<T>(props: TDataGridProps<T>) {
    const { columns, checkboxSelection, rows, handleGetIds } = props
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <MuiDataGrid
                autoHeight
                rows={rows}
                columns={columns}
                checkboxSelection={checkboxSelection}
                disableSelectionOnClick
                disableColumnFilter
                disableColumnMenu
                hideFooter
                onSelectionModelChange={(ids) => {
                    handleGetIds(ids)
                }}
            />
        </div>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        '& .MuiDataGrid-root': {
            margin: '24px 17px 24px 24px',
            '& .MuiDataGrid-main': {
                ...theme.typography.text12Medium16,
                fontWeight: theme.typography.text12Regular16.fontWeight,
                '& .MuiDataGrid-columnHeaders': {
                    ...theme.typography.text12Medium16,
                    background: theme.palette.textColor.gray100,
                    '& .MuiDataGrid-columnHeader': {
                        borderRight: '1px solid #fff',
                    },
                    '& .MuiDataGrid-columnSeparator--sideRight': {
                        display: 'none',
                    },
                },
                '& .MuiDataGrid-cell': {
                    borderRight: '1px solid #fff',
                    whiteSpace: 'unset',
                    '&:focus-within': {
                        outline: 'none',
                    },
                },
                '& .MuiDataGrid-virtualScrollerContent': {
                    '& .MuiDataGrid-row:nth-child(even)': {
                        background: theme.palette.textColor.gray100,
                    },
                    '& .MuiDataGrid-row:nth-child(odd)': {
                        background: theme.palette.constant.main,
                        color: theme.palette.textColor.gray900,
                    },
                },
            },
        },
    },
}))

export default DataGrid
