/**
 *
 * @author hqj
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.coursesetting.view.CourseSettingWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.view.components.common.BaseComboBox',
        'kalix.adminteacher.coursesetting.controller.CourseSettingWindowController'
    ],
    alias: 'widget.courseSettingWindow',
    controller: {
        type: 'courseSettingWindowController'
    },
    xtype: 'courseSettingWindow',
    width: 400,
    items: [{
        xtype: 'baseForm',
        items: [
            {
                fieldLabel: '所属课程类型',
                editable:false,
                bind:{
                    value:'{courseTypeName}'
                }
            },
            {
                fieldLabel: '课程名称',
                name: 'name',
                bind:{
                    value:'{rec.name}'
                }
            },
            {
                fieldLabel: '授课教师',
                name: 'teacherid',
                xtype: 'baseComboBox',
                labelAlign: 'left',
                valueField: 'id',
                displayField: 'name',
                store: Ext.create('kalix.store.BaseStore', {
                    autoLoad: true,
                    proxyUrl: CONFIG.restRoot + '/camel/rest/teachers'
                }),
                //editable: false,
                queryParam: '%name%',
                //modelField: 'id',
                bind:{
                    value:'{rec.teacherid}'
                }
            },
            {
                fieldLabel: '课程总体评价',
                name: 'evaluate',
                bind:{
                    value:'{rec.evaluate}'
                }
            },
            {
                fieldLabel: '费用',
                name: 'expense',
                bind:{
                    value:'{rec.expense}'
                }
            },
            {
                fieldLabel: '简介',
                name: 'introduction',
                bind:{
                    value:'{rec.introduction}'
                }
            },
            {
                fieldLabel: '直播访问人数',
                name: 'liveVisitNum',
                bind:{
                    value:'{rec.liveVisitNum}'
                }
            },
            {
                fieldLabel: '笔记',
                name: 'note',
                bind:{
                    value:'{rec.note}'
                }
            },
            {
                fieldLabel: '课程的图片',
                name: 'pic',
                bind:{
                    value:'{rec.pic}'
                }
            },
            {
                fieldLabel: '课程状态',
                name: 'status',
                bind:{
                    value:'{rec.status}'
                }
            },
            {
                fieldLabel: '适合人群',
                name: 'suitCrowds',
                bind:{
                    value:'{rec.suitCrowds}'
                }
            },
            {
                fieldLabel: '课程大纲及其预览',
                name: 'syllabus',
                bind:{
                    value:'{rec.syllabus}'
                }
            }
        ]
    }]
});