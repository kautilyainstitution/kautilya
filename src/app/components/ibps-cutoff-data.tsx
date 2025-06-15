import { DataTable } from "./data-table";
export const IbpsPoCutoffData = () => {
  const prelimsHeaders = ["Category", "English Language (out of 30)", "Quantitative Aptitude (out of 35)", "Reasoning Ability (out of 35)"];
  const prelimsData = [
    { category: "General / EWS", english: "9.75", quantitative: "8.75", reasoning: "9.25" },
    { category: "OBC", english: "6.50", quantitative: "5.50", reasoning: "5" },
    { category: "SC/ ST", english: "6.50", quantitative: "5.50", reasoning: "5" },
  ];

  const mainsPatternHeaders = ["S. No", "Subjects", "Qns", "Marks", "Time allotted"];
  const mainsPatternData = [
    { no: "1", subject: "Reasoning & Computers Aptitude", qns: "45", marks: "60", time: "60 minutes" },
    { no: "2", subject: "English Language", qns: "35", marks: "40", time: "40 minutes" },
    { no: "3", subject: "Data analysis & interpretation", qns: "35", marks: "60", time: "45 minutes" },
    { no: "4", subject: "General, Economy / Banking Awareness", qns: "40", marks: "40", time: "35 minutes" },
    { no: "Total", subject: "Total Questions", qns: "155", marks: "200", time: "3 hrs" },
    { no: "5", subject: "English Language (Letter Writing & Essay)", qns: "2", marks: "25", time: "30 mins" },
  ];

  const mainsCutoffHeaders = ["S. No", "Subject", "Max. Marks", "General/ EWS", "SC/ST/ OBC"];
  const mainsCutoffData = [
    { no: "1", subject: "Reasoning & Computer Aptitude", max: "60", general: "07", reserved: "04.75" },
    { no: "2", subject: "English Language", max: "40", general: "15.50", reserved: "12.25" },
    { no: "3", subject: "Data Analysis & Interpretation", max: "60", general: "02.25", reserved: "01" },
    { no: "4", subject: "General, Economy & Banking Awareness", max: "40", general: "04.50", reserved: "02" },
    { no: "5", subject: "English Language (Descriptive)", max: "25", general: "10", reserved: "08.75" },
  ];

  const overallCutoffHeaders = ["Category", "Cut- off (out of 225)"];
  const overallCutoffData = [
    { category: "General", cutoff: "71.25" },
    { category: "OBC", cutoff: "69.75" },
    { category: "SC", cutoff: "59.25" },
    { category: "ST", cutoff: "53.25" },
    { category: "EWS", cutoff: "70.50" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">IBPS PO Prelims-2023: Section-wise cut-off marks</h3>
        <DataTable
          headers={prelimsHeaders}
          data={prelimsData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3">{item.english}</td>
              <td className="px-4 py-3">{item.quantitative}</td>
              <td className="px-4 py-3">{item.reasoning}</td>
            </>
          )}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">IBPS PO Mains: Pattern</h3>
        <DataTable
          headers={mainsPatternHeaders}
          data={mainsPatternData}
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
          Negative marking: 0.25 | Total: 157 Questions, 250 Marks, 3 ½ hours
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">IBPS PO Mains-2023: Section-wise cut-off marks</h3>
        <DataTable
          headers={mainsCutoffHeaders}
          data={mainsCutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.no}</td>
              <td className="px-4 py-3">{item.subject}</td>
              <td className="px-4 py-3">{item.max}</td>
              <td className="px-4 py-3">{item.general}</td>
              <td className="px-4 py-3">{item.reserved}</td>
            </>
          )}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">IBPS PO Mains-2022: Overall cut-off Marks</h3>
        <DataTable
          headers={overallCutoffHeaders}
          data={overallCutoffData}
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