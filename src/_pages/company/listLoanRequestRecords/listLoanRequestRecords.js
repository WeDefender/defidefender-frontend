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
import Modal from '@material-ui/core/Modal'
import { FETCH_STATUS } from '../../../_constants'
import CircularProgress from '@material-ui/core/CircularProgress'

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
    cardLabelGreen: {
        border: '1px solid',
        borderColor: 'green',
        textAlign: 'center',
    },
    cardLabelRed: {
        border: '1px solid',
        borderColor: 'red',
        textAlign: 'center'
    },
    modalPaper: {
        position: 'relative',
        width: 1000,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(5, 5, 5),
    },
}))

function getModalStyle() {
    const top = 30
    const left = 35

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    }
}

let loanRequestInfo = {}

function PaperComponent(props) {
    return (
        <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    )
}

// 个人借贷请求列表
export function ListLoanRequestRecords(props) {
    const [modalStyle] = React.useState(getModalStyle)
    const classes = useStyles()

    const [open, setOpen] = React.useState(false)

    const [modalOpen, setModalOpen] = React.useState(false)

    const handleClickModalOpen = () => {
        setModalOpen(true)
    }
    const handleClickModalClose = () => {
        setModalOpen(false)
    }

    const handleClickOpen = (row, i) => {
        setOpen(true)
        loanRequestInfo = row
    }

    const handleClose = () => {
        setOpen(false)
    }

    const onHandleLoanRequest = (id, type) => {
        props.handleLoanRequestAsync(id, type)
        setOpen(false)
    }

    const onHandleCheckUserSelf = (id) => {
        props.verifyUserAuthenticityAsync(id)
        loanRequestInfo.isUserSelf = 1
    }

    const onHandleVerifyCredential = (id, weid) => {
        let issuer = "did:weid:1:0x05cd595b591842e1edfbc1554138742dbe4998f1"
        let type = 0
        let verifyType = 0
        props.verifyCredentialAsync(id, weid, issuer, type, verifyType)
        loanRequestInfo.isCredentialVerified = 1
    }

    const onHandleGetBlacklistByWeid = (weid) => {
        props.listBlacklistByWeidAsync(weid)
        setModalOpen(true)
    }

    let rows = []
    let blacklistByWeid = []

    // 注入副作用操作
    useEffect(() => {
        // 分发获取操作
        console.log("当前获取状态：", props.fetchStatus)  
        props.listLoanRequestRecordsAsync()
        return () => {
        };
    }, [])
    
    if (props.fetchStatus == FETCH_STATUS.FETCH_BEGIN) {
        return (
            <div align="center">
                <br />
                <CircularProgress />
            </div>
        )
    }

    if (props.loanRequestRecords !== undefined) {
        rows = props.loanRequestRecords
    }

    if (props.blacklistByWeid !== undefined) {
        blacklistByWeid = props.blacklistByWeid
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
                            {rows.map((row, i) => (
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
                                        <Button variant="contained" color="primary" onClick={() => handleClickOpen && handleClickOpen(row, i)}>查看详情</Button>
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
                                        <Typography className={classes.cardLabelGreen}>
                                            <div style={{ color: 'green' }}>{loanRequestInfo.weid}</div>
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>凭证未被盗用</TableCell>
                                    <TableCell align="right">
                                        {loanRequestInfo.isUserSelf === 0 ?
                                            <Typography align="center">
                                                <Button variant="contained" color="primary" onClick={() => onHandleCheckUserSelf && onHandleCheckUserSelf(loanRequestInfo.id)}>核验</Button>
                                            </Typography> :
                                            loanRequestInfo.isUserSelf === 1 ?
                                                <Typography className={classes.cardLabelGreen}>
                                                    <div style={{ color: 'blue' }}>核验通过</div>
                                                </Typography> :
                                                loanRequestInfo.isUserSelf === 2 ?
                                                    <Typography className={classes.cardLabelRed}>
                                                        <div style={{ color: 'red' }}>核验未通过</div>
                                                    </Typography> :
                                                    <div>加载中</div>
                                        }
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>凭证合规</TableCell>
                                    <TableCell align="right">
                                        {loanRequestInfo.isCredentialVerified === 0 ?
                                            <Typography align="center">
                                                <Button variant="contained" color="primary" onClick={() => onHandleVerifyCredential && onHandleVerifyCredential(loanRequestInfo.id, loanRequestInfo.weid)}>核验</Button>
                                            </Typography> :
                                            loanRequestInfo.isCredentialVerified === 1 ?
                                                <Typography className={classes.cardLabelGreen}>
                                                    <div style={{ color: 'blue' }}>核验通过</div>
                                                </Typography> :
                                                <Typography className={classes.cardLabelRed}>
                                                    <div style={{ color: 'red' }}>核验未通过</div>
                                                </Typography>
                                        }
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
                                        <Button onClick={() => onHandleGetBlacklistByWeid && onHandleGetBlacklistByWeid(loanRequestInfo.weid)} variant="contained" style={{ backgroundColor: '#00BFFF', color: '#000000' }}>
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
                                    <TableCell align="right">{loanRequestInfo.durationMonth}个月</TableCell>
                                </TableRow>
                            </TableBody>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => onHandleLoanRequest && onHandleLoanRequest(loanRequestInfo.id, 0)} variant="contained" color="primary">
                                允许
                            </Button>
                            <Button onClick={() => onHandleLoanRequest && onHandleLoanRequest(loanRequestInfo.id, 1)} variant="contained" color="secondary">
                                拒绝
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={modalOpen}
                        onClose={handleClickModalClose}
                    >
                        <div style={modalStyle} className={classes.modalPaper}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">WeID</TableCell>
                                        <TableCell align="center">违约记录</TableCell>
                                        <TableCell align="center">创建时间</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {blacklistByWeid.map(row => (
                                        <TableRow>
                                            <TableCell>
                                                {row.weid}
                                            </TableCell>
                                            <TableCell>
                                                {row.record}
                                            </TableCell>
                                            <TableCell>
                                                {row.createdTime}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </Modal>
                </Paper>
            </Container>
        </div>
    )

}