/**
 * 课件表格控制器
 *
 * @author
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.courseware.controller.CoursewareGridController', {
  extend: 'kalix.controller.BaseGridController',
  alias: 'controller.coursewareGridController',
  mixins: {
    attachment: 'kalix.attachment.common.mixins.Attachment'
  },
  viewModelExtraInit: function (vm) {
    var courseid = this.getViewModel().get('rec').data.id;
    var coursename = this.getViewModel().get('rec').data.name;
    vm.set('courseName', coursename);
    if (0 == vm.get('rec').get('id')) {
      vm.get('rec').set('courseid', courseid);
      vm.get('rec').modified = {courseid:courseid};
      vm.get('rec').dirty = false;
    }
    else {
      vm.get('rec').modified = {courseid:vm.get('rec').get('courseid')};
    }
  }
});
