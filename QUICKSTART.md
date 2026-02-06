# Finance OS - Quick Start Guide

## ✅ What You Have

A complete, production-ready Finance Operating System with:

- ✅ 1 Landing Page (index.html)
- ✅ 5 Interactive Module Pages
- ✅ 7 CSV Data Files (24 months of realistic data)
- ✅ Professional CSS styling
- ✅ JavaScript utilities and chart rendering
- ✅ Print-ready Board Pack
- ✅ Complete README documentation

**Total Files: 17**

---

## 🚀 Deploy in 3 Steps

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `finance-operating-system`
3. Description: "Strategic Finance Portfolio - FP&A, Sales Finance, Operations, Treasury"
4. **Public** repository
5. **Do NOT** initialize with README (we have one)
6. Click **Create Repository**

### Step 2: Upload Files

**Option A: GitHub Web Interface (Easiest)**

1. On your new repo page, click **uploading an existing file**
2. Drag and drop ALL files from the `finance-os` folder
3. Commit message: "Initial commit - Finance Operating System"
4. Click **Commit changes**

**Option B: Command Line (If you have Git installed)**

```bash
cd finance-os
git init
git add .
git commit -m "Initial commit - Finance Operating System"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/finance-operating-system.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to repository **Settings**
2. Click **Pages** in left sidebar
3. Under "Source":
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes
6. Your site will be live at:
   ```
   https://YOUR_USERNAME.github.io/finance-operating-system/
   ```

---

## 🧪 Test Locally First (Optional)

Before deploying, you can test locally:

1. Open `finance-os/index.html` in your browser
2. Click through all 5 modules
3. Verify charts load correctly
4. Test the Board Pack print function (Ctrl/Cmd + P)

**Important**: Some browsers block local file access. If CSV data doesn't load:
- Use Firefox (best for local testing)
- Or run a local server:
  ```bash
  cd finance-os
  python -m http.server 8000
  # Visit http://localhost:8000
  ```

---

## 📝 Customize Before Deploying

### Update README Contact Info

Edit `README.md` and replace:

```markdown
**[Your Name]**  
Finance Analyst | FP&A Specialist  
📧 your.email@example.com  
💼 [LinkedIn](https://linkedin.com/in/yourprofile)  
🐙 [GitHub](https://github.com/yourusername)
```

### Update Demo Link

After deployment, edit `README.md` line 5:

```markdown
🔗 **[Live Demo](https://YOUR_USERNAME.github.io/finance-operating-system/)**
```

### Optional: Customize Colors

Edit `assets/styles.css` lines 9-14 to change color scheme:

```css
:root {
    --primary: #2563eb;      /* Main blue */
    --secondary: #10b981;    /* Green */
    --accent: #f59e0b;       /* Orange */
    /* ... */
}
```

---

## 🎯 What Recruiters Will See

### Landing Page (60-Second Scan)
- Professional hero section
- 5 clearly labeled modules
- Technical stack badges
- Download links for data

### Each Module Shows
- **Forecasting**: Driver-based P&L model, 3 scenarios
- **Sales Finance**: Promo ROI analysis, channel economics
- **Spend & Accruals**: Vendor analytics, anomaly detection
- **Board Pack**: Executive summary (print-ready PDF)
- **Treasury**: 13-week cash forecast, runway calculation

### Impression Delivered
✅ "This person understands end-to-end finance operations"  
✅ "They can code AND do strategic finance"  
✅ "Portfolio quality matches senior FP&A analyst level"

---

## 📊 File Manifest

```
finance-os/
├── index.html                 # Main landing page
├── README.md                  # Project documentation
├── favicon.ico                # Browser icon (placeholder)
│
├── assets/
│   ├── styles.css            # Global styling (4,400 lines)
│   └── app.js                # Shared utilities
│
├── data/
│   ├── pl_monthly.csv        # 24 months P&L
│   ├── headcount.csv         # Department staffing
│   ├── promo_events.csv      # Campaign performance
│   ├── channel_sales.csv     # Revenue by channel
│   ├── vendor_spend.csv      # Expense tracking
│   ├── accruals.csv          # Reconciliation data
│   └── cash_13week.csv       # Cash projections
│
└── modules/
    ├── forecasting.html      # FP&A module
    ├── sales-finance.html    # Promo analytics
    ├── spend-accruals.html   # Ops finance
    ├── board-pack.html       # Executive report
    └── treasury.html         # Cash management
```

---

## 🔧 Troubleshooting

### Charts Not Loading?
- **Local testing**: Use Firefox or run local server
- **GitHub Pages**: Wait 2-3 minutes after enabling Pages
- **Check**: Browser console (F12) for errors

### CSV Data Not Loading?
- **Verify**: All CSV files are in `/data` folder
- **Check**: File paths in HTML use `../data/filename.csv`
- **GitHub Pages**: May take 1-2 minutes to sync files

### Styling Issues?
- **Check**: `assets/styles.css` is uploaded
- **Verify**: HTML files reference `../assets/styles.css`
- **Clear**: Browser cache (Ctrl/Cmd + Shift + R)

---

## 🎓 How to Talk About This Project

### In Interviews

**"Tell me about your portfolio project"**

> "I built a Finance Operating System that demonstrates my full-stack finance capabilities. It includes five integrated modules covering FP&A forecasting, sales analytics with promotional ROI, operational spend tracking, board-level reporting, and treasury management with cash runway analysis. I used driver-based models with scenario planning, implemented automated variance analysis, and created print-ready executive summaries. The entire system runs on static HTML/CSS/JavaScript and is deployed on GitHub Pages."

**Follow-up questions you can answer:**

- ✅ How did you calculate promotional ROI?
- ✅ What's the difference between accrual accounting and cash accounting?
- ✅ How do you build a 13-week cash forecast?
- ✅ What are the key metrics for board-level reporting?
- ✅ How do you handle budget variance analysis?

### On Your Resume

**Portfolio Project:**
```
Finance Operating System (Mini-CFO OS) | github.io/finance-os
• Built full-stack finance dashboard with 5 modules: FP&A, Sales Finance, 
  Operations, Board Reporting, and Treasury
• Implemented driver-based forecasting models with Budget/Actual/Forecast 
  scenarios across 24 months of P&L data
• Developed promotional ROI framework measuring incremental revenue, margin, 
  and campaign efficiency across 3 sales channels
• Created automated accrual tracking system with invoice aging and anomaly 
  detection for $1M+ monthly vendor spend
• Designed board-ready executive summaries with auto-generated KPIs and 
  commentary (print-to-PDF optimized)
```

---

## 📈 Next Steps After Deployment

1. **Share the link** on LinkedIn with a short post
2. **Add to resume** under "Projects" or "Portfolio"
3. **Fork and customize** - add your own data or features
4. **Get feedback** - share with finance mentors
5. **Keep iterating** - this is version 1.0!

---

## 💡 Pro Tips

- **Customize the data** to match your industry experience (retail, fintech, SaaS, etc.)
- **Add your photo/bio** to the landing page for personal branding
- **Create a video walkthrough** explaining key features (3-5 min)
- **Write a blog post** about building it and share on LinkedIn
- **Keep it updated** - add new modules as you learn new skills

---

**You're ready to deploy! 🚀**

Questions? Check the main README.md for detailed documentation.
