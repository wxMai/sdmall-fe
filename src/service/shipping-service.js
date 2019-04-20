/*
* 收货地址接口
*/

'use strict';

var _mm = require('util/mm.js');

var _product = {

    // 获取用户收货地址
    getUserAddress: function (resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/user.do'),
            data: {},
            success: resolve,
            error: reject
        });
    },

    // getAddressList
    getAddressList: function (data, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/shipping/list.do'),
            data: data,
            success: resolve,
            error: reject
        });
    },

};
module.exports = _product;