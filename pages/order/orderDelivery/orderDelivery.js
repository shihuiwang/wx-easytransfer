// pages/order/orderDelivery/orderDelivery.js
var app = getApp()
Page({
  data:{
    arrowIcon: 'arrowIcon-r',
    listHidden: true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    app.services({
      url: 'getinfo',
      complete: function() {
        var storageInfo = app._data.orderDetailDataList[0].storageVO;
        var goodsList = app._data.orderDetailDataList[0].goodsList;
        var deliverInfo = app._data.orderDetailDataList[0].deliverVO;
        that.setData({
          storageInfo: storageInfo,
          goodsList: goodsList,
          deliverInfo: deliverInfo
        });
      }
    });
  },
  showList: function() {
    if(this.data.listHidden){
      this.setData({
        listHidden: false,
        arrowIcon: 'arrowIcon-d',
      })
    }
    else{
      this.setData({
        listHidden: true,
        arrowIcon: 'arrowIcon-r',
      })
    }
  },
})