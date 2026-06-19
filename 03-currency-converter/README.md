# 💱 Currency Converter

A simple and responsive **Currency Converter** built using **React.js**, **Vite**, and **Tailwind CSS**.  
It uses a currency exchange API to fetch real-time conversion rates.

## 🚀 Features

- Convert one currency to another
- Real-time exchange rate fetching
- Swap currencies feature
- Dynamic currency dropdown
- Responsive UI
- Built with reusable React components

## 🛠️ Technologies Used

- React.js
- Vite
- Tailwind CSS
- JavaScript (ES6+)
- Currency API

## 📂 Project Structure

```
src
│
├── components
│   └── Card.jsx
│
├── hooks
│   └── useCurrencyInfo.js
│
├── App.jsx
└── main.jsx
```

## ⚙️ Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Go inside the project folder:

```bash
cd 03-currency-converter
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## 🧩 How It Works

- `useCurrencyInfo` custom hook fetches currency data from the API.
- `Card` component handles:
  - Amount input
  - Currency selection
  - Conversion options
- `App.jsx` manages:
  - State management
  - Conversion logic
  - Currency swapping

## 📸 Preview

Currency converter interface with real-time conversion.

## 📌 Future Improvements

- Add more currency symbols
- Add conversion history
- Add loading animation
- Add dark mode

## 👨‍💻 Author

Kumar Sourav
