package com.kalix.ar.adminteacher.course.entities;


import com.kalix.framework.core.api.annotation.KalixCascade;
import com.kalix.framework.core.api.annotation.TableCascade;
import com.kalix.framework.core.api.persistence.PersistentEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

/**
 * @类描述：课程管理-课件设置
 * @创建人：hqj
 * @创建时间：2017-04-13
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
//todo 修改模型定义
@Entity
@Table(name = "adminteacher_courseware")
public class CoursewareBean extends PersistentEntity {
    @Column(name="courseid")
    private Long courseid;      //课程id
    private String name;        //课件名称
    private String duration;    //时长
    private Long errtype;       //故障类型
    private String question;    //故障问题描述

    public Long getCourseid() {
        return courseid;
    }

    public void setCourseid(Long courseid) {
        this.courseid = courseid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public Long getErrtype() {
        return errtype;
    }

    public void setErrtype(Long errtype) {
        this.errtype = errtype;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }
}
