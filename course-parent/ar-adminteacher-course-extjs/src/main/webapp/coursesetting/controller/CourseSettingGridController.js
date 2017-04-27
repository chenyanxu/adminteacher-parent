/**
 * @author hqj
 */
Ext.define('kalix.adminteacher.coursesetting.controller.CourseSettingGridController', {
  extend: 'kalix.controller.BaseGridController',
  alias: 'controller.courseSettingGridController',
  mixins: {
    coursewareManage: 'kalix.adminteacher.courseware.common.mixins.Courseware'
  },
  viewModelExtraInit: function (vm) {

    if (0 == vm.get('rec').get('id')) {
      var treeContainer = this.getView().findParentByType('panel').items.getAt(0);
      var treePanel = treeContainer.items.getAt(1);
      var selection = treePanel.selection
      vm.set('courseTypeName', selection.data.name);
      vm.get('rec').set('coursetypeid', selection.data.id);
      vm.get('rec').modified = {coursetypeid:selection.data.id};
      vm.get('rec').dirty = false;
    }
    else {
      vm.set('courseTypeName', vm.get('rec').get('coursetypename'));
      vm.get('rec').modified = {coursetypeid:vm.get('rec').get('coursetypeid')};
    }
  },
  onAdd: function () {
    var treeContainer = this.getView().findParentByType('panel').items.getAt(0);
    var treePanel = treeContainer.items.getAt(1);
    var selection = treePanel.selection;

    if (selection) {
      if (selection.childNodes.length == 0) {
        this.callParent(arguments);
      }
      else {
        Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, '请选择一个课程类型!');
      }
    }
    else {
      Ext.Msg.alert(CONFIG.ALTER_TITLE_FAILURE, '请选择一个课程类型!');
    }
  }
  /*onCourseTypeColumnRender: function() {
    var typestore = Ext.create('kalix.store.BaseStore');
    typestore.proxyUrl = CONFIG.restRoot + '/camel/rest/coursetypes/';
    typestore.autoLoad = true;

    var mainPanel = Ext.app.Application.instance.getApplication()._mainView.controller.getReferences().mainCardPanel.getLayout().getActiveItem();
    var selectTree = mainPanel.controller.getReferences().courseAndTypeTreeList.getSelection();
    return selectTree[0].data.name;
  }*/
});