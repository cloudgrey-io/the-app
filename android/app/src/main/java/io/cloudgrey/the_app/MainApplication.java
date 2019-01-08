package io.cloudgrey.the_app;

import android.webkit.WebView;
import android.widget.Toast;

import com.centaurwarchief.smslistener.SmsListenerPackage;
import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication {

    @Override
    public void onCreate() {
        super.onCreate();
        WebView.setWebContentsDebuggingEnabled(true);
    }

    @Override
    public boolean isDebug() {
        // Make sure you are using BuildConfig from your own application
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        // Add additional packages you require here
        // No need to add RnnPackage and MainReactPackage
        return Arrays.<ReactPackage>asList(
                new SmsListenerPackage()
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }

    @Override
    public String getJSMainModuleName() {
        return "index";
    }

    // this exists in order to be called from mobile: backdoor
    public void raiseToast(String message){
        Toast.makeText(this, message, Toast.LENGTH_LONG).show();
    }
}
