import {actionsEnums} from '../common/actionsEnums';
import {memberAPI} from '../api/member';
import {mapMemberToViewModel} from "../mappers/memberMapper";
import {MemberViewModel} from "../viewModel/memberViewModel";

export const memberRequestCompleted = (members: MemberViewModel[]) => {
    return {
        type: actionsEnums.MEMBER_REQUEST_COMPLETED,
        payload: members
    }
};

export const memberRequest = (company: string) => (dispatcher) => {
    const promise = memberAPI.getAllMembers(company);

    promise
        .then((data) => mapMemberToViewModel(data))
        .then(
        (data) => dispatcher(memberRequestCompleted(data))
    ).catch(
        dispatcher(memberRequestCompleted([]))
    );


    return promise;
};
