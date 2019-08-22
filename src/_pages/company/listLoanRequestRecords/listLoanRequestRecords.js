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

// 个人借贷请求列表
export function ListLoanRequestRecords(props) {

    const createData = (weid, amount, rate, duration, createdTime) => {
        return { weid, amount, rate, duration, createdTime }
    }

    const classes = useStyles()

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = (row) => {
        setOpen(true)
        loanRequestInfo = row
    }

    const handleClose = () => {
        setOpen(false)
    }

    let rows = []

    props.listLoanRequestRecordsAsync()

    if (props.loanRequestRecords !== undefined) {
        rows = props.loanRequestRecords
    }

    return (
        <div>
            <h2 className={classes.title}>借贷请求列表</h2>
            <Container maxWidth="lg" className={classes.container}>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">时间</TableCell>
                                <TableCell align="center">数字身份</TableCell>
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
                                        {row.weid}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.amount}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.dailyRate}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.durationMonth}个月
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="contained" color="primary" onClick={() => handleClickOpen && handleClickOpen(row)}>查看详情</Button>
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
                                    <TableCell colSpan={3}>凭证未被盗用</TableCell>
                                    <TableCell align="right">
                                        <Typography className={classes.cardLabel}>
                                            <div style={{ color: 'blue' }}>核验通过</div>
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>凭证合规</TableCell>
                                    <TableCell align="right">
                                        <Typography className={classes.cardLabel}>
                                            <div style={{ color: 'blue' }}>核验通过</div>
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
                                    <TableCell colSpan={3}>黑名单</TableCell>
                                    <TableCell align="center">
                                        <Button variant="contained" style={{ backgroundColor: '#00BFFF', color: '#000000' }}>
                                            黑名单查询
                                        </Button>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>多头借贷情况</TableCell>
                                    <TableCell align="right">
                                        <Typography>
                                            已借平台:<div style={{ color: 'red' }}>2个</div>
                                        </Typography>
                                        <Typography>
                                            已借金额:<div style={{ color: 'red' }}>3万</div>
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>借贷金额</TableCell>
                                    <TableCell align="right">{loanRequestInfo.amount}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>日利率</TableCell>
                                    <TableCell align="right">{loanRequestInfo.dailyRate}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>借款期限</TableCell>
                                    <TableCell align="right">{loanRequestInfo.durationMonth}</TableCell>
                                </TableRow>
                            </TableBody>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} variant="contained" color="primary">
                                允许
                            </Button>
                            <Button onClick={handleClose} variant="contained" color="secondary">
                                拒绝
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Paper>
            </Container>
        </div>
    )

}