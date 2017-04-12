package com.kalix.ar.adminteacher.course.biz;

import com.kalix.ar.adminteacher.course.api.biz.ICourseBeanService;
import com.kalix.ar.adminteacher.course.api.biz.ICourseTypeBeanService;
import com.kalix.ar.adminteacher.course.api.dao.ICourseBeanDao;
import com.kalix.ar.adminteacher.course.dto.model.CourseDTO;
import com.kalix.ar.adminteacher.course.dto.model.CourseTypeDTO;
import com.kalix.ar.adminteacher.course.entities.CourseBean;
import com.kalix.ar.core.api.biz.CommonMethod;
import com.kalix.framework.core.api.persistence.JsonData;
import com.kalix.framework.core.api.persistence.JsonStatus;
import com.kalix.framework.core.impl.biz.ShiroGenericBizServiceImpl;
import com.kalix.framework.core.util.SerializeUtil;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @类描述： 
 * @创建人：  
 * @创建时间： 
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
public class CourseBeanServiceImpl extends ShiroGenericBizServiceImpl<ICourseBeanDao, CourseBean> implements ICourseBeanService {

    private JsonStatus jsonStatus = new JsonStatus();
    private ICourseTypeBeanService courseTypeBeanService;

    public CourseBeanServiceImpl() {
        super.init(CourseBean.class.getName());
    }

    @Override
    public JsonData getEntitiesByFK(long fk, Integer page, Integer limit, String sort) {

        String base_all_sql = "select t1.*,t2.name coursetypename,t2.code coursetypecode " +
                " from adminteacher_course t1,adminteacher_coursetype t2 " +
                " where t1.coursetypeid = t2.id ";
        String all_sql = "select * from (" + base_all_sql + ") t " + CommonMethod.createWhereCondition("", sort);

        String base_sql = "select t1.*,t2.name coursetypename,t2.code coursetypecode " +
                " from adminteacher_course t1,adminteacher_coursetype t2 " +
                " where t1.coursetypeid = t2.id " +
                " and t2.code like (select code from adminteacher_coursetype where id=?1) ||'%'";
        String sql = "select * from (" + base_sql + ") t " + CommonMethod.createWhereCondition("", sort);

        JsonData jsonData = new JsonData();
        List<CourseDTO> list;
        if (page == null) {
            page = 0;
        }
        if (limit == null) {
            limit = 0;
        }

        if (fk == -100) {
            if (page == 0) {
                list = this.dao.findByNativeSql(all_sql, CourseDTO.class);
                jsonData.setData(list);
                jsonData.setTotalCount((long)list.size());
                return jsonData;
            }
            else {
                return this.dao.findByNativeSql(all_sql, page, limit, CourseDTO.class);
            }
        }

        if (page == 0) {
            list = this.dao.findByNativeSql(sql, CourseDTO.class, fk);
            jsonData.setData(list);
            jsonData.setTotalCount((long)list.size());
            return jsonData;
        }
        else {
            return this.dao.findByNativeSql(sql, page, limit, CourseDTO.class, fk);
        }
    }

    @Override
    public JsonStatus saveEntityByFK(long fk, CourseBean entity) {
        if (fk == entity.getCoursetypeid()) {
            entity.setCoursetypeid(fk);
            return super.saveEntity(entity);
        }
        else {
            jsonStatus.setSuccess(false);
            jsonStatus.setMsg("选择的课程类型不符合要求,添加课程失败!");
            return jsonStatus;
        }
    }

    @Override
    public JsonStatus updateEntityByFK(long fk, CourseBean entity) {

        if (fk == entity.getCoursetypeid()) {
            Map<String, String> params = new HashMap<String, String>();
            params.put("id", String.valueOf(entity.getId()));
            params.put("coursetypeid", String.valueOf(fk));
            String jsonStr = SerializeUtil.serializeJson(params);
            JsonData jsonData = super.getAllEntityforReport(jsonStr);
            if (jsonData.getTotalCount() > 0) {
                jsonStatus = super.updateEntity(entity);
            }
            else {
                jsonStatus.setSuccess(false);
                jsonStatus.setMsg("未查询到该实体,更新失败!");
            }
        }
        else {
            jsonStatus = super.updateEntity(entity);
        }
        return jsonStatus;
    }

    @Override
    public JsonStatus deleteEntityByFK(long fk, long entityId) {
        return super.deleteEntity(entityId);
    }

    @Override
    public CourseTypeDTO getAllCourseTree() {

        CourseTypeDTO courseTypeDTO = courseTypeBeanService.getAllCourseType();
        List<CourseBean> lists = getAllEntity();
        addCourseChilden(courseTypeDTO, lists);
        return courseTypeDTO;
    }

    /**
     * 课程类型下加载课程
     *
     * @param root
     * @param elements
     */
    private void addCourseChilden(CourseTypeDTO root, List<CourseBean> elements) {

        if (root.getId() == -1) {
            if (root.getChildren() != null) {
                List<CourseTypeDTO> list = root.getChildren();
                for (CourseTypeDTO childRoot : list) {
                    addCourseChilden(childRoot, elements);
                }
            }
        }
        else {
            if (!root.getLeaf()) {
                if (root.getChildren() != null) {
                    List<CourseTypeDTO> list = root.getChildren();
                    for (CourseTypeDTO childRoot : list) {
                        addCourseChilden(childRoot, elements);
                    }
                }
            }
            else {
                List<CourseTypeDTO> children = new ArrayList<>();
                elements.stream().filter(n -> root.getId() == n.getCoursetypeid())
                        .forEach(n -> {
                            CourseTypeDTO courseTypeDTO = new CourseTypeDTO();

                            courseTypeDTO.setId(n.getId());
                            courseTypeDTO.setLeaf(true);
                            courseTypeDTO.setParentId(root.getId());
                            courseTypeDTO.setParentName(root.getName());
                            courseTypeDTO.setText(n.getName());
                            courseTypeDTO.setCode("course");
                            courseTypeDTO.setName(n.getName());
                            children.add(courseTypeDTO);
                        });
                root.setChildren(children);
                if (children.size() > 0) {
                    root.setLeaf(false);
                }
            }
        }
    }

    public void setCourseTypeBeanService(ICourseTypeBeanService courseTypeBeanService) {
        this.courseTypeBeanService = courseTypeBeanService;
    }
}
