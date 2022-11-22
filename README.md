# Coffee Notes App
<p align="center">
<img width="160" alt="Screenshot%202022-11-16%20at%201 48 22%20PM" src="https://user-images.githubusercontent.com/1904364/203422034-36db1192-aca9-49fb-a65a-5f215d12e9c0.png">
</p>

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
_Note: On M1 hardware this seems to work most reliably when run with [Rosetta](https://support.apple.com/en-us/HT211861)_
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

