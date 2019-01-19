import * as React from 'react';
import {MemberViewModel} from "../../viewModel/memberViewModel";

export const MemberRow = (props: { member: MemberViewModel }) =>
    (<tr>
        <td>
            <img src={props.member.avatar} style={{maxWidth: '10rem'}}/>
        </td>
        <td>
            <span>{props.member.id}</span>
        </td>
        <td>
            <span>{props.member.name}</span>
        </td>
    </tr>);
