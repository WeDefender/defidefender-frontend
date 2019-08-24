import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { Button, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
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
}))

const durationMonths = [
    {
        value: 1,
        label: '一个月'
    },
    {
        value: 2,
        label: '两个月'
    },
    {
        value: 3,
        label: '三个月'
    },
]

// 用户请求贷款
export function RequestLoan(props) {
    const classes = useStyles()
    const [values, setValues] = React.useState({
        companyName: 'WeBank',
        amount: 0,
        durationMonth: 1,
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onHandleRequestLoan = () => {
        props.requestLoanAsync(values.companyName, values.amount, values.durationMonth, "did:weid:1:0xee0a94ba9341882c3a613b5bef5152987ac1440d")
    }

    return (
        <Container maxWidth="lg" className={classes.container}>
            <Grid alignContent="center">
                <Typography variant="h4">小额信贷</Typography>
            </Grid>
            <Grid alignContent="space-between">
                <TextField
                    id="filled-select-currency-native"
                    select
                    label="WeBank"
                    className={classes.textField}
                    onChange={handleChange('company')}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="请选择你要借贷的公司"
                    margin="normal"
                    variant="filled"
                ></TextField>
            </Grid>
            <Grid>
                <TextField
                    id="outlined-number"
                    label="金额"
                    onChange={handleChange('amount')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                />
            </Grid>
            <Grid>
                <TextField
                    id="outlined-select-currency-native"
                    select
                    className={classes.textField}
                    value={values.durationMonth}
                    onChange={handleChange('durationMonth')}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="选择还款期限"
                    margin="normal"
                    variant="outlined"
                >
                    {durationMonths.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </Grid>
            <Grid>
                <Button variant="contained" color="primary" onClick={onHandleRequestLoan}>借贷</Button>
            </Grid>
        </Container>
    )
}
