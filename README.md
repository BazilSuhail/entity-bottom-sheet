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
