import ActionTypes from './actionTypes';
import * as fbConfigs from '../../configs/dbconfigs';

export function loadInitialState() {
  return dispatch => {
    dispatch(loadInitialStateAction())
    // if(fbConfigs.fbAuth.currentUser){
    //   dispatch(LoginRequestSuccess({ uid: fbConfigs.fbAuth.currentUser.uid, userEmail: fbConfigs.fbAuth.currentUser.email }));
    // }
    // console.log(fbConfigs.fbAuth.currentUser);
  }
}

function loadInitialStateAction() {
  return {
    type: ActionTypes.LoadInitialState
  };
}

function LoginRequestSuccess(data) {
    return {
        type: ActionTypes.LoginRequestSuccess,
        data
    };
}