/**
 * 课程数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.coursesetting.store.CourseSettingStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.adminteacher.coursesetting.model.CourseSettingModel',
    alias: 'store.courseSettingStore',
    xtype: 'courseSettingStore',
    storeId: 'courseSettingStore',
    autoLoad: true,
    proxyUrl: CONFIG.restRoot + '/camel/rest/coursetypes/-100/courses'
});