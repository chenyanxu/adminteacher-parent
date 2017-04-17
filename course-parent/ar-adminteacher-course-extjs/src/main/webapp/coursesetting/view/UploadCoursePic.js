/** for attachment upload
 * @aurthor hqj
 */
Ext.define('kalix.adminteacher.coursesetting.view.UploadCoursePic', {
    extend: 'Ext.form.Panel',
    requires: ['kalix.attachment.view.AttachmentFileField'],
    alias: 'widget.uploadCoursePic',
    xtype: 'uploadCoursePic',
    frame: true,
    timeout: 60,
    height:20,
    items: [
        {
            xtype: 'attachmentFileField',
            width:60,
            buttonOnly:true,
            buttonText: '上传',
            name: 'attachment',
            listeners:{
                change:function(target,value, eOpts){
                    target.findParentByType('courseSettingWindow').getController().onChange(target, value, eOpts);
                }
            }
        }
    ],
    listeners:{
        afterrender: function (target) {
            target.ariaEl.dom.style.border='none';
        }
    }
});
