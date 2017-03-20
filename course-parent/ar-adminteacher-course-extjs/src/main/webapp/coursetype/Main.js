/**
 * 课程类型组件
 *
 * @author hqj <br/>
 *         date:2017-3-20
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.coursetype.Main', {
  extend: 'kalix.container.BaseTreeContainer',
  requires: [
    'kalix.adminteacher.coursetype.view.CourseTypeTree'
  ],
  tree: {
    xtype: 'courseTypeTree',
    title: '课程类型列表'
  }
});