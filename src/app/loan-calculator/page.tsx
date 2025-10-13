"use client";
import { useState, FormEvent } from "react";
import { LoanAmortizationSchedule } from "@/lib/loanCalculator";
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

function App() {
  const [principal, setPrincipal] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [years, setYears] = useState<number>(0);
  const [customInstallments, setCustomInstallments] = useState<
    number | undefined
  >(undefined);
  const [scenarios, setScenarios] = useState<LoanAmortizationSchedule[]>([]);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const scenario = new LoanAmortizationSchedule({
      principal,
      rate,
      years,
      customInstallment: customInstallments,
    });
    setScenarios((s) => [...s, scenario]);
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4">
          Loan Repayment Scenarios
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded-lg shadow-sm space-y-3"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="principal"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Principal
              </label>
              <input
                id="principal"
                className="border rounded p-2 w-full"
                name="principal"
                onChange={(e) => setPrincipal(+e.target.value)}
                placeholder="Principal (e.g. 100000)"
                type="number"
              />
            </div>

            <div>
              <label
                htmlFor="rate"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Annual interest rate (%)
              </label>
              <input
                id="rate"
                className="border rounded p-2 w-full"
                name="rate"
                onChange={(e) => setRate(+e.target.value)}
                placeholder="Annual rate (%) e.g. 10.5"
                type="number"
                step="0.01"
              />
            </div>

            <div>
              <label
                htmlFor="years"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Loan term (years)
              </label>
              <input
                id="years"
                className="border rounded p-2 w-full"
                name="years"
                onChange={(e) => setYears(+e.target.value)}
                placeholder="Years"
                type="number"
              />
            </div>

            <div>
              <label
                htmlFor="customInstallment"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Custom monthly EMI (optional)
              </label>
              <input
                id="customInstallment"
                className="border rounded p-2 w-full"
                name="customInstallment"
                onChange={(e) =>
                  setCustomInstallments(
                    e.target.value === "" ? undefined : +e.target.value
                  )
                }
                placeholder="Custom monthly EMI (optional)"
                type="number"
              />
            </div>
          </div>

          <div className="flex gap-2 mt-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Generate scenario
            </button>
            <button
              type="button"
              className="bg-gray-200 px-4 py-2 rounded"
              onClick={() => {
                setScenarios([]);
              }}
            >
              Clear scenarios
            </button>
          </div>
        </form>

        <div className="mt-6">
          <Accordion type="single" collapsible className="space-y-4">
            {scenarios.map((s, idx) => {
              const rows = s.getArmotizationSchedule();
              return (
                <AccordionItem
                  key={idx}
                  value={`scenario-${idx}`}
                  className="bg-white rounded-lg shadow-sm"
                >
                  <AccordionTrigger className="w-full px-4 py-3">
                    <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h2 className="font-medium">
                          Scenario #{idx + 1} — Amount:{" "}
                          {formatCurrency(s.principal)} @ {s.r * 12 * 100}%
                        </h2>
                        <div className="text-sm text-gray-600">
                          Months taken: {s.months_taken} · Total interest:{" "}
                          {formatCurrency(s.total_interest)}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-sm text-gray-500">
                          Expand for full schedule
                        </div>

                        <a
                          type="button"
                          onClick={(e) => {
                            // prevent the click from toggling the accordion
                            e.stopPropagation();
                            setScenarios((prev) =>
                              prev.filter((_, i) => i !== idx)
                            );
                          }}
                          className="text-sm text-red-600 bg-red-50 px-2 py-1 rounded hover:bg-red-100"
                          aria-label={`Delete scenario ${idx + 1}`}
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-4 pb-4 pt-2">
                    <div className="overflow-auto">
                      <div className="overflow-auto" style={{ maxHeight: 360 }}>
                        <table className="min-w-full table-auto text-sm">
                          <thead>
                            <tr>
                              <th className="sticky top-0 px-3 py-2 text-left bg-gray-100 z-10">
                                Month
                              </th>
                              <th className="sticky top-0 px-3 py-2 text-right bg-gray-100 z-10">
                                Opening
                              </th>
                              <th className="sticky top-0 px-3 py-2 text-right bg-gray-100 z-10">
                                EMI
                              </th>
                              <th className="sticky top-0 px-3 py-2 text-right bg-gray-100 z-10">
                                Interest
                              </th>
                              <th className="sticky top-0 px-3 py-2 text-right bg-gray-100 z-10">
                                Paid Principal
                              </th>
                              <th className="sticky top-0 px-3 py-2 text-right bg-gray-100 z-10">
                                Closing
                              </th>
                              <th className="sticky top-0 px-3 py-2 text-right bg-gray-100 z-10">
                                Total Interest
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {rows.map((r) => (
                              <tr
                                key={r.month}
                                className="odd:bg-white even:bg-gray-50"
                              >
                                <td className="px-3 py-2">{r.month}</td>
                                <td className="px-3 py-2 text-right">
                                  {formatCurrency(r.opening_balance)}
                                </td>
                                <td className="px-3 py-2 text-right">
                                  {formatCurrency(r.emi)}
                                </td>
                                <td className="px-3 py-2 text-right">
                                  {formatCurrency(r.interest)}
                                </td>
                                <td className="px-3 py-2 text-right">
                                  {formatCurrency(r.paidPrincipal)}
                                </td>
                                <td className="px-3 py-2 text-right">
                                  {formatCurrency(r.closingBalance)}
                                </td>
                                <td className="px-3 py-2 text-right">
                                  {formatCurrency(r.totalPaidInterest)}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default App;
// ...existing code...
