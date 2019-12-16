# Persistent Tabs Demo App

> Note: These reproduction steps assume you have `npm`/`Node` installed on your machine as well as Xcode and a physical iOS device for testing.

You could also run this with `cordova-android` if you wanted.

## Running the Project

1. Download and unzip this project.
2. Run `npm install`
3. Run `ionic build`
4. Run `ionic cordova platform add ios`
5. Run `ionic cordova build ios` and open the generated `platforms/ios/<name>.xcworkspace` file in Xcode
7. In Xcode, hit the Play button to run the application on your connected iOS device (note that you will need to set the appropriate code signing credentials to do so)

## Notes

- The "detail" page in this demo app is `tab1detail`

- Tab 1 and Tab 2 contain two buttons, one which persists the tabs on navigation and the other, which does not

- The main difference here is in the routing: `tab1detail` is available to the application at the `tab1detail` and the `tabs/tabX/tab1detail` routes

- In the former case, where the app is the parent for the route (`app-routing.module.ts`), the tabs do not persist

- However, if you move the routing so that a given tab (in the case of Tab1, see `tab1.module.ts`) is the parent of `tab1detail` and you properly update your navigation code to route to the `tabs/tabX/tab1detail` route, the tabs will be persisted

- This app **also** demonstrates that you can have both approaches in the same application (notice that the path exists both in `app-routing.module.ts` and the Tab modules). Do take care to be *relatively* consistent with your navigation approach so as not to confuse your users.

- You can navigate back from the detail page on iOS by swiping left-to-right from the left side of the screen
