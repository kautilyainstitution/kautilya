import { DataTable } from "./data-table";
export const RbiGradeBExamData = () => {
  // RBI Grade B Prelims Pattern
  const prelimsPatternHeaders = ["S No.", "Section Asked", "No. of qns", "Maximum Marks", "Duration"];
  const prelimsPatternData = [
    { no: "1", section: "General Awareness", qns: "80", marks: "80", duration: "25 minutes" },
    { no: "2", section: "Quantitative Aptitude", qns: "30", marks: "30", duration: "25 minutes" },
    { no: "3", section: "English Language", qns: "30", marks: "30", duration: "25 minutes" },
    { no: "4", section: "Reasoning", qns: "60", marks: "60", duration: "45 minutes" },
    { no: "Total", section: "Total", qns: "200", marks: "200", duration: "120 minutes" },
  ];

  // RBI Grade B Phase-I Cutoff
  const phase1CutoffHeaders = ["Section", "General", "EWS", "OBC", "SC", "ST"];
  const phase1CutoffData = [
    { section: "General Awareness (out of 80)", general: "12.00", ews: "12.00", obc: "8.00", sc: "6.25", st: "6.25" },
    { section: "Reasoning (out of 60)", general: "9.00", ews: "9.00", obc: "6.00", sc: "4.75", st: "4.75" },
    { section: "English (out of 30)", general: "4.50", ews: "4.50", obc: "3.00", sc: "2.25", st: "2.25" },
    { section: "Quantitative Aptitude (out of 30)", general: "4.50", ews: "4.50", obc: "3.00", sc: "2.25", st: "2.25" },
    { section: "Total Score/Aggregate (out of 200)", general: "63.75", ews: "63.75", obc: "60.25", sc: "55.25", st: "50.75" },
  ];

  // RBI Grade B Phase 2 DEPR Pattern
  const phase2DeprHeaders = ["S.No.", "Sections / Subjects", "Paper Type", "Maximum Marks", "Duration (minutes)"];
  const phase2DeprData = [
    { 
      no: "1", 
      section: "Paper I: Economics and Social Issues", 
      paperType: "50% Objective Type, 50% Descriptive (to be typed with keyboard)", 
      marks: "50\n50\nTotal-100", 
      duration: "30\n90\nTotal-120" 
    },
    { 
      no: "2", 
      section: "Paper II: English (Writing skills)", 
      paperType: "Descriptive (3 questions)", 
      marks: "100", 
      duration: "90 minutes" 
    },
    { 
      no: "3", 
      section: "Paper III: Finance and Management", 
      paperType: "50% Objective Type 50% Descriptive", 
      marks: "50\n50\nTotal-100", 
      duration: "30\n90\nTotal-120" 
    },
    { 
      no: "Total", 
      section: "Total", 
      paperType: "", 
      marks: "300", 
      duration: "" 
    },
  ];

  return (
    <div className="space-y-8">
      {/* RBI Grade B Prelims Pattern */}
      <div>
        <h3 className="text-lg font-semibold mb-4">RBI Grade B Prelims Exam Pattern 2023</h3>
        <DataTable
          headers={prelimsPatternHeaders}
          data={prelimsPatternData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3 whitespace-nowrap">{item.no}</td>
              <td className="px-4 py-3">{item.section}</td>
              <td className="px-4 py-3">{item.qns}</td>
              <td className="px-4 py-3">{item.marks}</td>
              <td className="px-4 py-3">{item.duration}</td>
            </>
          )}
        />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Negative marking: 0.25
        </p>
      </div>

      {/* RBI Grade B Phase-I Cutoff */}
      <div>
        <h3 className="text-lg font-semibold mb-4">RBI Grade-B Cut-Off – 2022: Phase-I Exam (out of 200 marks)</h3>
        <DataTable
          headers={phase1CutoffHeaders}
          data={phase1CutoffData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3">{item.section}</td>
              <td className="px-4 py-3">{item.general}</td>
              <td className="px-4 py-3">{item.ews}</td>
              <td className="px-4 py-3">{item.obc}</td>
              <td className="px-4 py-3">{item.sc}</td>
              <td className="px-4 py-3">{item.st}</td>
            </>
          )}
        />
      </div>

      {/* RBI Grade B Phase 2 DEPR Pattern */}
      <div>
        <h3 className="text-lg font-semibold mb-4">RBI Grade B Phase 2 Exam Pattern for DEPR (General)</h3>
        <DataTable
          headers={phase2DeprHeaders}
          data={phase2DeprData}
          renderRow={(item) => (
            <>
              <td className="px-4 py-3 whitespace-nowrap">{item.no}</td>
              <td className="px-4 py-3">{item.section}</td>
              <td className="px-4 py-3">{item.paperType}</td>
              <td className="px-4 py-3 whitespace-pre">{item.marks}</td>
              <td className="px-4 py-3 whitespace-pre">{item.duration}</td>
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