// pages/customer/customerAdd/customerAdd.js
import { Promise } from '../../../utils/util';
var app = getApp();
/**
 *  查询接口
 */
const API = 'http://japi.zto.cn/zto/api_utf8/baseArea?msg_type=GET_AREA&data=';

Page({
  data:{
      levelIndex: 0
  },
  addDot: function (arr) {
    if (arr instanceof Array) {
      arr.map(val => {
        if (val.fullName.length > 4) {
          val.fullNameDot = val.fullName.slice(0, 4) + '...';
          return val;
        } else {
          val.fullNameDot = val.fullName;
          return val;
        }
      })
    }
  },
  confirmChoose: function() {
    this.setData({
      isShow: false
    });
  },
  levelChange: function(event) {
    this.setData({
      levelIndex: event.detail.value
    });
  },
  onLoad:function(options){
    var _this = this;
    wx.request({
      url: 'http://localhost:8080/easyTransfer',//模拟接口( 无用 )
      method: 'POST',
      data: {},
      complete: function() {
          var res = app._data.levelRes;
          _this.setData({
            levelList: res.levelList
          });
      }
    });
    
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      isShow: false, // 显示区域选择框
      showDistrict: true // 默认为省市区三级区域选择
    });
    // if (opt && !opt.showDistrict) {
    //   this.setData({
    //     showDistrict: false
    //   });
    // }
    Promise(wx.request, {
      url: API + '0',
      method: 'GET'
    }).then((province) => {
      const firstProvince = province.data.result[5]; //默认选择省修改
      this.addDot(province.data.result);
      /**
       * 默认选择获取的省份第一个省份数据
       */
      this.setData({
        proviceData: province.data.result,
        'selectedProvince.index': 5, //默认选择省修改
        'selectedProvince.code': firstProvince.code,
        'selectedProvince.fullName': firstProvince.fullName,
      });
      return (
        Promise(wx.request, {
          url: API + firstProvince.code,
          method: 'GET'
        })
      );
    }).then((city) => {
      const firstCity = city.data.result[3];//默认选择市修改
      this.addDot(city.data.result);
      this.setData({
        cityData: city.data.result,
        'selectedCity.index':3, //默认选择市修改
        'selectedCity.code': firstCity.code,
        'selectedCity.fullName': firstCity.fullName,
      });
      /**
       * 省市二级则不请求区域
       */
      if (this.data.showDistrict) {
        return (
          Promise(wx.request, {
            url: API + firstCity.code,
            method: 'GET'
          })
        );
      } else {
        this.setData({
          value: [5, 3]
        });
        return;
      }
    }).then((district) => {
      const firstDistrict = district.data.result[0];
      this.addDot(district.data.result);
      this.setData({
        value: [5, 3, 0], //默认选中省市区下标— —————— —————— ————— ——————
        districtData: district.data.result,
        'selectedDistrict.index': 0,
        'selectedDistrict.code': firstDistrict.code,
        'selectedDistrict.fullName': firstDistrict.fullName,
        address: this.data.proviceData[5].fullName + this.data.cityData[3].fullName + district.data.result[0].fullName
      });
    }).catch((e) => {
      console.log(e);
    })
  },

  /**
   * 页面选址触发事件
   */
  choosearea: function () {
    this.setData({
      isShow: true
    })
  },

  /**
   * 滑动事件
   */
  bindChange: function (e) {
    const current_value = e.detail.value, _data = this.data;

    console.log('ddddddddd');

    if (current_value.length > 2) {
      if (this.data.value[0] !== current_value[0] && this.data.value[1] === current_value[1] && this.data.value[2] === current_value[2]) {
        // 滑动省份
        Promise(wx.request, {
          url: API + _data.proviceData[current_value[0]].code,
          method: 'GET'
        }).then((city) => {
          this.addDot(city.data.result);
          this.setData({
            cityData: city.data.result
          })
          return (
            Promise(wx.request, {
              url: API + city.data.result[0].code,
              method: 'GET'
            })
          );
        }).then((district) => {
          if (district.data.result.length > 0) {
            this.addDot(district.data.result);
            this.setData({
              districtData: district.data.result,
              'value[0]': current_value[0],
              'value[1]': 0,
              'value[2]': 0
            })

            this.setData({
              address: this.data.proviceData[current_value[0]].fullName + this.data.cityData[0].fullName + district.data.result[0].fullName
            })
          }


        }).catch((e) => {
          console.log(e);
        })
      } else if (this.data.value[0] === current_value[0] && this.data.value[1] !== current_value[1] && this.data.value[2] === current_value[2]) {
        // 滑动城市
        Promise(wx.request, {
          url: API + _data.cityData[current_value[1]].code,
          method: 'GET'
        }).then((district) => {
          if (district.data.result.length > 0) {
            this.addDot(district.data.result);
            this.setData({
              districtData: district.data.result,
              'value[0]': current_value[0],
              'value[1]': current_value[1],
              'value[2]': 0,
              address: this.data.proviceData[current_value[0]].fullName + this.data.cityData[current_value[1]].fullName + district.data.result[0].fullName
            })
          }
        }).catch((e) => {
          console.log(e);
        })

      } else if (this.data.value[0] === current_value[0] && this.data.value[1] === current_value[1] && this.data.value[2] !== current_value[2]) {
        // 滑动地区

        this.setData({
          value: current_value,
          address: this.data.proviceData[current_value[0]].fullName + this.data.cityData[current_value[1]].fullName +  this.data.districtData[current_value[2]].fullName
        })
      }
    }
  },

  formSubmit: function(e) {
    console.log('form submit，数据：', e.detail.value)
    var submitData = e.detail.value;
    if(submitData.company == ''){
      wx.showModal({
        title: '提示',
        content: '客户企业名称不能为空 .',
        showCancel: false
      });
      return;
    }
    if(submitData.acount == '' || submitData.acount.length < 6){
      wx.showModal({
        title: '提示',
        content: '账号不能为空且至少 6 位 .',
        showCancel: false
      });
      return;
    }
    if(submitData.password == '' || submitData.password.length < 6){
      wx.showModal({
        title: '提示',
        content: '密码不能为空且至少 6 位 .',
        showCancel: false
      });
      return;
    }
    if(submitData.password2 != submitData.password){
      wx.showModal({
        title: '提示',
        content: '两次密码必须一致 .',
        showCancel: false
      });
      return;
    }
    if(submitData.name == ''){
      wx.showModal({
        title: '提示',
        content: '联系人不能为空 .',
        showCancel: false
      });
      return;
    }
  },
  formReset: function() {
    console.log('form reset')
    wx.navigateBack(1);
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