import React from "react";
import CanDo from "./CanDo";
import ReactDOM from 'react-dom';

class CanDoList extends React.Component{
    render () {
        const candoList = [
            {
                name: "ペットと楽しく便利な生活を過ごそう",
                image: "/cando_1_2.png",
                mov: "/cando_1_3.mp4",
                content: "ペットと一緒に入れる飲食店、ホテル、動物病院やトリミング店をペットマップの画面で探すことができます"
            },
            {
                name: "マイルートを設定しよう",
                image: "/cando_2_3.png",
                mov: "/cando_2_2.mp4",
                content: "ペットと一緒に入れる飲食店、ホテル、動物病院やトリミング店などあなたがよく使う場所を好きな順番でカスタムできます"
            },
            {
                name: "このサービスに対して意見、提案をしよう",
                image: "/cando_3_1.png",
                mov: "/cando_3_1.mp4",
                content: "より良いサービスを目指すためにあなたの意見を必要としています"
            }
        ];
        return (
            <div className="about_contents_nav_items_1">
            { candoList.map((candoItem) => {
                        return(
                                    <section className="about_contents_nav_item_1">
                                        <CanDo 
                                            name={candoItem.name}
                                            image={candoItem.image}
                                            mov={candoItem.mov}
                                            content={candoItem.content}
                                        />
                                    </section>
                        );
                    })}
            </div>
        );
    }
    }

export default CanDoList;