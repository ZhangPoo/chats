// pages/Jay/jay.js
Page({
  data: {
  },
  onLoad:function(options){
    var id = options.id;
    var name = options.name;
    this.setData({
      id: id,
      name: name
    })
    console.log(name+id)
  }
})