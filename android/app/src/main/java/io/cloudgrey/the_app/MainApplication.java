package io.cloudgrey.the_app;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import android.webkit.WebView;
import android.widget.Toast;

import com.centaurwarchief.smslistener.SmsListenerPackage;
import com.facebook.react.ReactPackage;
import com.reactnativenavigation.NavigationApplication;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends NavigationApplication implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
      @Override
      public boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
      }

      @Override
      protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage()
        );
      }

      @Override
      protected String getJSMainModuleName() {
        return "index";
      }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        WebView.setWebContentsDebuggingEnabled(true);
        SoLoader.init(this, /* native exopackage */ false);
    }

    // this exists in order to be called from mobile: backdoor
    public void raiseToast(String message){
        Toast.makeText(this, message, Toast.LENGTH_LONG).show();
    }
}
