package com.kalix.ar.adminteacher.course.api.biz;

import com.kalix.ar.adminteacher.course.dto.model.CourseTypeDTO;
import com.kalix.ar.adminteacher.course.entities.CourseBean;
import com.kalix.framework.core.api.biz.IBizService;
import com.kalix.framework.core.api.persistence.JsonData;
import com.kalix.framework.core.api.persistence.JsonStatus;

import java.util.List;

/**
 * @类描述：应用服务接口.
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public interface ICourseBeanService extends IBizService<CourseBean> {

    //在此添加新的业务方法
    JsonData getEntitiesByFK(long fk, Integer page, Integer limit, String sort);

    JsonStatus saveEntityByFK(long fk, CourseBean entity);

    JsonStatus updateEntityByFK(long fk, CourseBean entity);

    JsonStatus deleteEntityByFK(long fk, long entityId);

    CourseTypeDTO getAllCourseTree();
}
