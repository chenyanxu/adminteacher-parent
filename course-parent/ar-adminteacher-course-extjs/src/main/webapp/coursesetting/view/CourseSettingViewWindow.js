/**
 *
 * @author hqj
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.coursesetting.view.CourseSettingViewWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.view.components.common.BaseComboBox',
    ],
    alias: 'widget.courseSettingViewWindow',
    xtype: 'courseSettingViewWindow',
    width: 400,
    items: [{
        defaults: {readOnly: true},
        xtype: 'baseForm',
        items: [
            {
                fieldLabel: '所属课程类型',
                bind:{
                    value:'{courseTypeName}'
                }
            },
            {
                fieldLabel: '课程名称',
                bind:{
                    value:'{rec.name}'
                }
            },
            {
                fieldLabel: '授课教师',
                xtype: 'baseComboBox',
                labelAlign: 'left',
                valueField: 'id',
                displayField: 'name',
                store: Ext.create('kalix.store.BaseStore', {
                    autoLoad: true,
                    proxyUrl: CONFIG.restRoot + '/camel/rest/teachers'
                }),
                editable: false,
                bind:{
                    value:'{rec.teacherid}'
                }
            },
            {
                fieldLabel: '课程总体评价',
                bind:{
                    value:'{rec.evaluate}'
                }
            },
            {
                fieldLabel: '费用',
                bind:{
                    value:'{rec.expense}'
                }
            },
            {
                fieldLabel: '简介',
                bind:{
                    value:'{rec.introduction}'
                }
            },
            {
                fieldLabel: '直播访问人数',
                bind:{
                    value:'{rec.liveVisitNum}'
                }
            },
            {
                fieldLabel: '笔记',
                bind:{
                    value:'{rec.note}'
                }
            },
            {
                fieldLabel: '课程的图片',
                bind:{
                    value:'{rec.pic}'
                }
            },
            {
                fieldLabel: '课程状态',
                bind:{
                    value:'{rec.status}'
                }
            },
            {
                fieldLabel: '适合人群',
                bind:{
                    value:'{rec.suitCrowds}'
                }
            },
            {
                fieldLabel: '课程大纲及其预览',
                bind:{
                    value:'{rec.syllabus}'
                }
            }
        ]
    }]
});