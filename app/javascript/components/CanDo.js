import React from 'react';
import ReactDOM from 'react-dom';
class CanDo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isModalOpen: false};
    }
    
    handleClickCando() {
        this.setState({isModalOpen: true});
    }
    
    handleClickClose() {
        this.setState({isModalOpen: false});
    }

    render(){
        let modal;
        if (this.state.isModalOpen) {
            modal = (
                <div className='modal' onClick={()=> this.handleClickClose()}>
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
                    </div>
                </div>
                );
            }
        return(
            <div>
                <img src={this.props.image} onClick={() => this.handleClickCando()}/>
                <div className="nav_item_title_1">
                    <div className="item_padding_1"　onClick={() => this.handleClickCando()}>
                        {this.props.name}
                    </div>
                </div>
                {modal}
            </div>
        );
    }
}

export default CanDo;