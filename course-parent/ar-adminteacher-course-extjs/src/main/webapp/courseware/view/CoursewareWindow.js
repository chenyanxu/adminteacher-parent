/** for attachment upload
 * @aurthor author
 */
Ext.define('kalix.adminteacher.courseware.view.CoursewareWindow', {
    extend: 'kalix.view.components.common.BaseWindow',
    requires: [
        'kalix.controller.BaseWindowController',
        'kalix.adminteacher.courseware.view.AttachmentGrid',
        'kalix.adminteacher.courseware.view.AttachmentForm'
    ],
    alias: 'widget.attachmentWindow',
    xtype: 'attachmentWindow',
    controller: {
        type: 'baseWindowController',
        storeId: 'attachmentStore'
    },
    layout: 'container',
    defaults: {},
    height: 550,
    items: [
        {
            xtype: 'attachmentGrid'
        }
    ],
    listeners: {
        beforeshow: function () {
            var store = this.items.getAt(0).store;
            var mainId = this.getViewModel().get('rec').id;

            store.proxy.extraParams = {jsonStr: '{mainId:' + mainId + '}'}
            store.load();
        }
    }
});