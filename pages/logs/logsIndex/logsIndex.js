//logs.js
var app = getApp()
Page({
  data: {
    logs: [],
    currentPage: 1,
    isloading: false,
    moreOver: false
  },
  onLoad: function () {
    var that = this;
    app.services({
      url: 'showLogs',
      data: {},
      complete: function() {
        wx.hideToast();
        that.setData({
          logs: app._data.logList
        })
      },
      loading: true
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
        url: 'moreLogs',
        data: {
            currentPage: currentPage
        },
        complete: function(){
            var res = app._data.logList;
            console.log(res,that.data.logs);
            that.setData({
                logs: that.data.logs.concat(res),
                isloading: false
            });
            if(currentPage >= 5){
                that.setData({moreOver: true})
            }
            console.log(that.data.logs);
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
          logs: [],
          currentPage: 1
      });
      app.services({
        url: 'Refreshcustomers',
        data: {
            currentPage: currentPage
        },
        complete: function(){
            var res = app._data.logList;
            that.setData({
                logs: res
            });
            wx.stopPullDownRefresh();
        }
    });
  },
  getDetail: function(e) {
      var logId = e.target.dataset.logId;
      wx.navigateTo({
        url: "/pages/logs/logsDetail/logsDetail?logId="+logId
      })
  },
  getAddLogs: function() {
      wx.navigateTo({
        url: "/pages/logs/logsAdd/logsAdd"
      })
  },
  getSearch: function() {
    wx.navigateTo({
        url: "/pages/logs/logsSearch/logsSearch"
    })
  },
})
