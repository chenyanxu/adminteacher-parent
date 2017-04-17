/**
 * @author hqj
 */
Ext.define('kalix.adminteacher.coursesetting.controller.CourseSettingWindowController', {
    extend: 'kalix.controller.BaseWindowController',
    alias: 'controller.courseSettingWindowController',
    requires: ['kalix.Notify'],
    onChange: function (target, event, domValue) {
        var form = target.findParentByType('form');
        var me = target.findParentByType('window');
        var store = me.viewModel.get('store');
        var mainId = me.viewModel.get('rec').id
        scope={mainId:mainId,store:store};

        form.submit({
            url: CONFIG.restRoot + '/camel/rest/upload',
            waitMsg: '正在上传...',
            scope: scope,
            success: function (fp, o) {
                if (o.result.success) {
                    me.viewModel.get('rec').set('pic', o.result.attachmentPath);
                    Ext.getCmp('coursePicImage').setSrc(o.result.attachmentPath);
                    kalix.Notify.success('课程图片上传成功！！！', CONFIG.ALTER_TITLE_SUCCESS);
                }
            },
            failure: function(fp, o) {
                Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, o.result.msg);
            }
        });
    },
    onSave: function () {
        this.callParent(arguments);
    }
});
