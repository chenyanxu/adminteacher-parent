/**
 * 课程类型结构 2017-03-20 by p
 *
 */
Ext.define('kalix.adminteacher.coursetype.model.CourseTypeModel', {
    extend: 'kalix.model.BaseModel',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'}
    ]
});