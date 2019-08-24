import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import { FETCH_STATUS } from '../../../_constants'

const useStyles = makeStyles(theme => ({
    title: {
        textAlign: 'center'
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    cardLabel: {
        border: '1px dashed',
        borderColor: 'green',
        textAlign: 'center'
    },
}))

export function ListMultiParityLoanRecords(props) {
    const classes = useStyles()

    let rows = []
    useEffect(() => {
        // TODO weid 后续要抓的
        props.listRequestVerifyMultiParityLoanRecordsAsync("CompanyB")
        return () => {
        };
    }, [])

    const onHandleRequestMultiParityLoan = (id, type) => {
        console.log("id, type: ", id, type)
        props.handleRequestVerifyMultiParityLoanRecordAsync(id, type)
    }

    if (props.fetchStatus == FETCH_STATUS.FETCH_BEGIN) {
        return (
            <div align="center">
                <CircularProgress />
            </div>
        )
    }

    // 判断是否为空
    if (props.listRequestVerifyMultiParityLoanRecords !== undefined) {
        rows = props.listRequestVerifyMultiParityLoanRecords
    }

    return (
        <div>
            <h2 className={classes.title}>多头查询记录</h2>
            <Container maxWidth="lg" className={classes.container}>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">请求者</TableCell>
                                <TableCell align="center">密文标识</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow>
                                    <TableCell align="center">{row.requester}</TableCell>
                                    <TableCell align="center">{row.ciphereText}</TableCell>
                                    <TableCell align="center">
                                        {row.status === 0 ?
                                            <div>
                                                <Button size="medium" color="primary" variant="contained" onClick={() => onHandleRequestMultiParityLoan && onHandleRequestMultiParityLoan(row.id, 0)}>接受</Button>
                                                <Button size="medium" color="secondary" variant="contained" onClick={() => onHandleRequestMultiParityLoan && onHandleRequestMultiParityLoan(row.id, 1)}>拒绝</Button>
                                            </div> :
                                            row.status === 1 ?
                                                <div style={{ color: 'blue' }}>已接受</div> :
                                                <div style={{ color: 'red' }}>已拒绝</div>
                                        }

                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </Container>
        </div >
    )
}