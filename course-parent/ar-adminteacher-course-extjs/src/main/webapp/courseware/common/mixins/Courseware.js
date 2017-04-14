/**
 * @author hqj
 * mixin to other class
 * the function use to add user ids  to a relation table
 */
Ext.define('kalix.adminteacher.courseware.common.mixins.Courseware', {
  onCoursewareManage: function (grid, rowIndex, colIndex) {
    var view = Ext.create('kalix.adminteacher.courseware.view.CoursewareManageWindow');
    var selModel = grid.getStore().getData().items[rowIndex];
    var vm = view.lookupViewModel();
    var title = '课件管理' + ' --  所属课程 : ' + selModel.data.name;
    vm.set('rec', selModel);
    /*vm.set('iconCls','iconfont icon-attachment-column');*/
    vm.set('iconCls','iconfont icon-add');
    vm.set('title', title);
    vm.set('view_operation', true);
    view.show();
    grid.setSelection(selModel);
  }
});