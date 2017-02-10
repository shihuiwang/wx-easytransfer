// pages/user/userSet/userSet.js
var app = getApp()
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    app.getUserInfo(function(userInfo){
      console.log(userInfo);
      that.setData({
        userInfo:userInfo
      })
    })
  },
  getOtherInfo: function(e) {
      var data = e.target.dataset.data;
      if(data == 1){
        wx.navigateTo({
          url: "/pages/user/account/account"
        })
      }
      if(data == 2){
        wx.showModal({
          title: '切换账户',
          content: '体验版，暂无操作效果',
          success: function(res) {
            if(res.confirm){
              
            }
          }
        });
      }
      if(data == 3){
        wx.navigateTo({
          url: "/pages/user/companyInfo/companyInfo"
        })
      }
  },
  getGoods: function() {
      wx.redirectTo({
          url: "/pages/goods/salesGoods/salesGoods"
      })
  },
  getOrder: function() {
    wx.redirectTo({
      url: "/pages/corder/orderIndex/orderIndex"
    })
  },
  getCart: function() {
    wx.redirectTo({
      url: "/pages/cart/cartIndex/cart"
    })
  },
})