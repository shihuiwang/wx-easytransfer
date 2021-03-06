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
          content: '体验版，点击确定切换到经销商客户端',
          success: function(res) {
            if(res.confirm){
              wx.navigateTo({
                url: "/pages/goods/salesGoods/salesGoods"
              })
            }
          }
        });
      }
      if(data == 3){
        wx.navigateTo({
          url: "/pages/user/companyInfo/companyInfo"
        })
      }
  }
})