import React from 'react';

class HowtoUse extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isModalOpen: true};
    }
    
    handleClickHowtoUse() {
        this.setState({isModalOpen: true});
    }
    
    handleClickClose() {
        this.setState({isModalOpen: false});
    }

    render(){
        let modal;
        if (this.state.isModalOpen) {
            modal = (
                <div className="how_to_use">
                    <h2 className="how_to_use_title">利用方法</h2>
                    <div className="how_to_use_items">
                        <div className="how_to_use_item">
                            <p className="how_to_use_titles">マーカの表示</p>
                            <div className="how_to_use_mov">
                                <img src="how_to_use_1.gif" />
                            </div>
                            <p className="how_to_use_content">
                                それぞれのアイコンをクリックするとそれぞれのお店の位置にマーカを表示します
                            </p>
                        </div>
                        <div className="how_to_use_item">
                            <p className="how_to_use_titles">マーカの削除</p>
                            <div className="how_to_use_mov">
                                <img src="how_to_use_2.gif" />
                            </div>
                            <p className="how_to_use_content">
                                「○○の削除」のアイコンをクリックすると○○（ 例えば、病院 ）の位置にマーカを削除します
                            </p>
                        </div>
                        <div className="how_to_use_item">
                            <p className="how_to_use_titles">位置情報の設定のお願い</p>
                            <div className="how_to_use_mov">
                                <img src="how_to_use_3.gif" />
                            </div>
                            <p className="how_to_use_content">
                                マップ画面で位置情報が必要になるので位置情報の設定を行ってください
                            </p>
                        </div>
                    </div>
                    <p className="start_button" onClick={() => this.handleClickClose()}>さあ、はじめよう</p>
                </div>
                );
            }
        return(
            <div className="manual_position">
                <div className="manual_marker">
                    <li>
                        <img src="/icon_svg/manual.svg" className="search_button" onClick={() => this.handleClickHowtoUse()} />
                    </li>
                    <li className="how_to_use_acsess"　onClick={() => this.handleClickHowtoUse()}>利用方法</li>
                </div>
                {modal}
            </div>
        );
    }
}

export default HowtoUse;