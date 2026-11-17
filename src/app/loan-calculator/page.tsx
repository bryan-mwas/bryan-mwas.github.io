"use client";

import { useState, FormEvent, useId } from "react";
import { LoanAmortizationSchedule } from "@/lib/loanCalculator";
import PageHeader from "@/components/PageHeader";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";

function formatCurrency(n: number) {
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function LoanCalculatorPage() {
  const [principal, setPrincipal] = useState<string>("100000");
  const [rate, setRate] = useState<string>("10.5");
  const [years, setYears] = useState<string>("5");
  const [customInstallments, setCustomInstallments] = useState<string>("");
  const [scenarios, setScenarios] = useState<LoanAmortizationSchedule[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const errorId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setErrorMessage(null);

    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const y = parseFloat(years);
    const c =
      customInstallments.trim() !== ""
        ? parseFloat(customInstallments)
        : undefined;

    if (isNaN(p) || p <= 0) {
      setErrorMessage("Please enter a valid loan principal greater than 0.");
      return;
    }
    if (isNaN(r) || r <= 0) {
      setErrorMessage(
        "Please enter a valid annual interest rate greater than 0.",
      );
      return;
    }
    if (isNaN(y) || y <= 0) {
      setErrorMessage("Please enter a valid loan term in years.");
      return;
    }
    if (c !== undefined && (isNaN(c) || c <= 0)) {
      setErrorMessage("Custom monthly installment must be greater than 0.");
      return;
    }

    try {
      const scenario = new LoanAmortizationSchedule({
        principal: p,
        rate: r,
        years: y,
        customInstallment: c,
      });

      // Execute calculation to ensure schedule computes without error
      scenario.getArmotizationSchedule();
      setScenarios((prev) => [...prev, scenario]);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred during calculation.");
      }
    }
  }

  function handleDeleteScenario(indexToRemove: number) {
    setScenarios((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  }

  const latestScenario =
    scenarios.length > 0 ? scenarios[scenarios.length - 1] : null;
  const baseScenario = scenarios.length > 0 ? scenarios[0] : null;

  return (
    <main id="main-content" tabIndex={-1} className="page-layout calc-container">
      <PageHeader
        tag="Interactive Calculator"
        title="Loan Amortization Simulator"
        subtitle="High-precision financial computing tool: model repayment schedules, test custom monthly installments, and calculate interest savings over time."
      />

      <div className="calc-card">
        <form onSubmit={handleSubmit} noValidate>
          {errorMessage ? (
            <div id={errorId} className="error-banner" role="alert">
              <strong>Error:</strong> {errorMessage}
            </div>
          ) : null}

          <div className="form-grid">
            <div className="field-group">
              <label htmlFor="principal" className="field-label">
                <span>Principal Amount</span>
                <span className="field-unit">(KES)</span>
              </label>
              <input
                id="principal"
                name="principal"
                type="number"
                inputMode="decimal"
                min="1"
                step="any"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                placeholder="e.g. 100000"
                className="field-input"
                aria-invalid={errorMessage ? "true" : undefined}
                aria-describedby={errorMessage ? errorId : undefined}
                required
              />
            </div>

            <div className="field-group">
              <label htmlFor="rate" className="field-label">
                <span>Annual Interest Rate</span>
                <span className="field-unit">(%)</span>
              </label>
              <input
                id="rate"
                name="rate"
                type="number"
                inputMode="decimal"
                min="0.01"
                step="0.01"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="e.g. 10.5"
                className="field-input"
                aria-invalid={errorMessage ? "true" : undefined}
                aria-describedby={errorMessage ? errorId : undefined}
                required
              />
            </div>

            <div className="field-group">
              <label htmlFor="years" className="field-label">
                <span>Loan Term</span>
                <span className="field-unit">(Years)</span>
              </label>
              <input
                id="years"
                name="years"
                type="number"
                inputMode="decimal"
                min="0.1"
                step="any"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                placeholder="e.g. 5"
                className="field-input"
                aria-invalid={errorMessage ? "true" : undefined}
                aria-describedby={errorMessage ? errorId : undefined}
                required
              />
            </div>

            <div className="field-group">
              <label htmlFor="customInstallment" className="field-label">
                <span>Custom Monthly EMI</span>
                <span className="field-unit">(KES)</span>
              </label>
              <input
                id="customInstallment"
                name="customInstallment"
                type="number"
                inputMode="decimal"
                min="1"
                step="any"
                value={customInstallments}
                onChange={(e) => setCustomInstallments(e.target.value)}
                placeholder="e.g. 2500"
                className="field-input"
                aria-invalid={errorMessage ? "true" : undefined}
                aria-describedby={errorMessage ? errorId : undefined}
              />
            </div>
          </div>

          <div className="calc-actions">
            <button type="submit" className="btn btn-primary btn-tactile">
              Calculate Schedule &rarr;
            </button>
            <button
              type="button"
              className="btn btn-ghost btn-tactile"
              onClick={() => {
                setScenarios([]);
                setErrorMessage(null);
              }}
            >
              Clear All
            </button>
          </div>
        </form>

        {latestScenario ? (
          <div className="lcd-display-tray">
            <div className="lcd-display">
              <div className="lcd-label">Monthly EMI (KES)</div>
              <div className="lcd-value">
                {formatCurrency(
                  latestScenario.customInstallments ||
                    latestScenario.getEquatedMonthlyInstallments()
                )}
              </div>
            </div>
            <div className="lcd-display">
              <div className="lcd-label">Total Interest (KES)</div>
              <div className="lcd-value">
                {formatCurrency(latestScenario.total_interest)}
              </div>
            </div>
            <div className="lcd-display">
              <div className="lcd-label">Repayment Duration</div>
              <div className="lcd-value">
                {latestScenario.months_taken} Months
              </div>
            </div>
            <div className="lcd-display">
              <div className="lcd-label">Debt-Free Target</div>
              <div className="lcd-value" style={{ fontSize: "1.15rem" }}>
                {latestScenario.getCompletionDate()}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <section aria-label="Generated loan scenarios">
        <div className="section-head">
          <div>
            <span className="section-subhead">Comparison</span>
            <h2>Saved Scenarios ({scenarios.length})</h2>
          </div>
        </div>

        {scenarios.length === 0 ? (
          <div className="empty-state">
            <h3>No scenarios calculated yet</h3>
            <p>
              Adjust the parameters above and click &ldquo;Calculate
              Schedule&rdquo; to simulate payoff models and interest metrics.
            </p>
          </div>
        ) : (
          <Accordion type="single" collapsible className="scenario-list">
            {scenarios.map((s, idx) => {
              const rows = s.getArmotizationSchedule();
              const interestPercent = (s.r * 12 * 100).toFixed(2);
              const customNote = s.customInstallments
                ? ` (Custom EMI: KSh ${formatCurrency(s.customInstallments)})`
                : "";
              const captionId = `scenario-${idx}-caption`;

              // Calculate savings against base scenario
              const interestDiff =
                baseScenario && idx > 0
                  ? baseScenario.total_interest - s.total_interest
                  : 0;

              return (
                <AccordionItem
                  key={idx}
                  value={`scenario-${idx}`}
                  className="scenario-card"
                >
                  <div className="scenario-header-bar">
                    <AccordionTrigger
                      className="scenario-header-wrap"
                      style={{ padding: 0 }}
                    >
                      <div className="scenario-info">
                        <div className="scenario-heading">
                          Scenario {idx + 1}: KSh {formatCurrency(s.principal)} @ {interestPercent}%
                          {customNote}
                        </div>
                        <div className="scenario-sub">
                          Term: <strong>{s.months_taken} months</strong> &middot; Total Interest:{" "}
                          <strong>KSh {formatCurrency(s.total_interest)}</strong> &middot; Payoff:{" "}
                          <strong>{s.getCompletionDate()}</strong>
                          {interestDiff > 0 ? (
                            <span
                              style={{
                                marginLeft: "8px",
                                color: "var(--green)",
                                fontWeight: 700,
                              }}
                            >
                              (Saved: KSh {formatCurrency(interestDiff)})
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </AccordionTrigger>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteScenario(idx);
                      }}
                      className="delete-action btn-tactile"
                      aria-label={`Delete scenario ${idx + 1}`}
                    >
                      Delete
                    </button>
                  </div>

                  <AccordionContent>
                    <div
                      tabIndex={0}
                      role="region"
                      aria-labelledby={captionId}
                      className="table-scroll table-wrapper"
                    >
                      <table className="schedule-table">
                        <caption id={captionId} className="visually-hidden">
                          Amortization schedule for Scenario {idx + 1}: {formatCurrency(s.principal)} at {interestPercent}%
                        </caption>
                        <thead>
                          <tr>
                            <th scope="col" className="text-left">Month</th>
                            <th scope="col" className="text-right">Opening Balance</th>
                            <th scope="col" className="text-right">Monthly EMI</th>
                            <th scope="col" className="text-right">Interest Paid</th>
                            <th scope="col" className="text-right">Principal Paid</th>
                            <th scope="col" className="text-right">Closing Balance</th>
                            <th scope="col" className="text-right">Cumulative Interest</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((r) => (
                            <tr key={r.month}>
                              <th scope="row" className="text-left row-header">
                                {r.month}
                              </th>
                              <td className="text-right">
                                {formatCurrency(r.opening_balance)}
                              </td>
                              <td className="text-right">{formatCurrency(r.emi)}</td>
                              <td className="text-right">
                                {formatCurrency(r.interest)}
                              </td>
                              <td className="text-right">
                                {formatCurrency(r.paidPrincipal)}
                              </td>
                              <td className="text-right">
                                {formatCurrency(r.closingBalance)}
                              </td>
                              <td className="text-right">
                                {formatCurrency(r.totalPaidInterest)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        )}
      </section>
    </main>
  );
}
