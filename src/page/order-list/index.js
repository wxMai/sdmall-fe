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
            name: "my-order"
        });
    },
    onLoad: function () {
        this.loadList()
    },
    bindEvent: function () {
    },
    loadList: function () {
        var _this = this, $orderHtml = $(".order-list");
        $orderHtml.html('<div class="loading"></div>');
        _order.getOrderList(this.data.listParam, function (res) {
            res.hasOrder = !!res.list.length;
            $orderHtml.html(_mm.renderHtml(templateIndex, res));
            _this.loadPagination(res.pageNum, res.pages);
        }, function (t) {
            console.log('请求失败：', t);
            $orderHtml.html('<p class="err-tip">加载订单失败，请刷新后重试</p>')
        });
    },
    loadPagination: function (pageNum, pages) {
        var _this = this;
        if (this.pagination) {
            this.pagination.refresh({
                pageNum: pageNum,
                pages: pages
            });

            return;
        }
        this.pagination = new Pagination();
        this.pagination.init({
            element: $(".pagination"),
            pageNum: pageNum,
            pages: pages,
            onSelectPage: function (t) {
                _this.data.listParam.pageNum = t;
                _this.loadList();
            }
        });
    }

};
$(function () {
    page.init();
});