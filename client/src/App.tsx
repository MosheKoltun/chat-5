import * as React from 'react';
import './App.css';
import InputBar from './Components/InputBar';
import {MessageBar} from './Components/MessageBar';
import TreeBar from "./Components/TreeBar";
import LoginModal from "./Components/LoginModal";

//-------------------------------------------------------------------
class App extends React.Component<any, any> {
    //class properties
    private db = {};

//-------------------------------------------------------------------
    constructor(props: any) {
        super(props);
        this.state = {
            userLoggedIn : "",
            currentUserOrGroup : "",
            currentMessage : "",
        }
    }
//-------------------------------------------------------------------
    public updateCurrentTreeElement = (currentElement : string) => {
        this.setState({currentUserOrGroup : currentElement});
    };
//-------------------------------------------------------------------
    public updateUserLoggedIn = (userLoggedIn : string) => {
        this.setState({userLoggedIn : userLoggedIn});
    };
//-------------------------------------------------------------------
    public addNewMessage = (message : string, formattedDate : string) => {
        //set state of message
        this.setState({currentMessage : message});
        //update mock DB
        const currentUserOrGroup = this.state['currentUserOrGroup'];
        if (!this.db[currentUserOrGroup]) {
            this.db[currentUserOrGroup]=[];
        }
        this.db[currentUserOrGroup].push({username: this.state['userLoggedIn'], message: message, time: formattedDate});
        console.log(this.db)
        //update bubble
    };
//-------------------------------------------------------------------
    public render() {
        console.log(this.db[this.state.currentUserOrGroup]);
        return (
            <>
                <LoginModal updateUserLoggedInCallBack={this.updateUserLoggedIn}/>
                <div className={"window"}>
                    <div className={"left"}>
                        <TreeBar updateCurrentTreeElementCallBack={this.updateCurrentTreeElement}/>
                    </div>

                    <div className={"right"}>
                        <MessageBar messagesDB={this.db[this.state.currentUserOrGroup]}/>
                        <InputBar addNewMessageInputCallBack={this.addNewMessage}/>
                    </div>
                </div>
            </>
        );
    }
}
//-------------------------------------------------------------------
export default App;