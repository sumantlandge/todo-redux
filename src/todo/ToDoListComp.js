import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import ToDoItem from './ToDoItem';
import { mapStateToProps, mapDispatchtoProps } from './../store/reducer'

class ToDoListComp extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        }
    }
    onTextChange = (e) => {
        this.setState({ item: e.target.value });
    }


    // markAsDoneHandler = (key) => {
    //     const updateList = [...this.state.itemList]
    //     for (let item of updateList) {
    //         if (item.id === key) {
    //             item.isDone = true;
    //         }
    //     }
    //     this.setState({ itemList: updateList })
    // }


    render() {
        console.log("render " + JSON.stringify(this.props.itemList));
        return (<div>
            <div>
                <input type="text" value={this.state.item} onChange={this.onTextChange}></input>
                <button onClick={() => this.props.onAddItem(this.state.item)}> Add </button>
            </div>

            {
                this.props.itemList &&
                <div>
                    {this.props.itemList.map(it =>
                        <ToDoItem key={it.id} index={it.id} value={it.value} isDone={it.isDone} ></ToDoItem>
                    )}
                </div>
            }
        </div>);
    }
}



export default connect(mapStateToProps, mapDispatchtoProps)(ToDoListComp)