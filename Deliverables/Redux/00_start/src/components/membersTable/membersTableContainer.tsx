import {connect} from 'react-redux';
import {memberRequest} from '../../actions';
import {MembersTableComponent} from './membersTable';
import {State} from '../../reducers';

const mapStateToProps = (state: State) => {
    return {
        members: state.memberReducer,
        filter: state.filterReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMembers: (company: string) => {
            return dispatch(memberRequest(company))
        }
    };
};

export const MembersTableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MembersTableComponent);
