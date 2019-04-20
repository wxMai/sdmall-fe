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
    data : {
        listParam : {
            orderBy         : _mm.getUrlParam('orderBy')    || 'default',
            pageNum         : _mm.getUrlParam('pageNum')    || 1,
            pageSize        : _mm.getUrlParam('pageSize')   || 2
        }
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
        var _this = this, $html = $(".message-list");
        _user.userMessageList(_this.data.listParam,function (res) {
            res.hasOrder = !!res.list.length;
            $html.html(_mm.renderHtml(templateIndex, res));
            _this.loadPagination(res);
        }, function (t) {
            $html.html('<p class="err-tip">加载留言失败，请刷新后重试</p>')
        });
    },
    loadPagination: function (pageInfo) {
        var _this = this;
        this.pagination ? '' : (this.pagination = new Pagination());
        this.pagination.render($.extend({}, pageInfo, {
            container : $('.pagination'),
            onSelectPage : function(pageNum){
                _this.data.listParam.pageNum = pageNum;
                _this.loadList();
            }
        }));
    }

};
$(function () {
    page.init();
});