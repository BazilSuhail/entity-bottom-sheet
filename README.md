# Entity Bottom Sheet

A lightweight, customizable bottom sheet component for **React Native** and **Expo** applications. Built with native components and animations for seamless integration.

---


[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](#)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat&label=Contributions&colorA=red&colorB=black	)](#)


---

### 🛠️ Tech Stack
<a href="#">
  <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img alt="TypeScript" src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-%23339933.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
  <img alt="npm" src="https://img.shields.io/badge/npm-%23CB3837.svg?&style=for-the-badge&logo=npm&logoColor=white"/>
  <img alt="React Native" src="https://img.shields.io/badge/React_Native-%2361DAFB.svg?&style=for-the-badge&logo=react&logoColor=white"/>
</a>

---

## ✨ Features

- Smooth animations using React Native's `Animated` API
- Drag-to-dismiss with configurable threshold
- Customizable height, title, and header
- **Supports custom content** via `children` prop
- **Compatible** with Expo and bare React Native projects
- No external dependencies

---

## 📦 Installation

Install the package via npm or yarn:

```sh
npm install entity-bottom-sheet
# or
yarn add entity-bottom-sheet
```

---

## 🚀 Usage

### Example with Custom Header
```jsx
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import BottomSheet from 'entity-bottom-sheet';

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open Bottom Sheet" onPress={() => setVisible(true)} />
      <BottomSheet
        visible={visible}
        onClose={() => setVisible(false)}
        title="My Bottom Sheet"
        heightRatio={0.5}
        header={<Text style={{ fontSize: 20, textAlign: 'center' }}>Custom Header</Text>}
      >
        <Text style={{ padding: 16 }}>Your custom content goes here!</Text>
      </BottomSheet>
    </View>
  );
}
```

### Example with Default Title
```jsx
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import BottomSheet from 'entity-bottom-sheet';

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Open Bottom Sheet" onPress={() => setVisible(true)} />
      <BottomSheet
        visible={visible}
        onClose={() => setVisible(false)}
        title="Welcome Sheet"
        heightRatio={0.4}
      >
        <Text style={{ padding: 16 }}>Simple content without custom header.</Text>
      </BottomSheet>
    </View>
  );
}
```

---

## ⚙️ Props

| Prop          | Type        | Default               | Description                                  |
|---------------|-------------|-----------------------|----------------------------------------------|
| `visible`     | `boolean`   | Required              | Controls visibility of the bottom sheet      |
| `onClose`     | `function`  | Required              | Callback triggered when sheet is dismissed   |
| `title`       | `string`    | `"Custom Bottom Sheet"` | Header title (used if `header` is not provided) |
| `heightRatio` | `number`    | `0.5`                 | Sheet height as a ratio of screen height (0–1) |
| `children`    | `ReactNode` | Required              | Content to render inside the bottom sheet    |
| `header`      | `ReactNode` | `null`                | Custom header component (replaces default title) |

---

## 📜 License

MIT License © 2025 [Bazil Suhail](https://github.com/bazil-suhail)

See the [LICENSE](./LICENSE) file for details.

---

## 🌐 Links

- **📦 [NPM Package](https://www.npmjs.com/package/entity-bottom-sheet)**
- **💻 [GitHub Repository](https://github.com/BazilSuhail/entity-bottom-sheet)**
- **🐛 [Issue Tracker](https://github.com/BazilSuhail/entity-bottom-sheet/issues)**

---

## 🙌 Contributing

Contributions are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/BazilSuhail/entity-bottom-sheet).

---

## 🙏 Acknowledgements

Thanks to the **React Native and Expo community** for inspiration and support.