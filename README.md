# 📦 entity-bottom-sheet

A reusable, customizable bottom sheet component for **React Native** / **Expo** apps.\
Built using only core components — no external dependencies!

---

## ✨ Features

- Fully animated bottom sheet using `Animated`
- Drag to dismiss with threshold
- Customizable height, title, and content
- Works in both Expo and bare React Native apps

---

## 📦 Installation

```sh
npm install entity-bottom-sheet
```

---

## 🚀 Usage

```jsx
import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import BottomSheet from 'entity-bottom-sheet';

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Button title="Open Bottom Sheet" onPress={() => setVisible(true)} />

      <BottomSheet
        visible={visible}
        onClose={() => setVisible(false)}
        title="Hello from the Bottom Sheet!"
        heightRatio={0.5}
      >
        <Text>This is your content.</Text>
      </BottomSheet>
    </View>
  );
}
```

---

## ⚙️ Props

| Prop          | Type        | Default               | Description                            |
| ------------- | ----------- | --------------------- | -------------------------------------- |
| `visible`     | `boolean`   | required              | Whether the sheet is visible           |
| `onClose`     | `function`  | required              | Function to call on close              |
| `title`       | `string`    | "Custom Bottom Sheet" | Title in the header                    |
| `heightRatio` | `number`    | `0.5`                 | Height of the sheet relative to screen |
| `children`    | `ReactNode` | required              | The content inside the bottom sheet    |

---

## 🧪 Demo

Coming soon — or clone [this example](https://github.com/your-username/entity-bottom-sheet-example) to try it out.

---

## 📜 License

MIT © 2025 [Bazil Suhail](https://github.com/bazil-suhail)

See [`LICENSE`](./LICENSE) for details.

---

## 🌐 Links

- 📦 [NPM Package](https://www.npmjs.com/package/entity-bottom-sheet)
- 💻 [GitHub Repo](https://github.com/bazil-suhail/entity-bottom-sheet)

