package com.kalix.ar.adminteacher.teacher.biz;

import com.kalix.ar.adminteacher.teacher.api.biz.ITeacherBeanService;
import com.kalix.ar.adminteacher.teacher.api.dao.ITeacherBeanDao;
import com.kalix.ar.adminteacher.teacher.entities.TeacherBean;
import com.kalix.framework.core.api.persistence.JsonStatus;
import com.kalix.framework.core.impl.biz.ShiroGenericBizServiceImpl;
import com.kalix.framework.core.util.Assert;
import com.kalix.framework.core.util.MD5Util;
import org.apache.commons.lang.StringUtils;

import java.util.List;

/**
 * Created by hqj on 2017-3-7.
 */
public class TeacherBeanServiceImpl extends ShiroGenericBizServiceImpl<ITeacherBeanDao, TeacherBean> implements ITeacherBeanService {
    private static final String FUNCTION_NAME = "登录名";

    public TeacherBeanServiceImpl() {
        super.init(TeacherBean.class.getName());
    }

    @Override
    public Boolean existTeacherBeanByLoginName(String loginname) {
        List<TeacherBean> teacherBeans = dao.find("select ob from TeacherBean ob where ob.loginName = ?1", loginname);
        if (teacherBeans != null && teacherBeans.size() > 0) {
            return true;
        }
        return false;
    }

    @Override
    public void beforeUpdateEntity(TeacherBean entity, JsonStatus status) {
        TeacherBean userBean = dao.get(entity.getId());

        if (StringUtils.isEmpty(entity.getPassword())) {
            // 密码为空，代表不修改原密码，需要从数据库中读取原密码
            entity.setPassword(userBean.getPassword());
        } else {
            entity.setPassword(MD5Util.encode(entity.getPassword()));
        }
        super.beforeUpdateEntity(entity, status);
    }

    @Override
    public void beforeSaveEntity(TeacherBean entity, JsonStatus status) {
        TeacherBean userEntity = (TeacherBean) entity;
        //密码加密
        if (StringUtils.isNotEmpty(userEntity.getPassword())) {
            userEntity.setPassword(MD5Util.encode(userEntity.getPassword()));
        }

        super.beforeSaveEntity(entity, status);
    }

    @Override
    public boolean isUpdate(TeacherBean entity, JsonStatus status) {
        Assert.notNull(entity, "实体不能为空.");
        TeacherBean bean = (TeacherBean) entity;
        List<TeacherBean> userBeans = dao.find("select ob from TeacherBean ob where ob.loginName = ?1", bean.getLoginName());
        if (userBeans != null && userBeans.size() > 0) {
            TeacherBean _userBean = userBeans.get(0);
            if (entity.getId() != _userBean.getId()) {
                status.setFailure(true);
                status.setMsg(FUNCTION_NAME + "已经存在！");
                return false;
            }
        }
        return true;
    }

    @Override
    public boolean isSave(TeacherBean entity, JsonStatus status) {
        TeacherBean bean = (TeacherBean) entity;
        List<TeacherBean> userBeans = dao.find("select ob from TeacherBean ob where ob.loginName = ?1", bean.getLoginName());
        if (userBeans != null && userBeans.size() > 0) {
            status.setFailure(true);
            status.setMsg(FUNCTION_NAME + "已经存在！");
            return false;
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
}
