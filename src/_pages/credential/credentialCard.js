import Flippy, { FrontSide, BackSide } from 'react-flippy'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, TableBody, TableRow, TableCell, Grid, Button } from '@material-ui/core';
import './card.css'
import './card-types.css'
import HealthCard from 'react-health-card'

const useStyles = makeStyles(theme => ({
    cardLabel: {
        border: '1px dashed',
        borderColor: 'green',
        textAlign: 'center'
    },
}))

var userInfo = {
    weid: '',
    name: '',
    gender: '',
    birthday: '',
    address: '',
    identityNumber: '',
    phoneNumber: ''
}

export function CredentialCard(props) {

    const classes = useStyles()
    userInfo = props.userInfo

    return (
        <Flippy
            flipOnHover={false} // default false
            flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div    
            style={{ width: '350px', height: '350px' }} /// these are optional style, it is not necessary
        >
            <FrontSide>
                <HealthCard
                    issueDateTitle="发行日期"
                    cardNumber="12345678"
                    namePosition="back"
                    name="Jake Moxey"
                    issueDate="12122020"
                    issueNumber="12"
                    rank="01"
                    memberNumber="87654321A"
                    memberNumberLength={9}
                    focused="memberNumber"
                    isFlipped={false}
                />
            </FrontSide>
            <BackSide>
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
                        <TableCell align="right">
                            {userInfo.name}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={3}>性别</TableCell>
                        <TableCell align="right">
                            {userInfo.gender}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={3}>出生日期</TableCell>
                        <TableCell align="right">
                            {userInfo.birthday}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={3}>户籍</TableCell>
                        <TableCell align="right">
                            {userInfo.address}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={3}>身份证号</TableCell>
                        <TableCell align="right">
                            {userInfo.identityNumber}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell colSpan={3}>手机号</TableCell>
                        <TableCell align="right">
                            {userInfo.phoneNumber}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </BackSide>
        </Flippy>
    )
}