# First Expo Router App – prodev-mobile-app-0x00

## 📱 Objective
Set up a first mobile application using the **Expo Router** template, explore the file structure of a React Native application, and document the scaffolding process as well as the effect of running the `reset-project` command.

---

## 🛠️ Prerequisites
- **Node.js LTS** (v22.x installed)
- **VS Code** (preferred IDE)
- **Windows 10** (local OS)
- **Expo Go** installed on physical Android device

---

## 🚀 Steps Followed

### 1️⃣ Navigate to Repository
```bash
cd prodev-mobile-setup
mkdir prodev-mobile-app-0x00
cd prodev-mobile-app-0x00

2️⃣ Scaffold the Expo Router Project
Created a new Expo project named app-example using the latest Expo Router template:

bash
Copy code
npx create-expo-app@latest app-example
Chose the Expo Router template when prompted.

This generated the app-example directory containing all starter files.

3️⃣ Modify the Home Screen
Edited app-example/app/(tabs)/index.tsx:

tsx
Copy code
<Text>** First App Created**</Text>
(replaced the default Welcome! text)

4️⃣ Start the Development Server
From inside the project:

bash
Copy code
cd app-example
npx expo start
Scanned the QR code with the Expo Go app on an Android phone.

Confirmed the app displayed: First App Created.

5️⃣ Reset the Project
Ran:

bash
Copy code
npm run reset-project
🔄 Observations on reset-project
node_modules folder was removed.

Cached build files and Metro bundler cache were cleared.

package-lock.json remained, but dependencies had to be reinstalled (npm install) before running again.

Purpose: provides a clean slate for troubleshooting or preparing a fresh build.