import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Typography, Avatar, Paper, Button, FormControl, Input, InputLabel } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import firebase from '../firebase'

// Typography, Avatar, Button,

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(400 + theme.spacing(2))]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
    avatar: {
        margin: theme.spacing(0),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(0),
    },
    submit: {
        marginTop: theme.spacing(3),
    },
});

function Login(props) {

    const { classes } = props
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} onSubmit={e => e.preventDefault() && false}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input id="email" name="email" autoComplete="off" autoFocus value={email} onChange={e=>setEmail(e.target.value)}/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" type="password" name="password" autoComplete="off" value={password} onChange={e=>setPassword(e.target.value)}/>
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        onClick={login}
                        className={classes.submit}>>
                        Sign in
                    </Button>
                </form>
            </Paper>
        </main>
    )

    async function login(){
        try {
			await firebase.login(email, password)
			props.history.replace('/productos')
		} catch(error) {
			alert(error.message)
		}
    }
}

export default withRouter(withStyles(styles)(Login))
