// pages/weibo/aweibo/aweibo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  submitEvent:function(event){
    /**
     * 传值content
     */
    var content = event.detail.value.content//获取文本框内的信息
    var pages = getCurrentPages();//获取当前的两个页面
    var page = pages[0];//获取将要渲染数据的页面
    var weibos = page.data.weibos;//获取list页面的weibos
    weibos.push(content);//将值放进去
    page.setData({
      weibos:weibos
    })
    wx.navigateBack({})
  }
  }
})
