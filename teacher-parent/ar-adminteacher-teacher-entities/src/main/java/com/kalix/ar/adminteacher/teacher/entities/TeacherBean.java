package com.kalix.ar.adminteacher.teacher.entities;

import com.kalix.framework.core.api.persistence.UserEntity;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * Created by Administrator on 2017/3/3.
 */
@Entity
@Table(name = "sys_user_teacher")
@ApiModel("用户<br>TeacherBean")
public class TeacherBean extends UserEntity {
    @ApiModelProperty(value="身份证号",position=0,example = "220***************")
    private String identificationCard;
    @ApiModelProperty(value="职称",position=1,example = "高级教师")
    private String positionalTitles;
    @ApiModelProperty(value="个人简历",position=2,example = "0")
    private String resume;
    @ApiModelProperty(value="个人说明",position=3,example = "0")
    private String introduction;
    @ApiModelProperty(value="学术研究",position=4,example = "0")
    private String learning;
    @ApiModelProperty(value="教学情况",position=5,example = "0")
    private String teaching;
    @ApiModelProperty(value="擅长课程",position=6,example = "0")
    private String coursesSkills;
    @ApiModelProperty(value="所在单位",position=7,example = "0")
    private String unit;
    @ApiModelProperty(value="预备知识",position=8,example = "0")
    private String preliminary;

    public String getIdentificationCard() {
        return identificationCard;
    }

    public void setIdentificationCard(String identificationCard) {
        this.identificationCard = identificationCard;
    }

    public String getPositionalTitles() {
        return positionalTitles;
    }

    public void setPositionalTitles(String positionalTitles) {
        this.positionalTitles = positionalTitles;
    }

    public String getResume() {
        return resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }

    public String getIntroduction() {
        return introduction;
    }

    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }

    public String getLearning() {
        return learning;
    }

    public void setLearning(String learning) {
        this.learning = learning;
    }

    public String getTeaching() {
        return teaching;
    }

    public void setTeaching(String teaching) {
        this.teaching = teaching;
    }

    public String getCoursesSkills() {
        return coursesSkills;
    }

    public void setCoursesSkills(String coursesSkills) {
        this.coursesSkills = coursesSkills;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getPreliminary() {
        return preliminary;
    }

    public void setPreliminary(String preliminary) {
        this.preliminary = preliminary;
    }
}
