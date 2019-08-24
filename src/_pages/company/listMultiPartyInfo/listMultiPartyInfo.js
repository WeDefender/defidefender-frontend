import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { FETCH_STATUS } from '../../../_constants'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = theme => ({
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
})

// 查看黑名单
class Blacklist extends Component {
    // 返回DID和违约记录
    createData(weid, violate_record) {
        return { weid, violate_record }
    }
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.listBlacklistAsync() // 先分发查询修改状态树
    }

    render() {
        // this.createData(`0xc83b2cf766d3165acc2fc9164641380088defd1b`, "xx于xx年xx月xx日未还款金额xx元"),
        const rows = []
        // 需要根据状态判定是否已经结束获取
        console.log("组件内显示黑名单：", this.props.blacklist)

        if (this.props.blacklist !== undefined) {
            this.props.blacklist.map((item, i) => {
                rows.push(this.createData(item.weid, item.record))
            })
        }

        const { classes } = this.props

        if (this.props.fetchStatus === FETCH_STATUS.FETCH_BEGIN) {
            return (
                <div align="center">
                    <br />
                    <CircularProgress />
                </div>
            )
        }

        return (
            <div>
                <h3 className={classes.title}>查看多头借贷情况</h3>
                <Container maxWidth="lg" className={classes.container}>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">WeID</TableCell>
                                    <TableCell align="center">违约记录</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <TableRow >
                                        <TableCell align="center">{row.weid}</TableCell>
                                        <TableCell align="center">{row.violate_record} </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Container>
            </div>
        )
    }
}

const BlacklistWithStyles = withStyles(useStyles)(Blacklist)

export { BlacklistWithStyles as Blacklist }