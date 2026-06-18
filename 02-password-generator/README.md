# 🔐 Password Generator (React)

A simple and responsive **Password Generator** built using **React.js** and **Tailwind CSS**.  
It allows users to generate secure random passwords with customizable length and options for numbers and special characters.

## 🚀 Features

- Generate random passwords
- Adjust password length using a range slider
- Include numbers in password
- Include special characters in password
- Copy generated password to clipboard
- Automatically regenerates password when options change
- Responsive UI using Tailwind CSS

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6)
- Tailwind CSS
- React Hooks:
  - `useState`
  - `useEffect`
  - `useCallback`
  - `useRef`

## 📸 Preview

Password generator interface with:
- Password display field
- Copy button
- Length controller
- Number and character toggles

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

Go to the project folder:

```bash
cd password-generator
```

Install dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

## 🧠 How It Works

### Password Generation

The password generator starts with:

```javascript
ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
```

If numbers are enabled:

```javascript
0123456789
```

are added.

If characters are enabled:

```javascript
!@#$%^&*()_+-={}[]|;"<>,.?/~
```

are added.

Then a random character is selected until the password reaches the selected length.

## 🔑 React Hooks Used

### useState

Used to manage:

- Password length
- Number option
- Character option
- Generated password

Example:

```javascript
const [length, setLength] = useState(8)
```

---

### useCallback

Used to memoize the password generator function so it does not recreate unnecessarily.

```javascript
const passwordGenerator = useCallback(()=>{
   ...
},[length,numberAllowed,characterAllowed])
```

---

### useEffect

Automatically generates a new password whenever settings change.

```javascript
useEffect(()=>{
 passwordGenerator()
},[length,numberAllowed,characterAllowed])
```

---

### useRef

Used to access the password input field directly for copying.

```javascript
const passwordRef = useRef(null)
```

## 📋 Copy Feature

The copy button selects the password input and copies it:

```javascript
window.navigator.clipboard.writeText(password)
```

## 👨‍💻 Author

**Kumar Sourav**
