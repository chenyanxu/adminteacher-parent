/**
 * @author hqj
 */
Ext.define('kalix.adminteacher.courseware.view.CoursewareGrid', {
  extend: 'kalix.view.components.common.BaseGrid',
  requires: [
    'kalix.adminteacher.courseware.controller.CoursewareGridController',
    'kalix.adminteacher.courseware.store.CoursewareStore'
  ],
  alias: 'widget.coursewareGrid',
  xtype: 'coursewareGridPanel',
  autoLoad: false,
  controller: {
    type: 'coursewareGridController',
    cfgForm: 'kalix.adminteacher.courseware.view.CoursewareWindow',
    cfgViewForm: 'kalix.adminteacher.courseware.view.CoursewareViewWindow',
    cfgModel: 'kalix.adminteacher.courseware.model.CoursewareModel'
  },
  store: {
    type: 'coursewareStore'
  },
  height: 445,
  columns: [
    {
      xtype: 'rownumberer',
    },
    {
      text: '编号',
      dataIndex: 'id',
      hidden: true
    },
    {
      text: '课件名称',
      dataIndex: 'name'
    },
    {
      text: '时长',
      dataIndex: 'duration'
    },
    {
      text: '创建人',
      dataIndex: 'createBy'
    },
    {
      text: '创建日期',
      dataIndex: 'creationDate'
    },
    {
      xtype: 'securityGridColumnCommon',
      flex: 0,
      width: 120,
      verifyItems: [
        {
          iconCls: "iconfont icon-view-column",
          permission: 'viewcourseware',
          tooltip: '查看',
          handler: 'onView'
        },
        {
          iconCls: 'iconfont icon-edit-column',
          permission: 'editcourseware',
          tooltip: '编辑',
          handler: 'onEdit'
        }, {
          iconCls: 'iconfont icon-delete',
          permission: 'deletecourseware',
          tooltip: '删除',
          handler: 'onDelete'
        }, {
          iconCls: 'iconfont icon-attachment-column',
          permission: 'attachment',
          tooltip: '附件管理',
          handler: 'onAttachmentManage'
        }
      ]
    }
  ],
  tbar: {
    xtype: 'securityToolbar',
    height: 35,
    padding: '5 0 0 10',
    verifyItems: [
      {
        text: '添加',
        xtype: 'button',
        permission: 'addcourseware',
        iconCls: 'iconfont icon-add',
        handler: 'onAdd'
      }
    ]
  }
});
