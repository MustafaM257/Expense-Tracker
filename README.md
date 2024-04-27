## Minimal Expense Tracker with Vue.js and TypeScript

This project is a minimal expense tracker application built with Vue.js 3 and TypeScript. It serves as a starting point for learning essential Vue.js functionalities and TypeScript practices while managing personal finances. The project leverages pnpm for dependency management.

### Features

- Track income and expenses
- View current balance
- Add new transactions
- Delete existing transactions
- Local storage persistence for data across sessions

### Technologies Used

- Vue.js 3
- TypeScript
- Tailwind CSS
- Vue Toastification
- pnpm (package manager)

### Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/MustafaM257/Expense-Tracker
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm run dev
   ```

   This will start the development server and open the application in your default browser at http://localhost:3000/.

### Project Structure

The project utilizes a basic component-based structure:

- `src` - Contains the source code for the application.
  - `components` - Houses reusable Vue components like Header, Balance, Transactions, etc.
  - `types` - Defines type interfaces for data structures like Transaction.
  - `App.vue` - The main application component.
- `pnpm.lock` - Lists the installed dependencies and their versions.
- `README.md` (This file) - Provides project information and instructions.

### Using the Application

1. Open http://localhost:3000/ in your browser.
2. Enter transaction details (amount, description, category) in the transaction form.
3. Click "Add Transaction" to add a new expense or income.
4. The application updates the balance, income, and expense totals.
5. You can view the list of transactions and delete them using the delete button.

### Scaling the Project

This project serves as a foundation for building a more comprehensive expense tracker. Here are some potential improvements:

- Implement user authentication for secure data storage.
- Add charts and visualizations for better expense analysis.
- Categorize transactions and filter them by category.
- Support recurring transactions.
- Integrate with budgeting features.

These enhancements can be achieved by leveraging Vue.js's rich ecosystem of libraries and tools.

### Contributing

Feel free to fork the repository, make changes, and submit pull requests to improve this project.
