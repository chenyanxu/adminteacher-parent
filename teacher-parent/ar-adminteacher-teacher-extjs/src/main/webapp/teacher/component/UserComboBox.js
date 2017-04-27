/**
 * 用户选择下拉comboBox
 *
 * @author chenyanxu <br/>
 *         date:2015-6-18
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.teacher.component.UserComboBox', {
    extend:'kalix.view.components.common.BaseComboBox',
    requires: [
        'kalix.adminteacher.teacher.store.UserStore'
    ],
    alias: 'widget.teacherUserComboBox',
    allowBlank: false,
    labelAlign: 'right',
    xtype: 'teacherUserCombobox',
    queryMode: 'remote',
    valueField: 'name',
    displayField: 'name',
    queryParam: '%name%',
    typeAhead:true,
    store: {
        type: 'teacherUserStore',
        autoLoad: true
    }
});
