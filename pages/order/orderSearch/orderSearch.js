// pages/order/orderIndex/orderIndex.js
var app = getApp();
Page({
  rootResults: [],
  hisData: [], //历史搜索初始化
  orderNumber: 0,//订单条数
  data:{
    isloading: false,
    currentPage: 1,
    moreOver: false,
    autoFocus: true,
    searchVal: ''
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    this.hisData = wx.getStorageSync('orderHistorySearch');
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
        orderList: {orderList:[]},
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
    wx.setStorageSync('orderHistorySearch', this.hisData);
    this.setData({
      hisData: this.hisData,
      hiddenHistory: true
    });
    //搜索接口请求----------
    app.services({
        url: 'orderSearch',
        data: {searchData:searchData},
        complete: function(){
            var res = app._data.orderList;
            //处理数据
            that.mergeOrders(res.orderList);
            wx.hideToast();//关闭loading提示
        },
        loading: true
    });
  },
  onPullDownRefresh: function(){
    var that = this;
    var currentPage = 1;
    this.orderNumber = 0;
    this.setData({
        currentPage: 1,
        moreOver: false
    });
    this.rootResults = [];
    app.services({
        url: 'refreshOrder',
        data: {
            currentPage: currentPage
        },
        complete: function(){
            var res = app._data.orderList;
            that.mergeOrders(res.orderList);
            if(this.currentPage == res.pageCount){
                this.setData({
                    moreOver: true
                })
            }
            wx.stopPullDownRefresh();
        }
    });
  },
  clearHistory: function() {
    wx.removeStorageSync('orderHistorySearch');
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
        url: 'orderSearch',
        data: {searchData:data},
        complete: function(){
            var res = app._data.orderList;
            //处理数据
            that.mergeOrders(res.orderList);
            wx.hideToast();//关闭loading提示
            that.setData({
              hiddenHistory: true,
              searchVal: data
            });
        },
        loading: true
    });
  },
  lower: function(e) {
    //滚动到底部
    var that = this;
    if(this.data.moreOver || this.data.isloading){
        //没有更多数据 || 正在加载
        return;
    }
    this.setData({
        isloading: true
    });
    wx.showNavigationBarLoading();//loading提示
    var currentPage = ++that.data.currentPage;
    app.services({
        url: 'moreOrder',
        data: {
            currentPage: currentPage
        },
        complete: function(){
            var res = app._data.orderList;
            that.mergeOrders(res.orderList);
            if(that.data.currentPage >= res.pageCount){
                that.setData({
                    moreOver: true
                })
            }
        }
    });
  },
  mergeOrders:function(list){
        var isJoin = false;
        for(var i in list){
            var result = {
                    date:'',
                    children:[],
            }
            switch(list[i].transferState){
              case 'PREPARE':
                  list[i].color = '#8460a8';
                  list[i].transferState = '备货中/待发货';
                  break;
              case 'PREPAREED':
                  list[i].color = '#04c7cd';
                  list[i].transferState = '已出库/待发货';
                  break;
              case 'OUT':
                  list[i].color = '#09cb96';
                  list[i].transferState = '已出库/已发货';
                  break;
            }
            this.showbtn(list[i]);
            if(!this.rootResults.length && i == 0){
                result.date = list[i].createDate.substring(0,7);
                this.rootResults.push(result);
            }
            for(var j in this.rootResults){
                var cdate = this.rootResults[j].date;
                var date = list[i].createDate.substring(0,7);
                if(cdate == date){
                    if(!this.rootResults[j].children){
                        this.rootResults[j].children = [];
                    }
                    this.rootResults[j].children.push(list[i]);
                    isJoin = false;
                    break;
                }
                isJoin = true;
            }
            if(isJoin){
                result.date = date;
                result.children.push(list[i]);
                this.rootResults.push(result);
            }
        }
        this.orderNumber = this.orderNumber + list.length;
        this.setData({
        orderList: {
            orderList:this.rootResults
        },
        isloading: false,
        orderNumber: this.orderNumber
    });
        wx.hideNavigationBarLoading();//关闭loading提示
        return this.rootResults;
    },
    showbtn: function(obj){
        switch(obj.orderState){
            case '1':
                obj.orderState = '待订单审核';
                break;
            case '2':
                obj.orderState = '待财务审核';
                break;
            case '3':
                obj.orderState = '待出库审核';
                break;
            case '4':
                obj.orderState = '待发货审核';
                break;
            case '5':
                obj.orderState = '待收货确认';
                break;
            case '6':
                obj.orderState = '待客户确认入库';
                break;
            case '0':
                obj.orderState = '已完成';
                break;
            case '9':
                obj.orderState = '订单作废';
                break;
        }
    },
    getDetail: function(event) {
        var orderId = event.target.dataset.orderId;
        wx.navigateTo({
            url: "/pages/order/orderDetail/orderDetail?orderId="+orderId
        })
    },
})