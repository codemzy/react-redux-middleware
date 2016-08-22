export default function({dispatch}) {
    return next => action => {
        // if action does not have payload or payload does not have a .then property then send it on
        if (!action.payload || !action.payload.then) {
            return next(action);
        }
        next(action);
    };
}