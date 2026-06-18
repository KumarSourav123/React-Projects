# 🎨 Background Color Changer (React)

A simple and interactive **Background Color Changer** built using **React.js** and **Tailwind CSS**.

Users can click different color buttons to instantly change the background color of the page.

## 🚀 Features

- Change background color dynamically
- Multiple color options
- Simple and clean UI
- Responsive design
- Built with React state management

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6)
- Tailwind CSS
- React Hooks:
  - `useState`

## 📸 Preview

The application contains:
- A full-screen background area
- A bottom color selection panel
- Buttons for different colors

Available colors:

- 🔴 Red
- 🟢 Green
- 🔵 Blue
- 🟤 Olive
- ⚫ Gray
- 🟡 Yellow
- 🩷 Pink
- 🟣 Purple
- 🟠 Orange
- ⚪ White
- ⚫ Black

## 📂 Project Structure

```
src/
│
├── App.jsx
├── main.jsx
└── index.css
```

## ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project folder:

```bash
cd color-changer
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## 🧠 How It Works

The project uses React's `useState` hook to store the selected color.

Example:

```javascript
const [color, setColor] = useState('black')
```

When a button is clicked, the color state updates:

```javascript
setColor('red')
```

The updated value is applied using inline styling:

```javascript
style={{backgroundColor: color}}
```

## 📚 Concepts Learned

- React components
- State management
- Event handling
- Dynamic styling
- Tailwind CSS utility classes

## 👨‍💻 Author

**Kumar Sourav**
