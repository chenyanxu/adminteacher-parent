/**
 * 用户添加表单
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */

Ext.define('kalix.adminteacher.teacher.view.UserViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    alias: 'widget.teacherUserViewWindow',
    xtype: "teacherUserViewWindow",
    width: 400,
    items: [{
        defaults: {readOnly: true},
        xtype: 'baseForm',
        items: [
            {
                fieldLabel: '登录名',
                bind: {
                    value: '{rec.loginName}'
                }
            }, {
                fieldLabel: '姓名',
                bind: {
                    value: '{rec.name}'
                }
            }, {
                fieldLabel: '性别',
                bind: {
                    value: '{rec.sex}'
                }
            }, {
                fieldLabel: '邮箱',
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
                bind: {
                    value: '{rec.mobile}'
                }
            }, {
                fieldLabel: '所在地',
                bind: {
                    value: '{rec.address}'
                }
            }, {
                fieldLabel: '教育经历',
                bind: {
                    value: '{rec.education}'
                }
            }, {
                fieldLabel: '个人说明',
                bind: {
                    value: '{rec.introduction}'
                }
            }, {
                fieldLabel: '昵称',
                bind: {
                    value: '{rec.nickname}'
                }
            }, {
                fieldLabel: '擅长技能',
                bind: {
                    value: '{rec.skills}'
                }
            }, {
                xtype: 'combobox',
                fieldLabel: '状态',
                queryMode: 'local',
                displayField: 'name',
                valueField: 'value',
                store: {
                    data: [
                        {name: '启用', value: 1},
                        {name: '停用', value: 0}
                    ]
                },
                bind: {
                    value: '{rec.available}'
                }
            }]
    }]

});