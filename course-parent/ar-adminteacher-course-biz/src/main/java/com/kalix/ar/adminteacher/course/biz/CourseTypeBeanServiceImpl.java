package com.kalix.ar.adminteacher.course.biz;

import com.kalix.ar.adminteacher.course.api.biz.ICourseTypeBeanService;
import com.kalix.ar.adminteacher.course.api.dao.ICourseTypeBeanDao;
import com.kalix.ar.adminteacher.course.dto.model.CourseTypeDTO;
import com.kalix.ar.adminteacher.course.entities.CourseTypeBean;
import com.kalix.ar.adminteacher.course.util.CodeUtil;
import com.kalix.ar.adminteacher.course.util.Compare;
import com.kalix.framework.core.api.persistence.JsonStatus;
import com.kalix.framework.core.impl.biz.ShiroGenericBizServiceImpl;
import com.kalix.framework.core.util.Assert;
import org.dozer.DozerBeanMapper;
import org.dozer.Mapper;

import javax.transaction.Transactional;
import java.util.ArrayList;

import java.util.List;
import java.util.stream.Collectors;

/**
 * 课程类型管理服务实现
 *
 * @author hqj date:2017-3-14
 * @version 1.0.0
 */
public class CourseTypeBeanServiceImpl extends ShiroGenericBizServiceImpl<ICourseTypeBeanDao, CourseTypeBean> implements ICourseTypeBeanService {

    private static final String FUNCTION_NAME = "课程类型";

    public CourseTypeBeanServiceImpl() {
        super.init(CourseTypeBean.class.getName());
    }

    /*public void setOrganizationUserDao(IOrganizationUserBeanDao organizationUserDao) {
        this.organizationUserDao = organizationUserDao;
    }

    public void setUserService(IUserBeanService userService) {
        this.userService = userService;
    }*/

    @Override
    public void beforeSaveEntity(CourseTypeBean entity, JsonStatus status) {
        Assert.notNull(entity, "实体不能为空.");

        String userName = shiroService.getCurrentUserLoginName();
        if (userName != null) {
            entity.setCreateBy(userName);
            entity.setUpdateBy(userName);
        }
    }

    @Override
    @Transactional
    public void afterSaveEntity(CourseTypeBean entity, JsonStatus status) {
        Assert.notNull(entity, "实体不能为空.");

        if (entity.getParentId() != -1) {
            CourseTypeBean parentCourseTypeBean = dao.get(entity.getParentId());
            if (parentCourseTypeBean != null && parentCourseTypeBean.getIsLeaf() == 1) {
                parentCourseTypeBean.setIsLeaf(0L);
                dao.save(parentCourseTypeBean);
            }
        }
    }

    @Override
    public boolean isUpdate(CourseTypeBean entity, JsonStatus status) {
        Assert.notNull(entity, "实体不能为空.");

        // 校验课程类型名称
        List<CourseTypeBean> beans = dao.findByName(entity.getParentId(), entity.getId(), entity.getName());
        if (beans != null && beans.size() > 0) {
            status.setFailure(true);
            status.setMsg(FUNCTION_NAME + "名称已经存在！");
            return false;
        }
        // 校验课程类型代码
        beans = dao.findByCode(entity.getId(), entity.getCode());
        if (beans != null && beans.size() > 0) {
            status.setFailure(true);
            status.setMsg(FUNCTION_NAME + "代码已经存在！");
            return false;
        }
        return true;
    }

    @Override
    public boolean isSave(CourseTypeBean entity, JsonStatus status) {
        Assert.notNull(entity, "实体不能为空.");

        // 校验课程类型名称
        List<CourseTypeBean> beans = dao.findByName(entity.getParentId(), 0L, entity.getName());
        if (beans != null && beans.size() > 0) {
            status.setSuccess(false);
            status.setMsg(FUNCTION_NAME + "名称已经存在！");
            return false;
        }
        // 校验课程类型代码
        /*beans = dao.findByCode(0L, entity.getCode());
        if (beans != null && beans.size() > 0) {
            status.setSuccess(false);
            status.setMsg(FUNCTION_NAME + "代码已经存在！");
            return false;
        }*/
        String code = CodeUtil.createCode(ICourseTypeBeanDao.class, entity.getParentId(), 3L);
        if (code.isEmpty()) {
            status.setSuccess(false);
            status.setMsg(FUNCTION_NAME + "代码生成错误！");
            return false;
        }
        else {
            entity.setCode(code);
        }
        return true;
    }

    @Override
    public boolean isDelete(Long entityId, JsonStatus status) {
        if (dao.get(entityId) == null) {
            status.setFailure(true);
            status.setMsg(FUNCTION_NAME + "已经被删除！");
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public void doDelete(long id, JsonStatus jsonStatus) {
        try {
            CourseTypeBean bean = dao.get(id);
            if (bean != null) {
                // 删除子节点
                removeChildren(id);
                // 删除自己
                dao.remove(id);
                // 更新父节点
                updateParent(bean.getParentId());

                jsonStatus.setSuccess(true);
                jsonStatus.setMsg("删除" + FUNCTION_NAME + "成功！");
            } else {
                jsonStatus.setFailure(true);
                jsonStatus.setMsg(FUNCTION_NAME + "不存在或已被删除！");
            }
        } catch (Exception e) {
            e.printStackTrace();
            jsonStatus.setFailure(true);
            jsonStatus.setMsg(FUNCTION_NAME + "删除失败！");
        }
    }

    /**
     * 如果父节点下再没有子节点,将更新父节点状态
     *
     * @param parentId
     */
    @Transactional
    public void updateParent(Long parentId) {
        if (parentId != -1) {
            // 获取父节点
            CourseTypeBean parentBean = dao.get(parentId);
            if (parentBean != null) {
                // 获取父节点下的所有子节点
                List<CourseTypeBean> children = dao.findByParentId(parentId);
                if (children == null || children.isEmpty()) {
                    parentBean.setIsLeaf(1L);
                    dao.save(parentBean);
                }
            }
        }
    }

    @Transactional
    public void removeChildren(Long id) {
        List<CourseTypeBean> children = dao.findByParentId(id);
        if (children != null && !children.isEmpty()) {
            children.stream()
                    .forEach(n -> {
                        removeChildren(n.getId());
                        this.deleteEntity(n.getId());
                        //dao.remove(n.getId());
                    });
        }
    }

    @Override
    public void beforeUpdateEntity(CourseTypeBean entity, JsonStatus status) {
        super.beforeUpdateEntity(entity, status);
    }

    @Override
    @Transactional
    public JsonStatus updateEntity(CourseTypeBean entity) {
        JsonStatus jsonStatus = new JsonStatus();
        try {
            if (isUpdate(entity, jsonStatus)) {
                CourseTypeBean oldCourseType = dao.get(entity.getId());
                oldCourseType.setName(entity.getName());
                oldCourseType.setCode(entity.getCode());
                oldCourseType.setUpdateBy(shiroService.getCurrentUserLoginName());
                dao.save(oldCourseType);
                jsonStatus.setSuccess(true);
                jsonStatus.setMsg("更新" + FUNCTION_NAME + "成功！");
            }
        } catch (Exception e) {
            e.printStackTrace();
            jsonStatus.setFailure(true);
            jsonStatus.setMsg("更新" + FUNCTION_NAME + "失败！");
        }
        return jsonStatus;
    }

    /**
     * 查询全部 课程类型
     * @return
     */
    @Override
    public CourseTypeDTO getAllCourseType() {

        List<CourseTypeBean> courseTypes = dao.getAll().stream()
                .sorted(Compare.<CourseTypeBean>compare()
                        .thenComparing((a, b) -> a.getCode().compareTo(b.getCode())))
                .collect(Collectors.toList());

        return generateRoot(courseTypes, -1L);
    }

    @Override
    public CourseTypeDTO getCourseTypeDTO(Long id) {

        CourseTypeBean bean = dao.get(id);
        if (bean != null) {
            return generateRoot(dao.findByCode(bean.getCode()), id);
        }
        else {
            return null;
        }
    }

    private CourseTypeDTO generateRoot(List<CourseTypeBean> beans, Long id) {

        CourseTypeDTO root = new CourseTypeDTO();
        Mapper mapper = new DozerBeanMapper();
        //String parentName = "根课程类型";
        String parentName = "根";

        for (CourseTypeBean bean : beans) {
            if (bean.getId() == id) {
                root = mapper.map(bean, CourseTypeDTO.class);
                root.setText(bean.getName());
                parentName = bean.getName();
                break;
            }
        }

        root.setId(id);

        if (beans != null && beans.size() > 0) {
            List<CourseTypeBean> rootElements = getRootElements(beans, id);
            if (rootElements != null && rootElements.size() > 0) {
                for (CourseTypeBean rootElement : rootElements) {
                    CourseTypeDTO courseTypeDTO = mapper.map(rootElement, CourseTypeDTO.class);
                    courseTypeDTO.setLeaf(rootElement.getIsLeaf() != 0);
                    courseTypeDTO.setParentName(parentName);
                    courseTypeDTO.setText(rootElement.getName());
                    getChilden(courseTypeDTO, beans, mapper, true);
                    root.getChildren().add(courseTypeDTO);
                }
            }
        }

        return root;
    }

    /**
     * 获得所有根节点
     *
     * @param elements
     * @return
     */
    private List<CourseTypeBean> getRootElements(List<CourseTypeBean> elements, Long id) {
        return elements.stream().filter(n->n.getParentId().equals(id))
                .collect(Collectors.toList());
    }

    /**
     * 递归函数加载子课程类型
     *
     * @param root
     * @param elements
     */
    private void getChilden(CourseTypeDTO root, List<CourseTypeBean> elements, Mapper mapper, boolean isRecursion) {

        List<CourseTypeDTO> children = new ArrayList<>();
        elements.stream().filter(n -> root.getId() != -1 && (root.getId() == n.getParentId()))
                .forEach(n -> {
                    CourseTypeDTO courseTypeDTO = mapper.map(n, CourseTypeDTO.class);
                    courseTypeDTO.setLeaf(n.getIsLeaf() != 0);
                    courseTypeDTO.setParentName(root.getName());
                    courseTypeDTO.setText(n.getName());
                    children.add(courseTypeDTO);

                    if (isRecursion && n.getIsLeaf() == 0) {
                        getChilden(courseTypeDTO, elements, mapper, isRecursion);
                    }
                });
        root.setChildren(children);
    }
}