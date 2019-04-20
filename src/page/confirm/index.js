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
var _shipping = require('service/shipping-service.js');
var templateAddress = require('./address.string');
var templateOrderProduct = require('./orderProduct.string');

var page = {
    data: {},
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        this.loadAddressList();
        this.loadOrderProduct();
    },
    bindEvent: function () {
        var _this = this;
        $(document).on("click", ".order-submit", function () {
            var e = _this.data.selectedAddressId;
            e ? _order.create({
                shippingId: e
            }, function (t) {
                window.location.href = "./payment.html?orderNumber=" + t.orderNo
            }, function (t) {
                _mm.errorTips(t);
            }) : _mm.errorTips("请先完善收货地址再提交订单");
        })
    },
    loadAddressList: function () {
        var _this = this;
        _shipping.getAddressList({
            pageSize : 1
        }, function (e) {
            _this.addressListAdapter(e);
            var r = _mm.renderHtml(templateAddress, e);
            $(".address-list").html(r)
        }, function (t) {
            $(".address-list").html('<p class="err-tip">地址加载失败，请刷新后重试。</div>')
        })
    },
    addressListAdapter: function (res) {
        console.log(res);
        this.data.selectedAddressId = null;
        if(res.list[0]){
            this.data.selectedAddressId = res.list[0].id;
        }
    },
    loadOrderProduct: function () {
        var t = "";
        _order.getOrderProduct(function (e) {
            t = _mm.renderHtml(templateOrderProduct, e);
            $(".order-product").html(t);
        }, function (t) {
            $(".order-product").html('<p class="err-tip">订单信息加载失败，请刷新后重试。</div>')
        })
    }
};
$(function () {
    page.init();
})