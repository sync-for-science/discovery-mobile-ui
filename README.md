# Sync for Science Discovery, Mobile UI

Mobile UI for [Sync for Science](https://syncfor.science/) Discovery

[Terms and Conditions](./TERMS-AND-CONDITIONS.md)

### Configure environment variables

```shell
cp .env.example .env
```

In `.env`, replace `EXPO_OWNER`, `EXPO_SLUG`, `BUNDLE_IDENTIFIER`, `CLIENT_ID` with appropriate values:

* [`EXPO_OWNER`](https://docs.expo.dev/versions/latest/config/app/#owner) -- The name of the Expo account that owns the project. This is useful for teams collaborating on a project.

* [`EXPO_SLUG`](https://docs.expo.dev/workflow/glossary-of-terms/#slug) -- The friendly URL name for publishing. For example, `myAppName` will refer to the `expo.dev/@project-owner/myAppName` project.

* [`BUNDLE_IDENTIFIER`](https://docs.expo.dev/classic/building-standalone-apps/#2-configure-appjson) -- The iOS bundleIdentifier and Android package fields use reverse DNS notation, but don't have to be related to a domain. Replace "com.yourcompany.yourappname" with whatever makes sense for your app:
  (See also: [Build Configuration](https://docs.expo.dev/build-reference/build-configuration/#31-managed-project))
  > android.package will be used as the Android application id which is used to identify your app on the Google Play Store
  > 
  > ios.bundleIdentifier will be used to identify you app on the Apple App Store

* `CLIENT_ID` -- EHR client id, used for the [OAuth2 OpenID Connect](https://openid.net/specs/openid-connect-core-1_0.html#AuthRequest) launch sequence.  (This is a Smart on FHIR ["public" app](http://hl7.org/fhir/smart-app-launch/app-launch.html#support-for-public-and-confidential-apps).)


## Install dependencies

```shell
yarn install
```

## Run locally, via Expo Go

```shell
yarn start
```
(Follow instructions in terminal to target a mobile platform)

...Or, on MacOS, automatically launch in iOS simulator:
```shell
yarn ios
```


## Optional Development Environment

[Expo CLI](https://docs.expo.dev/workflow/expo-cli/)
