// pages/logs/logsDetail/logsDetail.js
var app = getApp()
Page({
  data:{

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    app.services({
      url: 'logDetail',
      data: {id: options.logId},
      complete: function() {
        var res = app._data.logDetailData.resultDetail;
        that.setData({
          detailData: res
        });
        wx.hideToast();
      },
      loading: true
    });
  },
    //​显示操作菜单
  operateShow: function() {
      var that = this;
      wx.showActionSheet({
        itemList: ['编辑日志','删除日志'],
        success: function(res) {
          if(res.tapIndex == 0){
              var data = JSON.stringify(that.data.detailData);
              wx.navigateTo({
                url: "/pages/logs/logsEdit/logsEdit?data="+data
              })
          }
          else if(res.tapIndex == 1){
            wx.showModal({
              title: '提示',
              content: '点击确定将执行删除该日志',
              success: function(res) {
                if(res.confirm){
                  app.services({
                    url: 'delLogs',
                    data: {},
                    complete: function() {
                      wx.showToast({
                        title: '测试提示删除成功',
                        icon: 'success'
                      });
                      wx.navigateBack()
                    }
                  });
                }
              }
            });
          }
        }
      })
  },
})
