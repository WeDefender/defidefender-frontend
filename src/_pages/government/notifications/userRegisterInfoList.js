import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core'
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

function PaperComponent(props) {
    return (
        <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
            <Paper {...props} />
        </Draggable>
    )
}

var userInfo = {
    weid: '',
    name: '',
    gender: '',
    birthday: '',
    address: '',
    identityNumber: '',
    phoneNumber: ''
}

export function UserRegisterInfoList() {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false)

    const createData = (weid, name, gender, birthday, address, identityNumber, phoneNumber) => {
        return { weid, name, gender, birthday, address, identityNumber, phoneNumber }
    }

    const handleClickOpen = (row) => {
        setOpen(true)
        userInfo = row
    }

    const handleClose = () => {
        setOpen(false)
    }

    const rows = [
        createData(`did:weid:1:0x5ef98d1c967f869f8f2c19eadfabd847b346e21c`, `高天尧`, '男', '1995-07-01', '杭州', '330xxxxxxxxxxxxxx', '188xxxxxxxx'),
        createData(`did:weid:1:0x02d37251f31f2dc205abef81d2c674de425f1781`, `李其柄`, '男', '1993-07-01', '杭州', '331xxxxxxxxxxxxxx', '185xxxxxxxx'),
        createData(`did:weid:1:0xa4a3be6469d4d59747c3f5da320af37c045a3441`, `林泽培`, '男', '1995-07-01', '杭州', '332xxxxxxxxxxxxxx', '186xxxxxxxx'),
        createData(`did:weid:1:0x0d8c0b900595f23a5c0276a53e1bf9e39a5a6e18`, `王兵`, '男', '1993-01-13', '杭州', '335xxxxxxxxxxxxxx', '187xxxxxxxx'),
        createData(`did:weid:1:0x7ab7bbe0a03b24979aaf51bf4472ea146932d11c`, `应昊`, '男', '1993-07-01', '杭州', '230xxxxxxxxxxxxxx', '189xxxxxxxx')
    ]

    return (
        <div>
            <h2 className={classes.title}>用户注册信息列表</h2>
            <Container maxWidth="lg" className={classes.container}>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">数字身份</TableCell>
                                <TableCell align="center">姓名</TableCell>
                                <TableCell align="center">性别</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(row => (
                                <TableRow >
                                    <TableCell align="center">{row.weid} </TableCell>
                                    <TableCell align="center">{row.name} </TableCell>
                                    <TableCell align="center">{row.gender}</TableCell>
                                    <TableCell align="center">
                                        <Button size="medium" color="primary" variant="contained" onClick={() => handleClickOpen && handleClickOpen(row)}>查看请求</Button>
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
                            <Typography align="center" variant="h6">用户信息</Typography>
                        </DialogTitle>
                        <DialogContent>
                            <TableBody>
                                <TableRow>
                                    <TableCell colSpan={3}>数字身份</TableCell>
                                    <TableCell align="right">
                                        <Typography className={classes.cardLabel}>
                                            <div style={{ color: 'green' }}>{userInfo.weid}</div>
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>姓名</TableCell>
                                    <TableCell align="right">{userInfo.name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>性别</TableCell>
                                    <TableCell align="right">{userInfo.gender}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>出生日期</TableCell>
                                    <TableCell align="right">{userInfo.birthday}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>户籍所在地</TableCell>
                                    <TableCell align="right">{userInfo.address}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>身份证号</TableCell>
                                    <TableCell align="right">{userInfo.identityNumber}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={3}>手机号码</TableCell>
                                    <TableCell align="right">{userInfo.phoneNumber}</TableCell>
                                </TableRow>
                            </TableBody>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} variant="contained" color="primary">
                                通过
                            </Button>
                            <Button onClick={handleClose} variant="contained" color="secondary">
                                拒绝
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Paper>
            </Container>
        </div >
    )
}