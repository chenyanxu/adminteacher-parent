package com.kalix.ar.adminteacher.course.api.dao;

import com.kalix.ar.adminteacher.course.entities.CourseBean;
import com.kalix.framework.core.api.dao.IGenericDao;

import java.util.List;

/**
 * @类描述：DAO接口
 * @创建人：
 * @创建时间：
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public interface ICourseBeanDao extends IGenericDao<CourseBean, Long> {
    //在此添加新的DAO方法

    /**
     * 通过课程类型id查找课程信息 2017-03-28 by p
     *
     * @param fk
     * @return
     */
    List<CourseBean> findByFK(Long fk);
}
