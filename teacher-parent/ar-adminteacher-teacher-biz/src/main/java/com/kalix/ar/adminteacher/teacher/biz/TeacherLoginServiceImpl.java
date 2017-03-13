package com.kalix.ar.adminteacher.teacher.biz;

import com.kalix.framework.core.api.persistence.UserEntity;
import com.kalix.framework.core.impl.security.LoginService;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Created by Administrator on 2017/3/7.
 */
public class TeacherLoginServiceImpl extends LoginService {

    private static int CHECK_CODE_DIGIT = 5;  //验证码位数，可以任意设定

    @Override
    public List<String> getUserPermission(String username) {
        List<String> stringList = new ArrayList<String>();
        UserEntity userBean = dao.getUser(username);
        if (userBean != null) {
            //stringList.addAll(permissionService.getApplicationCodesByUserId(userBean.getId()));
            //stringList.addAll(permissionService.getFunctionCodesByUserId(userBean.getId()));
        }
        return stringList;
    }

    /*
     * 随机生成数字或字母
     * 生成验证码的随机数
     * 返回五位随机数
     */
    private String GenerateCheckCode() {

        char code;
        String checkCode = "";

        Random random = new Random();
        for (int i = 0; i < CHECK_CODE_DIGIT; i++) {
            int number = random.nextInt();
            if (number % 2 == 0)
                code = (char)('0' + (char)(number % 10));
            else
                code = (char)('A' + (char)(number % 26));

            checkCode += code;
        }
        return checkCode;
    }
}
