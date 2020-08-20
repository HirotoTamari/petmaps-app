import React from 'react';
import ReactDOM from 'react-dom';
var bool1 = Boolean("true");
var bool2 = Boolean("false");


class CanDo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isModalOpen: false};
    }
    
    handleClickCando() {
        this.setState({isModalOpen: true});
        console.log(this.state);
    }
    
    handleClickClose() {
        this.setState({isModalOpen: false});
        console.log("ok");
    }

    render(){
        let modal;
        if (this.state.isModalOpen) {
            modal = (
                <div className='modal'>
                    <div className='modal_inner'>
                        <div className="modal_mov">
                        <video autoPlay loop playsInline src={this.props.mov}></video>
                        </div>
                        <div className="modal_title">
                            <h2>{this.props.name}</h2>
                        </div>
                        <div className="modal_content">
                            <p>{this.props.contents}</p>
                        </div>
                        <div className="close_button">
                            <img src="/close_button.png" onClick={()=> {this.handleClickClose()}}/>
                        </div>
                    </div>
                </div>
                );
            }
        return(
            <div onClick={() => this.handleClickCando()}>
                <img src={this.props.image} />
                <div className="nav_item_title_1">
                    <div className="item_padding_1">
                        {this.props.name}
                    </div>
                </div>
                {modal}
            </div>
        );
    }
}

export default CanDo;