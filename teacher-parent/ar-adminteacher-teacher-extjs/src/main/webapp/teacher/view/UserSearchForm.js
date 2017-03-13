/**
 * Created by lenovo on 2015/11/2.
 */

Ext.define('kalix.adminteacher.teacher.view.UserSearchForm', {
    extend: 'kalix.view.components.common.BaseSearchForm',
    alias: 'widget.teacherUserSearchForm',
    xtype: 'teacherUserSearchForm',
    items: [
        {
                xtype: 'textfield',
                fieldLabel: '登录名',
                labelAlign: 'right',
                labelWidth: 60,
                width: 200,
                name: '%loginName%'
            }, {
                xtype: 'textfield',
                fieldLabel: '姓名',
                labelAlign: 'right',
                labelWidth: 40,
                width: 200,
                name: '%name%'
            } /*,{
                xtype: 'combobox',
                fieldLabel: '状态',
                labelAlign: 'right',
                labelWidth: 40,
                editable: false,
                name: 'available',
                value: '-1',
                store: [
                    ['-1', '全部'],
                    ['1', '启用'],
                    ['0', '停用']
                ]
            }*/
            ]
});
