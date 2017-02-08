// pages/order/orderDetail/orderDetail.js
var app = getApp();
Page({
  data:{
    arrow: 'arrowIcon-r',  //箭头向右
    remarkArrow: 'arrowIcon-r',  //箭头向右
    remarkTextHidden: false,  //添加备注信息的输入域初始隐藏
    focus: false,  //添加备注信息的输入域初始不聚焦
    operaListHidden: true,  //操作日志初始隐藏
    remarkInfoHidden: true,  //备注信息的输入域初始隐藏
    showModal: true,  //模态框初始隐藏
    inMoneyInit: '',  //订单审核输入金额初始化
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);//Object {orderId: "d326111f-e35b-4a77-8584-b62df60f0793"}请求接口用
    var dataObj = app._data.orderDetailDataList[0];
    var operaList = app._data.operationList;
    switch(dataObj.orderState){
        case '1': //待订单审核
              dataObj.itemList = ['订单审核', '订单作废'];
              dataObj.orderStateName = '待订单审核';
              break;
        case '2': //待财务审核
              dataObj.itemList = ['财务审核', '订单作废'];
              dataObj.orderStateName = '待财务审核';
              break;
        case '3': //待出库审核
              dataObj.itemList = ['出库审核', '订单作废'];
              dataObj.orderStateName = '待出库审核';
              break;
        case '4': //待发货审核
              dataObj.itemList = ['发货审核', '订单作废'];
              dataObj.orderStateName = '待发货审核';
              break;
        case '5': //待收货确认
              dataObj.itemList = ['订单作废'];
              dataObj.orderStateName = '待收货确认';
              break;
        case '6': //待客户确认入库
              dataObj.itemList = ['订单作废'];
              dataObj.orderStateName = '待客户确认入库';
              break;
        case '0': //完成交易
              dataObj.itemList = [];
              dataObj.orderStateName = '已完成';
              break;
        case '9': //订单作废
              dataObj.itemList = [];
              dataObj.orderStateName = '订单作废';
              break;
      }
    this.setData({
      dataObj: dataObj,//页面数据
      operaList: operaList//操作日志
    });
  },
  //显示商品清单
  getGoodsList: function(event) {
        var goodsList = event.target.dataset.goodslist;
        if(goodsList == undefined){
          return;
        }
        wx.navigateTo({
            url: "/pages/order/orderGoods/orderGoods?goodslist="+JSON.stringify(goodsList)
        })
  },
  //显示备注信息
  showRemarkInfo: function() {
    if(this.data.remarkInfoHidden) {
      this.setData({
        remarkArrow: 'arrowIcon-d',
        remarkInfoHidden: false,
        remarkTextHidden: false,
      });
    }
    else{
      this.setData({
        remarkArrow: 'arrowIcon-r',
        remarkInfoHidden: true
      });
    }
  },
  addRemarkInfo: function() {
    this.setData({
      focus: true,
      remarkTextHidden: true,
    });
  },
  //操作日志触摸展开
  showOperaLog: function() {
    if(this.data.operaListHidden) {
      this.setData({
        arrow: 'arrowIcon-d',
        operaListHidden: false
      });
    }
    else{
      this.setData({
        arrow: 'arrowIcon-r',
        operaListHidden: true
      });
    }
  },
  //​显示操作菜单
  operateShow: function() {
      var that = this;
      wx.showActionSheet({
        itemList: this.data.dataObj.itemList,
        success: function(res) {
          console.log('1',res.tapIndex)
          if(that.data.dataObj.itemList[res.tapIndex] == '订单审核') {
            that.setData({
              showModal: false
            });
          }
        },
        fail: function(res) {
          console.log('2',res.errMsg)
        }
      })
  },
  modalConfirm: function(e) {
    var inMoney = this.data.inMoney;//输入的订单审核金额
    this.setData({
      showModal: true,
      inMoneyInit: ''
    });
  },
  modalCancel: function() {
    this.setData({
      showModal: true,
      inMoneyInit: ''
    });
  },
  inMoneyBlur: function(e) {
    var inMoney = e.detail.value;
    this.setData({
      inMoney: inMoney
    })
  },
  getDelivery: function() {
    wx.navigateTo({
        url: "/pages/order/orderDelivery/orderDelivery"
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