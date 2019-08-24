import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import JSONTree from 'react-json-tree'
import jsonTheme from '../../company/jsonResult'
import Modal from '@material-ui/core/Modal'
import { CredentialCard } from '../../credential';
import { AwesomeCredentialCard } from '../../credential'

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        textAlign: 'center'
    },
    cardContent: {
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
    card: {
        maxWidth: 275,
        minHeight: 180
    },
    card: {
        maxWidth: 330,
        maxHeight: 210,
        borderRadius: 10,
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        },
    },
    media: {
        paddingTop: "56.25%"
    },
    content: {
        textAlign: "left",
        padding: theme.spacing.unit * 3
    },
    divider: {
        margin: `${theme.spacing.unit * 3}px 0`
    },
    heading: {
        fontWeight: "bold"
    },
    subheading: {
        lineHeight: 1.8
    },
    avatar: {
        display: "inline-block",
        border: "2px solid white",
        "&:not(:first-of-type)": {
            marginLeft: -theme.spacing.unit
        }
    },
    modalPaper: {
        position: 'relative',
        width: 1000,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(5, 5, 5),
    },
})

var openCredential = false

var userInfo = {}

// 列出所有凭证
class ListCredential extends Component {
    createData(weid, cpt, ipfs_hash) {
        return { weid, cpt, ipfs_hash }
    }

    constructor(props) {
        super(props)
        this.state = {
            openCredential: false
        }
    }

    getModalStyle() {
        const top = 30
        const left = 35

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        }
    }

    handleOpenCredential = () => {
        this.setState({ openCredential: true })
    }

    handleCloseCredential = () => {
        this.setState({ openCredential: false })
    }

    render() {

        const modalStyle = this.getModalStyle()
        const { classes } = this.props
        let rows = []

        return (
            <div>
                <h2 className={classes.title}>用户凭证</h2>
                <Grid container className={classes.root} spacing={2}>
                    {
                        rows.map((row, i) => (
                            <Grid item xs={4}>
                                <AwesomeCredentialCard userInfo={row} />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        )
    }
}

const ListCredentialWithStyles = withStyles(useStyles)(ListCredential)

export { ListCredentialWithStyles as ListCredential }