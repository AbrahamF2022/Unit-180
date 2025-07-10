# Unit 180 - Mentorship Website

A modern, responsive website for Unit 180, a mentorship organization focused on guiding young men toward confidence, purpose, and leadership.

## Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Dynamic Animations**: Scroll-triggered animations and smooth transitions
- **Form Integration**: Google Sheets integration for form submissions
- **Modern UI**: Clean, professional design with glassmorphic elements
- **Accessibility**: Built with accessibility best practices

## Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbrahamF2022/Unit-180.git
   cd Unit-180
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Copy `env.example` to `.env.local`
   - Update the Google Apps Script URL in `.env.local`:
     ```
     REACT_APP_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## Google Sheets Integration

This project includes Google Sheets integration for form submissions. See `GOOGLE_SHEETS_SETUP.md` for detailed setup instructions.

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons
- Google Apps Script

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions and configurations
└── ui/            # Shadcn/ui components
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
# Wed Jul  9 21:22:54 PDT 2025
