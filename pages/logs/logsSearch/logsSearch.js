// pages/logs/logsSearch/logsSearch.js
var app = getApp()
Page({
  hisData: [],
  data: {
    logs: [],
    currentPage: 1,
    isloading: false,
    moreOver: false
  },
  onLoad: function () {
    var that = this;
    this.hisData = wx.getStorageSync('logsHistorySearch');
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
        logs: [],
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
    wx.setStorageSync('logsHistorySearch', this.hisData);
    this.setData({
      hisData: this.hisData,
      hiddenHistory: true
    });
    //搜索接口请求----------
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
   clearHistory: function() {
    wx.removeStorageSync('logsHistorySearch');
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
        url: 'customers',
        complete: function(){
            var res = app._data.logList;
            that.setData({
                logs: res,
                searchVal: data,
                hiddenHistory: true
            });
            wx.hideToast();//关闭loading提示
        },
        loading: true//是否启用loading提示
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
            that.setData({
                logs: that.data.logs.concat(res),
                isloading: false
            });
            if(currentPage >= 5){
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
})
