export default function({dispatch}) {
    return next => action => {
        // if action does not have payload or payload does not have a .then property then send it on
        if (!action.payload || !action.payload.then) {
            return next(action);
        }
        // make sure the actions promise resolves
        action.payload.then((response) => {
            // create a new action with the old data but replace promise with response data
            const NEW_ACTION = { ...action, payload: response };
            // dispatch the new action and send through all the middleware again
            dispatch(NEW_ACTION);
        });
    };
}