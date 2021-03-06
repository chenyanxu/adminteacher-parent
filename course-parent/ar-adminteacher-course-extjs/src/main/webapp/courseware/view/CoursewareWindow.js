/**
 *
 * @author hqj
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.courseware.view.CoursewareWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.controller.BaseWindowController'
    ],
    alias: 'widget.coursewareWindow',
    controller: {
        type: 'baseWindowController'
    },
    xtype: 'coursewareWindow',
    width: 400,
    items: [{
        xtype: 'baseForm',
        items: [
            //测试使用
            /*{
                fieldLabel: '课程id',
                name: 'courseid',
                editable:false,
                hidden: true/false,
                bind:{
                    value:'{rec.courseid}'
                }
            },*/
            {
                fieldLabel: '课程名称',
                editable:false,
                bind:{
                    value:'{courseName}'
                }
            },
            {
                fieldLabel: '课件名称',
                name: 'name',
                bind:{
                    value:'{rec.name}'
                }
            },
            {
                fieldLabel: '课件时长',
                name: 'duration',
                bind:{
                    value:'{rec.duration}'
                }
            }
        ]
    }]
});