# Sync for Science Discovery, Mobile UI

Mobile UI for [Sync for Science](https://syncfor.science/) Discovery


### Configure environment variables

```shell
cp .env.example .env
```

In `.env`, replace `EXPO_OWNER`, `EXPO_SLUG`, `CLIENT_ID` with appropriate values:

* [`EXPO_OWNER`](https://docs.expo.dev/versions/latest/config/app/#owner) -- The name of the Expo account that owns the project. This is useful for teams collaborating on a project.

* [`EXPO_SLUG`](https://docs.expo.dev/workflow/glossary-of-terms/#slug) -- The friendly URL name for publishing. For example, `myAppName` will refer to the `expo.dev/@project-owner/myAppName` project.

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
