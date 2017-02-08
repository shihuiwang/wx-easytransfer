// pages/goods/goodsDetail/goodsDetail.js
//引入富文本解析插件
var WxParse = require('../../../wxParse/wxParse.js');
Page({
  data:{
    imgUrls: ['http://cn.bing.com/az/hprichbg/rb/VolunteerPoint_ZH-CN7941283677_1920x1080.jpg',
      'http://cn.bing.com/az/hprichbg/rb/TowerofLight_ZH-CN11745498179_1920x1080.jpg',
      'http://cn.bing.com/az/hprichbg/rb/Shimaenaga_ZH-CN14747993510_1920x1080.jpg'
    ],
    cartNumber: 1,
    arrow: 'arrowIcon-d',
    decHidden: false,
    otherArrow: 'arrowIcon-r',
    otherHidden: true,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var itemData = JSON.parse(options.item);
    console.log(itemData);
    this.setData({
      goodsDetailObj: itemData
    });
    var article = itemData.goodsInfo;
    var that = this;
    WxParse.wxParse('article', 'html', article, that,5)//解析富文本插件API
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
  goodsDecTap: function() {
    if(this.data.decHidden){
      this.setData({
        decHidden: false,
        arrow: 'arrowIcon-d'
      });
    }
    else{
      this.setData({
        decHidden: true,
        arrow: 'arrowIcon-r'
      });
    }
  },
  goodsOtherTap: function() {
    if(this.data.otherHidden){
      this.setData({
        otherHidden: false,
        otherArrow: 'arrowIcon-d'
      });
    }
    else{
      this.setData({
        otherHidden: true,
        otherArrow: 'arrowIcon-r'
      });
    }
  },
})