/**
 * @author hqj
 */
Ext.define('kalix.adminteacher.courseware.store.CoursewareStore', {
    extend: 'kalix.store.BaseStore',
    alias: 'store.coursewareStore',
    xtype: 'coursewareStore',
    model: 'kalix.adminteacher.courseware.model.CoursewareModel',
    storeId: 'coursewareStore',
    proxyUrl: CONFIG.restRoot + '/camel/rest/coursewares'
});