#!/bin/bash
set -ex

SDK_VER="27.0.3"
TOOLS_DIR="$ANDROID_HOME/build-tools/$SDK_VER"
KS="$HOME/.android/debug.keystore"
APK_DIR="./app/build/outputs/apk/release"
UNSIGNED="app-release-unsigned.apk"
ALIGNED="app-release-unsigned-aligned.apk"
SIGNED="app-release.apk"

pushd $APK_DIR
rm -rf $SIGNED $ALIGNED
PATH="$PATH:$TOOLS_DIR" zipalign -v -p 4 $UNSIGNED $ALIGNED
PATH="$PATH:$TOOLS_DIR" apksigner sign --ks $KS --ks-key-alias androiddebugkey --ks-pass pass:android --out $SIGNED $ALIGNED
PATH="$PATH:$TOOLS_DIR" apksigner verify $SIGNED
rm -rf $UNSIGNED $ALIGNED
popd
