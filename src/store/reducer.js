const initialState = {
    itemList: []
};

const reducer = (state = initialState, action) => {
    //console.log("reducer state"+ JSON.stringify(state));
    console.log("reducer action");
    console.log(action.type)
    console.log(action.item)
    const newState = { ...state };
    if (action.type === 'ADD_ITEM') {
        const item = {
            id: Math.random(),
            value: action.item,
            isDone: false
        }
        return {
            ...state,
            itemList: state.itemList.concat(item)
        }

    }
    if (action.type === 'REMOVE_ITEM') {
        return {
            ...state,
            itemList: state.itemList.filter(ll => ll.id != action.id)
        }
    }
    if (action.type === 'MARK_DONE_ITEM') {
        const updateList = [...state.itemList]
        for (let item of updateList) {
            if (item.id === action.id) {
                item.isDone = true;
            }
        }
        return{
            ...state,
            itemList: updateList
        }
    }


    return newState
}

export const mapStateToProps = (state) => {
    return {
        itemList: state.itemList
    }
}

export const mapDispatchtoProps = (dispatch) => {
    return {
        onAddItem: (item) => dispatch({ type: 'ADD_ITEM', item: item }),
        onItemRemove: (id) => dispatch({ type: 'REMOVE_ITEM', id: id }),
        onItemDone: (id) => dispatch({ type: 'MARK_DONE_ITEM', id: id })
    }
}

export default reducer;