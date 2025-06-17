# 🧭 Page Navigation App

![Logo](./public/vite.svg) <!-- Replace with your actual logo if available -->

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Build](https://img.shields.io/github/actions/workflow/status/your-username/page-navigation-app/build.yml)](https://github.com/your-username/page-navigation-app/actions)
[![Stars](https://img.shields.io/github/stars/your-username/page-navigation-app?style=social)](https://github.com/your-username/page-navigation-app)

A **React-based** web application featuring a **draggable, sortable page navigation bar** with a powerful context menu for page management.  
Built using **Vite**, `@dnd-kit`, `lucide-react`, and **Tailwind CSS** for a modern and responsive UI.

---

## 📚 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Components](#-components)
- [Contributing](#-contributing)
- [Development Guidelines](#-development-guidelines)
- [Potential Improvements](#-potential-improvements)
- [License](#-license)

---

## ✨ Features

✅ **Drag-and-Drop Navigation**  
Reorder pages using drag-and-drop, powered by `@dnd-kit`.

✅ **Context Menu on Right Click**  
Set as first page, Rename, Copy, Duplicate, Delete (some are WIP).

✅ **Dynamic Page Addition**  
Add pages between or at the end of the nav bar.

✅ **Responsive UI**  
Styled with Tailwind CSS for desktop and mobile support.

✅ **Keyboard Accessibility**  
Navigate and reorder pages using the keyboard.

✅ **Active Page Highlight**  
Current page gets special styling with context menu trigger.

---

## ⚙️ Tech Stack

- **React** – UI Library
- **Vite** – Lightning-fast bundler
- **@dnd-kit/core & sortable** – Drag-and-drop sorting
- **lucide-react** – Elegant icon system
- **Tailwind CSS** – Utility-first modern styling
- **TypeScript-like Practices** – Type-safe patterns with JSDoc and interfaces (JS only)

---

## 📦 Installation

> Requires **Node.js v16+**

### 1. Clone the repository
```bash
git clone https://github.com/your-username/page-navigation-app.git
cd page-navigation-app
