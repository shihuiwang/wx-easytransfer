// pages/order/orderAdd/orderAdd.js
var app = getApp();
Page({
  goodsNumber: [],
  data:{
    goodsNumber: [],
    notSubmit: true,
    orderTotal: 0,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    app.services({
      url: 'addChooseCustomer',
      data: {},
      complete: function() {
        var res = app._data.joininListRes;
        for(var i=0; i<res.joininList.length; i++) {
          //把客户公司名称提前一级以便‘picker’组件获取
          res.joininList[i].companyName = res.joininList[i].salesVO.companyName;
        }
        that.setData({
          joininList: res.joininList
        });
        wx.hideToast();//关闭loading提示
      },
      loading: true
    });
  },
  chooseCusChange: function(event) {
      var that = this;
      var index = event.detail.value;
      this.setData({
        index: index
      });

      //请求商品列表数据
      app.services({
        url: 'goodsList',
        data: {salesId:'test'},
        complete: function() {
          var res = app._data.goodsList;
          that.goodsNumber = [];
          for(var i=0; i<res.length; i++) {
            //接收到数据后, 根据数据设置初始化每个商品数量&单价&商品ID,后面加减和计算还有提交都能用到
            that.goodsNumber.push({val: 0, mprice: res[i].mPrice, goodsId: res[i].goodId});
          }
          that.setData({
            goodsNumber: that.goodsNumber,
            goodsList: res
          });
          wx.hideToast();//关闭loading提示
        },
        loading: true
      });
  },
  subNumber: function(event) {
    var index = event.target.dataset.index;
    if(this.goodsNumber[index].val == 0){
      this.goodsNumber[index].val = 0;
    }
    else{
      this.goodsNumber[index].val = --this.goodsNumber[index].val;
    }
    for(var i=0, total=0; i<this.goodsNumber.length; i++){
      //总计
      total += this.goodsNumber[i].val*this.goodsNumber[i].mprice;
    }
    this.setData({
      goodsNumber: this.goodsNumber,
      orderTotal: total
    });
  },
  addNumber: function(event) {
    var index = event.target.dataset.index;
    this.goodsNumber[index].val = ++this.goodsNumber[index].val;
    for(var i=0, total=0; i<this.goodsNumber.length; i++){
      //总计
      total += this.goodsNumber[i].val*this.goodsNumber[i].mprice;
    }
    this.setData({
      goodsNumber: this.goodsNumber,
      orderTotal: total
    });
  },
  inputNumber: function(event) {
      var index = event.target.dataset.index;
      var value = event.detail.value;
      this.goodsNumber[index].val = value;
      for(var i=0, total=0; i<this.goodsNumber.length; i++){
        //总计
        total += this.goodsNumber[i].val*this.goodsNumber[i].mprice;
      }
      this.setData({
        goodsNumber: this.goodsNumber,
        orderTotal: total
      });
  },
  creatOrder: function(event) {
    for(var i=0, prices=[], goodsId=[], goodsNum=[]; i<this.goodsNumber.length; i++){
      if(this.goodsNumber[i].val > 0) {
        prices.push(this.goodsNumber[i].mprice);//单价集合
        goodsId.push(this.goodsNumber[i].goodsId);//商品ID集合
        goodsNum.push(this.goodsNumber[i].val);//商品数量集合
      }
    }
    var orderTotal = this.data.orderTotal //总计
    console.log(prices,goodsId,goodsNum,orderTotal);
    app.services({
      url: 'createOrder',
      method: 'POST',
      data: {prices: prices, goodsId: goodsId, goodsNum: goodsNum, orderTotal: orderTotal },
      complete: function() {
        wx.showToast({
          title: '测试生产订单，成功跳转回订单列表'
        });
        wx.navigateBack();//返回上一级页面
        //wx.showModal({title: '提示', content：'失败提示内容'})
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
  }
})