# Finance Operating System (Mini-CFO OS)

> **A comprehensive FP&A portfolio project demonstrating strategic finance capabilities across forecasting, sales analytics, operations, executive reporting, and treasury management.**

🔗 **[Live Demo](https://github.com/ralphpatrick/finance-portfolio)**

---

## 📊 Overview

The Finance Operating System is an integrated finance framework showcasing how strategic finance operates across the full business lifecycle—from planning and forecasting to operational execution and board-level reporting. Built as a static web application, it demonstrates proficiency in:

- **FP&A (Financial Planning & Analysis)**: Driver-based forecasting, budget variance analysis, scenario modeling
- **Sales Finance**: Promotional ROI measurement, channel P&L analysis, incremental margin calculation
- **Operations Finance**: Vendor spend analytics, accrual tracking, invoice aging and anomaly detection
- **Executive Reporting**: Board-ready summaries with auto-generated commentary and KPIs
- **Treasury Management**: 13-week cash forecasting, runway calculation, funding scenario planning

---

## 🎯 Key Features

### 1. **Forecasting Engine** (FP&A Core)
- **Driver-based financial model** with 24 months of historical and projected data
- **Budget vs Actual vs Forecast** comparison with toggle controls
- **Scenario planning**: Base, Upside, and Downside cases
- **Key outputs**: Monthly P&L, Gross Margin %, EBITDA %, Monthly Burn Rate
- **Interactive charts**: Revenue trends, margin analysis, P&L waterfall

### 2. **Sales Finance Analytics**
- **Promotional campaign tracking** with pre/post evaluation
- **Incremental revenue analysis**: Baseline vs promo performance
- **ROI calculation**: Spend efficiency and incremental margin measurement
- **Channel profitability**: Direct, Partner, and Marketplace P&L comparison
- **Visual insights**: ROI charts, channel mix trends, performance tables

### 3. **Spend & Accruals Dashboard** (Operations)
- **Vendor spend analytics** across Logistics, IT, and Marketing categories
- **Accrual tracking**: Incurred vs invoiced variance monitoring
- **Invoice aging analysis** with automatic anomaly flags
- **Spend trend visualization** by category over time
- **Reconciliation tools**: Status tracking (Matched, Under-invoiced, Not-invoiced)

### 4. **Board Pack** (Executive Reporting)
- **One-page executive summary** optimized for print-to-PDF
- **Auto-generated KPIs**: Revenue, Margins, EBITDA, Headcount metrics
- **Narrative commentary**: Data-driven insights with contextual recommendations
- **Financial summary table**: Current vs Prior vs Budget with variance analysis
- **Print-ready CSS**: Professional formatting for board presentations

### 5. **Treasury Dashboard** (Cash Management)
- **13-week cash flow forecast** with weekly projections
- **Cash runway calculation** in weeks and months
- **Funding scenario planning** with automated recommendations
- **Weekly cash bridge**: Inflows, outflows, and net cash flow tracking
- **Visual analytics**: Cash position trends, runway projection charts

---

## 🚀 Quick Start

### **View Online**
The easiest way to explore the Finance OS is to visit the live demo (once deployed to GitHub Pages).

### **Run Locally**
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/finance-operating-system.git
   cd finance-operating-system
   ```

2. Open `index.html` in any modern web browser:
   ```bash
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

   Or simply drag `index.html` into your browser window.

**No build process required!** This is a pure HTML/CSS/JavaScript application.

---

## 📁 Project Structure

```
finance-operating-system/
├── index.html              # Main landing page
├── README.md               # This file
├── favicon.ico             # Site favicon
├── assets/
│   ├── styles.css          # Global styles and component styling
│   └── app.js              # Shared utilities and helper functions
├── data/
│   ├── pl_monthly.csv      # 24 months of P&L data (Revenue, COGS, OpEx)
│   ├── headcount.csv       # Department staffing levels by month
│   ├── promo_events.csv    # Promotional campaigns with ROI metrics
│   ├── channel_sales.csv   # Revenue and margins by sales channel
│   ├── vendor_spend.csv    # Vendor transactions with aging and flags
│   ├── accruals.csv        # Incurred vs invoiced tracking
│   └── cash_13week.csv     # Weekly cash flow projections
└── modules/
    ├── forecasting.html    # FP&A forecasting module
    ├── sales-finance.html  # Sales analytics and promo ROI
    ├── spend-accruals.html # Ops finance spend tracking
    ├── board-pack.html     # Executive summary (print-ready)
    └── treasury.html       # Cash forecasting and runway
```

---

## 📊 Data Dictionary

### **pl_monthly.csv**
- **Revenue**: Monthly top-line revenue
- **COGS**: Cost of goods sold
- **Gross Profit**: Revenue - COGS
- **OpEx Categories**: Sales & Marketing, R&D, G&A
- **EBITDA**: Earnings before interest, taxes, depreciation, amortization
- **Budget/Forecast columns**: Comparative scenarios

### **headcount.csv**
- **Department breakdown**: Engineering, Sales, Marketing, Operations, Finance
- **Total headcount**: Aggregate employee count
- **Budget comparison**: Planned vs actual staffing levels

### **promo_events.csv**
- **Campaign details**: Name, dates, channel, discount %
- **Baseline revenue**: Pre-promo run rate
- **Promo revenue**: Performance during campaign
- **Incremental metrics**: Lift, margin, ROI calculation

### **channel_sales.csv**
- **Channel revenue**: Direct, Partner, Marketplace
- **Channel COGS**: Cost of sales by channel
- **Margin %**: Profitability by channel (75%, 68%, 58%)

### **vendor_spend.csv**
- **Vendor transactions**: Logistics, IT, Marketing vendors
- **Payment status**: Paid, Pending
- **Aging days**: Days since invoice date
- **Anomaly flags**: Automated alerts for review

### **accruals.csv**
- **Incurred amount**: Expenses recognized in period
- **Invoiced amount**: Vendor invoices received
- **Accrual gap**: Difference requiring adjustment
- **Status**: Matched, Under-invoiced, Not-invoiced

### **cash_13week.csv**
- **Weekly cash flows**: Inflows, outflows, net cash
- **Ending cash balance**: Projected cash position
- **Notes**: Context for significant cash events

---

## 💻 Technical Stack

- **Frontend**: HTML5, CSS3 (Flexbox/Grid), Vanilla JavaScript
- **Charts**: Chart.js 4.4.0 (via CDN)
- **Data Parsing**: Native JavaScript CSV parsing
- **Deployment**: GitHub Pages compatible (static site)
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)

**No dependencies, no build tools, no backend required.**

---

## 🌐 Deploy to GitHub Pages

1. **Fork or clone** this repository to your GitHub account

2. **Enable GitHub Pages**:
   - Go to repository **Settings**
   - Navigate to **Pages** section (left sidebar)
   - Under "Source", select branch: **main** (or **master**)
   - Click **Save**

3. **Wait ~1 minute** for GitHub to build and deploy

4. **Access your site** at: `https://yourusername.github.io/finance-operating-system/`

5. **Update the README** to replace the demo link with your actual GitHub Pages URL

---

## 🎨 Customization Guide

### **Modify Data**
Edit any CSV file in the `/data` folder:
- Open CSV in Excel, Google Sheets, or any text editor
- Update values while maintaining column structure
- Save and refresh your browser—changes load automatically

### **Change Styling**
Edit `assets/styles.css`:
- Update CSS variables in `:root` for colors, spacing, fonts
- Modify component styles for custom branding
- Adjust responsive breakpoints for different screen sizes

### **Add New Metrics**
In any module HTML file:
1. Load additional data via `fetch()` and `parseCSV()`
2. Create new calculation functions
3. Add DOM elements for new visualizations
4. Update chart configurations or create new Chart.js instances

---

## 📈 Use Cases

This portfolio project is designed for:

- **FP&A Analysts** showcasing forecasting and variance analysis skills
- **Finance Managers** demonstrating multi-functional finance knowledge
- **Recruiters** evaluating strategic finance competency in 60 seconds
- **Students/Bootcamp Grads** building a professional finance portfolio
- **Career Switchers** proving finance expertise through applied projects

---

## 🔒 Data Disclaimer

**All data in this project is fictional and for demonstration purposes only.** 

No real company data, trade secrets, or confidential information is included. The financial models, metrics, and scenarios are representative examples based on typical SaaS/Fintech business models.

---

## 🤝 Contributing

This is a portfolio project, but suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new module'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

Feel free to use this as a template for your own finance portfolio projects. Attribution appreciated but not required.

---

## 📧 Contact

**Ralph Patrick Divina**  
Finance Analyst | FP&A Specialist  
📧 your.email@example.com  
💼 [LinkedIn](https://linkedin.com/in/yourprofile)  
🐙 [GitHub](https://github.com/yourusername)

---

## 🙏 Acknowledgments

- **Chart.js** for beautiful, responsive visualizations
- **GitHub Pages** for free static site hosting
- **Finance community** for inspiration on best practices in FP&A and strategic finance

---

**Built with ❤️ for finance professionals who code (and coders who do finance)**

*Last updated: February 2025*
