/**
 * 课程模型
 *
 * @author hqj <br/>
 *         date:2017-3-28
 * @version 1.0.0
 */
Ext.define('kalix.adminteacher.coursesetting.model.CourseSettingModel', {
    extend: 'kalix.model.BaseModel',
    fields: [
        {name: 'name',validators:[{type:'presence'}]},
        {name: 'teacherid',validators:[{type:'presence'}]},
        {name: 'evaluate'},
        {name: 'expense'},
        {name: 'introduction'},
        {name: 'liveVisitNum'},
        {name: 'note'},
        {name: 'pic'},
        {name: 'status'},
        {name: 'suitCrowds'},
        {name: 'syllabus'},
        {name: 'coursetypeid'},
        {name: 'coursetypename'},
        {name: 'coursetypecode'}
    ]
});