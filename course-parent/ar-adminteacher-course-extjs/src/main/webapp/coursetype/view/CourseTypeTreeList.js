/**
 * 课程类型列表
 * @author hqj <br/>
 *         date:2017-3-20
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.coursetype.view.CourseTypeTreeList', {
    extend: 'kalix.view.components.common.BaseTreeList',
    alias: 'widget.courseTypeTreeList',
    xtype: 'courseTypeTreeList',
    store:  Ext.create('kalix.adminteacher.coursetype.store.CourseTypeStore'),
    title: '课程类型列表',
    iconCls: 'iconfont icon-organization-management'
});