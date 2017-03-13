/**
 * 用户模型
 *
 * @author majian <br/>
 *         date:2015-7-3
 * @version 1.0.0
 */


Ext.define('kalix.adminteacher.teacher.model.UserModel', {
  extend: 'kalix.model.BaseModel',
  fields: [
    {
      name: 'icon'
    },
    {
      name: 'loginName',
      validators: [{type: 'presence'}]
    }, {
      name: 'password'
    },
    {
      name: 'confirmPassword'
    },
    {
      name: 'name',
      validators: [{type: 'presence'}]
    },
    {
      name: 'email',
      validators: [{type: 'presence'}, {type: 'mail'}]
    },
    {
      name: 'phone'
    },
    {
      name: 'mobile',
      validators: [{type: 'presence'}, {type: 'mobile'}]
    },
    {
      name: 'loginIp'
    },
    {
      name: 'sex',
      defaultValue: '男'
    },
    {
      name: 'role'
    },
    {
      name: 'available',
      defaultValue: 1
    },
    {
      name: 'address'
    },
    {
      name: 'education'
    },
    {
      name: 'introduction'
    },
    {
      name: 'nickname'
    },
    {
      name: 'skills'
    },
  ]
});
