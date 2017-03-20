package com.kalix.ar.adminteacher.course.dto.model;

import com.kalix.framework.core.api.web.model.BaseDTO;

import java.util.ArrayList;
import java.util.List;

/**
 * 课程类型模型类
 * @author hqj date:2017-3-17
 * @version 1.0.0
 */
public class CourseTypeDTO extends BaseDTO {
    private String name; //课程类型名称
    private String code; //课程类型代码
    private String text; //名称
    private Boolean leaf; //是否是叶子节点
    private Long parentId; //父课程类型
    private String parentName; //父节点名称
    private List<CourseTypeDTO> children = new ArrayList<CourseTypeDTO>();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Boolean getLeaf() {
        return leaf;
    }

    public void setLeaf(Boolean leaf) {
        this.leaf = leaf;
    }

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public String getParentName() {
        return parentName;
    }

    public void setParentName(String parentName) {
        this.parentName = parentName;
    }

    public List<CourseTypeDTO> getChildren() {
        return children;
    }

    public void setChildren(List<CourseTypeDTO> children) {
        this.children = children;
    }
}
