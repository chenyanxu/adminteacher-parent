package com.kalix.ar.adminteacher.course.dto.model;

import com.kalix.framework.core.api.web.model.BaseDTO;

import java.util.ArrayList;
import java.util.List;

/**
 * 课程模型类
 * @author hqj date:2017-4-11
 * @version 1.0.0
 */
public class CourseDTO extends BaseDTO {
    private Long coursetypeid;      //所属类别
    private String coursetypename;  //所属类别名称
    private String coursetypecode;  //所属类别代码
    private String name;            //课程名称
    private String evaluate;        //课程总体评价
    private Double expense;         //费用
    private String introduction;   //简介
    private Long liveVisitNum;     //直播访问人数
    private String note;            //笔记
    private String pic;             //课程的图片
    private Long status;           //课程状态
    private String suitCrowds;    //适合人群
    private String syllabus;      //课程大纲及其预览
    private Long teacherid;       //授课教师id

    private Long createbyid;
    private Long updatebyid;
    private Long version_;

    public Long getCoursetypeid() {
        return coursetypeid;
    }

    public void setCoursetypeid(Long coursetypeid) {
        this.coursetypeid = coursetypeid;
    }

    public String getCoursetypename() {
        return coursetypename;
    }

    public void setCoursetypename(String coursetypename) {
        this.coursetypename = coursetypename;
    }

    public String getCoursetypecode() {
        return coursetypecode;
    }

    public void setCoursetypecode(String coursetypecode) {
        this.coursetypecode = coursetypecode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public Long getTeacherid() {
        return teacherid;
    }

    public void setTeacherid(Long teacherid) {
        this.teacherid = teacherid;
    }

    public Long getCreatebyid() {
        return createbyid;
    }

    public void setCreatebyid(Long createbyid) {
        this.createbyid = createbyid;
    }

    public Long getUpdatebyid() {
        return updatebyid;
    }

    public void setUpdatebyid(Long updatebyid) {
        this.updatebyid = updatebyid;
    }

    public Long getVersion_() {
        return version_;
    }

    public void setVersion_(Long version_) {
        this.version_ = version_;
    }
}
