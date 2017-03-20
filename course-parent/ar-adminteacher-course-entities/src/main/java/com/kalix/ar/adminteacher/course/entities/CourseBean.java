package com.kalix.ar.adminteacher.course.entities;


import com.kalix.framework.core.api.annotation.KalixCascade;
import com.kalix.framework.core.api.annotation.TableCascade;
import com.kalix.framework.core.api.persistence.PersistentEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * @类描述：课程管理-课程设置
 * @创建人：hqj
 * @创建时间：2017-03-20
 * @修改人：
 * @修改时间：
 * @修改备注：
 */
//todo 修改模型定义
@Entity
@Table(name = "adminteacher_course")
@TableCascade(kalixCascades = {
        @KalixCascade(beans = "com.kalix.ar.adminteacher.course.entities.CourseTypeBean", deletable = true, foreignKey = "coursetypeid")
})
public class CourseBean extends PersistentEntity {
    private Long coursetypeid;      //所属类别
    private String evaluate;        //课程总体评价
    private Double expense;         //费用
    private String introduction;   //简介
    private Long liveVisitNum;     //直播访问人数
    private String note;            //笔记
    private String pic;             //课程的图片
    private Long status;           //课程状态
    private String suitCrowds;    //适合人群
    private String syllabus;      //课程大纲及其预览

    public Long getCoursetypeid() {
        return coursetypeid;
    }

    public void setCoursetypeid(Long coursetypeid) {
        this.coursetypeid = coursetypeid;
    }

    public String getEvaluate() {
        return evaluate;
    }

    public void setEvaluate(String evaluate) {
        this.evaluate = evaluate;
    }

    public Double getExpense() {
        return expense;
    }

    public void setExpense(Double expense) {
        this.expense = expense;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public Long getLiveVisitNum() {
        return liveVisitNum;
    }

    public void setLiveVisitNum(Long liveVisitNum) {
        this.liveVisitNum = liveVisitNum;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

    public Long getStatus() {
        return status;
    }

    public void setStatus(Long status) {
        this.status = status;
    }

    public String getSuitCrowds() {
        return suitCrowds;
    }

    public void setSuitCrowds(String suitCrowds) {
        this.suitCrowds = suitCrowds;
    }

    public String getSyllabus() {
        return syllabus;
    }

    public void setSyllabus(String syllabus) {
        this.syllabus = syllabus;
    }
}
