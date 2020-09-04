import React from "react";
import CanDo from "./CanDo";
import ReactDOM from 'react-dom';

class CanDoList extends React.Component{
    render(){
        const candoList = [
            {
                name: "ペットと楽しく便利な生活を過ごそう",
                image: "/cando_1_2.png",
                mov: "/cando_1_3.gif",
                contents: "ペットと一緒に入れる飲食店、ホテル、動物病院やトリミング店をペットマップの画面で探すことができます",
            },
            {
                name: "マイルートを設定しよう",
                image: "/cando_2_3.png",
                mov: "/cando_2_2.gif",
                contents: "ペットと一緒に入れる飲食店、ホテル、動物病院やトリミング店などあなたがよく使う場所を好きな順番でカスタムできます",
            },
            {
                name: "このサービスに対して意見、提案をしよう",
                image: "/cando_3_1.png",
                mov: "/cando_3_1.gif",
                contents: "より良いサービスを目指すためにあなたの意見を必要としています",
            },
            {
                name: "店舗、施設をペットマップに載せよう",
                image: "/cando_3_1.png",
                mov: "/cando_3_1.gif",
                contents: "店舗、施設のアカウントを登録すれば、ペット同伴可能な店舗、施設の情報ををペットマップに載せることができます",
            }
        ];

        return (
            <div className="about_contents_nav_items_1">
                {candoList.map((candoItem) => {
                        return(
                            <section className="about_contents_nav_item_1">
                                <CanDo 
                                    name={candoItem.name}
                                    image={candoItem.image}
                                    mov={candoItem.mov}
                                    contents={candoItem.contents}
                                />
                            </section>
                        );
                    })}
            </div>
        );
    }
}

export default CanDoList;