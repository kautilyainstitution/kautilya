import { DataTable } from "./data-table";
export const BankingExamCutoffData = () => {
  // SBI PO Mains Cutoff
  const sbiPoMainsCutoffHeaders = ["Category", "Cut-off Marks (out of 250)"];
  const sbiPoMainsCutoffData = [
    { category: "GEN", cutoff: "88.93" },
    { category: "EWS", cutoff: "84.60" },
    { category: "OBC", cutoff: "80.96" },
    { category: "SC", cutoff: "73.83" },
    { category: "ST", cutoff: "66.86" },
  ];

  // IBPS RRB Pattern
  const rrbPatternHeaders = ["S. No", "Subjects", "Qns", "Marks", "Time allotted"];
  const rrbPatternData = [
    { no: "1", subject: "Reasoning Ability", qns: "40", marks: "40", time: "45 minutes" },
    { no: "2", subject: "Numerical ability (Arithmetic)", qns: "40", marks: "40", time: "45 minutes" },
    { no: "Total", subject: "Total", qns: "80", marks: "80", time: "45 mins" },
  ];

  // IBPS RRB Clerk Prelims Cutoff
  const rrbClerkPrelimsCutoffHeaders = ["General", "OBC/SC/ST"];
  const rrbClerkPrelimsCutoffData = [
    { general: "71", reserved: "67.75" },
  ];

  // IBPS RRB PO Prelims Cutoff
  const rrbPoPrelimsCutoffHeaders = ["Category", "Cut-off (out of 80)"];
  const rrbPoPrelimsCutoffData = [
    { category: "General", cutoff: "53.50" },
    { category: "EWS", cutoff: "53.50" },
    { category: "OBC", cutoff: "53.50" },
    { category: "SC", cutoff: "53.50" },
    { category: "ST", cutoff: "53.50" },
  ];

  // IBPS RRB Clerk Mains Cutoff
  const rrbClerkMainsCutoffHeaders = ["Category", "Cut-off (out of 200)"];
  const rrbClerkMainsCutoffData = [
    { category: "General", cutoff: "83.78" },
    { category: "EWS", cutoff: "65.41" },
    { category: "OBC", cutoff: "68.57" },
    { category: "SC", cutoff: "63.47" },
    { category: "ST", cutoff: "59.13" },
  ];

  return (
    <div className="space-y-8">
      {/* SBI PO Mains Cutoff */}
      <div>
        <h3 className="text-lg font-semibold mb-4">SBI PO Mains-2022: Cut-off (out of 250 marks)</h3>
        <DataTable
          headers={sbiPoMainsCutoffHeaders}
          data={sbiPoMainsCutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3">{item.cutoff}</td>
            </>
          )}
        />
      </div>

      {/* IBPS RRB Pattern */}
      <div>
        <h3 className="text-lg font-semibold mb-4">IBPS RRB (Regional Rural Banks) Assistants (clerks) & Officers (PO): Pattern</h3>
        <DataTable
          headers={rrbPatternHeaders}
          data={rrbPatternData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.no}</td>
              <td className="px-4 py-3">{item.subject}</td>
              <td className="px-4 py-3">{item.qns}</td>
              <td className="px-4 py-3">{item.marks}</td>
              <td className="px-4 py-3">{item.time}</td>
            </>
          )}
        />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Negative marking: 0.25
        </p>
      </div>

      {/* IBPS RRB Clerk Prelims Cutoff */}
      <div>
        <h3 className="text-lg font-semibold mb-4">IBPS RRB Clerks Prelims-2022 A.P cut-off marks (out of 80 marks)</h3>
        <DataTable
          headers={rrbClerkPrelimsCutoffHeaders}
          data={rrbClerkPrelimsCutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.general}</td>
              <td className="px-4 py-3">{item.reserved}</td>
            </>
          )}
        />
      </div>

      {/* IBPS RRB PO Prelims Cutoff */}
      <div>
        <h3 className="text-lg font-semibold mb-4">IBPS RRB PO (Officers) Prelims – 2022: A.P. Cut-Off marks</h3>
        <DataTable
          headers={rrbPoPrelimsCutoffHeaders}
          data={rrbPoPrelimsCutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3">{item.cutoff}</td>
            </>
          )}
        />
      </div>

      {/* IBPS RRB Clerk Mains Cutoff */}
      <div>
        <h3 className="text-lg font-semibold mb-4">IBPS RRB Clerk Mains- 2022: A.P. Cut-off marks</h3>
        <DataTable
          headers={rrbClerkMainsCutoffHeaders}
          data={rrbClerkMainsCutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3">{item.cutoff}</td>
            </>
          )}
        />
      </div>
    </div>
  );
};