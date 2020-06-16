// Vue アプリの生成
function createApp() {
    new Vue({
        el: '#app',
        data: {
            // 現在開いているタブのインデックス
            currentTabIndex: 0,
            
            // タブ情報を定義する
            tabs: [
                {
                    id: 1,
                    name: 'タブ1',
                    content: 'これはタブ1のコンテンツです。これはタブ1のコンテンツです。これはタブ1のコンテンツです。',
                },
                {
                    id: 2,
                    name: 'タブ2',
                    content: 'これはタブ2のコンテンツです。これはタブ2のコンテンツです。これはタブ2のコンテンツです。',
                },
                {
                    id: 3,
                    name: 'タブ3',
                    content: 'これはタブ3のコンテンツです。これはタブ3のコンテンツです。これはタブ3のコンテンツです。',
                },
                {
                    id: 4,
                    name: 'タブ4',
                    content: 'これはタブ4のコンテンツです。これはタブ4のコンテンツです。これはタブ4のコンテンツです。',
                },                
            ]
        },
        computed: {
            currentTabContent: function() {
                return this.tabs[this.currentTabIndex].content
            }
        },
        methods: {
            onClick: function(index) {
                this.currentTabIndex = index
            }
        }
    });
}

// 初期化
function initialize() {
    createApp()
  }
  
  document.addEventListener('DOMContentLoaded', initialize.bind(this))