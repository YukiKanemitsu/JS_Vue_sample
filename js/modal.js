/** Vue アプリケーションの生成 **/
function createApp() {
  new Vue({
    el: "#app",
    data: {
      // フラグを追加する
      isOpenModal: false,
    },
    methods: {
      // モーダルを開く
      openModal() {
        this.isOpenModal = true
      },
      // モーダルを閉じる
      closeModal() {
        this.isOpenModal = false
      }
    },
    mounted() {
      // クリックイベント内でVueの関数やプロパティを呼び出すために、thisを変数に代入しておく
      const _this = this

      // Vueアプリケーション内の HTML が表示された後に呼ばれる
      document.addEventListener('click', function (event) {
        // クリックした要素の親要素に、 #modal の要素があるか調べる。
        const target = event.target.closest('#modal')

        // モーダルが開いている、かつモーダル外のクリックなら、モーダルを閉じる
        if (_this.isOpenModal && target == null) {
          _this.closeModal()
        }
      })
    }
  })
}

/** 初期化 **/
function initialize() {
  createApp()
}

document.addEventListener("DOMContentLoaded", initialize.bind(this))
