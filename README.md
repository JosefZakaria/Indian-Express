# Indian Express 2 - Web Application

A modern, high-performance web application for **Indian Express 2** located at Möllevångstorget in Malmö. Built from the ground up with a focus on speed, mobile responsiveness, and intuitive navigation.

## Tech Stack

* **Framework:** Next.js 14+ (App Router)
* **Styling:** Tailwind CSS
* **Internationalization:** `next-intl` (Swedish & English support)
* **Logic:** TypeScript for type-safe menu and rotation management.

## Key Features

* **Dynamic Lunch Rotation:** An automated system that rotates 20 dishes over a 4-week cycle (5 dishes per week). The logic is centralized in `lib/lunch-rotation.ts`.
* **Mobile-First Design:** Fully responsive layout featuring a signature **baby pink** theme (`#fce4ec`) as defined in the design requirements.
* **OrderYoyo Integration:** High-visibility Call-to-Action (CTA) buttons for Table Booking, Takeaway, and Delivery./page.tsx]
* **Streamlined Navigation:** A central dropdown menu providing instant access to all sections (Evening Menu, Lunch, Catering, etc.) without excessive scrolling.
* **Optimized Menu Pages:** Separate dedicated pages for Food and Drink menus to ensure a clean, fast-loading user interface./food-menu/page.tsx, josefzakaria/indian-express/Indian-Express-09c7e614848d9ed4a27a2d6bd0c09368dbee49ae/app/[locale]/drink-menu/page.tsx]

## Project Structure

```text
├── app/[locale]        # Internationalized routes (Home, Menus, Contact)
├── components          # Reusable UI components (Navbar, LunchList, etc.)
├── lib                 # Business logic, rotation helpers, and menu data
├── messages            # i18n translation files (JSON)
└── public              # Static assets, including logos and images

```

## Getting Started

1. Clone the repository.
2. Install dependencies:
```bash
npm install

```


3. Run the development server:
```bash
npm run dev

