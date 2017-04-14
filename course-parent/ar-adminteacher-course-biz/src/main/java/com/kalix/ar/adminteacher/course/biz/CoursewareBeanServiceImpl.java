package com.kalix.ar.adminteacher.course.biz;

import com.kalix.ar.adminteacher.course.api.biz.ICoursewareBeanService;
import com.kalix.ar.adminteacher.course.api.dao.ICoursewareBeanDao;
import com.kalix.ar.adminteacher.course.entities.CoursewareBean;
import com.kalix.framework.core.impl.biz.ShiroGenericBizServiceImpl;

/**
 * @类描述： 
 * @创建人：  
 * @创建时间： 
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class CoursewareBeanServiceImpl extends ShiroGenericBizServiceImpl<ICoursewareBeanDao, CoursewareBean> implements ICoursewareBeanService {

    public CoursewareBeanServiceImpl() {
        super.init(CoursewareBean.class.getName());
    }
}
