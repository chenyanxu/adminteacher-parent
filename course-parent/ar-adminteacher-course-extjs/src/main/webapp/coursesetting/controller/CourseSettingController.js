/**
 * 课程模块控制器
 *
 * @author hqj <br/>
 *         date:2017-3-28
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.coursesetting.controller.CourseSettingController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.courseSettingController',
    onItemClick: function (view, record, item, index, e) {
        /*if (record.childNodes.length == 0 && record.data.leaf == true) {
            var courseGrid=this.getView().items.getAt(1);
            var store =courseGrid.store;
            store.proxy.url=CONFIG.restRoot +'/camel/rest/coursetypes/'+record.data.id+'/courses';
            store.reload();
        }
        else {
            view.setSelection(null);
        }*/
        var courseGrid = this.getView().items.getAt(1);
        var store = courseGrid.store;
        store.proxy.url = CONFIG.restRoot +'/camel/rest/coursetypes/'+record.data.id+'/courses';
        store.loadPage(1);
    }
});