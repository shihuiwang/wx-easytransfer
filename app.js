//app.js
App({
  //设置域名baseUrl & 接口api & 请求services
  //baseUrl: 'http://localhost:8080/easyTransfer',
  baseUrl: 'https://93917139.qcloud.la/com.qcloud.weapp.demo',
  api: {
        user: '/app/getUserInfo',
        login: '/login',
        countdata : '/app/getCountData',
    },
  services: function(options) {
      var url = this.baseUrl + this.api[options.url];
      if(options.method){
        var method = options.method.toUpperCase();
      }
      else{
         var method = false; 
      }
      if(options.loading)
      wx.showToast({
          title: '正在加载中',
          icon: 'loading',
          duration: 10000
      });
      wx.request({
            url: url,
            data: options.data,
            header: options.header,
            method: method || 'GET',
            dataType: options.dataType || 'json',
            success: options.success,
            fail: options.fail,
            complete: options.complete,      
      })
  },

  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },

  //全局模拟数据
  _data: {
     logList: [
                {
                    "id": 20,
                    "userId": "38bba1bb-b90c-4eb0-9f40-9344b698985d",
                    "userName": "杨飞",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "dailyTitle": "加够能翻页条数",
                    "dailyAddress": "地址地址",
                    "dailyContent": "啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
                    "dailyCreateTime": "2017-01-03 16:34:30"
                },
                {
                    "id": 16,
                    "userId": "38bba1bb-b90c-4eb0-9f40-9344b698985d",
                    "userName": "杨飞",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "dailyTitle": "全局提示模块完成测试2017.1.3",
                    "dailyAddress": "广州天河",
                    "dailyContent": "自定义func在utils文件下，可传入文本参数用作提示。",
                    "dailyCreateTime": "2017-01-03 16:29:42"
                },
                {
                    "id": 14,
                    "userId": "38bba1bb-b90c-4eb0-9f40-9344b698985d",
                    "userName": "杨飞",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "dailyTitle": "ioio",
                    "dailyAddress": "柯南地址",
                    "dailyContent": "啊啊",
                    "dailyCreateTime": "2016-12-29 15:25:08"
                },
                {
                    "id": 13,
                    "userId": "38bba1bb-b90c-4eb0-9f40-9344b698985d",
                    "userName": "杨飞",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "dailyTitle": "1111",
                    "dailyAddress": "湖南",
                    "dailyContent": "；；试试死死试试",
                    "dailyCreateTime": "2016-12-29 15:24:45"
                },
                {
                    "id": 12,
                    "userId": "38bba1bb-b90c-4eb0-9f40-9344b698985d",
                    "userName": "杨飞",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "dailyTitle": "一样一样呀",
                    "dailyAddress": "天津",
                    "dailyContent": "啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
                    "dailyCreateTime": "2016-12-29 15:24:23"
                },
                {
                    "id": 11,
                    "userId": "38bba1bb-b90c-4eb0-9f40-9344b698985d",
                    "userName": "杨飞",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "dailyTitle": "天天天天天",
                    "dailyAddress": "湖北",
                    "dailyContent": "啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
                    "dailyCreateTime": "2016-12-29 15:24:00"
                },
                {
                    "id": 10,
                    "userId": "38bba1bb-b90c-4eb0-9f40-9344b698985d",
                    "userName": "杨飞",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "dailyTitle": "人人人人",
                    "dailyAddress": "北京",
                    "dailyContent": "O cd_daily(userId,userName,companyId,dailyTitle,dailyAddress,dailyContent,dailyCreateTime) VALUES(?,?,?,?,?,?,?)",
                    "dailyCreateTime": "2016-12-29 15:23:03"
                },
                {
                    "id": 9,
                    "userId": "38bba1bb-b90c-4eb0-9f40-9344b698985d",
                    "userName": "杨飞",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "dailyTitle": "哇哇哇哇",
                    "dailyAddress": "北极",
                    "dailyContent": "$scope.currentPage = 1;\n\t\t$scope.pageSize = 10;\n\t\t$scope.logList = [];\n\t\t$scope.canDoRefresh = true;\n\t\t$scope.loadOver = false;",
                    "dailyCreateTime": "2016-12-29 15:22:33"
                },
                {
                    "id": 7,
                    "userId": "38bba1bb-b90c-4eb0-9f40-9344b698985d",
                    "userName": "杨飞",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "dailyTitle": "测试日志标题2016-12-29",
                    "dailyAddress": "地址",
                    "dailyContent": "qw1\n2\n3\n3\n3\n3",
                    "dailyCreateTime": "2016-12-29 15:19:20"
                },
                {
                    "id": 6,
                    "userId": "38bba1bb-b90c-4eb0-9f40-9344b698985d",
                    "userName": "杨飞",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "dailyTitle": "测试日志标题2016-12-29",
                    "dailyAddress": "广州",
                    "dailyContent": "啊实打实大师大师大师大师大师大师大师的",
                    "dailyCreateTime": "2016-12-29 15:18:45"
                }
            ],
    orderDetailDataList: [
      {
          "orderId": "de4bbfdc-4589-429b-9f19-69e189a29f29",
          "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
          "salesId": "34ff3ece-23a8-4934-8527-84034d9574cd",
          "customName": "广州小明生物科技有限公司",
          "orderCode": "XD20170113001",
          "createDate": "2017-01-13 17:40:13",
          "totalFee": 90,
          "actuallyFee": 0,
          "confirmFee": 0,
          "transferState": "备货中/待发货",
          "orderState": "1",
          "payState": "N",
          "description": "无备注",
          "contactName": "小明",
          "cellphone": "13645678910",
          "address": "广东省广州市cachtonino",
          "qrCodePath": "/qrCode/de4bbfdc-4589-429b-9f19-69e189a29f29.png",
          "goodsList": [
              {
                  "id": "e6f06c6c-01d1-41d5-bc5b-3dfcb4efd634",
                  "orderId": "de4bbfdc-4589-429b-9f19-69e189a29f29",
                  "goodsId": "11ff39c3-3888-4d14-b253-c81b5fc5d50f",
                  "account": 1,
                  "price": 90,
                  "goodVO": {
                      "goodId": "11ff39c3-3888-4d14-b253-c81b5fc5d50f",
                      "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                      "goodsName": "大牛AA",
                      "goodsType": "8f80e2b1-c785-4b38-aa64-10e375fcd464",
                      "goodsCode": "20170113053",
                      "unit": "409feaae-152a-4902-894d-6f7c6db4c784",
                      "mPrice": 100,
                      "cPrice": 150,
                      "isList": "N",
                      "keywords": "",
                      "goodsOrder": 0,
                      "goodsTag": "",
                      "manufacturer": "",
                      "goodsInfo": "",
                      "state": "0",
                      "salePrice": 0,
                      "saleNum": 0,
                      "typeVO": {
                          "typeId": "8f80e2b1-c785-4b38-aa64-10e375fcd464",
                          "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                          "typeName": "禽药物"
                      },
                      "unitVO": {
                          "unitId": "409feaae-152a-4902-894d-6f7c6db4c784",
                          "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                          "unitName": "盒"
                      },
                      "goodsBarCode": ""
                  }
              },
              {
                  "id": "e6f06c6c-01d1-41d5-bc5b-3dfcb4efd634",
                  "orderId": "de4bbfdc-4589-429b-9f19-69e189a29f29",
                  "goodsId": "11ff39c3-3888-4d14-b253-c81b5fc5d50f",
                  "account": 14,
                  "price": 90,
                  "goodVO": {
                      "goodId": "11ff39c3-3888-4d14-b253-c81b5fc5d50f",
                      "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                      "goodsName": "大牛BB",
                      "goodsType": "8f80e2b1-c785-4b38-aa64-10e375fcd464",
                      "goodsCode": "20170113058",
                      "unit": "409feaae-152a-4902-894d-6f7c6db4c784",
                      "mPrice": 100,
                      "cPrice": 150,
                      "isList": "N",
                      "keywords": "",
                      "goodsOrder": 0,
                      "goodsTag": "",
                      "manufacturer": "",
                      "goodsInfo": "",
                      "state": "0",
                      "salePrice": 0,
                      "saleNum": 0,
                      "typeVO": {
                          "typeId": "8f80e2b1-c785-4b38-aa64-10e375fcd464",
                          "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                          "typeName": "禽药物"
                      },
                      "unitVO": {
                          "unitId": "409feaae-152a-4902-894d-6f7c6db4c784",
                          "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                          "unitName": "瓶"
                      },
                      "goodsBarCode": ""
                  }
              }
          ],
          "salesVO": {
              "companyId": "34ff3ece-23a8-4934-8527-84034d9574cd",
              "companyName": "广州小明生物科技有限公司",
              "userType": "SALES",
              "companyCode": "",
              "contactName": "小明j",
              "contactPhone": "13645678910",
              "contactPost": "跑腿",
              "contactQQ": "64466666qq",
              "contactEmail": "123456@qq.com",
              "province": "广东",
              "city": "广州",
              "address": "cachtonino",
              "zipCode": "524311",
              "phone": "13466666666",
              "tax": "13488888888",
              "mainPage": "64466666qq.html",
              "remark": "小明的企业介绍，巴拉巴拉巴拉巴拉巴拉巴拉巴",
              "taxesRemark": "66-66-66-66-66-66",
              "invoiceTitle": "广州小明生物科技发票头"
          },
          "count": 0,
          "color": "status-orderconfirm",
          "storageVO": {
                "billId": "3c63ceba-abc4-47a7-994f-969732f8be51",
                "storeId": "8794554b-7d11-4a58-8df1-ada1265a3df2",
                "billCode": "XD20170123003",
                "storageKind": 0,
                "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                "createTime": "2017-01-23 12:21:29",
                "storageType": "销售出库",
                "billMaker": "系统出单"
            },
            "deliverVO": {
                "deliverId": "383facc6-d34d-4548-b115-7a87defed36b",
                "deliverCode": "L-20170121112",
                "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                "salesId": "34ff3ece-23a8-4934-8527-84034d9574cd",
                "orderId": "383d856b-56b1-4ca3-ba9f-06f1bc4bba7e",
                "logisticsCompany": "小明",
                "logisticsBill": "123456",
                "deliverTime": "2017-01-21 11:26:29"
            },
      },
    ],
    operationList: [
        {
            "operationId": 839,
            "orderId": "b483cfe0-db59-41be-93db-b9c0d69e82aa",
            "userName": "mtsw",
            "operationType": "出库确认",
            "operationTime": "2017-01-05 10:20:58"
        },
        {
            "operationId": 840,
            "orderId": "b483cfe0-db59-41be-93db-b9c0d69e82aa",
            "userName": "mtsw",
            "operationType": "发货确认",
            "operationTime": "2017-01-05 10:23:04"
        },
        {
            "operationId": 841,
            "orderId": "b483cfe0-db59-41be-93db-b9c0d69e82aa",
            "userName": "小明",
            "operationType": "收货确认",
            "operationTime": "2017-01-05 10:26:05"
        }
    ],
    customerInfo: {
            "levelList": [
                {
                    "levelId": "37db65b0-6778-4cf5-8baf-780ca0c71816",
                    "levelName": "一级客户",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "discount": 80
                },
                {
                    "levelId": "545d0c6d-7670-4415-a265-e32904adcc91",
                    "levelName": "二级客户",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "discount": 90
                },
                {
                    "levelId": "583d7353-97f6-4e3f-9d0c-6185e587a162",
                    "levelName": "三级客户",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "discount": 95
                }
            ],
            "joinInVO": {
                "id": 103,
                "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                "salesId": "34ff3ece-23a8-4934-8527-84034d9574cd",
                "userLevelId": "545d0c6d-7670-4415-a265-e32904adcc91",
                "areaId": "f3f81597-69fe-4afa-a323-e64b581b25b6",
                "contactName": "小明",
                "contactPhone": "13645678902",
                "contactEmail": "123456@qq.com",
                "salesVO": {
                    "companyId": "34ff3ece-23a8-4934-8527-84034d9574cd",
                    "companyName": "广州小明生物科技有限公司",
                    "userType": "SALES",
                    "companyCode": "",
                    "contactName": "小明j",
                    "contactPhone": "13645678910",
                    "contactPost": "跑腿",
                    "contactQQ": "64466666qq",
                    "contactEmail": "123456@qq.com",
                    "province": "广东",
                    "city": "广州",
                    "address": "cachtonino",
                    "zipCode": "524311",
                    "phone": "13466666666",
                    "tax": "13488888888",
                    "mainPage": "64466666qq.html",
                    "remark": "小明的企业介绍，巴拉巴拉巴拉巴拉巴拉巴拉巴",
                    "taxesRemark": "66-66-66-66-66-66",
                    "invoiceTitle": "广州小明生物科技发票头"
                },
                "areaVO": {
                    "areaId": "f3f81597-69fe-4afa-a323-e64b581b25b6",
                    "parentId": "e1e5e5a8-3d59-4ace-a011-2d8595b6b2e2",
                    "level": "4",
                    "areaName": "长湴",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0"
                }
            },
            "areaList": [
                {
                    "areaId": "66ce0906-c893-41eb-a9d2-2d8906e64594",
                    "parentId": "",
                    "level": "1",
                    "areaName": "广东",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0"
                },
                {
                    "areaId": "69a82323-4677-4022-916d-e55a1bc4c325",
                    "parentId": "",
                    "level": "1",
                    "areaName": "北京",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0"
                },
                {
                    "areaId": "a28853be-9273-4625-8206-fd47f9d42cc1",
                    "parentId": "66ce0906-c893-41eb-a9d2-2d8906e64594",
                    "level": "2",
                    "areaName": "广州",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0"
                },
                {
                    "areaId": "bd908d71-2875-4791-86fb-de51d8307054",
                    "parentId": "69a82323-4677-4022-916d-e55a1bc4c325",
                    "level": "2",
                    "areaName": "帝都",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0"
                },
                {
                    "areaId": "e1e5e5a8-3d59-4ace-a011-2d8595b6b2e2",
                    "parentId": "a28853be-9273-4625-8206-fd47f9d42cc1",
                    "level": "3",
                    "areaName": "天河",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0"
                },
                {
                    "areaId": "f3f81597-69fe-4afa-a323-e64b581b25b6",
                    "parentId": "e1e5e5a8-3d59-4ace-a011-2d8595b6b2e2",
                    "level": "4",
                    "areaName": "长湴",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0"
                }
            ]
        },
        levelRes: {
            "levelList": [
                {
                    "levelId": "37db65b0-6778-4cf5-8baf-780ca0c71816",
                    "levelName": "一级客户",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "discount": 80
                },
                {
                    "levelId": "545d0c6d-7670-4415-a265-e32904adcc91",
                    "levelName": "二级客户",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "discount": 90
                },
                {
                    "levelId": "583d7353-97f6-4e3f-9d0c-6185e587a162",
                    "levelName": "三级客户",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "discount": 95
                }
            ]
        },
        countdata:{
            "result": "OK",
            "msg": "获取成功",
            "todayAcount": 10010231,
            "weekAcount": 160,
            "todayCount": 230,
            "monthAcount": 1888,
            "weekCount": 2,
            "monthCount": 12
        },
        joininList: [
            {
                "id": 103,
                "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                "salesId": "34ff3ece-23a8-4934-8527-84034d9574cd",
                "userLevelId": "545d0c6d-7670-4415-a265-e32904adcc91",
                "areaId": "f3f81597-69fe-4afa-a323-e64b581b25b6",
                "contactName": "小明",
                "contactPhone": "13645678902",
                "contactEmail": "123456@qq.com",
                "salesVO": {
                    "companyId": "34ff3ece-23a8-4934-8527-84034d9574cd",
                    "companyName": "广州小明生物科技有限公司",
                    "userType": "SALES",
                    "companyCode": "",
                    "contactName": "小明j",
                    "contactPhone": "13645678910",
                    "contactPost": "跑腿",
                    "contactQQ": "64466666qq",
                    "contactEmail": "123456@qq.com",
                    "province": "广东",
                    "city": "广州",
                    "address": "cachtonino",
                    "zipCode": "524311",
                    "phone": "13466666666",
                    "tax": "13488888888",
                    "mainPage": "64466666qq.html",
                    "remark": "小明的企业介绍，巴拉巴拉巴拉巴拉巴拉巴拉巴",
                    "taxesRemark": "66-66-66-66-66-66",
                    "invoiceTitle": "广州小明生物科技发票头"
                },
                "joinInLevelVO": {
                    "levelId": "545d0c6d-7670-4415-a265-e32904adcc91",
                    "levelName": "二级客户",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "discount": 90
                }
            },
            {
                "id": 113,
                "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                "salesId": "4bde2d94-cc8f-4168-b62c-80f7d6a23972",
                "userLevelId": "37db65b0-6778-4cf5-8baf-780ca0c71816",
                "contactName": "大名",
                "contactPhone": "1343322222",
                "contactEmail": "112@2",
                "salesVO": {
                    "companyId": "4bde2d94-cc8f-4168-b62c-80f7d6a23972",
                    "companyName": "大名",
                    "userType": "SALES",
                    "contactName": "大民",
                    "contactPhone": "1342222222",
                    "contactEmail": "11@1",
                    "province": "北京",
                    "city": "东城区",
                    "address": "东东"
                },
                "joinInLevelVO": {
                    "levelId": "37db65b0-6778-4cf5-8baf-780ca0c71816",
                    "levelName": "一级客户",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "discount": 80
                }
            },
            {
                "id": 98,
                "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                "salesId": "6021c0e8-29df-4e79-a0e6-017a7e5edaa7",
                "userLevelId": "",
                "areaId": "e1e5e5a8-3d59-4ace-a011-2d8595b6b2e2",
                "contactName": "王艺颖",
                "contactPhone": "15850961217",
                "contactEmail": "",
                "salesVO": {
                    "companyId": "6021c0e8-29df-4e79-a0e6-017a7e5edaa7",
                    "companyName": "宿迁温氏畜牧有限公司归仁猪场",
                    "userType": "SALES",
                    "contactName": "王艺颖",
                    "contactPhone": "15850961217",
                    "contactEmail": "",
                    "province": "江苏",
                    "city": "宿迁",
                    "address": "泗洪归仁镇七里村温氏归仁猪场"
                }
            },
            {
                "id": 100,
                "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                "salesId": "6872512d-adba-4bed-a355-da17e8b23d79",
                "userLevelId": "37db65b0-6778-4cf5-8baf-780ca0c71816",
                "businessId": "a587b9c8-88b7-4a98-8511-97a9ef5ab636",
                "areaId": "",
                "contactName": "司徒云",
                "contactPhone": "13929851180",
                "contactEmail": "",
                "salesVO": {
                    "companyId": "6872512d-adba-4bed-a355-da17e8b23d79",
                    "companyName": "肇庆市益信原种猪场有限公司",
                    "userType": "SALES",
                    "contactName": "司徒云",
                    "contactPhone": "13929851180",
                    "contactEmail": "",
                    "province": "广东",
                    "city": "肇庆",
                    "address": "封开县江口镇封州二路178号"
                },
                "joinInLevelVO": {
                    "levelId": "37db65b0-6778-4cf5-8baf-780ca0c71816",
                    "levelName": "一级客户",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "discount": 80
                }
            },
            {
                "id": 115,
                "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                "salesId": "6e923be3-c075-4bf0-8d03-ff8d48035aec",
                "salesVO": {
                    "companyId": "6e923be3-c075-4bf0-8d03-ff8d48035aec",
                    "companyName": "1234567",
                    "userType": "SALES",
                    "companyCode": "",
                    "contactName": "12345",
                    "contactPhone": "",
                    "contactPost": "",
                    "contactQQ": "",
                    "contactEmail": "",
                    "province": "广东",
                    "city": "广州",
                    "address": "",
                    "zipCode": "",
                    "phone": "",
                    "tax": "",
                    "mainPage": "",
                    "remark": "",
                    "taxesRemark": "",
                    "invoiceTitle": ""
                }
            },
            {
                "id": 109,
                "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                "salesId": "6f88fdaa-6ef9-4019-b4fb-2be4e4bf134a",
                "salesVO": {
                    "companyId": "6f88fdaa-6ef9-4019-b4fb-2be4e4bf134a",
                    "companyName": "测试世峰经销商",
                    "userType": "SALES",
                    "contactName": "峰哥",
                    "contactPhone": "13447580843",
                    "contactEmail": "756453857@qq.com",
                    "address": "广东省广州市越秀区"
                }
            },
            {
                "id": 97,
                "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                "salesId": "87304040-9224-4ae5-8083-334de3d88997",
                "userLevelId": "",
                "businessId": "d5a1eeed-4eb3-4c99-bf86-6e10255b8998",
                "areaId": "",
                "contactName": "修长军",
                "contactPhone": "13951069472",
                "contactEmail": "",
                "salesVO": {
                    "companyId": "87304040-9224-4ae5-8083-334de3d88997",
                    "companyName": "宿迁温氏畜牧有限公司",
                    "userType": "SALES",
                    "contactName": "修长军",
                    "contactPhone": "13951069472",
                    "contactEmail": "",
                    "province": "江苏",
                    "city": "宿迁",
                    "address": "泗洪县青阳镇245省道新濉河大桥西边北侧"
                }
            },
            {
                "id": 102,
                "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                "salesId": "9bde2bc7-79f0-4c82-998d-13d2be9dcb3b",
                "contactName": "xxxx",
                "contactPhone": "1342222222",
                "contactEmail": "12@3",
                "salesVO": {
                    "companyId": "9bde2bc7-79f0-4c82-998d-13d2be9dcb3b",
                    "companyName": "测试经销商9",
                    "userType": "SALES",
                    "companyCode": "",
                    "contactName": "999",
                    "contactPhone": "18231546112",
                    "contactPost": "",
                    "contactQQ": "",
                    "contactEmail": "",
                    "province": "辽宁",
                    "city": "沈阳",
                    "address": "",
                    "zipCode": "",
                    "phone": "",
                    "tax": "",
                    "mainPage": "",
                    "remark": "",
                    "taxesRemark": "",
                    "invoiceTitle": ""
                }
            }
        ],
        orderList: {
            "orderList": [
                {
                    "orderId": "d326111f-e35b-4a77-8584-b62df60f0793",
                    "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "salesId": "6f88fdaa-6ef9-4019-b4fb-2be4e4bf134a",
                    "customName": "测试世峰经销商",
                    "orderCode": "XD20170109001",
                    "createDate": "2017-01-09 15:05:05",
                    "totalFee": 1000,
                    "actuallyFee": 0,
                    "confirmFee": 0,
                    "transferState": "PREPARE",
                    "orderState": "1",
                    "payState": "N",
                    "description": "",
                    "contactName": "峰哥",
                    "cellphone": "13447580843",
                    "address": "省市广东省广州市越秀区",
                    "qrCodePath": "/qrCode/d326111f-e35b-4a77-8584-b62df60f0793.png",
                    "count": 0,
                    "color": "status-orderconfirm"
                },
                {
                    "orderId": "77c33048-47d1-4672-8683-f0724e435c44",
                    "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "salesId": "6f88fdaa-6ef9-4019-b4fb-2be4e4bf134a",
                    "customName": "测试世峰经销商",
                    "orderCode": "XD20170109001",
                    "createDate": "2017-01-09 15:01:56",
                    "totalFee": 1,
                    "actuallyFee": 0,
                    "confirmFee": 0,
                    "transferState": "PREPARE",
                    "orderState": "1",
                    "payState": "N",
                    "description": "",
                    "contactName": "峰哥",
                    "cellphone": "13447580843",
                    "address": "省市广东省广州市越秀区",
                    "qrCodePath": "/qrCode/77c33048-47d1-4672-8683-f0724e435c44.png",
                    "count": 0
                },
                {
                    "orderId": "6aef0f72-c661-4de0-a620-a7964bb9d84a",
                    "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "salesId": "6f88fdaa-6ef9-4019-b4fb-2be4e4bf134a",
                    "customName": "测试世峰经销商",
                    "orderCode": "XD20170109001",
                    "createDate": "2017-01-09 14:59:28",
                    "totalFee": 1000,
                    "actuallyFee": 0,
                    "confirmFee": 0,
                    "transferState": "PREPARE",
                    "orderState": "1",
                    "payState": "N",
                    "description": "",
                    "contactName": "峰哥",
                    "cellphone": "13447580843",
                    "address": "省市广东省广州市越秀区",
                    "qrCodePath": "/qrCode/6aef0f72-c661-4de0-a620-a7964bb9d84a.png",
                    "count": 0
                },
                {
                    "orderId": "11e734cd-0c75-4608-ba50-1356385fde30",
                    "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "salesId": "6f88fdaa-6ef9-4019-b4fb-2be4e4bf134a",
                    "customName": "测试世峰经销商",
                    "orderCode": "XD20170109001",
                    "createDate": "2017-01-09 14:57:54",
                    "totalFee": 10000,
                    "actuallyFee": 0,
                    "confirmFee": 0,
                    "transferState": "PREPARE",
                    "orderState": "1",
                    "payState": "N",
                    "description": "",
                    "contactName": "峰哥",
                    "cellphone": "13447580843",
                    "address": "省市广东省广州市越秀区",
                    "qrCodePath": "/qrCode/11e734cd-0c75-4608-ba50-1356385fde30.png",
                    "count": 0
                },
                {
                    "orderId": "468fc6a5-d749-4f4c-9199-f89aed079b62",
                    "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "salesId": "6f88fdaa-6ef9-4019-b4fb-2be4e4bf134a",
                    "customName": "测试世峰经销商",
                    "orderCode": "XD20170107001",
                    "createDate": "2017-01-07 11:56:10",
                    "totalFee": 1000,
                    "actuallyFee": 0,
                    "confirmFee": 0,
                    "transferState": "PREPARE",
                    "orderState": "1",
                    "payState": "N",
                    "description": "",
                    "contactName": "峰哥",
                    "cellphone": "13447580843",
                    "address": "广东省广州市越秀区",
                    "qrCodePath": "/qrCode/468fc6a5-d749-4f4c-9199-f89aed079b62.png",
                    "count": 0
                },
                {
                    "orderId": "47617fbc-0302-4de1-8cd9-f17401bdcac3",
                    "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "salesId": "6f88fdaa-6ef9-4019-b4fb-2be4e4bf134a",
                    "customName": "测试世峰经销商",
                    "orderCode": "XD20170106001",
                    "createDate": "2017-01-06 10:05:00",
                    "totalFee": 0,
                    "actuallyFee": 0,
                    "confirmFee": 0,
                    "transferState": "PREPARE",
                    "orderState": "1",
                    "payState": "N",
                    "description": "",
                    "contactName": "峰哥",
                    "cellphone": "13447580843",
                    "address": "广东省广州市越秀区",
                    "qrCodePath": "/qrCode/47617fbc-0302-4de1-8cd9-f17401bdcac3.png",
                    "count": 0
                },
                {
                    "orderId": "f7e8cb32-c557-4f9a-8456-69bea6054b0a",
                    "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "salesId": "6f88fdaa-6ef9-4019-b4fb-2be4e4bf134a",
                    "customName": "测试世峰经销商",
                    "orderCode": "XD20170105001",
                    "createDate": "2017-01-05 18:29:42",
                    "totalFee": 0,
                    "actuallyFee": 0,
                    "confirmFee": 0,
                    "transferState": "PREPARE",
                    "orderState": "1",
                    "payState": "N",
                    "description": "",
                    "contactName": "峰哥",
                    "cellphone": "13447580843",
                    "address": "广东省广州市越秀区",
                    "qrCodePath": "/qrCode/f7e8cb32-c557-4f9a-8456-69bea6054b0a.png",
                    "count": 0
                },
                {
                    "orderId": "7dd54d6a-1f7b-4af9-9b78-191aeb495a67",
                    "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "salesId": "6f88fdaa-6ef9-4019-b4fb-2be4e4bf134a",
                    "customName": "测试世峰经销商",
                    "orderCode": "XD20170105001",
                    "createDate": "2017-01-05 16:12:41",
                    "totalFee": 500,
                    "actuallyFee": 0,
                    "confirmFee": 0,
                    "transferState": "PREPARE",
                    "orderState": "1",
                    "payState": "N",
                    "description": "",
                    "contactName": "峰哥",
                    "cellphone": "13447580843",
                    "address": "省市广东省广州市越秀区",
                    "qrCodePath": "/qrCode/7dd54d6a-1f7b-4af9-9b78-191aeb495a67.png",
                    "count": 0
                },
                {
                    "orderId": "c4bf3386-c9a8-4a5b-a66d-8702957acb58",
                    "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "salesId": "34ff3ece-23a8-4934-8527-84034d9574cd",
                    "customName": "广州小明生物科技有限公司222",
                    "orderCode": "XD20170105001",
                    "createDate": "2017-01-05 14:30:58",
                    "totalFee": 362,
                    "actuallyFee": 0,
                    "confirmFee": 0,
                    "transferState": "PREPARE",
                    "orderState": "1",
                    "payState": "N",
                    "description": "测试",
                    "contactName": "小明明",
                    "cellphone": "13628283739",
                    "address": "你家",
                    "qrCodePath": "/qrCode/c4bf3386-c9a8-4a5b-a66d-8702957acb58.png",
                    "count": 0
                },
                {
                    "orderId": "b483cfe0-db59-41be-93db-b9c0d69e82aa",
                    "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "salesId": "34ff3ece-23a8-4934-8527-84034d9574cd",
                    "customName": "广州小明生物科技有限公司",
                    "orderCode": "XD20170104002",
                    "createDate": "2017-01-04 17:24:08",
                    "totalFee": 100,
                    "actuallyFee": 100,
                    "confirmFee": 0,
                    "transferState": "OUT",
                    "orderState": "6",
                    "payState": "N",
                    "contactName": "小明",
                    "cellphone": "13645678910",
                    "address": "广州广州还是在广州",
                    "qrCodePath": "/qrCode/b483cfe0-db59-41be-93db-b9c0d69e82aa.png",
                    "count": 0
                }
            ],
            "pageCount":7
        },
        joininListRes: {
            "result": "OK",
            "msg": "获取成功!",
            "joininList": [
                {
                    "id": 103,
                    "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "salesId": "34ff3ece-23a8-4934-8527-84034d9574cd",
                    "userLevelId": "545d0c6d-7670-4415-a265-e32904adcc91",
                    "areaId": "f3f81597-69fe-4afa-a323-e64b581b25b6",
                    "contactName": "小明",
                    "contactPhone": "13645678902",
                    "contactEmail": "123456@qq.com",
                    "salesVO": {
                        "companyId": "34ff3ece-23a8-4934-8527-84034d9574cd",
                        "companyName": "广州小明生物科技有限公司",
                        "userType": "SALES",
                        "companyCode": "",
                        "contactName": "小明j",
                        "contactPhone": "13645678910",
                        "contactPost": "跑腿",
                        "contactQQ": "64466666qq",
                        "contactEmail": "123456@qq.com",
                        "province": "广东",
                        "city": "广州",
                        "address": "cachtonino",
                        "zipCode": "524311",
                        "phone": "13466666666",
                        "tax": "13488888888",
                        "mainPage": "64466666qq.html",
                        "remark": "小明的企业介绍，巴拉巴拉巴拉巴拉巴拉巴拉巴",
                        "taxesRemark": "66-66-66-66-66-66",
                        "invoiceTitle": "广州小明生物科技发票头"
                    },
                    "joinInLevelVO": {
                        "levelId": "545d0c6d-7670-4415-a265-e32904adcc91",
                        "levelName": "二级客户",
                        "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                        "discount": 90
                    }
                },
                {
                    "id": 113,
                    "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "salesId": "4bde2d94-cc8f-4168-b62c-80f7d6a23972",
                    "userLevelId": "37db65b0-6778-4cf5-8baf-780ca0c71816",
                    "contactName": "大名",
                    "contactPhone": "1343322222",
                    "contactEmail": "112@2",
                    "salesVO": {
                        "companyId": "4bde2d94-cc8f-4168-b62c-80f7d6a23972",
                        "companyName": "大名",
                        "userType": "SALES",
                        "contactName": "大民",
                        "contactPhone": "1342222222",
                        "contactEmail": "11@1",
                        "province": "北京",
                        "city": "东城区",
                        "address": "东东"
                    },
                    "joinInLevelVO": {
                        "levelId": "37db65b0-6778-4cf5-8baf-780ca0c71816",
                        "levelName": "一级客户",
                        "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                        "discount": 80
                    }
                },
                {
                    "id": 98,
                    "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "salesId": "6021c0e8-29df-4e79-a0e6-017a7e5edaa7",
                    "userLevelId": "",
                    "areaId": "e1e5e5a8-3d59-4ace-a011-2d8595b6b2e2",
                    "contactName": "王艺颖",
                    "contactPhone": "15850961217",
                    "contactEmail": "",
                    "salesVO": {
                        "companyId": "6021c0e8-29df-4e79-a0e6-017a7e5edaa7",
                        "companyName": "宿迁温氏畜牧有限公司归仁猪场",
                        "userType": "SALES",
                        "contactName": "王艺颖",
                        "contactPhone": "15850961217",
                        "contactEmail": "",
                        "province": "江苏",
                        "city": "宿迁",
                        "address": "泗洪归仁镇七里村温氏归仁猪场"
                    }
                },
                {
                    "id": 100,
                    "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "salesId": "6872512d-adba-4bed-a355-da17e8b23d79",
                    "userLevelId": "37db65b0-6778-4cf5-8baf-780ca0c71816",
                    "businessId": "a587b9c8-88b7-4a98-8511-97a9ef5ab636",
                    "areaId": "",
                    "contactName": "司徒云",
                    "contactPhone": "13929851180",
                    "contactEmail": "",
                    "salesVO": {
                        "companyId": "6872512d-adba-4bed-a355-da17e8b23d79",
                        "companyName": "肇庆市益信原种猪场有限公司",
                        "userType": "SALES",
                        "contactName": "司徒云",
                        "contactPhone": "13929851180",
                        "contactEmail": "",
                        "province": "广东",
                        "city": "肇庆",
                        "address": "封开县江口镇封州二路178号"
                    },
                    "joinInLevelVO": {
                        "levelId": "37db65b0-6778-4cf5-8baf-780ca0c71816",
                        "levelName": "一级客户",
                        "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                        "discount": 80
                    }
                },
                {
                    "id": 115,
                    "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "salesId": "6e923be3-c075-4bf0-8d03-ff8d48035aec",
                    "salesVO": {
                        "companyId": "6e923be3-c075-4bf0-8d03-ff8d48035aec",
                        "companyName": "1234567",
                        "userType": "SALES",
                        "companyCode": "",
                        "contactName": "12345",
                        "contactPhone": "",
                        "contactPost": "",
                        "contactQQ": "",
                        "contactEmail": "",
                        "province": "广东",
                        "city": "广州",
                        "address": "",
                        "zipCode": "",
                        "phone": "",
                        "tax": "",
                        "mainPage": "",
                        "remark": "",
                        "taxesRemark": "",
                        "invoiceTitle": ""
                    }
                },
                {
                    "id": 109,
                    "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "salesId": "6f88fdaa-6ef9-4019-b4fb-2be4e4bf134a",
                    "salesVO": {
                        "companyId": "6f88fdaa-6ef9-4019-b4fb-2be4e4bf134a",
                        "companyName": "测试世峰经销商",
                        "userType": "SALES",
                        "contactName": "峰哥",
                        "contactPhone": "13447580843",
                        "contactEmail": "756453857@qq.com",
                        "address": "广东省广州市越秀区"
                    }
                },
                {
                    "id": 97,
                    "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "salesId": "87304040-9224-4ae5-8083-334de3d88997",
                    "userLevelId": "",
                    "businessId": "d5a1eeed-4eb3-4c99-bf86-6e10255b8998",
                    "areaId": "",
                    "contactName": "修长军",
                    "contactPhone": "13951069472",
                    "contactEmail": "",
                    "salesVO": {
                        "companyId": "87304040-9224-4ae5-8083-334de3d88997",
                        "companyName": "宿迁温氏畜牧有限公司",
                        "userType": "SALES",
                        "contactName": "修长军",
                        "contactPhone": "13951069472",
                        "contactEmail": "",
                        "province": "江苏",
                        "city": "宿迁",
                        "address": "泗洪县青阳镇245省道新濉河大桥西边北侧"
                    }
                },
                {
                    "id": 102,
                    "supplyerId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "salesId": "9bde2bc7-79f0-4c82-998d-13d2be9dcb3b",
                    "contactName": "xxxx",
                    "contactPhone": "1342222222",
                    "contactEmail": "12@3",
                    "salesVO": {
                        "companyId": "9bde2bc7-79f0-4c82-998d-13d2be9dcb3b",
                        "companyName": "测试经销商9",
                        "userType": "SALES",
                        "companyCode": "",
                        "contactName": "999",
                        "contactPhone": "18231546112",
                        "contactPost": "",
                        "contactQQ": "",
                        "contactEmail": "",
                        "province": "辽宁",
                        "city": "沈阳",
                        "address": "",
                        "zipCode": "",
                        "phone": "",
                        "tax": "",
                        "mainPage": "",
                        "remark": "",
                        "taxesRemark": "",
                        "invoiceTitle": ""
                    }
                }
            ]
        },
        "goodsList": [
            {
                "goodId": "01831bfe-15f7-4be1-bf7d-da8f95ade525",
                "goodsName": "测试订单bug",
                "goodsCode": "20161215482",
                "mPrice": 100,
                "cPrice": 0,
                "goodsOrder": 0,
                "salePrice": 0,
                "saleNum": 0,
                "unitName": "盒",
                "inventoryVO": {
                    "goodId": "01831bfe-15f7-4be1-bf7d-da8f95ade525",
                    "storeId": "",
                    "goodsCode": "20161215482",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "goodsName": "测试订单bug",
                    "unit": "409feaae-152a-4902-894d-6f7c6db4c784",
                    "maxQuantity": 99,
                    "minQuantity": 0,
                    "quantity": 79
                }
            },
            {
                "goodId": "02722c12-5e2c-4bdb-9137-8c66f9a6e028",
                "goodsName": "1137测试",
                "goodsCode": "20161216511",
                "mPrice": 0,
                "cPrice": 0,
                "goodsOrder": 0,
                "salePrice": 0,
                "saleNum": 0,
                "unitName": "盒",
                "inventoryVO": {
                    "goodId": "02722c12-5e2c-4bdb-9137-8c66f9a6e028",
                    "storeId": "",
                    "goodsCode": "20161216511",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "goodsName": "1137测试",
                    "unit": "409feaae-152a-4902-894d-6f7c6db4c784",
                    "maxQuantity": 99,
                    "minQuantity": 0,
                    "quantity": 0
                },
                "coverUrl": "/uploadImg/faeb17a1-91ec-4ed4-9fa4-bcea56b6a5b6.jpg"
            },
            {
                "goodId": "0328ce88-104e-4904-8ed2-d3dd9282d16b",
                "goodsName": "1137测试",
                "goodsCode": "20161216500",
                "mPrice": 10,
                "cPrice": 0,
                "goodsOrder": 0,
                "salePrice": 0,
                "saleNum": 0,
                "unitName": "盒",
                "inventoryVO": {
                    "goodId": "0328ce88-104e-4904-8ed2-d3dd9282d16b",
                    "storeId": "",
                    "goodsCode": "20161216500",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "goodsName": "1137测试",
                    "unit": "409feaae-152a-4902-894d-6f7c6db4c784",
                    "maxQuantity": 99,
                    "minQuantity": 0,
                    "quantity": 0
                }
            },
            {
                "goodId": "050462b0-3b6a-46b7-87ad-843a5f585d6b",
                "goodsName": "惠特福",
                "goodsCode": "20161114014",
                "mPrice": 1000,
                "cPrice": 0,
                "goodsOrder": 0,
                "salePrice": 0,
                "saleNum": 0,
                "unitName": "袋",
                "inventoryVO": {
                    "goodId": "050462b0-3b6a-46b7-87ad-843a5f585d6b",
                    "storeId": "",
                    "goodsCode": "20161114014",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "goodsName": "惠特福",
                    "unit": "715d16e5-406c-4b0e-bebd-b352df8cba40",
                    "maxQuantity": 99,
                    "minQuantity": 0,
                    "quantity": 0
                }
            },
            {
                "goodId": "05661592-8630-401a-b1f7-a3bd9d21af2a",
                "goodsName": "1137测试",
                "goodsCode": "20161216502",
                "mPrice": 900,
                "cPrice": 0,
                "goodsOrder": 0,
                "salePrice": 0,
                "saleNum": 0,
                "unitName": "盒",
                "inventoryVO": {
                    "goodId": "05661592-8630-401a-b1f7-a3bd9d21af2a",
                    "storeId": "",
                    "goodsCode": "20161216502",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "goodsName": "1137测试",
                    "unit": "409feaae-152a-4902-894d-6f7c6db4c784",
                    "maxQuantity": 99,
                    "minQuantity": 0,
                    "quantity": 0
                }
            },
            {
                "goodId": "061cc12c-c1e1-425f-93e2-3ecc03ae5914",
                "goodsName": "1137测试ll111",
                "goodsCode": "20170119012",
                "mPrice": 80,
                "cPrice": 0,
                "goodsOrder": 0,
                "salePrice": 0,
                "saleNum": 0,
                "unitName": "盒",
                "inventoryVO": {
                    "goodId": "061cc12c-c1e1-425f-93e2-3ecc03ae5914",
                    "storeId": "8794554b-7d11-4a58-8df1-ada1265a3df2",
                    "goodsCode": "20170119012",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "goodsName": "1137测试ll111",
                    "unit": "409feaae-152a-4902-894d-6f7c6db4c784",
                    "maxQuantity": 99,
                    "minQuantity": 0,
                    "quantity": 0
                }
            },
            {
                "goodId": "09be20f7-8c24-4659-96d1-7baa66863df0",
                "goodsName": "1137测试ll111",
                "goodsCode": "20170119014",
                "mPrice": 0,
                "cPrice": 0,
                "goodsOrder": 0,
                "salePrice": 0,
                "saleNum": 0,
                "unitName": "盒",
                "inventoryVO": {
                    "goodId": "09be20f7-8c24-4659-96d1-7baa66863df0",
                    "storeId": "8794554b-7d11-4a58-8df1-ada1265a3df2",
                    "goodsCode": "20170119014",
                    "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                    "goodsName": "1137测试ll111",
                    "unit": "409feaae-152a-4902-894d-6f7c6db4c784",
                    "maxQuantity": 99,
                    "minQuantity": 0,
                    "quantity": 0
                }
            },
            {
                "goodId": "0f4eb4ae-ce29-4754-9afd-a12b91402b6a",
                "goodsName": "测试小明1",
                "goodsCode": "20161230004",
                "mPrice": 0,
                "cPrice": 0,
                "goodsOrder": 0,
                "salePrice": 0,
                "saleNum": 0,
                "unitName": "盒",
                "coverUrl": "/uploadImg/c4fdcd57-874d-4982-82e4-3a9d1ed94835.png"
            }
        ],
        logDetailData: {
            "result": "OK",
            "msg": "",
            "resultDetail": {
                "id": 21,
                "userId": "38bba1bb-b90c-4eb0-9f40-9344b698985d",
                "userName": "杨飞",
                "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                "dailyTitle": "清晨下阳光的清纯",
                "dailyAddress": "广州天河区天阳路桥底2号",
                "dailyContent": "喜欢清晨下阳光的清纯，透着一种自然的质朴，没有炎热的造作，没有夕阳的温情，折射出一种透明的力量，趁着人们还没醒来，悄悄去迎接初生的太阳，\n　　上中学时，学校离家五里多路，没有宿舍，来回都要骑车，小时候，就羡慕骑自行车上学的同学，觉的那是一种长大的标记，上中学的每天早上，天还蒙蒙亮，就要起床，闹钟，鸡鸣，狗吠，木门的吱吱声，伙伴们的嘻戏声都会在同一时间响起，热闹的景象给乡村的早上带来青春的生机……\n　　那时候最大的愿望就是没有作业，能睡个自然醒的懒觉，真正放假了，却往往起的更早，没有学校的约束，整天在田野中游荡，日子像流水，青春的岁月现在只能回忆，那种天真，质朴，都以远去，留下的只能是回忆……\n　　岁月流逝了，不会返还，时光老人还是按照他的节奏，滴滴答答的走着，时光的脚步不会因为心情的好坏而停滞，人们或喜或悲，都希望喜悦的时间长些，悲的时间短些，每个阶段的喜与悲，快乐和惆怅，都在感受着不同阶段的生命的意义，\n　　每一天的太阳都会升起，每一夜的月亮都会挂在夜空，站的角度不同，看的风景就会不同，今夜抬头是皓月当空，异地却是残月挂钩，时间还在不停的走着，一天，两天悄悄堆积成了一月，一月两月",
                "dailyCreateTime": "2017-01-21 16:11:03"
            }
        },
        shopList:{
            "result": "OK",
            "msg": "",
            "pageCount": 5,
            "recordCount": 50,
            "pageSize": 10,
            "currentPage": 1,
            "resultList": [
                {
                    "goodId": "02722c12-5e2c-4bdb-9137-8c66f9a6e028",
                    "goodsName": "1137测试",
                    "mPrice": 0,
                    "cPrice": 0,
                    "goodsOrder": 0,
                    "goodsInfo": "123\r\n311\r\nshango\r\n上平行线\r\n\r\n\r\n\r\n商品信息",
                    "userLevelId": "545d0c6d-7670-4415-a265-e32904adcc91",
                    "salePrice": 0,
                    "saleNum": 0,
                    "picUrlList": [],
                    "inventoryVO": {
                        "goodId": "02722c12-5e2c-4bdb-9137-8c66f9a6e028",
                        "storeId": "",
                        "goodsCode": "20161216511",
                        "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                        "goodsName": "1137测试",
                        "unit": "409feaae-152a-4902-894d-6f7c6db4c784",
                        "maxQuantity": 99,
                        "minQuantity": 0,
                        "quantity": 0
                    },
                    "coverUrl": "/uploadImg/faeb17a1-91ec-4ed4-9fa4-bcea56b6a5b6.jpg"
                },
                {
                    "goodId": "061cc12c-c1e1-425f-93e2-3ecc03ae5914",
                    "goodsName": "1137测试ll111",
                    "mPrice": 0,
                    "cPrice": 0,
                    "goodsOrder": 0,
                    "goodsInfo": "",
                    "userLevelId": "545d0c6d-7670-4415-a265-e32904adcc91",
                    "salePrice": 0,
                    "saleNum": 0,
                    "picUrlList": [],
                    "inventoryVO": {
                        "goodId": "061cc12c-c1e1-425f-93e2-3ecc03ae5914",
                        "storeId": "71d93e6c-53bb-4005-8ebf-7eaecf898269",
                        "goodsCode": "20170119012",
                        "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                        "goodsName": "1137测试ll111",
                        "unit": "409feaae-152a-4902-894d-6f7c6db4c784",
                        "maxQuantity": 99,
                        "minQuantity": 0,
                        "quantity": 0
                    }
                },
                {
                    "goodId": "872e997d-36af-4807-8897-38c7bbbfe6f6",
                    "goodsName": "qq一百",
                    "mPrice": 0,
                    "cPrice": 0,
                    "goodsOrder": 0,
                    "goodsInfo": "刚刚刚\r\n\r\njaijaiajai",
                    "userLevelId": "545d0c6d-7670-4415-a265-e32904adcc91",
                    "salePrice": 0,
                    "saleNum": 0,
                    "picUrlList": [
                        "/uploadImg/32cc530f-d16e-4be6-81c3-c49dd49da3b4.jpg",
                        "/uploadImg/2ab74085-32b9-496e-95c3-c2982d2c38b0.jpg",
                        "/uploadImg/6048ba77-e61d-4d82-b8b0-4c9317ef770c.jpg",
                        "/uploadImg/a5522b19-f44d-4df7-9596-5bc44388b36b.jpg",
                        "/uploadImg/436547fc-8447-4af0-a4ff-d8867edb1acb.jpg",
                        "/uploadImg/7b109921-3247-4191-9e62-de2398d162ab.jpg"
                    ],
                    "inventoryVO": {
                        "goodId": "872e997d-36af-4807-8897-38c7bbbfe6f6",
                        "storeId": "",
                        "goodsCode": "20161219574",
                        "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                        "goodsName": "qq一百",
                        "unit": "409feaae-152a-4902-894d-6f7c6db4c784",
                        "maxQuantity": 99,
                        "minQuantity": 0,
                        "quantity": 0
                    },
                    "coverUrl": "/uploadImg/ed8771e9-0301-473c-9875-d602d5725732.jpg"
                },
                {
                    "goodId": "2d47bcd0-b5fe-411c-8ac6-264722a81318",
                    "goodsName": "shihui",
                    "mPrice": 1,
                    "cPrice": 0,
                    "goodsOrder": 0,
                    "goodsInfo": "商品名称：A.艾酷EX3极光\r\n商品编号：1274918\r\n品牌： A.艾酷\r\n上架时间：2014-11-21 19:22:17\r\n商品毛重：240.00g\r\n商品产地：中国大陆\r\n接口：USB接口\r\n工作方式：光电\r\n类别：有线鼠标",
                    "userLevelId": "545d0c6d-7670-4415-a265-e32904adcc91",
                    "salePrice": 1,
                    "saleNum": 0,
                    "picUrlList": [],
                    "inventoryVO": {
                        "goodId": "2d47bcd0-b5fe-411c-8ac6-264722a81318",
                        "storeId": "",
                        "goodsCode": "20161216011",
                        "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                        "goodsName": "shihui",
                        "unit": "409feaae-152a-4902-894d-6f7c6db4c784",
                        "maxQuantity": 99,
                        "minQuantity": 0,
                        "quantity": 0
                    },
                    "coverUrl": "/uploadImg/47c04011-6284-4e71-a6da-64a04feea51f.jpg"
                },
                {
                    "goodId": "3a1d5b8d-7cc7-4985-a8c7-5e2d85047438",
                    "goodsName": "大牛",
                    "mPrice": 0,
                    "cPrice": 0,
                    "goodsOrder": 0,
                    "goodsInfo": "qwe",
                    "userLevelId": "545d0c6d-7670-4415-a265-e32904adcc91",
                    "salePrice": 0,
                    "saleNum": 0,
                    "picUrlList": [],
                    "inventoryVO": {
                        "goodId": "3a1d5b8d-7cc7-4985-a8c7-5e2d85047438",
                        "storeId": "",
                        "goodsCode": "20161220014",
                        "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                        "goodsName": "大牛",
                        "unit": "409feaae-152a-4902-894d-6f7c6db4c784",
                        "maxQuantity": 99,
                        "minQuantity": 0,
                        "quantity": 0
                    },
                    "coverUrl": "/uploadImg/980c423d-1a14-4882-8012-6bc6ae259b28.png"
                },
                {
                    "goodId": "11ff39c3-3888-4d14-b253-c81b5fc5d50f",
                    "goodsName": "大牛AA",
                    "mPrice": 100,
                    "cPrice": 0,
                    "goodsOrder": 0,
                    "goodsInfo": "",
                    "userLevelId": "545d0c6d-7670-4415-a265-e32904adcc91",
                    "salePrice": 90,
                    "saleNum": 0,
                    "picUrlList": [],
                    "inventoryVO": {
                        "goodId": "11ff39c3-3888-4d14-b253-c81b5fc5d50f",
                        "storeId": "71d93e6c-53bb-4005-8ebf-7eaecf898269",
                        "goodsCode": "20170113053",
                        "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                        "goodsName": "大牛AA",
                        "unit": "409feaae-152a-4902-894d-6f7c6db4c784",
                        "maxQuantity": 99,
                        "minQuantity": 0,
                        "quantity": 1500
                    }
                },
                {
                    "goodId": "39087405-9987-4b48-a3cf-fd6a7654a36b",
                    "goodsName": "奶粉",
                    "mPrice": 230,
                    "cPrice": 0,
                    "goodsOrder": 0,
                    "goodsInfo": "告诉对方",
                    "userLevelId": "b4507cfc-a0a0-4269-bedd-47c0fb85407f",
                    "salePrice": 230,
                    "saleNum": 0,
                    "picUrlList": [],
                    "inventoryVO": {
                        "goodId": "39087405-9987-4b48-a3cf-fd6a7654a36b",
                        "storeId": "",
                        "goodsCode": "20160815001",
                        "companyId": "598615fa-c731-44fd-a24e-4da777ff0025",
                        "goodsName": "奶粉",
                        "unit": "246e057c-81a4-40dd-9d20-5e25b3f02a6d",
                        "maxQuantity": 99,
                        "minQuantity": 0,
                        "quantity": 226
                    }
                },
                {
                    "goodId": "2751569d-8fb2-4611-a6f8-d19849b40f1d",
                    "goodsName": "小牛aa",
                    "mPrice": 1000,
                    "cPrice": 0,
                    "goodsOrder": 0,
                    "goodsInfo": "",
                    "userLevelId": "545d0c6d-7670-4415-a265-e32904adcc91",
                    "salePrice": 1000,
                    "saleNum": 0,
                    "picUrlList": [],
                    "inventoryVO": {
                        "goodId": "2751569d-8fb2-4611-a6f8-d19849b40f1d",
                        "storeId": "",
                        "goodsCode": "20170106016",
                        "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                        "goodsName": "小牛aa",
                        "unit": "b3c58a3b-19ce-4502-906e-b5fbaebacea9",
                        "maxQuantity": 99,
                        "minQuantity": 0,
                        "quantity": 0
                    }
                },
                {
                    "goodId": "6a76ec8d-f868-43c5-b1a5-d6b274fc69ca",
                    "goodsName": "杆益佳",
                    "mPrice": 0,
                    "cPrice": 0,
                    "goodsOrder": 0,
                    "goodsInfo": "",
                    "userLevelId": "545d0c6d-7670-4415-a265-e32904adcc91",
                    "salePrice": 0,
                    "saleNum": 0,
                    "picUrlList": [],
                    "inventoryVO": {
                        "goodId": "6a76ec8d-f868-43c5-b1a5-d6b274fc69ca",
                        "storeId": "",
                        "goodsCode": "20161114013",
                        "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                        "goodsName": "杆益佳",
                        "unit": "715d16e5-406c-4b0e-bebd-b352df8cba40",
                        "maxQuantity": 99,
                        "minQuantity": 0,
                        "quantity": 0
                    }
                },
                {
                    "goodId": "19d2ca45-6551-4eda-996a-b2160d27fe62",
                    "goodsName": "测试",
                    "mPrice": 0,
                    "cPrice": 0,
                    "goodsOrder": 0,
                    "goodsInfo": "321",
                    "userLevelId": "545d0c6d-7670-4415-a265-e32904adcc91",
                    "salePrice": 0,
                    "saleNum": 0,
                    "picUrlList": [
                        "/uploadImg/7f3d9913-8e10-4520-b9d8-93af62089379.jpg",
                        "/uploadImg/3f1c8dae-bc10-4503-9488-9b42fe9d2576.png",
                        "/uploadImg/b8b44ed8-b9d0-4cae-a53d-aa2fd34362ec.png"
                    ],
                    "inventoryVO": {
                        "goodId": "19d2ca45-6551-4eda-996a-b2160d27fe62",
                        "storeId": "",
                        "goodsCode": "20161227711",
                        "companyId": "504e0fdd-16e7-4446-abbb-295d54945af0",
                        "goodsName": "测试",
                        "unit": "409feaae-152a-4902-894d-6f7c6db4c784",
                        "maxQuantity": 99,
                        "minQuantity": 0,
                        "quantity": 0
                    },
                    "coverUrl": "/uploadImg/5483658f-0415-42ff-a325-b58b951c949e.jpg"
                }
            ]
        },
  }
})
