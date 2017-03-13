/**
 * 用户添加表单
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */

Ext.define('kalix.adminteacher.teacher.view.UserEditWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.controller.BaseWindowController',
    ],
    alias: 'widget.teacherUserWindow',
    controller: {
        type: 'baseWindowController',
        storeId: 'teacherUserStore'
    },
    xtype: "teacherUserWindow",
    width: 400,
    items: [{
        xtype: 'baseForm',
        items: [
            {
                fieldLabel: '登录名',
                allowBlank: false,
                bind: {
                    value: '{rec.loginName}'
                }
            }, {
                fieldLabel: '姓名',
                allowBlank: false,
                bind: {
                    value: '{rec.name}'
                }
            }, {
                xtype: 'combobox',
                fieldLabel: '性别',
                editable: false,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'value',
                store: {
                    data: [
                        {name: '男', value: '男'},
                        {name: '女', value: '女'}
                    ]
                },
                bind: {
                    value: '{rec.sex}'
                }
            }, {
                fieldLabel: '邮箱',
                allowBlank: false,
                bind: {
                    value: '{rec.email}'
                }
            }, {
                fieldLabel: '电话号',
                bind: {
                    value: '{rec.phone}'
                }
            }, {
                fieldLabel: '手机号',
                allowBlank: false,
                bind: {
                    value: '{rec.mobile}'
                }
            },{
                fieldLabel: '所在地',
                bind: {
                    value: '{rec.address}'
                }
            },{
                fieldLabel: '教育经历',
                bind: {
                    value: '{rec.education}'
                }
            },{
                fieldLabel: '个人说明',
                bind: {
                    value: '{rec.introduction}'
                }
            },{
                fieldLabel: '昵称',
                bind: {
                    value: '{rec.nickname}'
                }
            },{
                fieldLabel: '擅长技能',
                bind: {
                    value: '{rec.skills}'
                }
            }]
    }]
});