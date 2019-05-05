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
var Pagination = require('util/pagination/index.js');
var templateIndex = require('./index.string');

// page 逻辑部分
var page = {
    data: {
        messageId: _mm.getUrlParam('message_id') || false,
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
        this.loadList()
    },
    bindEvent: function () {
    },
    loadList: function () {
        var _this = this, $html = $(".message-info");
        _user.userMessageDetail(_this.data.messageId, function (res) {
            $html.html(_mm.renderHtml(templateIndex, res));
        }, function (t) {
            $html.html('<p class="err-tip">加载留言失败，请刷新后重试</p>')
        });
    },

};
$(function () {
    page.init();
});