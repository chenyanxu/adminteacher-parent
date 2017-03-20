/**
 * @author hqj
 */
Ext.define('kalix.adminteacher.coursetype.view.CourseTypeForm', {
    extend: 'kalix.view.components.common.BaseTreeForm',
    requires: [
        'kalix.adminteacher.coursetype.controller.CourseTypeFormController'
    ],
    alias: 'widget.courseTypeForm',
    xtype: 'courseTypeForm',
    controller: {
        type: 'courseTypeFormController'
    },
    items: [
        {xtype: 'hiddenfield', name: 'id', bind:{value:'{rec.id}'}},
        {xtype: 'hiddenfield', name: 'parentId', bind:{value:'{rec.parentId}'}},
        {xtype: 'hiddenfield', name: 'isLeaf',value:'1'},
        {
            fieldLabel: '上级课程类型',
            editable:false,
            bind:{
                value:'{rec.parentName}'
            }
        },
        {
            fieldLabel: '课程类型名称',
            name:'name',
            allowBlank: false,
            blankText: '课程类型名称不能为空!',
            bind:{
                value:'{rec.name}'
            }
        },
        {
            fieldLabel: '课程类型代码',
            name: 'code',
            allowBlank: false,
            blankText: '课程类型代码不能为空!',
            bind:{
                value:'{rec.code}'
            }
        }
    ]
});