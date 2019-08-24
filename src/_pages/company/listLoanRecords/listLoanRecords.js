import React, { useEffect } from 'react'
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
import { FETCH_STATUS } from '../../../_constants'
import CircularProgress from '@material-ui/core/CircularProgress'
import { AwesomeCredentialCard } from '../../credential'


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

// 放款记录列表
export function ListLoanRecords(props) {
    const createData = (weid, amount, rate, duration, createdTime) => {
        return { weid, amount, rate, duration, createdTime }
    }
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const [credentialOpen, setCredentialOpen] = React.useState(false)

    const handleClickOpen = (row) => {
        setOpen(true)
        loanRequestInfo = row
    }

    const handleClose = () => {
        
        setOpen(false)
    }
    const onHandleAddToBlacklist = (id) => {
        props.addToBlacklistAsync(id)
        setOpen(false)
    }

    const handleCredentialClose = () => {
        setCredentialOpen(false)
    }

    const handleCredentialOpen = (weid, type) => {
        props.getCredentialAsync(weid, type)
        setCredentialOpen(true)
    }

    let rows = []
    useEffect(() => {
        // TODO weid 后续要抓的
        props.listLoanRecordsAsync()
        return () => {
        };
    }, [])

    // 添加获取状态显示组件
    if (props.fetchStatus === FETCH_STATUS.FETCH_BEGIN) {
        return (
            <div align="center">
                <CircularProgress />
            </div>
        )
    }
    if (props.loanRecords !== undefined) {
        rows = props.loanRecords
    }

    let userInfo = {}

    if (props.userInfo !== undefined) {
        userInfo = props.userInfo
    }

    return (
        <div>
            <h2 className={classes.title}>用户借贷记录列表</h2>
            <Container maxWidth="lg" className={classes.container}>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">放款日期</TableCell>
                                <TableCell align="center">数字身份</TableCell>
                                <TableCell align="center">借贷金额</TableCell>
                                <TableCell align="center">日利率</TableCell>
                                <TableCell align="center">还款期限</TableCell>
                                <TableCell align="center">还款日期</TableCell>
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
                                        {row.status === 1 ? "未还款" : row.status === 2 ? <div style={{ color: 'green' }}>已还款</div> : row.status === 3 ? <div style={{ color: 'red' }}>已超时</div> : row.status === 5 ? <div style={{ color: 'red' }}>已入黑名单</div> : "未还款"}
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button variant="contained" color="primary" onClick={() => handleClickOpen && handleClickOpen(row)}>查看记录</Button>
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
                            <Typography align="center" variant="h6">借贷记录详情</Typography>
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
                                        <Button variant="contained" style={{ backgroundColor: '#00BFFF', color: '#000000' }} onClick={() => handleCredentialOpen && handleCredentialOpen(loanRequestInfo.weid, 1)}>
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
                                    <TableCell align="right">{loanRequestInfo.dailyRate}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>借贷日期</TableCell>
                                    <TableCell align="right">{loanRequestInfo.effectiveTime}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>还款期限</TableCell>
                                    <TableCell align="right">{loanRequestInfo.durationMonth}个月</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>最晚还款日期</TableCell>
                                    <TableCell align="right">{loanRequestInfo.endTime}</TableCell>
                                </TableRow>
                            </TableBody>
                        </DialogContent>
                        <DialogActions>
                            {loanRequestInfo.status === 3 ?
                                <Button onClick={() => onHandleAddToBlacklist && onHandleAddToBlacklist(loanRequestInfo.id)} variant="contained" color="primary" align="right">
                                    加入黑名单
                                </Button> :
                                <div></div>
                            }
                        </DialogActions>
                    </Dialog>
                    { /* {查看凭证的Dialog} */}
                    <Dialog
                        open={credentialOpen}
                        onClose={handleCredentialClose}
                        PaperComponent={PaperComponent}
                        aria-labelledby="draggable-dialog-title"
                        maxWidth={100}
                    >
                        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                            <Typography align="center" variant="h6">凭证详情</Typography>
                        </DialogTitle>
                        <DialogContent>
                            <AwesomeCredentialCard userInfo={userInfo} />
                        </DialogContent>
                    </Dialog>
                </Paper>
            </Container>
        </div>
    )

}