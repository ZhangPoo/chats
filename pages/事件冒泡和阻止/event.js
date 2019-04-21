// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    song: [{
        "id": '1',
        "name": '七里香'
      },
      {
        "id": "2",
        "name": "简单爱"
      }
    ]
  },
  /**
   * 
   * 简单的点击事件
   * 
   */
  onButtonClick: function(event) {
    console.log('爽歪的麻雀');
  },

  /**
   * 歌曲被点击事件
   */
  onSongClick: function(event) {
    var dataset = event.currentTarget.dataset;
    var id = dataset.id;
    wx.navigateTo({
      url: '/pages/person/person?id='+id,
    })
  },
  /**
   * 视图被点击事件
   */
  onOutterViewClick:function(event){
    console.log("OutterView被点击");
  },
  onInnerViewClick: function (event) {
    console.log("innerView被点击");
  },
  onBlackViewClick: function (event) {
    console.log("blackView被点击");
  },
  onLyricViewClick:function(event){
    console.log("歌词被点击！")
  }
})