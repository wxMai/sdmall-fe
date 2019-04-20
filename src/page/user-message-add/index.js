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
var _user = require('service/user-service.js');

// page 逻辑部分
var page = {
    data : {

    },
    init: function () {
        this.onLoad();
        this.bindEvent();
        navSide.init({
            $container: $(".left-con"),
            name: "user-message"
        });
    },
    onLoad: function () {
        $(document).on("click", "#submit-message", function () {
            var messageData = {
                title : $.trim($('#title').val()),
                content : $.trim($('#content').val()),
            };
            _user.userMessageAdd(messageData, (res, msg) => {
                _mm.successTips(msg);
                window.location.href = './user-message.html';
            }, (error) => {
                _mm.errorTips(error);
            });
        })
    },
    bindEvent: function () {
    },

};
$(function () {
    page.init();
});