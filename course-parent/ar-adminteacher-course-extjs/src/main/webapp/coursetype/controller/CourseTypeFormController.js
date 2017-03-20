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
            fieldItem.setActiveError("课程类型名称不能为空！！！");
        }

        if (vm.get('rec').get('code') == null || vm.get('rec').get('code') == '') {
            validate = false;

            var fieldItem = view.items.getAt(5);
            fieldItem.setActiveError("课程类型代码不能为空！！！");
        }

        if (validate) {
            this.callParent(arguments);
        }
    }
});