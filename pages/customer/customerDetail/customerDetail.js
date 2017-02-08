// pages/customer/customerDetail/customerDetail.js
var app = getApp();
Page({
  data:{
    invoicesArrow: 'arrowIcon-r',
    otherArrow: 'arrowIcon-r',
    invoicesHidden: true,
    otherHidden: true,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var customerInfo = app._data.customerInfo;
    var levelList = customerInfo.levelList;
    for(var i=0; i<levelList.length; i++) {
      if(levelList[i].levelId == customerInfo.joinInVO.userLevelId) {
        customerInfo.joinInVO.userLevelName = levelList[i].levelName;
      }
    }
    this.setData({
      joinInVO: customerInfo.joinInVO,
      levelList: customerInfo.levelList,
      areaList: customerInfo.areaList,
    });
  },
  invoicesInfoShow: function() {
    this.setData({
        invoicesArrow: this.data.invoicesHidden ? 'arrowIcon-d' :'arrowIcon-r',
        invoicesHidden: this.data.invoicesHidden ? false : true
      });
  },
  otherInfoShow: function() {
    this.setData({
        otherArrow: this.data.otherHidden ? 'arrowIcon-d' :'arrowIcon-r',
        otherHidden: this.data.otherHidden ? false : true
      });
  },
  editName: function(e) {
    var name = e.target.dataset.companyname;
    wx.navigateTo({
      url: '/pages/customer/customerEditName/customerEditName?name='+name
    })
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
  }
})