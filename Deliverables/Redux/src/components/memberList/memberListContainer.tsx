import {connect} from 'react-redux';
import {memberRequest} from '../../actions';
import {MembersTableComponent} from './memberList';
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

export const MemberListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MembersTableComponent);
