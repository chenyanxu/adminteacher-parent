package com.kalix.ar.adminteacher.teacher.api.biz;

import com.kalix.ar.adminteacher.teacher.entities.TeacherBean;
import com.kalix.framework.core.api.biz.IBizService;

/**
 * Created by dell on 14-1-17.
 */
public interface ITeacherBeanService extends IBizService<TeacherBean> {

    Boolean existTeacherBeanByLoginName(String loginname);
}
