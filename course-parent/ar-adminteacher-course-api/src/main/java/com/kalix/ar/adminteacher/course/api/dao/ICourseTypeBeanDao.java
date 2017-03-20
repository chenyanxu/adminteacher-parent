package com.kalix.ar.adminteacher.course.api.dao;

import com.kalix.ar.adminteacher.course.entities.CourseTypeBean;
import com.kalix.framework.core.api.dao.IGenericDao;

import java.util.List;

/**
 * 课程类型管理DAO接口
 * @author hqj date:2017-3-14
 * @version 1.0.0
 */
public interface ICourseTypeBeanDao extends IGenericDao<CourseTypeBean, Long> {

    /**
     * 查询指定代码的课程类型（不包括指定的id）
     *
     * @param id
     * @param code
     * @return
     */
    List<CourseTypeBean> findByCode(Long id, String code);

    /**
     * 查询指定代码的课程类型
     *
     * @param code
     * @return
     */
    List<CourseTypeBean> findByCode(String code);

    /**
     * 查询指定名称的课程类型（不包括指定的id）
     *
     * @param id
     * @param name
     * @return
     */
    //List<CourseTypeBean> findByName(Long id, String name);

    /**
     * 查询指定父代码下指定名称的课程类型（不包括指定的id）
     *
     * @param parentId
     * @param id
     * @param name
     * @return
     */
    List<CourseTypeBean> findByName(Long parentId, Long id, String name);

    /**
     * 查询指定父代码的课程类型
     *
     * @param parentId
     * @return
     */
    List<CourseTypeBean> findByParentId(Long parentId);

    /**
     * 查询所有id集合中的课程类型
     *
     * @param id
     * @return
     */
    List<CourseTypeBean> findById(List<Long> id);
}
