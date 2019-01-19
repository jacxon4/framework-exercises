import * as React from 'react';
import {MemberRow} from './memberRow';
import {MemberHead} from './memberHead';
import {SearchAreaContainer} from "../searchArea";
import {MemberViewModel} from "../../viewModel/memberViewModel";


interface Props {
    loadMembers: (company: string) => any;
    members: Array<MemberViewModel>;
    filter: string;
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export const MembersTableComponent = (props: Props) => (
    <div className="row">
        <h2> Members Page</h2>
        <SearchAreaContainer/>
        <table className="table">
            <thead>
            <MemberHead/>
            </thead>
            <tbody>
            {
                props.members.map((member: MemberViewModel) =>
                    <MemberRow key={member.id} member={member}/>
                )
            }
            </tbody>
        </table>
    </div>
);
