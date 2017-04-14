package com.kalix.ar.adminteacher.course.extjs.internal;

import com.kalix.framework.core.api.osgi.KalixBundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.osgi.service.http.HttpService;

/**
 * Created by sunlf on 14-3-23.
 */
//public class InitActivator implements BundleActivator {
public class InitActivator extends KalixBundleActivator {
    private ServiceReference reference;
    private HttpService httpService;


    @Override
    public void start(BundleContext bundleContext) throws Exception {
        super.start(bundleContext);

        reference = bundleContext.getServiceReference(HttpService.class.getName());
        httpService = (HttpService) bundleContext.getService(reference);

        if(deploy){
            httpService.registerResources(contextPath + "/app/adminteacher/coursetype", "/min/coursetype", null);
            httpService.registerResources(contextPath + "/app/adminteacher/coursesetting", "/min/coursesetting", null);
            httpService.registerResources(contextPath + "/app/adminteacher/course", "/min/course", null);
            httpService.registerResources(contextPath + "/app/adminteacher/courseware", "/min/courseware", null);
            //httpService.registerResources(contextPath + "/adminteacher/resources/images", "/min/resources/images", null);
        }
        else
        {
            httpService.registerResources(contextPath + "/app/adminteacher/coursetype", "/coursetype", null);
            httpService.registerResources(contextPath + "/app/adminteacher/coursesetting", "/coursesetting", null);
            httpService.registerResources(contextPath + "/app/adminteacher/course", "/course", null);
            httpService.registerResources(contextPath + "/app/adminteacher/courseware", "/courseware", null);
            //httpService.registerResources(contextPath + "/adminteacher/resources/images", "/resources/images", null);
        }
    }

    @Override
    public void stop(BundleContext bundleContext) throws Exception {
        super.stop(bundleContext);

        if (reference != null)
            bundleContext.ungetService(reference);
        if (httpService != null) {
            httpService.unregister(contextPath + "/app/adminteacher/coursetype");
            httpService.unregister(contextPath + "/app/adminteacher/coursesetting");
            httpService.unregister(contextPath + "/app/adminteacher/course");
            httpService.unregister(contextPath + "/app/adminteacher/courseware");
        }
    }
}
