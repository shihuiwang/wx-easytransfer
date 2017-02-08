// pages/manageIndex/manageIndex.js
var app = getApp();
var date = new Date();
var month = parseInt(date.getMonth())+1;
var today = date.getFullYear()+'-'+month+'-'+date.getDate();

Page({
  data:{
    today: today
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    app.services({
      url: 'login',
      complete: function(){
        var res = app._data.countdata;
        that.setData({
          countdata: res
        })
      }
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  onShareAppMessage: function () {
    return {
      title: '牧童管家小程序',
      desc: '随时随地，你身边的农场！',
      path: '/page/user?id=123'
    }
  }
})