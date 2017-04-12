/**
 * @author hqj
 */
Ext.define('kalix.adminteacher.coursesetting.controller.CourseSettingWindowController', {
    extend: 'kalix.controller.BaseWindowController',
    alias: 'controller.courseSettingWindowController',
    onSave: function () {
        this.callParent(arguments);
    }
});
