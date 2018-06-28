import * as React from 'react';
import './SettingsMenu.css'
import * as groupFuncs from '../Modules/groups';
import * as userFuncs from '../Modules/users';
import * as treeFuncs from '../Modules/tree';

interface ISettingsMenuProps {
    currentElementInTree : string;
}

export class SettingsMenu extends React.Component <ISettingsMenuProps, {}> {

    state = {
        newGroupName: "",
    };

    constructor(props:any) {
        super(props);
    }

    handleCreateGroupClick = () => {
        //console.log(this.props.currentElementInTree);
        const newGroup = groupFuncs.createNewGroup(this.state.newGroupName);
        const newGroupId = newGroup.getID();
        //const currentElementID = this.props.currentElementInTree
        //treeFuncs.addGroupToGroup(currentElementID ,newGroupId);
    };

    HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [event.target.name]: event.target.value });
    };


    public render() {
        return (
            <div className={"settingsMenu"}>
                <form>
                    <div className={"groupsManagement"}>
                        <button type="button" onClick={this.handleCreateGroupClick}>Create Group</button>
                        <input type="text" placeholder="New Group" name="newGroupName" onChange={this.HandleInputChange} required/>
                        <button type="button">Remove Group</button>
                        <button type="button">Join Group</button>
                        <button type="button">Exit Group</button>
                    </div>
                    <div className={"usersManagement"}>
                        <button type="button">Erase Account</button>
                        <button type="button">Edit Profile</button>
                        <input type="text" placeholder="New Age" name="age" required/>
                        <input type="text" placeholder="New Password" name="password" required/>
                    </div>
                </form>
            </div>
        );
    }
}