package com.kalix.ar.adminteacher.course.dao;

import com.kalix.ar.adminteacher.course.api.dao.ICourseBeanDao;
import com.kalix.ar.adminteacher.course.entities.CourseBean;
import java.util.List;

/**
 * @类描述：
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class CourseBeanDaoImpl extends BaseAdminDao<CourseBean, Long> implements ICourseBeanDao {

    @Override
    public List<CourseBean> findByFK(Long fk) {
        return (List<CourseBean>) this.find(
                "select t from CourseBean t where t.coursetypeid = ?1 ", fk);
    }
}
