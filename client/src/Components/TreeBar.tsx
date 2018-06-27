import * as React from 'react';
import ChatTree from '../chat-tree'
import './TreeBar.css';

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

    private createTree = () => {
        fetch('http://localhost:3001/sign_up', {
            method: 'POST',
                headers:{
                'content-type': 'application/json'
            }
        })
        .then((response)=> {
            console.log(JSON.stringify(response));
            return response.json();
        })
        .then((myJson)=>{
            const chatTree =  ChatTree(this.ulRef['current']);
            chatTree.on('currentChanged', this.onCurrentChanged);
            chatTree.load(myJson);
        });
    };

    onCurrentChanged = (currentElement: any)=> {
        this.props.updateCurrentTreeElementCallBack(currentElement.innerText);
        //console.log(currentElement.innerText)
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