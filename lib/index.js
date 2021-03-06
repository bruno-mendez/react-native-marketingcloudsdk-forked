
import { NativeModules } from 'react-native';

const { RNMarketingCloudSdk } = NativeModules;

/**
 * @class MCReactModule
 */
class MCReactModule {
    /**
     * The current state of the pushEnabled flag in the native Marketing Cloud
     * SDK.
     * @returns {Promise<boolean>} A promise to the boolean representation of whether push is
     *     enabled.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/messages/push/PushMessageManager.html#isPushEnabled()|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_pushEnabled|iOS Docs}
     */
    static isPushEnabled() {
        return RNMarketingCloudSdk.isPushEnabled();
    }

    /**
     * Enables push messaging in the native Marketing Cloud SDK.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/messages/push/PushMessageManager.html#enablePush()|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setPushEnabled:|iOS Docs}
     */
    static enablePush() {
        RNMarketingCloudSdk.enablePush();
    }

    /**
     * Disables push messaging in the native Marketing Cloud SDK.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/messages/push/PushMessageManager.html#disablePush()|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setPushEnabled:|iOS Docs}
     */
    static disablePush() {
        RNMarketingCloudSdk.disablePush();
    }

    /**
     * Returns the token used by the Marketing Cloud to send push messages to
     * the device.
     * @returns {Promise<?string>} A promise to the system token string.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/messages/push/PushMessageManager.html#getPushToken()|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_deviceToken|iOS Docs}
     */
    static getSystemToken() {
        return RNMarketingCloudSdk.getSystemToken();
    }

    /**
     * Returns the maps of attributes set in the registration.
     * @returns {Promise<Object.<string, string>>} A promise to the key/value map of attributes set
     *     in the registration.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getAttributes()|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_attributes|iOS Docs}
     */
    static getAttributes() {
        return RNMarketingCloudSdk.getAttributes();
    }

    /**
     * Sets the value of an attribute in the registration.
     * @param  {string} key - The name of the attribute to be set in the
     *     registration.
     * @param  {string} value - The value of the `key` attribute to be set in
     *     the registration.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.Editor.html#setAttribute(java.lang.String,%20java.lang.String)|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setAttributeNamed:value:|iOS Docs}
     */
    static setAttribute(key, value) {
        RNMarketingCloudSdk.setAttribute(key, value);
    }

    /**
     * Clears the value of an attribute in the registration.
     * @param  {string} key - The name of the attribute whose value should be
     *     cleared from the registration.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.Editor.html#clearAttribute(java.lang.String)|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_clearAttributeNamed:|iOS Docs}
     */
    static clearAttribute(key) {
        RNMarketingCloudSdk.clearAttribute(key);
    }

    /**
     * @param  {string} tag - The tag to be added to the list of tags in the
     *     registration.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.Editor.html#addTag(java.lang.String)|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_addTag:|iOS Docs}
     */
    static addTag(tag) {
        RNMarketingCloudSdk.addTag(tag);
    }

    /**
     * @param  {string} tag - The tag to be removed from the list of tags in the
     *     registration.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.Editor.html#removeTag(java.lang.String)|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_removeTag:|iOS Docs}
     */
    static removeTag(tag) {
        RNMarketingCloudSdk.removeTag(tag);
    }

    /**
     * Returns the tags currently set on the device.
     * @returns  {Promise<string[]>} A promise to the array of tags currently set in the native SDK.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getTags()|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_tags|iOS Docs}
     */
    static getTags() {
        return RNMarketingCloudSdk.getTags();
    }

    /**
     * Sets the contact key for the device's user.
     * @param  {string} contactKey - The value to be set as the contact key of
     *     the device's user.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.Editor.html#setContactKey(java.lang.String)|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setContactKey:|iOS Docs}
     */
    static setContactKey(contactKey) {
        RNMarketingCloudSdk.setContactKey(contactKey);
    }

    /**
     * Returns the contact key currently set on the device.
     * @returns  {Promise<?string>} A promise to the current contact key.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/registration/RegistrationManager.html#getContactKey()|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_contactKey|iOS Docs}
     */
    static getContactKey() {
        return RNMarketingCloudSdk.getContactKey();
    }

    /**
     * Enables verbose logging within the native Marketing Cloud SDK.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/MarketingCloudSdk.html#setLogLevel(int)|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setDebugLoggingEnabled:|iOS Docs}
     */
    static enableVerboseLogging() {
        RNMarketingCloudSdk.enableVerboseLogging();
    }

    /**
     * Disables verbose logging within the native Marketing Cloud SDK.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/javadocs/6.0/reference/com/salesforce/marketingcloud/MarketingCloudSdk.html#setLogLevel(int)|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_setDebugLoggingEnabled:|iOS Docs}
     */
    static disableVerboseLogging() {
        RNMarketingCloudSdk.disableVerboseLogging();
    }

    /**
     * Instructs the native SDK to log the SDK state to the native logging system (Logcat for
     * Android and Xcode/Console.app for iOS).  This content can help diagnose most issues within
     * the SDK and will be requested by the Marketing Cloud support team.
     */
    static logSdkState() {
        RNMarketingCloudSdk.logSdkState();
    }

    /**
     * Returns all active Inbox messages already downloaded from the  Marketing Cloud SDK.
     * @returns  {Promise<object[]>} A promise to the array of objects representing all active Inbox messages that are already downloaded in the native SDK.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/in-app-message/in-app-messaging.html|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_getAllMessages|iOS Docs}
     */

    static getAllMessages() {
        console.log("RNMarketingCloudSdk getAllMessages");
        return RNMarketingCloudSdk.getAllMessages();
    }

    /**
     * Returns all unread active Inbox messages already downloaded from the  Marketing Cloud SDK.
     * @returns  {Promise<object[]>} A promise to the array of objects representing unread active Inbox messages already downloaded in the native SDK.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/in-app-message/in-app-messaging.html|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_getUnreadMessages|iOS Docs}
     */

    static getUnreadMessages() {
        return RNMarketingCloudSdk.getUnreadMessages();
    }
    
    /**
     * Returns all active Inbox messages marked as reead, already downloaded from the  Marketing Cloud SDK.
     * @returns  {Promise<object[]>} A promise to the array of objects representing Inbox messages that are already downloaded and marked as read in the native SDK.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/in-app-message/in-app-messaging.html|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_getUnreadMessages|iOS Docs}
     */

    static getReadMessages() {
        return RNMarketingCloudSdk.getReadMessages();
    }


    /**
     * Returns all active Inbox messages marked as deleted, already downloaded from the  Marketing Cloud SDK.
     * @returns  {Promise<object[]>} A promise to the array of objects representing Inbox messages that are already downloaded and marked as deleted in the native SDK.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/in-app-message/in-app-messaging.html|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_getUnreadMessages|iOS Docs}
     */

    static getDeletedMessages() {
        return RNMarketingCloudSdk.getDeletedMessages();
    }

    /**
     * Returns count of all active Inbox messages (already downloaded from the MarketingCloud SDK)
     * @returns  {Promise<number>} A promise to the number representing count of all active Inbox messages already downloaded from the MarketingCloud SDK.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/in-app-message/in-app-messaging.html|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_getAllMessagesCount|iOS Docs}
     */

    static getAllMessagesCount() {
        return RNMarketingCloudSdk.getAllMessagesCount();
    }

    /**
     * Returns count of unread active Inbox messages (already downloaded from the MarketingCloud SDK)
     * @returns  {Promise<number>} A promise to the number representing count of unread active Inbox messages already downloaded from the MarketingCloud SDK.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/in-app-message/in-app-messaging.html|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_getUnreadMessagesCount|iOS Docs}
     */

    static getUnreadMessagesCount() {
        return RNMarketingCloudSdk.getUnreadMessagesCount();
    }
    /**
     * Returns count of all active Inbox messages marked as read (already downloaded from the MarketingCloud SDK)
     * @returns  {Promise<number>} A promise to the number representing count of all active Inbox messages marked as read, already downloaded from the MarketingCloud SDK.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/in-app-message/in-app-messaging.html|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_getReadMessagesCount|iOS Docs}
     */

    static getReadMessagesCount() {
        return RNMarketingCloudSdk.getReadMessagesCount();
    }

    /**
     * Returns count of all active Inbox messages marked as deleted (already downloaded from the MarketingCloud SDK)
     * @returns  {Promise<number>} A promise to the number representing count of all active Inbox messages marked as deleted, already downloaded from the MarketingCloud SDK.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/in-app-message/in-app-messaging.html|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_getDeletedMessagesCount|iOS Docs}
     */

    static getDeletedMessagesCount() {
        return RNMarketingCloudSdk.getDeletedMessagesCount();
    }

    /**
     * Sets an Inbox message as read.
     * @param  {object} message - The Inbox message to be set as read.
     * @returns  {Promise<boolean>} A promise to the boolean representation indicatating success in setting the message as read.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/in-app-message/in-app-messaging.html|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_markMessageRead|iOS Docs}
     */

    static markMessageRead(message) {
        console.log("RNMarketingCloudSdk markMessageRead");
        return RNMarketingCloudSdk.markMessageRead(message);
    }

    /**
     * Sets an Inbox message as deleted.
     * @param  {object} message - The Inbox message to be set as deleted.
     * @returns  {Promise<boolean>} A promise to the boolean representation indicatating success in setting the message as deleted.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/in-app-message/in-app-messaging.html|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_markMessageDeleted|iOS Docs}
     */

     static markMessageDeleted(message) {
        console.log("RNMarketingCloudSdk markMessageDeleted");
        return RNMarketingCloudSdk.markMessageDeleted(message);
    }

    /**
     *  Sets an Inbox message as read using messageId.
     * @param  {string} messageId - A string representing the Inbox message identifier.
     * @returns  {Promise<boolean>} A promise to the boolean representation indicatating success in setting the message as read.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/in-app-message/in-app-messaging.html|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_markMessageWithIdRead|iOS Docs}
     */

    static markMessageWithIdRead(messageId) {
        return RNMarketingCloudSdk.markMessageWithIdRead(messageId);
    }

   /**
    *  Sets an Inbox message as deleted using messageId.
    * @param  {string} messageId - A string representing the Inbox message identifier.
    * @returns  {Promise<boolean>} A promise to the boolean representation indicatating success in setting the message as deleted.
    * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/in-app-message/in-app-messaging.html|Android Docs}
    * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_markMessageWithIdRead|iOS Docs}
    */
 
    static markMessageWithIdDeleted(messageId) {
        return RNMarketingCloudSdk.markMessageWithIdDeleted(messageId);
    } 

    /**
    *  Sets all Inbox messages as read.
    * @returns  {Promise<boolean>} A promise to the boolean representation indicatating success in setting the messages as read.
    * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/in-app-message/in-app-messaging.html|Android Docs}
    * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_markAllMessagesRead|iOS Docs}
    */
 
    static markAllMessagesRead() {
        return RNMarketingCloudSdk.markAllMessagesRead();
    } 

    /**
    *  Sets all Inbox messages as deleted.
    * @returns  {Promise<boolean>} A promise to the boolean representation indicatating success in setting the messages as deleted.
    * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/in-app-message/in-app-messaging.html|Android Docs}
    * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_markAllMessagesDeleted|iOS Docs}
    */
 
    static markAllMessagesDeleted() {
        return RNMarketingCloudSdk.markAllMessagesDeleted();
    } 

    /**
     *  Reload and refresh Inbox messages from the MarketingCloud server.
     * @returns  {Promise<boolean>} A promise to the boolean representation indicating that refreshing has been started.
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-Android/in-app-message/in-app-messaging.html|Android Docs}
     * @see  {@link https://salesforce-marketingcloud.github.io/MarketingCloudSDK-iOS/appledoc/Classes/MarketingCloudSDK.html#//api/name/sfmc_refreshMessages|iOS Docs}
     */
    static refreshMessages() {
        return RNMarketingCloudSdk.refreshMessages();
    }
}

export default MCReactModule;
