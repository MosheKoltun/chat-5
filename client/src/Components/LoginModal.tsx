import * as React from 'react';
import './LoginModal.css';

interface ILoginModalProps {
    updateUserLoggedInCallBack: Function;
}

class LoginModal extends React.Component <ILoginModalProps, {}> {

    private modalRef : React.RefObject<any>;

    state = {
        //hardcoded for development purposes
        //in production need to make values empty
        username: "Yehuda",
        password: "1234"
    };

    constructor(props:any) {
        super(props);
        this.modalRef = React.createRef();
    }

    HandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleClick = () => {
        fetch('./mock-DB/username-and-password-data.json')
            .then((response)=> {
                return response.json();
            })
            .then((myJson)=>{
                //check authentication
                if (myJson[0][this.state.username] !== this.state.password) {
                    alert("Incorrect username and password!");
                    return;
                }
                //if authentication is successful
                //close modal
                this.modalRef['current'].style.display = "none";
                //update 'App' component about username
                this.props.updateUserLoggedInCallBack(this.state.username)
            });
    };

    public render() {
        return (
            <div ref={this.modalRef} className="modal">
                <form className="modal-content">
                    <label><b>Username</b></label>
                    <br/>
                    <input type="text" placeholder="Enter Username" name="username" value={this.state.username} onChange={this.HandleInputChange} required/>
                    <br/>
                    <label><b>Password</b></label>
                    <br/>
                    <input type="password" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.HandleInputChange} required/>
                    <div className="buttonsDiv">
                        <br/>
                        <button type="button" onClick={this.handleClick}>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginModal;
