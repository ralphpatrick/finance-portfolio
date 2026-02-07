# 🚀 GitHub Update Guide - Version 2.0

## What Changed

### ✨ New Features
1. **Apple-Inspired Design** - Clean, minimalist aesthetic like apple.com
2. **CSV Upload Feature** - Upload your own data files to any module
3. **Removed duplicate content** - "Five Finance Modules" section removed

### 🎨 Design Updates
- Minimal Apple-style navigation bar with blur effect
- Clean white hero section (no gradient)
- Pill-shaped buttons (980px border-radius)
- Softer shadows and borders
- SF Pro-inspired typography
- Subtle hover effects

---

## 📂 Files to Push to GitHub

Since you already committed the first version, here's what to do:

### **Option 1: Update ALL Files (Recommended)**

This will replace everything with the new Apple-inspired design:

```bash
# Navigate to your local repo
cd finance-operating-system

# Delete old files
rm -rf *

# Extract the NEW ZIP here
# (Drag all files from finance-os folder into your repo)

# Stage all changes
git add .

# Commit with a clear message
git commit -m "v2.0: Apple-inspired redesign + CSV upload feature"

# Push to GitHub
git push origin main
```

---

### **Option 2: Update Specific Files Only**

If you want to keep some files unchanged, update these:

**Must Update:**
```
assets/styles.css          ← Complete redesign
index.html                 ← Removed duplicate section
modules/forecasting.html   ← Added CSV upload
modules/sales-finance.html ← Added CSV upload
modules/spend-accruals.html ← Added CSV upload
modules/treasury.html      ← Added CSV upload
```

**Can Skip:**
```
README.md                  ← No changes
QUICKSTART.md             ← No changes
data/*.csv                ← No changes
modules/board-pack.html   ← No changes
```

Git commands:
```bash
# Navigate to repo
cd finance-operating-system

# Replace the files listed above
# Then:
git add assets/styles.css
git add index.html
git add modules/*.html

git commit -m "Add Apple design + CSV upload feature"
git push origin main
```

---

## 🎯 Quick Update (Fastest Method)

```bash
# 1. Extract the new ZIP
# 2. Navigate to your repo folder
cd finance-operating-system

# 3. Copy ALL new files over the old ones
# 4. Push
git add .
git commit -m "v2.0: Apple redesign + CSV uploads"
git push origin main
```

---

## ✅ What You'll See After Pushing

1. **GitHub Pages will auto-rebuild** (wait 1-2 minutes)
2. **New Apple-like design** - Clean, minimal, professional
3. **CSV Upload buttons** in all 5 modules
4. **Removed duplicate** "Five Finance Modules" section
5. **Smoother animations** and hover effects

---

## 🧪 Test the CSV Upload Feature

After deployment, test it:

1. Open any module (e.g., Forecasting)
2. Look for "Upload Your Data" button
3. Click and select a CSV file
4. Dashboard will reload with your data!

**CSV Format Requirements:**
- Must match the column headers of sample data
- See existing CSVs in `/data` folder for format
- Example: `pl_monthly.csv` needs columns: month, revenue, cogs, etc.

---

## 📊 What Stays the Same

- All 7 sample CSV files (unchanged)
- 5 module functionalities (same calculations)
- README and documentation
- File structure
- GitHub Pages deployment process

---

## 🎨 Design Comparison

### Before (v1.0):
- Purple gradient hero
- Bold colors and shadows
- Traditional card designs
- Uppercase text
- Heavy borders

### After (v2.0):
- Clean white hero
- Apple blue (#0071e3)
- Minimal card borders
- Normal case text
- Subtle blur effects
- Pill buttons (rounded)

---

## 🔧 Troubleshooting

**Q: My site still looks like v1.0 after pushing?**
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Wait 2-3 minutes for GitHub Pages to rebuild
- Clear browser cache

**Q: CSV upload not working?**
- Make sure your CSV has the exact column headers as sample files
- Check browser console (F12) for errors
- File must be `.csv` extension

**Q: Design looks broken?**
- Ensure `assets/styles.css` was updated
- Check that file uploaded correctly to GitHub
- View source to confirm new CSS is loaded

---

## 📝 Commit Message Suggestions

```
✨ v2.0: Apple-inspired redesign + CSV upload feature
🎨 Redesign with Apple minimalist aesthetic
✨ Add CSV file upload to all modules
🔥 Remove duplicate "Five Finance Modules" section
💄 Update to clean, minimal design system
```

---

## 🎯 Priority Files to Update

**Critical (must update for new design):**
1. `assets/styles.css` ← Entire design system
2. `index.html` ← Removed duplicate section

**Important (for CSV upload feature):**
3. `modules/forecasting.html`
4. `modules/sales-finance.html`
5. `modules/spend-accruals.html`
6. `modules/treasury.html`

---

**Ready to push? Just run:**

```bash
git add .
git commit -m "v2.0: Apple redesign + CSV uploads"
git push origin main
```

Your GitHub Pages site will update automatically in 1-2 minutes! 🚀
