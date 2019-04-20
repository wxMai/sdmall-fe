/*
* @Author: Rosen
* @Date:   2017-05-27 18:26:52
* @Last Modified by:   Rosen
* @Last Modified time: 2017-05-29 16:54:03
*/

'use strict';

var _mm = require('util/mm.js');

var _product = {

    // 创建订单
    create: function (data, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/create.do'),
            data: data,
            success: resolve,
            error: reject
        });
    },

    // 获取订单列表
    getOrderList: function (listParam, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/list.do'),
            data: listParam,
            success: resolve,
            error: reject
        });
    },

    cancel: function (orderNumber, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/cancel.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    },

    getOrderDetail: function (orderNumber, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/detail.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    },

    getOrderProduct: function (resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/get_order_cart_product.do'),
            data: {},
            success: resolve,
            error: reject
        });
    },

    getPayInfo: function (orderNumber, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/pay.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    },

    getPaymentStatus: function (orderNumber, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/query_order_pay_status.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    },

    submit: function (orderNumber, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/order/submit.do'),
            data: {
                orderNo: orderNumber
            },
            success: resolve,
            error: reject
        });
    },

};
module.exports = _product;