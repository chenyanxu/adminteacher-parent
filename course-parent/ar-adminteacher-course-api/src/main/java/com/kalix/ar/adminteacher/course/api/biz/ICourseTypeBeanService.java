package com.kalix.ar.adminteacher.course.api.biz;

import com.kalix.ar.adminteacher.course.dto.model.CourseTypeDTO;
import com.kalix.ar.adminteacher.course.entities.CourseTypeBean;
import com.kalix.framework.core.api.biz.IBizService;
import com.kalix.framework.core.api.persistence.JsonData;
import com.kalix.framework.core.api.persistence.JsonStatus;

import java.util.List;

/**
 * 课程类型管理服务接口
 * @author hqj date:2017-3-14
 * @version 1.0.0
 */
public interface ICourseTypeBeanService extends IBizService<CourseTypeBean> {

    CourseTypeDTO getAllCourseType();

    CourseTypeDTO getCourseTypeDTO(Long id);
}
