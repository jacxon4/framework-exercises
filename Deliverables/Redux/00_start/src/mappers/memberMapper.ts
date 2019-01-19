import {MemberEntity} from "../model/member";
import {MemberViewModel} from "../viewModel/memberViewModel";

export const mapMemberToViewModel = (modelMember: Array<MemberEntity>): Array<MemberViewModel> => (
    modelMember.map(({id, login, avatar_url}) => (
        {
            id,
            name: login,
            avatar: avatar_url
        }
    ))
);