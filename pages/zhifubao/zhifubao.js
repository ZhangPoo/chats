// pages/zhifubao/zhifubao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onPersonClick:function(event){
    console.log("11111111")
    var dataset = event.currentTarget.dataset;
    var id = dataset.id;
    wx.navigateTo({
      url: '/pages/css/css?id='+id,
    })
  }
})
