import * as React from 'react';
import {MemberEntity} from '../../model/member';
import {memberAPI} from '../../api/memberAPI';
import {MemberRow} from './memberRow';
import {MemberHead} from './memberHead';
import {SearchArea} from "../searchArea";

interface Props {
}

// We define members as a state (the compoment holding this will be a container
// component)
interface State {
    currentCompany: string;
    members: Array<MemberEntity>;
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export class MembersTableComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        // set initial state
        this.state = {members: [], currentCompany: 'Lemoncode'};
    }

    loadMembers = () => {
        memberAPI.getAllMembers(this.state.currentCompany).then((members) =>
            this.setState({members: members})
        );
    }

    onChangeCompany = (event: React.ChangeEvent<HTMLInputElement>) => this.setState({currentCompany: event.target.value});

    public render() {

        return (
            <div className="row">
                <h2> Members Page</h2>
                <SearchArea defaultValue={this.state.currentCompany} onChangeInput={this.onChangeCompany}
                            onSearch={this.loadMembers}/>
                <table className="table">
                    <thead>
                    <MemberHead/>
                    </thead>
                    <tbody>
                    {
                        this.state.members.map((member: MemberEntity) =>
                            <MemberRow key={member.id} member={member}/>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
