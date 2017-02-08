// pages/logs/logsEdit/logsEdit.js
var app = getApp();
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      logData: JSON.parse(options.data)
    });
  },
  formSubmit: function(e) {
    var dataObj = e.detail.value;
    if(dataObj.title == '' || dataObj.title.length>50){
      wx.showModal({
        title: '提示',
        content: '标题不能为空且50字以内',
        showCancel: false
      })
      return;
    }
    if(dataObj.address == '' || dataObj.address.length>50){
      wx.showModal({
        title: '提示',
        content: '地址不能为空且50字以内',
        showCancel: false
      })
      return;
    }
    if(dataObj.content == '' || dataObj.content.length>500){
      wx.showModal({
        title: '提示',
        content: '内容不能为空且500字以内',
        showCancel: false
      })
      return;
    }
    app.services({
      url: 'changeLogs',
      method: 'POST',
      data: dataObj,
      complete: function() {
        wx.showToast({
          title: '测试提示修改成功',
          icon: 'success'
        });
        wx.navigateBack()
      }
    });
  },
})