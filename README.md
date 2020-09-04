# NANME

PetMap-App

# DEMO
 
 ### ペット同伴可能なお店の探し方

 <img src="https://user-images.githubusercontent.com/46047753/90959724-c86e6100-e4d7-11ea-8e42-e53f982138a7.gif" width="320">

 地図画面の上部にあるアイコンをクリックするとペットの同伴可能な場所の位置にマーカを表示します

 ### マーカ（ピン）の消し方

 <img src="https://user-images.githubusercontent.com/46047753/90959759-f358b500-e4d7-11ea-813e-7e72265d3bd8.gif" width="320">
 
 地図画面の上部にある「○○の削除」のアイコンをクリックすると○○（ 例えば、病院の削除 ）の位置にマーカを削除します
 
# Features
 
 ### ペットの同伴可能な場所(飲食店、動物病院など)を簡単に探すことができる地図サービス

 ペットを飼っている飼い主がペットの同伴が可能な場所を地図サービスで探そうとしても
 検索がヒットしないことが多々あります

 例えば「ペット可のカフェ」と検索しても普通のカフェも検索にヒットして
 どれが本当にペットの同伴可能なのかわからないことです

 そのため、確実に同伴可能な場所を示してくれる地図サービスを作成しました
 
# Requirement

* react-rails
 
# Installation
 
 ```bash
 rails webpacker:instal
 rails webpacker:install:react
 rails generate react:install
 ```
 
# Usage

```
$ git clone https://github.com/HirotoTamari/petmaps-app.git

$ cd petmaps-app

$ bundle install

$ rails db:create

$ rails db:migrate

$ rails s
```
http://localhost:3000
 
# Note
 
現在地を取得するには位置情報を許可してから使用してください
 
# Author

* 名前: 玉利 泰人 / Hiroto Tamari
* 所属: 和歌山大学大学院　知的モデリング専攻
* E-mail: henl16101118@gmail.com

# URL

https://petmaps-app.herokuapp.com/
