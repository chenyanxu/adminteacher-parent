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