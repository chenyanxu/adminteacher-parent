/**
 * 课程类型表格
 * @author hqj <br/>
 *         date:2017-3-20
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.coursetype.view.CourseTypeTree', {
  extend: 'kalix.view.components.common.BaseTree',
  requires: [
    'kalix.adminteacher.coursetype.controller.CourseTypeTreeController'
  ],
  alias: 'widget.courseTypeTree',
  xtype: 'courseTypeTree',
  controller: 'courseTypeTreeController',
  store: Ext.create('kalix.adminteacher.coursetype.store.CourseTypeStore'),
  title: '课程类型列表',
  iconCls: 'iconfont icon-organization-management',
  columns: {
    defaults: {flex: 1},
    items: [{text: '编号', dataIndex: 'id', hidden: true},
      {text: '上级机构', dataIndex: 'parentName', hidden: true},
      {xtype: 'treecolumn', text: '名称', dataIndex: 'name'},
      {text: '课程类型代码', dataIndex: 'code'},
      {text: '创建人', dataIndex: 'createBy'},
      {
        text: '创建日期', dataIndex: 'creationDate'
      },
      {
        header: '操作',
        xtype: 'securityGridColumnCommon',
        verifyItems: [{
          iconCls: 'iconfont icon-edit-column',
          tooltip: '编辑',
          handler: 'onEdit',
          permission: 'edit'
        }, {
          iconCls: 'iconfont icon-delete',
          tooltip: '删除',
          handler: 'onDelete',
          permission: 'delete'
        }]
      }
    ]
  },
  tbar: {
    xtype: 'securityToolbar',
    verifyItems: [
      {
        text: '添加',
        iconCls: 'iconfont icon-add',
        permission: 'add',
        handler: 'onAdd'
      }, {
        text: '刷新',
        iconCls: 'iconfont icon-refresh',
        permission:'',
        handler: 'onRefresh'
      }
    ]
  }
});