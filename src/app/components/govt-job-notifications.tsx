import { DataTable } from "./data-table";

const GovtJobNotifications = () => {
  const jobHeaders = [
    "S.No",
    "Name of the Govt. Recruitment Exam",
    "Exam Date"
  ];

  const jobData = [
    [1, "IBPS PO (Institute of Banking Personnel Selection)- Probationary Officers in 11 public sector banks", "Sep"],
    [2, "IBPS Clerk", "Aug"],
    [3, "IBPS Specialist Officer (SO)", "Dec"],
    [4, "IBPS RRB Clerk / Assistant", "Aug"],
    [5, "IBPS RRB PO", "Aug"],
    [6, "SBI Clerk & SBI PO", "Nov & Dec"],
    [7, "SBI Management Executive / Specialist Officer", "Oct"],
    [8, "Special recruitment by IDBI / Bank of Baroda / Canara Bank, etc– through Manipal School of Banking", "--"],
    [9, "RBI Grade 'B' Officer (Reserve Bank of India)", "May"],
    [10, "RBI Assistant", "Mar"],
    [11, "Insurance AO posts (Administrative Officers) (5 companies) (LIC -ADO, NICL, UIIC, OICL, NIAC, etc)", "Mar"],
    [12, "Intelligence Bureau –ACIO", "Feb"],
    [13, "RRB- NTPC (Non-Technical Popular Categories)", "Dec"],
    [14, "ESIC- Employee State Insurance Corporation - UDC, MTS", "Mar"],
    [15, "AFCAT (Air Force Common Admission Test)- 2 times", "Feb & Aug"],
    [16, "SSC CGL (Officers in central govt. departments- GST, IT dept, etc (Staff Selection Commission- Combined Higher Graduate level)", "Jul"],
    [17, "SSC CHSL – Clerks in central govt. departments Combined Higher Secondary Level- with INTERMEDIATE", "Aug"],
    [18, "SSC MTS- Multi Tasking Staff- 10th class eligibility", "Sep"],
    [19, "SSC CPO (Central Police Organization)- CAPF-SI Posts in Delhi police", "Oct"],
    [20, "FCI- Food Corporation of India- Assistant Grade-III- General & Depot", "Jan"]
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
        25+ Central Government Job Recruitment Notifications
      </h2>
      <div className="flex space-x-4 mb-4">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Common syllabus: Arithmetic, Reasoning & English | Updated annually
        </span>
      </div>
      
      <DataTable
        headers={jobHeaders}
        data={jobData}
        renderRow={(item) => (
          <>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
              {item[0]}
            </td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300 font-medium">
              {item[1]}
            </td>
            <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
              {item[2]}
            </td>
          </>
        )}
        className="mt-4"
      />

      <div className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        <p>Note: Exam dates are approximate and may vary slightly each year.</p>
        <p>Most exams follow similar pattern with Arithmetic, Reasoning and English sections.</p>
      </div>
    </div>
  );
};

export default GovtJobNotifications;