/**model of courseware
 *  @author hqj
 */
Ext.define('kalix.adminteacher.courseware.model.CoursewareModel', {
    extend: 'kalix.model.BaseModel',
    fields: [
        {name: 'courseid'},
        {name: 'name'},
        {name: 'duration'},
        {name: 'errtype'},
        {name: 'question'}
    ]
});