package com.kalix.ar.adminteacher.course.entities;

import com.kalix.framework.core.api.persistence.PersistentEntity;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * 课程类型实体类
 * @author hqj <br/>
 *         date:2017-4-13
 * @version 1.0.0
 */
@Entity
@Table(name = "adminteacher_coursetype")
public class CourseTypeBean extends PersistentEntity {
    private String name; //课程类型名称
    private String code; //课程类型代码
    private Long isLeaf; //是否是叶子节点
    private Long parentId; //父课程类型id

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

    public Long getIsLeaf() {
        return isLeaf;
    }

    public void setIsLeaf(Long isLeaf) {
        this.isLeaf = isLeaf;
    }

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }
}
