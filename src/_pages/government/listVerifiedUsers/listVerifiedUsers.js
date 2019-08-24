import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Draggable from 'react-draggable'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { CredentialCard } from '../../credential'
import { FETCH_STATUS } from '../../../_constants'

const useStyles = makeStyles(theme => ({
    userInfo: {
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

export function ListVerifiedUsers(props) {

    const classes = useStyles()

    const createData = (weid, name, gender, birthday, address, identityNumber, phoneNumber) => {
        return { weid, name, gender, birthday, address, identityNumber, phoneNumber }
    }

    const [open, setOpen] = React.useState(false)
    let rows = []
    // 分发查询请求
    useEffect(() => {
        props.listVerifiedUsersAsync()
        return () => {
        };
    }, [])
    if (props.listVerifiedUsers !== undefined) {
        rows = props.listVerifiedUsers
    } if (props.listVerifiedUsers !== undefined) {
        rows = props.listVerifiedUsers
    }
      
    if (props.fetchStatus == FETCH_STATUS.FETCH_BEGIN) {
        console.log("")
        return (
            <div>
                正在加载数据...
            </div>
        )
    }


    const handleClickOpen = (row) => {
        setOpen(true)
        userInfo = row
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <h2 className={classes.userInfo}>用户信息</h2>
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
                                    <TableCell align="center">{row.weid}</TableCell>
                                    <TableCell align="center">{row.name} </TableCell>
                                    <TableCell align="center">{row.gender === "M"? "男":"女"}</TableCell>
                                    <TableCell align="center">
                                        <Button size="medium" color="primary" variant="contained" onClick={() => handleClickOpen && handleClickOpen(row)}>查看用户</Button>
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
                            <CredentialCard userInfo={userInfo} />
                        </DialogContent>
                        <DialogActions>
                            <Button variant="contained" color="primary">查看原始凭证</Button>
                        </DialogActions>
                    </Dialog>
                </Paper>
            </Container>
        </div>

    )
}

