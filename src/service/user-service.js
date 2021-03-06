/*
* @Author: Rosen
* @Date:   2017-05-17 17:04:32
* @Last Modified by:   Rosen
* @Last Modified time: 2017-05-24 17:11:19
*/

'use strict';

var _mm = require('util/mm.js');

var _user = {
    // 用户登录
    login : function(userInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/login.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 检查用户名
    checkUsername : function(username, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/check_valid.do'),
            data    : {
                type    : 'username',
                str     : username
            },
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 用户注册
    register : function(userInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/register.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 检查登录状态
    checkLogin : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/get_user_info.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 获取用户密码提示问题
    getQuestion : function(username, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/forget_get_question.do'),
            data    : {
                username : username
            },
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 检查密码提示问题答案
    checkAnswer : function(userInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/forget_check_answer.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 重置密码
    resetPassword : function(userInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/forget_reset_password.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 获取用户信息
    getUserInfo : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/get_information.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },

    // 获取用户信息
    getUserInfoAndShipping : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/get_infoAndShipping.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },

    // 更新个人信息
    updateUserInfo : function(userInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/update_information.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },

    // 更新个人信息
    updateUserInfoAndShipping : function(userInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/update_infoAndShipping.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },

    // 登录状态下更新密码
    updatePassword : function(userInfo, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/reset_password.do'),
            data    : userInfo,
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },
    // 登出
    logout : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/logout.do'),
            method  : 'POST',
            success : resolve,
            error   : reject
        });
    },

    // 用户留言列表
    userMessageList : function(data, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/messageList.do'),
            method  : 'GET',
            data    : data,
            success : resolve,
            error   : reject
        });
    },

    // 用户留言详情
    userMessageDetail : function(messageId, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/messageDetail.do'),
            method  : 'GET',
            data    : {
                'messageId' : messageId
            },
            success : resolve,
            error   : reject
        });
    },

    // 添加留言
    userMessageAdd : function(data, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/messageAdd.do'),
            method  : 'POST',
            data    : data,
            success : resolve,
            error   : reject
        });
    },

    // 留言回复
    userMessageResponse : function(data, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/messageResponse.do'),
            method  : 'POST',
            data    : data,
            success : resolve,
            error   : reject
        });
    },

    // 所有留言列表
    allMessageList : function(data, resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/allMessageList.do'),
            method  : 'GET',
            data    : data,
            success : resolve,
            error   : reject
        });
    },

};
module.exports = _user;