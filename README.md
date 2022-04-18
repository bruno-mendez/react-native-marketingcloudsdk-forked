# Salesforce Marketing Cloud React Native 

Use this module to implement the Marketing Cloud MobilePush SDK for your [iOS](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/) and [Android](http://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/) applications.

## Release Notes

Release notes for the plugin can be found [here](CHANGELOG.md)

## Installation

* Plugin has a version dependency on React Native v0.60+

#### 1. Add plugin to your application via [npm](https://www.npmjs.com/package/react-native-marketingcloudsdk)

```shell
npm install react-native-marketingcloudsdk --save
```

### Android Setup

#### 1. Add Marketing Cloud SDK repository

`android/build.gradle`
```groovy
allprojects {
    repositories {
        maven { url "https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/repository" }
        //... Other repos
    }
}
```

#### 2. Provide FCM credentials

1. To enable push support for the Android platform you will need to include the google-services.json file.  Download the file from your Firebase console and place it into the `android/app` directory

2. Include the Google Services plugin in your build
`android/build.gradle`
```groovy
buildscript {
  repositories {
    google()  // Google's Maven repository
  }

  dependencies {
    // ...
    // Add the following line:
    classpath 'com.google.gms:google-services:4.2.0'
  }
}
```
3. Apply the plugin
`android/app/build.gradle`
```groovy
// Add the following line to the bottom of the file:
apply plugin: 'com.google.gms.google-services
```

#### 3. Configure the SDK in your MainApplication.java class

```java
@Override
public void onCreate() {
    super.onCreate();

    MarketingCloudSdk.init(this,
            MarketingCloudConfig.builder()
                    .setApplicationId("{MC_APP_ID}")
                    .setAccessToken("{MC_ACCESS_TOKEN}")
                    .setSenderId("{FCM_SENDER_ID_FOR_MC_APP}")
                    .setMarketingCloudServerUrl("{MC_APP_SERVER_URL}")
                    .setNotificationCustomizationOptions(NotificationCustomizationOptions.create(R.drawable.ic_notification))
                    .setAnalyticsEnabled(true)
                    .build(this),
            initializationStatus -> Log.e("INIT", initializationStatus.toString()));

    // ... The rest of the onCreate method    
}
```

### iOS Setup

#### 1. Install pod for Marketing Cloud SDK

```shell
cd ios
pod install
```

#### 2. Configure the SDK in your AppDelegate.m class

```objc
- (BOOL)application:(UIApplication *)application
    didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

    MarketingCloudSDKConfigBuilder *mcsdkBuilder = [MarketingCloudSDKConfigBuilder new];
    [mcsdkBuilder sfmc_setApplicationId:@"{MC_APP_ID}"];
    [mcsdkBuilder sfmc_setAccessToken:@"{MC_ACCESS_TOKEN}"];
    [mcsdkBuilder sfmc_setAnalyticsEnabled:@(YES)];
    [mcsdkBuilder sfmc_setMarketingCloudServerUrl:@"{MC_APP_SERVER_URL}"];

    NSError *error = nil;
    BOOL success =
        [[MarketingCloudSDK sharedInstance] sfmc_configureWithDictionary:[mcsdkBuilder sfmc_build]
                                                                   error:&error];

    // ... The rest of the didFinishLaunchingWithOptions method  
}
```

#### 3. Enable Push

Follow [these instructions](./ios_push.md) to enable push for iOS.

#### 4. Enable Inbox Messages

```objc
// Add the following line in the SDK configuration in your AppDelegate.m class:
[mcsdkBuilder sfmc_setInboxEnabled:@(YES)];
```
## API Reference <a name="reference"></a>

**Kind**: global class  

* [MCReactModule](#MCReactModule)
    * [.isPushEnabled()](#MCReactModule.isPushEnabled) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.enablePush()](#MCReactModule.enablePush)
    * [.disablePush()](#MCReactModule.disablePush)
    * [.getSystemToken()](#MCReactModule.getSystemToken) ⇒ <code>Promise.&lt;?string&gt;</code>
    * [.getAttributes()](#MCReactModule.getAttributes) ⇒ <code>Promise.&lt;Object.&lt;string, string&gt;&gt;</code>
    * [.setAttribute(key, value)](#MCReactModule.setAttribute)
    * [.clearAttribute(key)](#MCReactModule.clearAttribute)
    * [.addTag(tag)](#MCReactModule.addTag)
    * [.removeTag(tag)](#MCReactModule.removeTag)
    * [.getTags()](#MCReactModule.getTags) ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
    * [.setContactKey(contactKey)](#MCReactModule.setContactKey)
    * [.getContactKey()](#MCReactModule.getContactKey) ⇒ <code>Promise.&lt;?string&gt;</code>
    * [.enableVerboseLogging()](#MCReactModule.enableVerboseLogging)
    * [.disableVerboseLogging()](#MCReactModule.disableVerboseLogging)
    * [.logSdkState()](#MCReactModule.logSdkState)

    **Inbox Messages**  

    * [.getAllMessages()](#MCReactModule.getAllMessages) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.getUnreadMessages()](#MCReactModule.getUnreadMessages) ⇒ <code>Promise.&lt;Array.&lt;!Object&gt;&gt;</code>
    * [.getReadMessages()](#MCReactModule.getReadMessages) ⇒ <code>Promise.&lt;Array.&lt;!Object&gt;&gt;</code>
    * [.getDeletedMessages()](#MCReactModule.getDeletedMessages) ⇒ <code>Promise.&lt;Array.&lt;!Object&gt;&gt;</code>
    * [.getAllMessagesCount()](#MCReactModule.getAllMessagesCount) ⇒ <code>Promise.&lt;number&gt;</code>
    * [.getUnreadMessagesCount()](#MCReactModule.getUnreadMessagesCount) ⇒ <code>Promise.&lt;number&gt;</code>
    * [.getReadMessagesCount()](#MCReactModule.getReadMessagesCount) ⇒ <code>Promise.&lt;number&gt;</code>
    * [.getDeletedMessagesCount()](#MCReactModule.getDeletedMessagesCount) ⇒ <code>Promise.&lt;number&gt;</code>
    * [.markMessageRead(message)](#MCReactModule.markMessageRead) ⇒ <code>Promise.&lt;?boolean&gt;</code>
    * [.markMessageDeleted(message)](#MCReactModule.getReadMessagesCount) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.markMessageWithIdRead(messageId)](#MCReactModule.markMessageWithIdRead) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.markMessageWithIdDeleted(messageId)](#MCReactModule.markMessageWithIdDeleted) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.markAllMessagesRead()](#MCReactModule.markAllMessagesRead) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.markAllMessagesDeleted()](#MCReactModule.markAllMessagesDeleted) ⇒ <code>Promise.&lt;boolean&gt;</code>
    * [.refreshMessages()](#MCReactModule.refreshMessages) ⇒ <code>Promise.&lt;boolean&gt;</code>

<a name="MCReactModule.isPushEnabled"></a>

### MCReactModule.isPushEnabled() ⇒ <code>Promise.&lt;boolean&gt;</code>
The current state of the pushEnabled flag in the native Marketing Cloud
SDK.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise to the boolean representation of whether push is
    enabled.  
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/messages/push/PushMessageManager.html#isPushEnabled())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_pushEnabled)

<a name="MCReactModule.enablePush"></a>

### MCReactModule.enablePush()
Enables push messaging in the native Marketing Cloud SDK.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/messages/push/PushMessageManager.html#enablePush())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setPushEnabled:)

<a name="MCReactModule.disablePush"></a>

### MCReactModule.disablePush()
Disables push messaging in the native Marketing Cloud SDK.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/messages/push/PushMessageManager.html#disablePush())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setPushEnabled:)

<a name="MCReactModule.getSystemToken"></a>

### MCReactModule.getSystemToken() ⇒ <code>Promise.&lt;?string&gt;</code>
Returns the token used by the Marketing Cloud to send push messages to
the device.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;?string&gt;</code> - A promise to the system token string.  
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/messages/push/PushMessageManager.html#getPushToken())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_deviceToken)

<a name="MCReactModule.getAttributes"></a>

### MCReactModule.getAttributes() ⇒ <code>Promise.&lt;Object.&lt;string, string&gt;&gt;</code>
Returns the maps of attributes set in the registration.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;Object.&lt;string, string&gt;&gt;</code> - A promise to the key/value map of attributes set
    in the registration.  
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getAttributes())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_attributes)

<a name="MCReactModule.setAttribute"></a>

### MCReactModule.setAttribute(key, value)
Sets the value of an attribute in the registration.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.Editor.html#setAttribute(java.lang.String,%20java.lang.String))
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setAttributeNamed:value:)


| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The name of the attribute to be set in the     registration. |
| value | <code>string</code> | The value of the `key` attribute to be set in     the registration. |

<a name="MCReactModule.clearAttribute"></a>

### MCReactModule.clearAttribute(key)
Clears the value of an attribute in the registration.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.Editor.html#clearAttribute(java.lang.String))
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_clearAttributeNamed:)


| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | The name of the attribute whose value should be     cleared from the registration. |

<a name="MCReactModule.addTag"></a>

### MCReactModule.addTag(tag)
**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.Editor.html#addTag(java.lang.String))
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_addTag:)


| Param | Type | Description |
| --- | --- | --- |
| tag | <code>string</code> | The tag to be added to the list of tags in the     registration. |

<a name="MCReactModule.removeTag"></a>

### MCReactModule.removeTag(tag)
**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.Editor.html#removeTag(java.lang.String))
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_removeTag:)


| Param | Type | Description |
| --- | --- | --- |
| tag | <code>string</code> | The tag to be removed from the list of tags in the     registration. |

<a name="MCReactModule.getTags"></a>

### MCReactModule.getTags() ⇒ <code>Promise.&lt;Array.&lt;string&gt;&gt;</code>
Returns the tags currently set on the device.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;Array.&lt;string&gt;&gt;</code> - A promise to the array of tags currently set in the native SDK.  
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getTags())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_tags)

<a name="MCReactModule.setContactKey"></a>

### MCReactModule.setContactKey(contactKey)
Sets the contact key for the device's user.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.Editor.html#setContactKey(java.lang.String))
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setContactKey:)


| Param | Type | Description |
| --- | --- | --- |
| contactKey | <code>string</code> | The value to be set as the contact key of     the device's user. |

<a name="MCReactModule.getContactKey"></a>

### MCReactModule.getContactKey() ⇒ <code>Promise.&lt;?string&gt;</code>
Returns the contact key currently set on the device.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;?string&gt;</code> - A promise to the current contact key.  
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getContactKey())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_contactKey)

<a name="MCReactModule.enableVerboseLogging"></a>

### MCReactModule.enableVerboseLogging()
Enables verbose logging within the native Marketing Cloud SDK.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/MarketingCloudSdk.html#setLogLevel(int))
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setDebugLoggingEnabled:)

<a name="MCReactModule.disableVerboseLogging"></a>

### MCReactModule.disableVerboseLogging()
Disables verbose logging within the native Marketing Cloud SDK.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/MarketingCloudSdk.html#setLogLevel(int))
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setDebugLoggingEnabled:)

<a name="MCReactModule.logSdkState"></a>

### MCReactModule.logSdkState()
Instructs the native SDK to log the SDK state to the native logging system (Logcat for
Android and Xcode/Console.app for iOS).  This content can help diagnose most issues within
the SDK and will be requested by the Marketing Cloud support team.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)

---
<a name="MCReactModule.getAllMessages"></a>

### MCReactModule.getAllMessages() ⇒ <code>Promise.&lt;Array.&lt;?Object&gt;&gt;</code>
Returns all active Inbox messages already downloaded from the  Marketing Cloud SDK.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;Array.&lt;?Object&gt;&gt;</code> - A promise to the array of objects representing all active Inbox messages.  
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getAllMessages())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_getAllMessages)


<a name="MCReactModule.getUnreadMessages"></a>

### MCReactModule.getUnreadMessages() ⇒ <code>Promise.&lt;Array.&lt;?Object&gt;&gt;</code>
Returns all unread active Inbox messages already downloaded from the  Marketing Cloud SDK.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;Array.&lt;?Object&gt;&gt;</code> - A promise to the array of objects representing unread Inbox messeges.  
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getUnreadMessages())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_getUnreadMessages)


<a name="MCReactModule.getReadMessages"></a>

### MCReactModule.getReadMessages() ⇒ <code>Promise.&lt;Array.&lt;?Object&gt;&gt;</code>
Returns all active Inbox messages marked as reead, already downloaded from the  Marketing Cloud SDK.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;Array.&lt;?Object&gt;&gt;</code> - A promise to the array of objects representing Inbox messeges marked as read.  
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getReadMessages())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_getReadMessages)


<a name="MCReactModule.getDeletedMessages"></a>

### MCReactModule.getDeletedMessages() ⇒ <code>Promise.&lt;Array.&lt;?Object&gt;&gt;</code>
Returns all active Inbox messages marked as deleted, already downloaded from the  Marketing Cloud SDK.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;Array.&lt;?Object&gt;&gt;</code> - A promise to the array of objects representing Inbox messeges marked as deleted.  
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getDeletedMessages())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_getDeletedMessages)


<a name="MCReactModule.getAllMessagesCount"></a>

### MCReactModule.getAllMessagesCount() ⇒ <code>Promise.&lt;number&gt;</code>
Returns count of all active Inbox messages already downloaded from the  Marketing Cloud SDK.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;number&gt;</code> - A promise to the number representing count of all active Inbox messages.
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getAllMessagesCount())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/getAllMessagesCount)


<a name="MCReactModule.getUnreadMessagesCount"></a>

### MCReactModule.getUnreadMessagesCount() ⇒ <code>Promise.&lt;number&gt;</code>
Returns count of unread active Inbox messages already downloaded from the  Marketing Cloud SDK.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;number&gt;</code> - A promise to the number representing count of unread active Inbox messages.
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getUnreadMessagesCount())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/getUnreadMessagesCount)


<a name="MCReactModule.getReadMessagesCount"></a>

### MCReactModule.getReadMessagesCount() ⇒ <code>Promise.&lt;number&gt;</code>
Returns count of all active Inbox messages marked as read, already downloaded from the  Marketing Cloud SDK.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;number&gt;</code> - A promise to the number representing count of all active Inbox messages marked as read.
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getReadMessagesCount())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/getReadMessagesCount)


<a name="MCReactModule.getDeletedMessagesCount"></a>

### MCReactModule.getDeletedMessagesCount() ⇒ <code>Promise.&lt;number&gt;</code>
Returns count of all active Inbox messages marked as deleted (already downloaded from the  Marketing Cloud SDK).

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;number&gt;</code> - A promise to the number representing count of all active Inbox messages marked as deleted.
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getDeletedMessagesCount())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/getDeletedMessagesCount)


<a name="MCReactModule.markMessageRead"></a>

### MCReactModule.markMessageRead() ⇒ <code>Promise.&lt;Array.&lt;?Object&gt;&gt;</code>
Sets an Inbox message as read.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise to the boolean representation indicatating success in setting the message to read.
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#markMessageRead())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/markMessageRead)

| Param | Type | Description |
| --- | --- | --- |
| message | <code>object</code> | The Inbox message to be set as read. |


<a name="MCReactModule.markMessageDeleted"></a>

### MCReactModule.markMessageDeleted(message) ⇒ <code>Promise.&lt;boolean&gt;</code>
Sets an Inbox message as deleted.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise to the boolean representation indicatating success in setting the message as deleted.
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#markMessageDeleted())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/markMessageDeleted)

| Param | Type | Description |
| --- | --- | --- |
| message | <code>object</code> | The Inbox message to be set as deleted. |


<a name="MCReactModule.markMessageWithIdRead"></a>

### MCReactModule.markMessageWithIdRead(messageId) ⇒ <code>Promise.&lt;boolean&gt;</code>
Sets an Inbox message as read using messageId.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise to the boolean representation indicatating success in setting the message as read.
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#markMessageWithIdRead())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/markMessageWithIdRead)

| Param | Type | Description |
| --- | --- | --- |
| messageId | <code>string</code> | A string representing the Inbox message identifier. |


<a name="MCReactModule.markMessageWithIdDeleted"></a>

### MCReactModule.markMessageWithIdDeleted(messageId) ⇒ <code>Promise.&lt;boolean&gt;</code>
Sets an Inbox message as deleted using messageId.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise to the boolean representation indicatating success in setting the message as read.
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#markMessageWithIdDeleted())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/markMessageWithIdDeleted)

| Param | Type | Description |
| --- | --- | --- |
| messageId | <code>string</code> | A string representing the Inbox message identifier. |


<a name="MCReactModule.markAllMessagesRead"></a>

### MCReactModule.markAllMessagesRead() ⇒ <code>Promise.&lt;boolean&gt;</code>
Sets all Inbox messages as read.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise to the boolean representation indicatating success in setting the messages as read.
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#markAllMessagesRead())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/markAllMessagesRead)


<a name="MCReactModule.markAllMessagesDeleted"></a>

### MCReactModule.markAllMessagesDeleted() ⇒ <code>Promise.&lt;boolean&gt;</code>
Sets all Inbox messages as deleted.

**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise to the boolean representation indicatating success in setting the messages as deleted.
**See**

- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#markAllMessagesDeleted())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/markAllMessagesDeleted)


<a name="MCReactModule.refreshMessages"></a>
 
### MCReactModule.refreshMessages() ⇒ <code>Promise.&lt;boolean&gt;</code>
Reload and refresh Inbox messages from the MarketingCloud server.
 
**Kind**: static method of [<code>MCReactModule</code>](#MCReactModule) 
**Returns**: <code>Promise.&lt;boolean&gt;</code> - A promise to the boolean representation indicatating that refreshing has been started.
**See**
 
- [Android Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#refreshMessages())
- [iOS Docs](https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/refreshMessages)

---

### 3rd Party Product Language Disclaimers
Where possible, we changed noninclusive terms to align with our company value of Equality. We retained noninclusive terms to document a third-party system, but we encourage the developer community to embrace more inclusive language. We can update the term when it’s no longer required for technical accuracy.
