import * as React from 'react';
import './SettingsMenu.css'
export class SettingsMenu extends React.Component {
    handleCreateGroupClick = () => {
    }

    public render() {
        return (
            <div className={"settingsMenu"}>
                <form>
                    <div className={"groupsManagement"}>
                        <button type="button" onClick={this.handleCreateGroupClick}>Create Group</button>
                        <input type="text" placeholder="New Group" name="groupName" required/>
                        <button>Remove Group</button>
                        <button>Join Group</button>
                        <button>Exit Group</button>
                    </div>
                    <div className={"usersManagement"}>
                        <button>Erase Account</button>
                        <button>Edit Profile</button>
                        <input type="text" placeholder="New Age" name="age" required/>
                        <input type="text" placeholder="New Password" name="password" required/>
                    </div>
                </form>
            </div>
        );
    }
}