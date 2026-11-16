---
title: Mpesa Analyzer
category: Fintech
summary: Turns MPesa PDF statements into clear spending insights.
stack: [TypeScript, PDF parsing, Charts, Financial Analysis]
featured: true
order: 1
repo: https://github.com/bryan-mwas/transactions-analyzer
image: /images/mpesa.png
---

## The problem
M-Pesa is the financial heartbeat of millions across East Africa. However, monthly M-Pesa statements are distributed as encrypted, multi-page PDFs with dense, unstructured transaction logs. Individuals and micro-merchants find it exceedingly tedious to aggregate their spending, calculate total fees, or identify financial habits from raw PDF tables.

## What I built
A browser-native financial insights tool that decrypts and parses M-Pesa PDF statements entirely on the client side. The application extracts transaction metadata, classifies inflows and outflows (Paybill, Till numbers, P2P transfers, airtime purchases, and fee deductions), and surfaces interactive visual breakdowns of spending behavior over time.

## Privacy by design
Financial statements contain sensitive personal records. Mpesa Analyzer was architected to run 100% in the user's browser runtime. No statement contents, phone numbers, balances, or transaction details are ever transmitted to or stored on an external server.

## Lessons learned & impact
Building tools that fit African payment ecosystems requires deep attention to edge cases—such as reversal entries, multi-currency notations, and differing PDF formats across telecommunication operators.
