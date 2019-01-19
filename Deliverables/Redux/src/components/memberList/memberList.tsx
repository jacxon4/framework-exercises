import * as React from 'react';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import {SearchAreaContainer} from "../searchArea";
import {MemberViewModel} from "../../viewModel/memberViewModel";
import createStyles from "@material-ui/core/es/styles/createStyles";
import {WithStyles} from "@material-ui/core";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Avatar from "@material-ui/core/es/Avatar/Avatar";


const styles = (theme) => createStyles({
    card: {
        width: 300,
        margin: '.5rem .5rem 0 0',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '1rem'
    }
});

interface Props extends WithStyles<typeof styles> {
    loadMembers: (company: string) => any;
    members: Array<MemberViewModel>;
    filter: string;
}


const MemberList = (props: Props) => {
    const {classes} = props;

    return (
        <div className="row">
            <h2> Members Page</h2>
            <SearchAreaContainer/>
            <div className={classes.container}>
                {
                    props.members.map((member: MemberViewModel) =>
                        <Card key={member.id} className={classes.card}>
                            <CardHeader avatar={<Avatar src={member.avatar}/>} title={member.name}
                                        subheader={`Id: ${member.id}`}/>
                        </Card>
                    )
                }
            </div>
        </div>
    )
};

export const MembersTableComponent = withStyles(styles)(MemberList);
