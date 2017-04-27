/** for courseware manage
 * @aurthor hqj
 */
Ext.define('kalix.adminteacher.courseware.view.CoursewareManageWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.controller.BaseWindowController',
        'kalix.adminteacher.courseware.view.CoursewareGrid'
    ],
    alias: 'widget.coursewareManageWindow',
    xtype: 'coursewareManageWindow',
    controller: {
        type: 'baseWindowController',
        storeId: 'coursewareStore'
    },
    layout: 'container',
    defaults: {},
    height: 550,
    items: [
        {
            xtype: 'coursewareGridPanel'
        }
    ],
    listeners: {
        beforeshow: function () {
            var store = this.items.getAt(0).store;
            var courseid = this.getViewModel().get('rec').id;
            store.proxy.extraParams = {jsonStr: '{courseid:' + courseid + '}'};
            store.load();
        }
    }
});