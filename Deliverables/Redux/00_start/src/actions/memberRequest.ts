import {actionsEnums} from '../common/actionsEnums';
import {MemberEntity} from '../model/member';
import {memberAPI} from '../api/member';

export const memberRequestCompleted = (members: MemberEntity[]) => {
    return {
        type: actionsEnums.MEMBER_REQUEST_COMPLETED,
        payload: members
    }
};

export const memberRequest = (company: string) => (dispatcher) => {
    const promise = memberAPI.getAllMembers(company);

    promise.then(
        (data) => dispatcher(memberRequestCompleted(data))
    ).catch(
        dispatcher(memberRequestCompleted([]))
    );


    return promise;
};
