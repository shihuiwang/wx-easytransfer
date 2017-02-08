// pages/logs/logsAdd/logsAdd.js
var app = getApp()
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  formSubmit: function(e) {
    var senData = e.detail.value;
    if(senData.title == '' || senData.title.length>50){
      wx.showModal({
        title: '提示',
        content: '标题不能为空且50字以内',
        showCancel: false
      })
      return;
    }
    if(senData.address == '' || senData.address.length>50){
      wx.showModal({
        title: '提示',
        content: '地址不能为空且50字以内',
        showCancel: false
      })
      return;
    }
    if(senData.content == '' || senData.content.length>500){
      wx.showModal({
        title: '提示',
        content: '内容不能为空且500字以内',
        showCancel: false
      })
      return;
    }
    app.services({
      url: 'saveLogs',
      method: 'POST',
      data: senData,
      complete: function() {
        wx.showToast({
          title: '测试提示新增成功',
          icon: 'success'
        });
        wx.navigateBack()
      }
    });
  },
})