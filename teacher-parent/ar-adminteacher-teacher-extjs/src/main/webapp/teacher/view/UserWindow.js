/**
 * 用户添加表单
 *
 * @author majian <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */

Ext.define('kalix.adminteacher.teacher.view.UserWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.adminteacher.teacher.controller.UserWindowController',
    ],
    alias: 'widget.teacherUserWindow',
    controller: {
        type: 'teacherUserWindowController'
    },
    xtype: "teacherUserWindow",
    width: 400,
    items: [{
        xtype: 'baseForm',
        items: [
            {
                fieldLabel: '登录名',
                bind: {
                    value: '{rec.loginName}'
                },
                listeners: {
                    blur: 'blur'
                }
            }, {
                fieldLabel: '姓名',
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
                inputType: 'password',
                fieldLabel: '密码',
                beforeLabelTextTpl: '<span class="field-required" data-qtip="必填选项">*</span>',
                name: 'password',
                bind: {
                    value: '{rec.password}'
                },
                listeners: {
                    change: 'change'
                }
            }, {
                inputType: 'password',
                fieldLabel: '确认密码',
                beforeLabelTextTpl: '<span class="field-required" data-qtip="必填选项">*</span>',
                name: 'confirmPassword',
                bind: {
                    value: '{rec.confirmPassword}'
                },
                listeners: {
                    change: 'change'
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
                fieldLabel: '职称',
                bind: {
                    value: '{rec.positionalTitles}'
                }
            }, {
                fieldLabel: '个人简历',
                bind: {
                    value: '{rec.resume}'
                }
            }, {
                fieldLabel: '个人说明',
                bind: {
                    value: '{rec.introduction}'
                }
            }, {
                fieldLabel: '学术研究',
                bind: {
                    value: '{rec.learning}'
                }
            }, {
                fieldLabel: '教学情况',
                bind: {
                    value: '{rec.teaching}'
                }
            }, {
                fieldLabel: '擅长课程',
                bind: {
                    value: '{rec.coursesSkills}'
                }
            }, {
                fieldLabel: '所在单位',
                bind: {
                    value: '{rec.unit}'
                }
            }, {
                fieldLabel: '预备知识',
                bind: {
                    value: '{rec.preliminary}'
                }
            }, {
                xtype: 'combobox',
                fieldLabel: '状态',
                editable: false,
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