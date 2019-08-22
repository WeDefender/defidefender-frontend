import React from 'react'
import Container from '@material-ui/core/Container'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Draggable from 'react-draggable'
import Typography from '@material-ui/core/Typography'

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
    table: {
        minWidth: 650,
        width: '100%',
    },
    progress: {
        margin: theme.spacing(2),
    },
    cardLabel: {
        border: '1px dashed',
        borderColor: 'green',
        textAlign: 'center'
    },
}))

var loanRequestInfo = {
    weid: '',
    amount: '',
    rate: '',
    expiredDate: '',
    createdTime: '',
}

function PaperComponent(props) {
    return (
        <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    )
}

// 用户借贷请求列表
export function LoanRequestsList() {

    const createData = (weid, amount, rate, duration, createdTime) => {
        return { weid, amount, rate, duration, createdTime }
    }

    const rows = [
        createData(`did:weid:1:0xa4a3be6469d4d59747c3f5da320af37c045a3441`, 10000, '0.4%', '三个月', '2019-08-01'),
        createData(`did:weid:1:0x02d37251f31f2dc205abef81d2c674de425f1781`, 20000, '0.5%', '三个月', '2019-08-02'),
        createData(`did:weid:1:0x5ef98d1c967f869f8f2c19eadfabd847b346e21c`, 50000, '0.6%', '六个月', '2019-08-03'),
    ]

    const classes = useStyles()

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = (row) => {
        setOpen(true)
        loanRequestInfo = row
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <h2 className={classes.title}>借贷请求列表</h2>
            <Container maxWidth="lg" className={classes.container}>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">创建日期</TableCell>
                                <TableCell align="center">借贷金额</TableCell>
                                <TableCell align="center">日利率</TableCell>
                                <TableCell align="center">还款期限</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow>
                                    <TableCell align="center">
                                        {row.createdTime}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.amount}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.rate}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.duration}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="contained" color="primary" onClick={() => handleClickOpen && handleClickOpen(row)}>查看请求</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        PaperComponent={PaperComponent}
                        aria-labelledby="draggable-dialog-title"
                        maxWidth={100}
                    >
                        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                            <Typography align="center" variant="h6">借贷请求详情</Typography>
                        </DialogTitle>
                        <DialogContent>
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={3}>数字身份</TableCell>
                                    <TableCell align="right">
                                        <Typography className={classes.cardLabel}>
                                            <div style={{ color: 'green' }}>{loanRequestInfo.weid}</div>
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>凭证</TableCell>
                                    <TableCell align="center">
                                        <Button variant="contained" style={{ backgroundColor: '#00BFFF', color: '#000000' }}>
                                            查看凭证
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>借贷金额</TableCell>
                                    <TableCell align="right">{loanRequestInfo.amount}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>日利率</TableCell>
                                    <TableCell align="right">{loanRequestInfo.rate}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>还款期限</TableCell>
                                    <TableCell align="right">{loanRequestInfo.duration}</TableCell>
                                </TableRow>
                            </TableBody>
                        </DialogContent>
                    </Dialog>
                </Paper>
            </Container>
        </div>
    )

}