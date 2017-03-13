/**
 * @author chenyanxu
 */
Ext.define('kalix.adminteacher.teacher.controller.UserKeyWindowController', {
    extend: 'kalix.adminteacher.teacher.controller.UserWindowController',
    alias: 'controller.teacherUserKeyWindowController',
    onClose:function(){
        var model=this.getView().lookupViewModel().get('rec');

        if(model.dirty) {
            model.set(model.modified);
            model.dirty = false;
        }
    }
});
