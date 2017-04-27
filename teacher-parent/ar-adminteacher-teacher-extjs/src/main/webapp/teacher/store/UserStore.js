/**
 * 用户数据仓库
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.teacher.store.UserStore', {
    extend: 'kalix.store.BaseStore',
    model: 'kalix.adminteacher.teacher.model.UserModel',
    alias: 'store.teacherUserStore',
    xtype: 'teacherUserStore',
    storeId: 'teacherUserStore',
    proxyUrl: CONFIG.restRoot + '/camel/rest/teachers'
});