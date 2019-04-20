/*
* @Author: Rosen
* @Date:   2017-05-30 16:51:25
* @Last Modified by:   Rosen
* @Last Modified time: 2017-06-02 21:09:14
*/

'use strict';
require('./index.css');
require('page/common/header/index.js');
var nav = require('page/common/nav/index.js');
var _mm = require('util/mm.js');
var _order = require('service/order-service.js');
var templateIndex = require('./index.string');

var page = {
    data: {
        orderNumber: _mm.getUrlParam("orderNumber")
    },
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    bindEvent: function () {
        var _this = this;
        $(document).on("click", ".pay-submit", function () {
            if(!_this.data.orderNumber){
                _mm.errorTips('订单号不能为空');
                return ;
            }
            _order.submit(_this.data.orderNumber,() => {
                (window.location.href = "./result.html?type=payment&orderNumber=" + _this.data.orderNumber)
            },(error) => {
                _mm.errorTips(error);
            });
        })
    },
    onLoad: function () {
        var t = this;
        var e = "";
        $(".pay-wrap").html('<div class="loading"></div>');
        _order.getPayInfo(this.data.orderNumber, function (r) {
            r.orderNumber = this.data.orderNumber;
            e = _mm.renderHtml(templateIndex, r);
            $(".pay-wrap").html(e);
            // t.listenOrderStatus();
        }, function (t) {
            $(".pay-wrap").html(t)
        })
    },
    listenOrderStatus: function () {
        var t = this;
        this.paymentStatusTimer = setInterval(function () {
            i.getPaymentStatus(t.data.orderNumber, function (e) {
                1 == e && (window.location.href = "./result.html?type=payment&orderNumber=" + t.data.orderNumber)
            })
        }, 5e3)
    }
};
$(function () {
    page.init();
})