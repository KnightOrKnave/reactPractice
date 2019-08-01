Reactやったメモ

現状：講座7時間分と4時間ぐらいそれのコード変えてみた

使うメリット
過去を知らないので、JQで変更箇所を絞るというありがたさはわからないが
パーツごとに、Componentにして作れるのは 平行作業するにはよさそう（一部張りぼて、一部本番とかできそう）

Reactだけなら、登場人物はComponentとStore,Propsだけ
Propsはコンポーネント間で値を渡す（関数の引数的な）
Stateはコンポーネント内の状態（保存しておきたい値）を保持する
これだけで複雑なもの書こうとすると、上位のコンポーネントでStateを持っておいて
それをPropsでどんどんわたす　（Propsドリル）になる（遡上はできないので）

Reactの登場人物
Conponent
Props
State

JSXはVSCodeである程度補完聞くので、HTML書くように記述できる

最初にHTMLの構造作って
そこからばらしていくのがよさそう

Redux
PropsドリルがつらいのですべてのStateを1つで管理しようとする考え（Flex）

まずStateが1つある
そこには　Reduce毎に状態とアクション（動作）が入っている
アクションはactionsCreatorという仕組みで　最初に作られる（※Actionあｈ全画面で一位でなければいかない？）

ComponentはアクションとStoreを見て、必要なReduceの状態やアクションをImportして利用する
※この時に、実装的にはStoreの情報、Actionの情報をPropsに詰め込んで、renderの時とかをPropsやらStateにはめ込んでを読むような形
になっている
入れるときはStateなのに使うときはProps？

それをConnectというのでやっている

たぶん、ReducerとActionでこのReducer使ってるコンポーネントはどこかを知ることができて
外套のReducerが変わったら使ってるコンポーネントにSetStateかけるとかそんな感じじゃないかな




登場人物
Store
Reducer
Actions
Connect



外部API連携
React ReduxではAwait Aｓｙんｃできないので
できるようにするためには　Redux-thunkというの使ってた

Action内にめどっど書いたり　見ればわかるが　わからないことが多い

APIたたくのには　axciosというの使ってる

readtではないが　bindやdispatchなどJavascriptの構文あろうものでも、あまり見ないものを
使うことになりそう




Saga触った感想
2，3時間くらい触った
動いたのは　Action監視　→　Saga動く　→　別のAction(Reducer)にPUTする感じ
正しいのかわからない
