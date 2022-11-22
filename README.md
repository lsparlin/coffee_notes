# Coffee Notes App

## Install run dependencies
This project uses [`asdf`](https://github.com/asdf-vm/asdf) to keep ruby, node, and yarn versions in sync across developer environments.

```bash
asdf install
```

_If you prefer not to use asdf, just install the ruby, node and yarn versions listed in the `.tool-versions` file using your preferred method._ 

## Yarn and Pod
To prepare the javascript project run
`yarn install`
from the root of the projecct

To prepare the ios Pods build run
```bash
cd ios
bundle install
bundle exec pod install
```

## Running the app on iOS simulator
```bash
yarn ios
```

## Running the app on Android simulator
- Open [Android Studio](https://developer.android.com/studio/)
- Open an android emulator from "Virtual Device Manager"

Run
```bash
yarn android
```

