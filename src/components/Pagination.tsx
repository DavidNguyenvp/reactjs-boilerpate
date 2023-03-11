import { Pagination as MuiPagination, PaginationItem as MuiPaginationItem, Stack, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useEffect, useState } from 'react'
import { DEFAULT_VALUE_PAGINATION } from '../constants/Common'
import { IPaginationCalc } from '../types'
import { AngleLeft, AngleRight } from './icons'

interface IPaginationProps<T> {
    paginationCalc: IPaginationCalc
    setPaginationCalc: React.Dispatch<React.SetStateAction<T>>
    className?: string
}

const Pagination = (props: IPaginationProps<IPaginationCalc>): JSX.Element => {
    const classes = useStyles()
    const [totalPage, setTotalPage] = useState<number>()
    const { paginationCalc, setPaginationCalc, className } = props

    const onChangePage = (event: React.ChangeEvent<unknown>, page: number) => {
        setPaginationCalc({ ...paginationCalc, pageIndex: page })
    }

    useEffect(() => {
        setTotalPage(Math.ceil(paginationCalc.totalRecord / paginationCalc.pageSize))
        window.scrollTo(0, 0)
    }, [paginationCalc])

    return (
        <Stack direction="row" justifyContent="center" alignItems="center" className={className}>
            <MuiPagination
                count={totalPage}
                variant="outlined"
                shape="rounded"
                siblingCount={1}
                boundaryCount={1}
                className={classes.root}
                defaultPage={paginationCalc.defaultPage}
                page={paginationCalc.pageIndex === 0 ? 1 : paginationCalc.pageIndex}
                renderItem={(item) => <MuiPaginationItem slots={{ previous: AngleLeft, next: AngleRight }} {...item} />}
                onChange={onChangePage}
            />
        </Stack>
    )
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        '& .MuiPaginationItem-root': {
            background: theme.palette.constant.main,
            outline: 'none',
            fontSize: '16px',
            lineHeight: '20px',
            fontWeight: '500',
            color: theme.palette.constant.dark,
            borderColor: theme.palette.functional.paginationItemBorder,
        },
        '& .MuiPaginationItem-root:hover': {
            background: 'none',
        },
        '& .MuiPaginationItem-root.Mui-selected': {
            color: theme.palette.functional.main,
            borderColor: theme.palette.functional.main,
        },
        '& .MuiPaginationItem-root.MuiPaginationItem-previousNext.Mui-disabled': {
            borderColor: theme.palette.functional.paginationItemDisable,
            background: theme.palette.functional.paginationItemDisable,
            '& path': {
                fill: theme.palette.functional.paginationDisablePreNextIcon,
            },
        },
        '& div.MuiPaginationItem-root': {
            userSelect: 'none',
            height: '32px',
            border: `1px solid ${theme.palette.functional.paginationItemBorder}`,
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        '& .MuiPaginationItem-previousNext': {
            padding: 0,
        },
    },
}))

Pagination.defaultProps = {
    paginationCalc: DEFAULT_VALUE_PAGINATION,
}

export default Pagination
