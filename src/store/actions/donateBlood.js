import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function donateBloodRequest(donateBloodData) {
    return dispatch => {
        dispatch(DonateBloodRequest());
        const userRef = fbConfigs.database.ref('/bloodAvailable/' + donateBloodData.uid);
        userRef.set(true, donateBloodSuccessData => {
            dispatch(donateBloodRequestSuccess(donateBloodSuccessData));
        });

    }
}

function DonateBloodRequest() {
    return {
        type: ActionTypes.donateBloodRequest
    };
}

function donateBloodRequestSuccess(data) {
    return {
        type: ActionTypes.donateBloodRequestSuccess,
        data
    };
}

function donateBloodRequestFailed() {
    return {
        type: ActionTypes.donateBloodRequestFailed
    };
}