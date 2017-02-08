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
        wx.showToast({
          title: '切换账户'
        });
      }
      if(data == 3){
        wx.navigateTo({
          url: "/pages/user/companyInfo/companyInfo"
        })
      }
  }
})