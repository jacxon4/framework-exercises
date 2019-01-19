import {connect} from 'react-redux';
import {memberRequest, filterCompanyChanged} from '../../actions';
import {getFilteredCompany} from '../../selectors'
import {SearchArea} from './searchArea';
import {State} from '../../reducers';

const mapStateToProps = (state: State) => {
    return {
        filter: getFilteredCompany(state)
    };
};

const mapDispatchToProps = (dispatch) => ({
    loadMembers: (company: string) => dispatch(memberRequest(company)),
    changeFilterCompany: (company: string) => dispatch(filterCompanyChanged(company)),
});

export const SearchAreaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchArea);
