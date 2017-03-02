import { connect } from 'react-redux';
import RequiredBlood from '../components/requiredBlood/requiredBlood';
import { loadInitialState } from '../store/actions/loadInitialState';
import { requiredBloodRequest } from '../store/actions/requiredBlood';

function mapStateToProps(state) {
    //here we are mapping the redux state to props so we can use it in our components
    return {
        application: state.application
    };
}

function mapDispatchToProps(dispatch) {
    //Those will be the actions we will be Triggerening from Components
    return {
        loadInitialState: () => dispatch(loadInitialState()),
        requiredBloodRequest: () => dispatch(requiredBloodRequest())
    };
}

const RequiredBloodContainer = connect(mapStateToProps, mapDispatchToProps)(RequiredBlood);

export default RequiredBloodContainer;