// pages/goods/salesGoods/salesGoods.js
var app = getApp()
Page({
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
    app.services({
      url: 'getShopList',
      data: {},
      complete: function() {
        var res = app._data.shopList;
        that.setData({
          shopList: res.resultList,
          recordCount: res.recordCount
        });
        wx.hideToast();//关闭loading提示
      },
      loading: true
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
  getSearch: function() {
        wx.navigateTo({
            url: "/pages/goods/goodsSearch/goodsSearch"
        })
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
        method: 'post',
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
  getDetail: function(e) {
    var item = e.target.dataset.item;
    var touches = e.touches[0]
    if(touches.pageX>324 && touches.pageY>76 && touches.pageY<212){
      return;
    }
    wx.navigateTo({
      url: "/pages/goods/goodsDetail/goodsDetail?item="+JSON.stringify(item)
    })
  },
  tapscan: function() {
    wx.scanCode({
      success: function() {
        console.log(result)
      }
    })
  },
  getOrder: function() {
    wx.redirectTo({
      url: "/pages/corder/orderIndex/orderIndex"
    })
  },
  getCart: function() {
    wx.redirectTo({
      url: "/pages/cart/cartIndex/cart"
    })
  },
  getSet: function() {
    wx.redirectTo({
      url: "/pages/cuser/userSet/userSet"
    })
  },
})