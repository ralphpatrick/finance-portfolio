# 📊 CSV Upload Format Guide

## How to Use Custom Data

Each module accepts CSV files with specific column headers. Follow these formats exactly:

---

## 📈 Forecasting Module

**File:** `pl_monthly.csv`

**Required Columns (in this exact order):**
```
month,revenue,cogs,gross_profit,sales_marketing,research_dev,general_admin,total_opex,ebitda,budget_revenue,budget_cogs,budget_opex,forecast_revenue,forecast_cogs,forecast_opex
```

**Example Row:**
```
2024-01,1250000,375000,875000,425000,180000,95000,700000,175000,1200000,360000,680000,1280000,384000,710000
```

**Field Descriptions:**
- `month`: YYYY-MM format (e.g., 2024-01)
- `revenue`: Total monthly revenue in dollars
- `cogs`: Cost of goods sold
- `gross_profit`: Revenue - COGS
- `sales_marketing`: S&M expenses
- `research_dev`: R&D expenses
- `general_admin`: G&A expenses
- `total_opex`: Total operating expenses
- `ebitda`: Earnings before interest, taxes, depreciation, amortization
- `budget_*`: Budget comparison figures
- `forecast_*`: Forecast scenario figures

**Download Template:** `TEMPLATE_pl_monthly.csv`

---

## 💰 Sales Finance Module

### File 1: Promotional Events

**File:** `promo_events.csv`

**Required Columns:**
```
promo_id,promo_name,start_date,end_date,channel,discount_pct,promo_spend,baseline_revenue,promo_revenue,incremental_revenue,incremental_margin,roi
```

**Example Row:**
```
P001,Spring Launch,2024-03-01,2024-03-15,Direct,15,45000,380000,520000,140000,91000,2.02
```

**Field Descriptions:**
- `promo_id`: Unique identifier (e.g., P001, P002)
- `promo_name`: Campaign name
- `start_date`: YYYY-MM-DD
- `end_date`: YYYY-MM-DD
- `channel`: Direct, Partner, or Marketplace
- `discount_pct`: Discount percentage (number only, no % sign)
- `promo_spend`: Marketing spend for campaign
- `baseline_revenue`: Revenue without promo
- `promo_revenue`: Revenue during promo
- `incremental_revenue`: Promo revenue - Baseline revenue
- `incremental_margin`: Margin from incremental revenue
- `roi`: Return on investment (decimal, e.g., 2.02 = 2.02x)

**Download Template:** `TEMPLATE_promo_events.csv`

### File 2: Channel Sales

**File:** `channel_sales.csv`

**Required Columns:**
```
month,direct_revenue,direct_cogs,partner_revenue,partner_cogs,marketplace_revenue,marketplace_cogs,direct_margin_pct,partner_margin_pct,marketplace_margin_pct
```

**Example Row:**
```
2024-01,625000,156250,437500,140000,187500,78750,75.0,68.0,58.0
```

**Download Template:** `TEMPLATE_channel_sales.csv`

---

## 🔍 Spend & Accruals Module

### File 1: Vendor Spend

**File:** `vendor_spend.csv`

**Required Columns:**
```
month,vendor_name,category,amount,invoice_date,payment_status,aging_days,anomaly_flag
```

**Example Row:**
```
2024-01,ShipFast Logistics,Logistics,45000,2024-01-15,Paid,0,No
```

**Field Descriptions:**
- `month`: YYYY-MM
- `vendor_name`: Vendor company name
- `category`: Logistics, IT, or Marketing
- `amount`: Invoice amount
- `invoice_date`: YYYY-MM-DD
- `payment_status`: Paid or Pending
- `aging_days`: Days since invoice (number)
- `anomaly_flag`: Yes or No

**Download Template:** `TEMPLATE_vendor_spend.csv`

### File 2: Accruals

**File:** `accruals.csv`

**Required Columns:**
```
month,category,incurred_amount,invoiced_amount,accrual_amount,variance,variance_pct,status
```

**Example Row:**
```
2024-01,Logistics,45000,45000,0,0,0.0,Matched
```

**Download Template:** `TEMPLATE_accruals.csv`

---

## 💵 Treasury Module

**File:** `cash_13week.csv`

**Required Columns:**
```
week_ending,cash_inflows,cash_outflows,net_cash_flow,ending_cash,notes
```

**Example Row:**
```
2025-02-07,580000,520000,60000,2450000,Current week
```

**Field Descriptions:**
- `week_ending`: YYYY-MM-DD (Saturday recommended)
- `cash_inflows`: Cash received
- `cash_outflows`: Cash paid
- `net_cash_flow`: Inflows - Outflows
- `ending_cash`: Cumulative cash balance
- `notes`: Any text notes

**Download Template:** `TEMPLATE_cash_13week.csv`

---

## 🛠️ CSV Formatting Rules

### ✅ DO:
- Use exact column headers (case-sensitive)
- Use YYYY-MM-DD for dates
- Use numbers only (no $ signs or commas)
- Use decimals for percentages (75.0, not 75% or 0.75)
- Save as UTF-8 encoding
- Use `.csv` file extension

### ❌ DON'T:
- Add extra columns
- Change column order
- Use text in number fields
- Add currency symbols ($, €, etc.)
- Add thousands separators (commas)
- Use different date formats

---

## 🧪 Testing Your CSV

1. **Download the template** for your module
2. **Open in Excel/Google Sheets**
3. **Add your data** following the format
4. **Save as CSV** (not Excel format)
5. **Upload** using the file picker
6. Dashboard should reload with "Custom CSV loaded!" alert

---

## ❗ Troubleshooting

**Problem: "NaN%" or "$0K" appears**
- Check column headers match exactly
- Ensure numbers don't have commas or symbols
- Verify date format is YYYY-MM-DD

**Problem: Upload does nothing**
- Ensure file extension is `.csv`
- Check file isn't corrupted
- Try downloading template and modifying it

**Problem: Data loads but charts are wrong**
- Check calculations: gross_profit = revenue - cogs
- Verify all required columns are present
- Ensure consistent data types (all numbers)

---

## 📥 Quick Start

1. Download template: Click "📥 Download Template" in any module
2. Open in spreadsheet software
3. Replace sample data with yours
4. Keep the header row unchanged
5. Save as CSV
6. Upload using file picker
7. Dashboard reloads automatically!

---

## 💡 Pro Tips

- **Keep headers unchanged** - The system reads these exactly
- **Test with 2-3 rows first** - Ensure format works before full data
- **Use the sample CSVs** in `/data` folder as reference
- **Numbers only** - No formatting in CSV (that happens in the dashboard)
- **Consistent dates** - Always YYYY-MM-DD format

---

**Need help?** Check the sample CSV files in the `/data` folder of this project!
