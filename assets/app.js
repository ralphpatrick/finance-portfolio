// ============================================
// Finance Operating System - Main App JS
// Common utilities and helpers
// ============================================

// Utility: Parse CSV data
function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim());
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(v => v.trim());
        const row = {};
        headers.forEach((header, index) => {
            row[header] = values[index];
        });
        data.push(row);
    }
    
    return data;
}

// Utility: Format currency
function formatCurrency(value, decimals = 0) {
    const num = parseFloat(value);
    if (isNaN(num)) return '$0';
    return '$' + num.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

// Utility: Format percentage
function formatPercent(value, decimals = 1) {
    const num = parseFloat(value);
    if (isNaN(num)) return '0%';
    return num.toFixed(decimals) + '%';
}

// Utility: Format number
function formatNumber(value, decimals = 0) {
    const num = parseFloat(value);
    if (isNaN(num)) return '0';
    return num.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    });
}

// Utility: Load CSV file
async function loadCSV(filename) {
    try {
        const response = await fetch(`../data/${filename}`);
        const text = await response.text();
        return parseCSV(text);
    } catch (error) {
        console.error(`Error loading ${filename}:`, error);
        return [];
    }
}

// Utility: Calculate variance
function calculateVariance(actual, budget) {
    const act = parseFloat(actual);
    const bud = parseFloat(budget);
    return act - bud;
}

// Utility: Calculate variance percentage
function calculateVariancePercent(actual, budget) {
    const act = parseFloat(actual);
    const bud = parseFloat(budget);
    if (bud === 0) return 0;
    return ((act - bud) / bud) * 100;
}

// Utility: Get month name from YYYY-MM
function getMonthName(dateStr) {
    const [year, month] = dateStr.split('-');
    const date = new Date(year, parseInt(month) - 1);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

// Smooth scroll for navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});

// Export utilities for module pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        parseCSV,
        formatCurrency,
        formatPercent,
        formatNumber,
        loadCSV,
        calculateVariance,
        calculateVariancePercent,
        getMonthName
    };
}
