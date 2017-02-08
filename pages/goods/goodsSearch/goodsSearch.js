// pages/goods/goodsSearch/goodsSearch.js
var app = getApp()

Page({
  hisData: [],
  data:{
    defaultImg:'../../../images/cover-default.png',
    showCart: true,
    cartNumber: 1,
    isloading: false,
    currentPage: 1,  //当前页码
    moreOver: false,  //是否加载完所有
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    this.hisData = wx.getStorageSync('goodsHistorySearch');
    if(this.hisData.length == 0 || this.hisData == undefined || this.hisData == ''){
      this.hisData = [];
      this.setData({
        hiddenHistory: true
      });
    }
    this.setData({
      hisData: this.hisData
    });
  },

  formSubmit: function(e) {
    var that = this;
    var canPush = true;
    var searchData = e.detail.value;
    if(searchData.data == ''){
      this.setData({
        shopList: [],
        hiddenHistory: false
      });
      return;
    }
    for(var i=0;i<this.hisData.length;i++){
      if(searchData.data == this.hisData[i].data){
          canPush = false;
          break;
      }
    }
    if(canPush){
      this.hisData.push(searchData);
    }
    //储存历史搜索
    wx.setStorageSync('goodsHistorySearch', this.hisData);
    this.setData({
      hisData: this.hisData,
      hiddenHistory: true
    });
    //搜索接口请求----------
    app.services({
        url: 'getgoodslist',
        complete: function(){
            var res = app._data.shopList;
            that.setData({
                shopList: res.resultList,
                recordCount: res.recordCount
            });
            wx.hideToast();//关闭loading提示
        },
        loading: true//是否启用loading提示
    });
  },

   clearHistory: function() {
    wx.removeStorageSync('goodsHistorySearch');
    this.hisData = [];
    this.setData({
      hisData: [],
      hiddenHistory: true
    });
  },
  isHistorySearch: function(e) {
    var that = this;
    var data = e.target.dataset.name;
    //搜索接口请求----------
    app.services({
        url: 'getgoodslist',
        complete: function(){
            var res = app._data.shopList;
            that.setData({
                shopList: res.resultList,
                recordCount: res.recordCount,
                searchVal: data,
                hiddenHistory: true
            });
            wx.hideToast();//关闭loading提示
        },
        loading: true//是否启用loading提示
    });
  },
  lower: function() {
    var that =this;
    var currentPage = ++this.data.currentPage;
    if(this.data.moreOver || this.data.isloading){
        return;
    }
    this.setData({
        isloading: true
    });

    wx.showNavigationBarLoading();
    app.services({
      url: 'getShopList',
      data: {
            currentPage: currentPage
      },
      complete: function() {
        var res = app._data.shopList;
        that.setData({
          shopList: that.data.shopList.concat(res.resultList),
          isloading: false
        });
        if(currentPage >= res.pageCount){
          that.setData({moreOver: true})
        }
         wx.hideNavigationBarLoading();//关闭loading提示
      }
    });
  },
  onPullDownRefresh: function() {
      var that = this;
      var currentPage = 1;
      //下拉刷新初始化页码、数据
      that.setData({
          moreOver: false,
          shopList: [],
          currentPage: 1
      });
      app.services({
        url: 'RefreshGoods',
        data: {
            currentPage: currentPage
        },
        complete: function(){
            var res = app._data.shopList;
            that.setData({
                shopList: res.resultList,
                recordCount: res.recordCount
            });
            wx.stopPullDownRefresh();
        }
    });
  },
  showCart: function() {
    this.setData({
      showCart: false
    });
  },
  cartConfirm: function() {
    this.setData({
      showCart: true
    });
  },
  cartCancel: function() {
    this.setData({
      showCart: true,
      cartNumber: 1
    });
  },
  cutNum: function() {
    var num = this.data.cartNumber;
    if(num == 1){
      return;
    }
    --num;
    this.setData({
      cartNumber: num
    });
  },
  addNum: function() {
    var num = this.data.cartNumber;
    ++num;
    this.setData({
      cartNumber: num
    });
  },
  numInput: function(e) {
    var num = e.detail.value;
    this.setData({
      cartNumber: num
    });
  },
})