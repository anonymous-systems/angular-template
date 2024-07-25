# Angular Project Template with Firebase & Material

This template streamlines the setup for new Angular projects, pre-integrated
with Firebase for backend services and Angular Material for UI components.
Future versions will be tagged to align with Angular releases.

## Key Features

- **Angular Material:**  Leverage a comprehensive library of pre-built UI
    components for a polished user experience.
- **Angular Fire:**  Seamlessly integrate Firebase services
    (authentication, database, storage, etc.) into your Angular app.
- **Google TypeScript:**  Style Adhere to recommended coding conventions
    for clean, consistent TypeScript code.
- **Local Development with Emulators:**  Easily test Firebase features
    locally before deploying.

## 🛠️ Tech Stack

- **Frontend:** Angular
- **Backend:** Firebase
- **UI Library:** Angular Material
- **Styling:** Angular Material (with potential for customization)
- **Code Style:** Google TypeScript Style

## 🏃 Getting Started

1. Clone the project

```bash
  git clone https://github.com/aaronjonesii/msu-class-scheduler
```

2. Install dependencies

```bash
  cd msu-class-scheduler
  npm i
```

3. Configure Firebase: Update `environment.ts` and
`environment.development.ts` in the `src/environments` directory with
your Firebase project settings.

4. Create `keys.ts`: Add this file to the `src/environments` directory
```typescript
// filename: keys.ts

  export const FIREBASE_API_KEY = '<Your Firebase Project API Key>';
  export const RECAPTCHA3_SITE_KEY = 'Your Recaptcha3 Site Key';
```


5. Start the development server with local emulators

```bash
  npm run dev
```

## 🧪 Running Tests

Unit tests:

```bash
  npm run test
```
Headless unit tests (For faster, browser-less testing):
```bash
  npm run test:headless
```

## 🤝 Feedback & Support

Have feedback, suggestions, or need help?
Email me at [aaron.jones@anonsys.tech](mailto:aaron.jones@anonsys.tech)

## ℹ️ Additional Information

- Optimizations:  This is a starting template. Performance optimizations and
    accessibility improvements can be added as the project progresses.

- License: [MIT](https://choosealicense.com/licenses/mit/)
