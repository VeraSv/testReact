import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const Form2 = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiFormControl-root': {
            margin: theme.spacing(1),
            width: 200,
          },
        },
      }));
      const classes = useStyles();
    const [values, setValues] = React.useState({
        login: '',
        multiline: 'Controlled'
    });
    const handleChange = login => event => {
        setValues({ ...values, [login]: event.target.value });
    };
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="outlined-name"
                label="Login"

                onChange={handleChange('login')}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-password-input"
                label="Password"
                className="password"
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
            />
            <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
        </form>
    )
}
export default Form2;