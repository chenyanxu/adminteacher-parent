package com.kalix.ar.adminteacher.course.entities;

import com.kalix.framework.core.api.annotation.KalixCascade;
import com.kalix.framework.core.api.annotation.TableCascade;
import com.kalix.framework.core.api.persistence.PersistentEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * 课程与教师关联实体类
 *
 * @author hqj <br/>
 *         date:2017-3-29
 *
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
@Entity
@Table(name = "adminteacher_course_teacher")
@TableCascade(kalixCascades = {
        @KalixCascade(beans = "com.kalix.ar.adminteacher.teacher.entities.TeacherBean", deletable = true, foreignKey = "teacherid"),
        @KalixCascade(beans = "com.kalix.ar.adminteacher.course.entities.CourseBean", deletable = true, foreignKey = "courseid")
})
public class CourseTeacherBean extends PersistentEntity {

    private Long teacherid;     //教师id
    private Long courseid;      //课程id

    public Long getTeacherid() {
        return teacherid;
    }

    public void setTeacherid(Long teacherid) {
        this.teacherid = teacherid;
    }

    public Long getCourseid() {
        return courseid;
    }

    public void setCourseid(Long courseid) {
        this.courseid = courseid;
    }
}
