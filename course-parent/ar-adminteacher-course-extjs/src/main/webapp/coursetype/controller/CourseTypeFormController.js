/**
 * 课程类型表格窗体控制器
 *
 * @author hqj <br/>
 *         date:2017-3-20
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.coursetype.controller.CourseTypeFormController', {
    extend: 'kalix.controller.BaseTreeFormController',
    alias: 'controller.courseTypeFormController',
    onSave: function () {
        var validate = true;

        var view = this.getView();
        var vm = this.getViewModel();

        if (vm.get('rec').get('name') == null || vm.get('rec').get('name') == '') {
            validate = false;

            var fieldItem = view.items.getAt(4);
            fieldItem.setActiveError('课程类型名称不能为空！！！');
        }

        if (vm.get('rec').get('code') == null || vm.get('rec').get('code') == '') {
            validate = false;

            var fieldItem = view.items.getAt(5);
            fieldItem.setActiveError('课程类型代码不能为空！！！');
        }

        if (validate) {
            this.onSave1();
        }
    },
    onSave1: function () {
        var form = this.getView();
        var me = this.getView();
        var vm = form.lookupViewModel();

        if (0 == vm.get('rec').get('id')) {
            form.getForm().method = 'POST';
        }
        else {
            form.getForm().method = 'PUT';
            form.getForm().url=form.getForm().url+'/'+ vm.get('rec').get('id');
        }

        if (form.isValid()) {
            form.submit({
                success: function (form, action) {
                    if (action.result.failure) {
                        Ext.MessageBox.alert(CONFIG.ALTER_TITLE_FAILURE, action.result.msg);
                        return;
                    }
                    kalix.Notify.success(action.result.msg, CONFIG.ALTER_TITLE_SUCCESS);

                    var tree = vm.get('rec').get('tree');
                    var store = tree.getStore();

                    store.reload();

                    vm.get('win').close();
                },
                failure: function (form, action) {
                    Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, action.result.msg);
                }
            });
        }
    }
});