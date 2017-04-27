/*Ext.define("kalix.adminteacher.coursesetting.view.CoursePic", {
    extend : "kalix.view.components.common.BaseImage",
    alias: 'widget.coursePic',
    xtype: 'coursePicImage',

    src: 'resources/images/default_user.png',

    onRender : function() {
        var me = this;
        me.callParent(arguments);
        me.imgEl.dom.onerror = me.onImageLoadError;
        var icon = this.findParentByType('courseSettingWindow').viewModel.get('rec').get('pic');
        if (icon != null && icon != '') {
            me.setSrc(icon);
        }
    }
});*/

Ext.define('kalix.adminteacher.coursesetting.view.CoursePic', {
    extend : 'Ext.Img',
    alias: 'widget.coursePic',
    xtype: 'coursePicImage',
    requires: ['kalix.Notify'],

    src: 'resources/images/default_user.png',

    onRender : function() {
        var me = this;
        me.callParent(arguments);
        me.imgEl.dom.onerror = me.onImageLoadError;
        var icon = this.findParentByType('courseSettingWindow').viewModel.get('rec').get('pic');
        if (icon != null && icon != '') {
            me.setSrc(icon);
        }
    },

    onImageLoadError : function() {
        if (this.src != '') {
            kalix.Notify.error('无法连接数据库！！！', CONFIG.ALTER_TITLE_ERROR);
        }

        if (this.title != '') {
            this.src = this.title;
        }
    },

    onDestroy : function() {
        var me = this;
        me.imgEl.dom.onerror = null;
        me.callParent(arguments);
    }
});
