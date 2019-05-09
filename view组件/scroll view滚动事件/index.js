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
      case 'pink':
        wx.showToast({
          title: 'pink被点击',
        })
        break;
      case 'black':
        wx.showToast({
          title: 'black被点击',
        })
        break;
    }
  },
  /**
   * 滚动到顶部的事件
   */
  onUpperEvent:function(event){
    console.log('事件被触发')
  },
  /**
   * 滚动条滚动事件
   */
  onBindScrollEvent:function(e){
    var data = e.detail;
    console.log(data)
  }
})