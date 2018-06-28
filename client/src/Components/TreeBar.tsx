import * as React from 'react';
import ChatTree from '../chat-tree'
import './TreeBar.css';
import * as groupFuncs from "../Modules/groups";

interface ITreeProps {
    updateCurrentTreeElementCallBack : Function;
}

class TreeBar extends React.Component <ITreeProps, {}>{
    private ulRef : React.RefObject<any>;

    constructor(props:any) {
        super(props);
        this.ulRef = React.createRef();
    }

    componentDidMount() {
        this.createTree();
    }

    // private createTree = () => {
    //     fetch('http://localhost:3001/create_tree', {
    //         method: 'POST',
    //         headers:{
    //             'content-type': 'application/json'
    //         }
    //     })
    //         .then((response)=> {
    //             console.log(JSON.stringify(response));
    //             return response.json();
    //         })
    //         .then((myJson)=>{
    //             const chatTree =  ChatTree(this.ulRef['current']);
    //             chatTree.on('currentChanged', this.onCurrentChanged);
    //             chatTree.load(myJson);
    //         });
    // };
    private createTree = () => {

        fetch('http://localhost:3001/create_tree', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            }
        })
        .then((response)=> {
            return response.json();
        })
        .then((myJson)=>{

            //for both cases
            const chatTree =  ChatTree(this.ulRef['current']);
            chatTree.on('currentChanged', this.onCurrentChanged);

            //if json is empty then create new group called general
            if (JSON.stringify(myJson) === "[]") {
                //console.log("You have an empty array")
                groupFuncs.createNewGroup('General');
                chatTree.load([
                    {
                        "type": "group",
                        "name": "General",
                        "id": "0",
                        "items": []
                    }
                ]);
                return;
            }

            //else read json
            chatTree.load(myJson);
        });
    //create json and sent to server

    };

    onCurrentChanged = (currentElement: any)=> {
        this.props.updateCurrentTreeElementCallBack(currentElement.innerText);
    };

    public render() {
        return (
            <div className={"treeBar"}>
                <ul ref={this.ulRef} tabIndex={0}/>
            </div>
        );
    }
}

export default TreeBar;