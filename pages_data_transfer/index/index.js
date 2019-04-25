//index.js
Page({
  data: {
    person: [{
        id: '0',
        name: '周杰伦',
        words: '我想喝奶茶！',
        headimage: 'https://ww4.sinaimg.cn/thumb150/71482140ly1g2dft086wrj20hi0lvdxj.jpg'
      },
      {
        id: '1',
        name: '谢霆锋',
        words: '吃不是鳕鱼？',
        headimage: 'https://wxt.sinaimg.cn/thumb300/006R1L8Ngy1fxw6ru6nivj33402c0kjq.jpg?tags=%5B%5D'
      },
      {
        id: '2',
        name: '李健',
        words: '我给你说个事',
        headimage: 'https://wxt.sinaimg.cn/thumb300/67f95e4fly1g1oal365omj22wf2c07wk.jpg?tags=%5B%5D'
      }
    ]
  },
  onNameClick: function(e) {
    var dataset = e.currentTarget.dataset;
    var id = dataset.id;
    var name = dataset.name;
    // console.log(id)
    if(id==0){
      wx.navigateTo({
        url: '/pages/Jay/jay?id='+id+'&name='+name,
      })
      console.log(id+name)
    }
  }
})