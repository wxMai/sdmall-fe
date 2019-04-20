/*
* @Author: Rosen
* @Date:   2017-05-24 11:03:57
* @Last Modified by:   Rosen
* @Last Modified time: 2017-05-24 17:21:02
*/

'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var navSide = require('page/common/nav-side/index.js');
var _mm = require('util/mm.js');
var _order = require('service/order-service.js');
var templateIndex = require('./index.string');

// page 逻辑部分
var page = {
    data: {
        orderNumber: _mm.getUrlParam('orderNumber'),
    },
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        this.data.orderNumber || (window.location.href = "./index.html");
        navSide.init({
            $container: $(".left-con"),
            name: "my-order"
        });
        this.loadDetail();
    },
    bindEvent: function () {
        var _this = this;
        $(document).on("click", ".order-cancel", function () {
            confirm("确认要取消该订单吗？") && _order.cancel(_this.data.orderNumber, function (e) {
                _mm.successTips("该订单已取消！");
                _this.loadDetail();
            }, function (t) {
                _mm.errorTips(t)
            })
        })
    },
    loadDetail: function () {
        var _this = "";
        _order.getOrderDetail(this.data.orderNumber, function (res) {
            res.needPay = 10 === res.status;
            res.isCancelable = 10 === res.status;
            _this = _mm.renderHtml(templateIndex, res);
            $(".right-con").html(_this);
        }, function (t) {
            $(".right-con").html('<p class="err-tip">' + t + "</div>")
        })
    }

};
$(function () {
    page.init();
});