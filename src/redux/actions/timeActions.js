// import { isUserSignedIn } from 'redux/models/user';

export const TIME_REQUEST_STARTED = 'TIME_REQUEST_STARTED';
export const TIME_REQUEST_FINISHED = 'TIME_REQUEST_FINISHED';
export const TIME_REQUEST_ERROR = 'TIME_REQUEST_ERROR';

function timeRequestStarted() {
    return {type: TIME_REQUEST_STARTED};
}

function timeRequestFinished(time) {
    return {type: TIME_REQUEST_FINISHED, time};
}

export function timeRequest() {
    return (dispatch) => {
        dispatch(timeRequestStarted());
        return setTimeout(() => dispatch(timeRequestFinished(Date.now())), 1000); // Изображаем network latency :)
    };
}