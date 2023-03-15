/**
 * @file 虚拟坐席
 * @author malingna
 */
define(function (require, exports, module) {
    'use strict'

    return {
        isBvue: true,
        template: require('tpl!./Seat.html'),
        props: {
            isVip: {
                type: Boolean,
                value: false
            },
            isMe: {
                type: Boolean,
                value: false
            },
            ownerImg: {
                type: String,
                value: ''
            },
            themeColor: {
                type: String,
                default: ''
            }
        },
        data: function () {
            return {
               
            }
        },
    }
})
