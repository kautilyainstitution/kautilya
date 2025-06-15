import { DataTable } from "./data-table";
export const SpecialistOfficerExamData = () => {
  // IBPS SO Prelims Cutoff
  const soPrelimsCutoffHeaders = ["POST", "General", "EWS", "OBC", "SC", "ST"];
  const soPrelimsCutoffData = [
    { post: "I.T. Officer", general: "65", ews: "65", obc: "65", sc: "61.88", st: "55.88" },
    { post: "Agricultural field officer", general: "17.75", ews: "17.75", obc: "17.75", sc: "17.75", st: "17.75" },
    { post: "HR/ Personnel", general: "40.50", ews: "40.50", obc: "40.50", sc: "40.50", st: "40.50" },
    { post: "Marketing officer", general: "38.63", ews: "33.13", obc: "38.63", sc: "38.63", st: "38.63" },
  ];

  // IBPS SO Mains Cutoff
  const soMainsCutoffHeaders = ["Post", "General", "EWS", "OBC", "SC", "ST"];
  const soMainsCutoffData = [
    { post: "IT Officer", general: "13.75", ews: "13.75", obc: "13.25", sc: "10.25", st: "11" },
    { post: "Agriculture Field Officer", general: "27.50", ews: "27.50", obc: "27.50", sc: "27", st: "22.25" },
    { post: "HR/Personnel Officer", general: "21.50", ews: "21.50", obc: "20.75", sc: "16", st: "12.50" },
    { post: "Marketing Officer", general: "22.75", ews: "20", obc: "22.50", sc: "21.75", st: "19" },
  ];

  // SBI SO Pattern
  const sbiSoPatternHeaders = ["Section", "Subjects", "Qns", "Marks", "Time allotted"];
  const sbiSoPatternData = [
    { section: "General Aptitude", subject: "Reasoning", qns: "50", marks: "50", time: "90 minutes" },
    { section: "General Aptitude", subject: "Quantitative Aptitude", qns: "35", marks: "35", time: "90 minutes" },
    { section: "General Aptitude", subject: "English Language", qns: "35", marks: "35", time: "90 minutes" },
    { section: "Professional knowledge", subject: "General IT Knowledge", qns: "50", marks: "100", time: "70 minutes" },
    { section: "Professional knowledge", subject: "Role-based knowledge", qns: "50", marks: "100", time: "70 minutes" },
  ];

  // SBI SO Cutoff
  const sbiSoCutoffHeaders = ["Category", "Cut-off (out of 100)"];
  const sbiSoCutoffData = [
    { category: "General", cutoff: "59.25" },
    { category: "SC", cutoff: "54.50" },
    { category: "ST", cutoff: "47.25" },
    { category: "OBC", cutoff: "57.50" },
  ];

  return (
    <div className="space-y-8">
      {/* IBPS SO Prelims Cutoff */}
      <div>
        <h3 className="text-lg font-semibold mb-4">IBPS SO Prelims – 2022: Cut Off (out of 125 marks)</h3>
        <DataTable
          headers={soPrelimsCutoffHeaders}
          data={soPrelimsCutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.post}</td>
              <td className="px-4 py-3">{item.general}</td>
              <td className="px-4 py-3">{item.ews}</td>
              <td className="px-4 py-3">{item.obc}</td>
              <td className="px-4 py-3">{item.sc}</td>
              <td className="px-4 py-3">{item.st}</td>
            </>
          )}
        />
      </div>

      {/* IBPS SO Mains Cutoff */}
      <div>
        <h3 className="text-lg font-semibold mb-4">IBPS SO Mains- 2022: Cut-off marks (out of 60)</h3>
        <DataTable
          headers={soMainsCutoffHeaders}
          data={soMainsCutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.post}</td>
              <td className="px-4 py-3">{item.general}</td>
              <td className="px-4 py-3">{item.ews}</td>
              <td className="px-4 py-3">{item.obc}</td>
              <td className="px-4 py-3">{item.sc}</td>
              <td className="px-4 py-3">{item.st}</td>
            </>
          )}
        />
     </div>

      {/* SBI SO Pattern */}
      <div>
        <h3 className="text-lg font-semibold mb-4">SBI SO- Pattern</h3>
        <DataTable
          headers={sbiSoPatternHeaders}
          data={sbiSoPatternData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.section}</td>
              <td className="px-4 py-3">{item.subject}</td>
              <td className="px-4 py-3">{item.qns}</td>
              <td className="px-4 py-3">{item.marks}</td>
              <td className="px-4 py-3">{item.time}</td>
            </>
          )}
        />
      </div>

      {/* SBI SO Cutoff */}
      <div>
        <h3 className="text-lg font-semibold mb-4">SBI SO – 2022: Cut-off marks (out of 100)</h3>
        <DataTable
          headers={sbiSoCutoffHeaders}
          data={sbiSoCutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3">{item.cutoff}</td>
            </>
          )}
        />
      </div>
         <h3>NOTE for SBI SO</h3>
        <p>The General Aptitude papers are qualifying in nature, and marks will not be considered for the merit list. To qualify for the interview, candidates must score equal to or above the cutoff marks set by the bank for the Professional Knowledge paper, as well as achieve minimum qualifying marks in the other papers. Role Based Knowledge questions are related to the post for which the candidate has applied.</p>
    </div>
  );
};