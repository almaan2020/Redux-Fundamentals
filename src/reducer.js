import * as actions from './actionTypes';

/**store**
[
     {
        id:1,
        description:"...",
        resolved:false
    },
    {...},
    {...}
]

**action**
{
    type:"bugAdded",
    payload:{
        description:"..."     //min data for adding bug
    }
}
**************/
//reducer is a pure function
let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];

        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);

        case actions.BUG_RESOLVED:
            return state.map(bug => (bug.id !== action.payload.id ? bug : { ...bug, resolved: true }));

        default: return state;
    }
}