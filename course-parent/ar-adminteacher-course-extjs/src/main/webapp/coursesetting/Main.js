/**
 * coursesetting main page
 * @author hqj
 */
Ext.define('kalix.adminteacher.coursesetting.Main', {
    extend: 'kalix.view.components.common.AutoHPanel',
    requires: [
        /*'kalix.admin.duty.controller.DutyController',*/
        'kalix.adminteacher.coursetype.view.CourseTypeTreeList',
        'kalix.adminteacher.coursesetting.view.CourseSettingGrid',
        'kalix.container.BaseTreeContainer'
    ],
    xtype: 'courseSettingPanel',
    /*controller: 'courseSettingController',*/
    items: [
        {
            xtype:'baseTreeContainer',
            title:'课程类型列表',
            iconCls: 'iconfont icon-organization-management',
            width:400,
            childItemMargin:0,
            tree: {
                xtype: 'courseTypeTreeList',
                title:'',
                iconCls:'',
                /*reference:'dutyOrgTreeList',*/
                /*listeners: {
                    itemClick: 'onItemClick'
                },*/
                tbar:null,
            }
        },
        {
            xtype: 'courseSettingGridPanel',
            title: '课程列表',
            flex: 1
        }
    ]
});