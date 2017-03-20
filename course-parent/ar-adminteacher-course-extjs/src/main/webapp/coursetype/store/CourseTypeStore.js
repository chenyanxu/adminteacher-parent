/**
 * 课程类型数据仓库
 *
 * @author hqj <br/>
 *         date:2017-3-20
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.coursetype.store.CourseTypeStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.courseTypeStore',
    xtype: 'courseTypeStore',
    storeId: 'courseTypeStore',
    autoLoad:true,
    proxy:{
        type:'ajax',
        url: CONFIG.restRoot + '/camel/rest/coursetypes'
    }
});