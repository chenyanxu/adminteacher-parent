package com.kalix.ar.adminteacher.course.dao;

import com.kalix.ar.adminteacher.course.api.dao.ICourseTypeBeanDao;
import com.kalix.ar.adminteacher.course.entities.CourseTypeBean;

import java.util.ArrayList;
import java.util.List;

/**
 * 课程类型管理DAO实现
 * @author hqj date:2017-3-14
 * @version 1.0.0
 */
public class CourseTypeBeanDaoImpl extends BaseAdminDao<CourseTypeBean, Long> implements ICourseTypeBeanDao {

    @Override
    public List<CourseTypeBean> findByCode(Long id, String code) {
        return (List<CourseTypeBean>) this.find("select ob from CourseTypeBean ob where ob.id <> ?1 and ob.code = ?2 order by ob.code", id, code);
    }

    @Override
    public List<CourseTypeBean> findByCode(String code) {
        return (List<CourseTypeBean>) this.find("select ob from CourseTypeBean ob where ob.code like ?1 order by ob.code", code + "%");
    }

    /*@Override
    @SuppressWarnings("unchecked")
    public List<CourseTypeBean> findByName(Long id, String name) {
        return (List<CourseTypeBean>) this.find("select ob from CourseTypeBean ob where ob.id <> ?1 and ob.name = ?2 order by ob.code", id, name);
    }*/

    @Override
    public List<CourseTypeBean> findByName(Long parentId, Long id, String name) {
        return (List<CourseTypeBean>) this.find("select ob from CourseTypeBean ob where ob.parentId = ?1 and ob.id <> ?2 and ob.name = ?3 order by ob.code", parentId, id, name);
    }

    @Override
    public List<CourseTypeBean> findByParentId(Long parentId) {
        return (List<CourseTypeBean>) this.find("select ob from CourseTypeBean ob where ob.parentId = ?1 order by ob.code", parentId);
    }

    @Override
    public List<CourseTypeBean> findById(List<Long> id) {
        if (id != null && !id.isEmpty()) {
            return (List<CourseTypeBean>) this.find("select ob from CourseTypeBean ob where ob.id in (?1) order by ob.code", id);
        } else {
            return new ArrayList<>();
        }
    }
}
