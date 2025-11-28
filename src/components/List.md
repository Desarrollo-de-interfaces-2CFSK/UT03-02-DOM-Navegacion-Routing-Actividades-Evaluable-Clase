# List Component

A reusable and responsive grid component for rendering a collection of **interpreters** or **movie cards** with client-side navigation.

---

## 📦 Installation Context

This component is designed for **React + Vite** projects using **react-router-dom** for internal linking.

---

## ⚙️ Props API

| Prop           | Type      | Default | Description |
|--------------|-----------|---------|-------------|
| `items`       | `Item[]`   | `[]`    | List of items to render. |
| `esInterprete`| `boolean`  | `false` | Render mode toggle: `true` for interpreters, `false` for movies. |

### `Item` type definition

The `Item` object shape depends on the render mode:

- **Interpreter items:**  
  ```ts
  { id?: string | number; nombre: string; imagen?: string; biografia?: string }
