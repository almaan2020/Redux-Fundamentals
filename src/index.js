import store from './store';
import * as actions from './actionTypes';

const unsubscribe = store.subscribe(() => {
    console.log("Store Changed!", store.getState());
});

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: "Bug1"
    }
});

store.dispatch({
    type: actions.BUG_RESOLVED,
    payload: {
        id: 1
    }
})

store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
        id: 1
    }
});


/*refactoring:
   1-create actions.js:
      export const bugAdded= description=>({
        type:actions.BUG_ADDED,
        payload: {
        description            //means  description: description 
        }
    });

    2-in line8:
    store.dispatch(bugAdded("Bug1"));
*/