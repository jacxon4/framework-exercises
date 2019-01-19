import {actionsEnums} from '../common/actionsEnums';
import {MemberViewModel} from "../viewModel/memberViewModel";

export type memberState = MemberViewModel[];

export const memberReducer = (state: memberState = [], action) => {
    switch (action.type) {
        case actionsEnums.MEMBER_REQUEST_COMPLETED:
            return handleMemberRequestCompletedAction(state, action.payload);
    }

    return state;
};

const handleMemberRequestCompletedAction = (state: memberState, members) => {
    return members;
};
