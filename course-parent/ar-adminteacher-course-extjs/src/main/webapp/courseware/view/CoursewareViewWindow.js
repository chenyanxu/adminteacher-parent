/**
 *
 * @author hqj
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.courseware.view.CoursewareViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    alias: 'widget.coursewareViewWindow',
    xtype: 'coursewareViewWindow',
    width: 400,
    items: [{
        defaults: {readOnly: true},
        xtype: 'baseForm',
        items: [
            {
                fieldLabel: '课程名称',
                bind:{
                    value:'{courseName}'
                }
            },
            {
                fieldLabel: '课件名称',
                bind:{
                    value:'{rec.name}'
                }
            },
            {
                fieldLabel: '课件时长',
                bind:{
                    value:'{rec.duration}'
                }
            }
        ]
    }]
});