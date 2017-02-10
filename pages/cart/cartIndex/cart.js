// pages/cart/cartIndex/cart.js
Page({
  data:{
    defaultImg: '../../../images/cover-default.png',
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  getOrder: function() {
    wx.redirectTo({
      url: "/pages/corder/orderIndex/orderIndex"
    })
  },
  getGoods: function() {
      wx.redirectTo({
          url: "/pages/goods/salesGoods/salesGoods"
      })
  },
  getSet: function() {
    wx.redirectTo({
      url: "/pages/cuser/userSet/userSet"
    })
  },
})