Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onToastClick: function(e) {
    var id = e.currentTarget.id
    switch (id) {
      case 'red':
        wx.showToast({
          title: '红色被点击',
        })
        break;
      case 'yellow':
        wx.showToast({
          title: '黄色被点击',
        })
        break;
      case 'blue':
        wx.showToast({
          title: '蓝色被点击',
        })
        break;
    }
  }
})