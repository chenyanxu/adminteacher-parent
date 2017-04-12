/**
 * 课程设置表格
 * @author hqj <br/>
 *         date:2017-3-20
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.coursesetting.view.CourseSettingGrid', {
  extend: 'kalix.view.components.common.BaseGrid',
  requires: [
    'kalix.adminteacher.coursesetting.store.CourseSettingStore',
    'kalix.adminteacher.coursesetting.controller.CourseSettingGridController'
  ],
  alias: 'widget.courseSettingGrid',
  xtype: 'courseSettingGridPanel',
  store: {
    type: 'courseSettingStore'
  },
  controller: {
    type: 'courseSettingGridController',
    cfgForm: 'kalix.adminteacher.coursesetting.view.CourseSettingWindow',
    cfgViewForm: 'kalix.adminteacher.coursesetting.view.CourseSettingViewWindow',
    cfgModel: 'kalix.adminteacher.coursesetting.model.CourseSettingModel'
  },
  autoLoad: false,
  columns: {
    defaults: {flex: 1, renderer: 'addTooltip'},
    items: [
      {
        xtype: 'rownumberer',
        text: "行号",
        width: 50,
        align: 'center',
        flex: 0,
        renderer: this.update
      },
      {text: '编号', dataIndex: 'id', hidden: true},
      {text: '课程名称', dataIndex: 'name'},
      {text: '课程总体评价', dataIndex: 'evaluate'},
      {
        text: '所属课程类型',dataIndex: 'coursetypename'
      },
      {text: '创建人', dataIndex: 'createBy'},
      {
        text: '创建日期', dataIndex: 'creationDate'
      },
      {
        xtype: 'securityGridColumnCommon',
        verifyItems: [
          {
            iconCls: "iconfont icon-view-column",
            permission: 'view',
            tooltip: '查看',
            handler: 'onView'
          },
          {
            iconCls: 'iconfont icon-edit-column',
            permission: 'edit',
            tooltip: '编辑',
            handler: 'onEdit'
          }, {
            iconCls: 'iconfont icon-delete',
            permission: 'delete',
            tooltip: '删除',
            handler: 'onDelete'
          }, {
            iconCls: 'iconfont icon-attachment-column',
            permission: 'coursewareManage',
            tooltip: '课件管理',
            handler: 'onCoursewareManage'
          }
        ]
      }]
  },
  tbar: {
    xtype: 'securityToolbar',
    verifyItems: [
      {
        text: '添加',
        tooltip: '添加课程',
        xtype: 'button',
        permission: 'add',
        iconCls: 'iconfont icon-add',
        handler: 'onAdd'
      }
    ]
  }
});