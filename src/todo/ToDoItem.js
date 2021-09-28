import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchtoProps } from './../store/reducer'
import './todo.css'

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

function ToDoItem(props) {
    const classes = useStyles();
    const textClass = props.isDone ? 'itl' : 'normal';
    console.log(props)

    return (<div>

        <FormControlLabel
            control={
                <Checkbox
                    name="checkedB"
                    color="primary"
                />
            }
            label="Mark As complete"
        />
        <Button variant="contained" size="medium" color="primary" className={classes.margin} onClick={() => props.onItemDone(props.index)}>
            Mark As complete
        </Button>
        <p className={textClass}>{props.value}</p>

        <IconButton aria-label="delete" className={classes.margin} onClick={() => props.onItemRemove(props.index)}>
            <DeleteIcon />
        </IconButton>
        {props.isDone && <p>it is done</p>}

    </div>);
}
export default connect(mapStateToProps, mapDispatchtoProps)(ToDoItem);