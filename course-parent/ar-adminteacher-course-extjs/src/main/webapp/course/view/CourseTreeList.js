/**
 * 课程列表
 * @author hqj <br/>
 *         date:2017-4-7
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.course.view.CourseTreeList', {
    extend: 'kalix.view.components.common.BaseTreeList',
    alias: 'widget.courseTreeList',
    xtype: 'courseTreeList',
    store:  Ext.create('kalix.adminteacher.course.store.CourseTreeStore'),
    title: '课程列表',
    iconCls: 'iconfont icon-organization-management'
});