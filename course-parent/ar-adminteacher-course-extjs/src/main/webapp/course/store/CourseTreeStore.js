/**
 * 课程数据仓库
 *
 * @author hqj <br/>
 *         date:2017-4-7
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.course.store.CourseTreeStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.courseTreeStore',
    xtype: 'courseTreeStore',
    storeId: 'courseTreeStore',
    autoLoad:true,
    proxy:{
        type:'ajax',
        url: CONFIG.restRoot + '/camel/rest/courses/tree'
    }
});