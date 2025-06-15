import { DataTable } from "./data-table";
export const IbpsRrbSoExamData = () => {
  // IBPS RRB Officers Mains Pattern
  const rrbOfficersMainsPatternHeaders = ["S. No", "Subjects", "Qns", "Marks", "Time allotted"];
  const rrbOfficersMainsPatternData = [
    { no: "1", subject: "Reasoning Paper", qns: "40", marks: "50", time: "50 minutes" },
    { no: "2", subject: "General Awareness Paper", qns: "40", marks: "40", time: "40 minutes" },
    { no: "3", subject: "Numerical Ability Paper", qns: "40", marks: "50", time: "50 minutes" },
    { no: "4", subject: "English Language", qns: "40", marks: "40", time: "40 minutes" },
    { no: "5", subject: "Computer Knowledge", qns: "40", marks: "20", time: "20 minutes" },
    { no: "Total", subject: "Total", qns: "200", marks: "200", time: "100 minutes" },
  ];

  // IBPS RRB Officers Mains Cutoff
  const rrbOfficersMainsCutoffHeaders = ["Category", "Cut-off (out of 200)"];
  const rrbOfficersMainsCutoffData = [
    { category: "General", cutoff: "83.13" },
    { category: "EWS", cutoff: "88.19" },
    { category: "OBC", cutoff: "88.19" },
    { category: "SC", cutoff: "68.69" },
    { category: "ST", cutoff: "88.19" },
  ];

  // IBPS SO Prelims Pattern
  const soPrelimsPatternHeaders = ["S.No", "Subjects", "Qns", "Marks", "Time allotted"];
  const soPrelimsPatternData = [
    { no: "1", subject: "Reasoning", qns: "50", marks: "50", time: "40 minutes" },
    { no: "2", subject: "English Language", qns: "50", marks: "25", time: "40 minutes" },
    { no: "3", subject: "Quantitative Aptitude", qns: "50", marks: "50", time: "40 minutes" },
    { no: "Total", subject: "Total", qns: "150", marks: "125", time: "2 hours" },
  ];

  return (
    <div className="space-y-8">
      {/* IBPS RRB Officers Mains Pattern */}
      <div>
        <h3 className="text-lg font-semibold mb-4">IBPS RRB Officers- Mains: Pattern</h3>
        <DataTable
          headers={rrbOfficersMainsPatternHeaders}
          data={rrbOfficersMainsPatternData}
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

      {/* IBPS RRB Officers Mains Cutoff */}
      <div>
        <h3 className="text-lg font-semibold mb-4">IBPS RRB Officers (PO) Mains – 2022: A.P. Cut-Off Marks</h3>
        <DataTable
          headers={rrbOfficersMainsCutoffHeaders}
          data={rrbOfficersMainsCutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3">{item.cutoff}</td>
            </>
          )}
        />
      </div>

      {/* IBPS SO Prelims Pattern */}
      <div>
        <h3 className="text-lg font-semibold mb-4">IBPS- SO (Specialist Officers)- Prelims – Pattern</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          (Agriculture Field Officer, Marketing Officer, HR/Personnel Officer, IT Officer)
        </p>
        <DataTable
          headers={soPrelimsPatternHeaders}
          data={soPrelimsPatternData}
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
    </div>
  );
};