/**
 * 用户首页
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.teacher.Main', {
  extend: 'kalix.container.BaseContainer',
  requires: [
    'kalix.adminteacher.teacher.view.UserGrid',
    'kalix.adminteacher.teacher.view.UserSearchForm'
  ],
  items: [
    {
      title: '用户查询',
      xtype: 'teacherUserSearchForm'
    }, {
      xtype: 'teacherUserGridPanel',
      id: 'teacherUserGridPanel',
      title: '用户列表'
    }
  ]
});
