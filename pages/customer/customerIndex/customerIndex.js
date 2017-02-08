// pages/customer/customerIndex/customerIndex.js
var app = getApp()

Page({
  data:{
    isloading: false,
    currentPage: 1,  //当前页码
    moreOver: false,  //是否加载完所有
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    app.services({
        url: 'customers',
        complete: function(){
            var res = app._data.joininList;
            that.setData({
                joininList: res
            });
            wx.hideToast();//关闭loading提示
        },
        loading: true//是否启用loading提示
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onPullDownRefresh: function() {
      var that = this;
      var currentPage = 1;
      //下拉刷新初始化页码、数据
      that.setData({
          moreOver: false,
          joininList: [],
          currentPage: 1
      });
      app.services({
        url: 'Refreshcustomers',
        data: {
            currentPage: currentPage
        },
        complete: function(){
            var res = app._data.joininList;
            that.setData({
                joininList: res
            });
            wx.stopPullDownRefresh();
        }
    });
  },
  lower: function() {
    var that = this;
    var currentPage = ++this.data.currentPage;
    if(this.data.moreOver || this.data.isloading){
        return;
    }
    this.setData({
        isloading: true
    });
    wx.showNavigationBarLoading();
    app.services({
        url: 'morecustomers',
        data: {
            currentPage: currentPage
        },
        complete: function(){
            var res = app._data.joininList;
            that.setData({
                joininList: that.data.joininList.concat(res),
                isloading: false
            });
            if(currentPage >= 5){
                that.setData({moreOver: true})
            }
            wx.hideNavigationBarLoading();//关闭loading提示
        }
    });
  },
  //拨打电话
  phoneCall: function(num) {
        wx.makePhoneCall({
            phoneNumber: num
        })
  },
  getAddCus: function() {
      wx.navigateTo({
        url: "/pages/customer/customerAdd/customerAdd"
      })
  },
  getDetail: function(event) {
        var salesId = event.target.dataset.salesId;
        var callNumber = event.target.dataset.callNumber;
        var touches = event.touches[0];
        //点击的位置为电话号码则拨打电话
        if(touches.pageX > 195 && touches.pageX < 330 && touches.pageY > 140 && touches.pageY <200){
            this.phoneCall(callNumber);
            return;
        }
        wx.navigateTo({
            url: "/pages/customer/customerDetail/customerDetail?orderId="+salesId
        })
    },
    getSearch: function() {
        wx.navigateTo({
            url: "/pages/customer/customerSearch/customerSearch"
        })
    },
})