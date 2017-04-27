/**
 * 重置密码表单
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */

Ext.define('kalix.adminteacher.teacher.view.UserKeyWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.adminteacher.teacher.controller.UserKeyWindowController'
    ],
    alias: 'widget.teacherUserWindow',
    controller: {
        type: 'teacherUserKeyWindowController'
    },
    xtype: 'teacherUserWindow',
    width: 400,
    items: [{
        xtype: 'baseForm',
        items: [{
            inputType: 'password',
            fieldLabel: '密码',
            name: 'password',
            bind: {
                value: '{rec.password}'
            },
            listeners:{
                change:'change'
            }
        }, {
            inputType: 'password',
            fieldLabel: '确认密码',
            bind: {
                value: '{rec.confirmPassword}'
            },
            beforeLabelTextTpl : '<span class="field-required" data-qtip="必填选项">*</span>',
            listeners:{
                change:'change'
            }
        }]
    }]
});