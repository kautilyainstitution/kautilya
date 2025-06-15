import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,
      subject,
      course,
      message,
      contactPreference
    } = body

    // Brevo API configuration
    const BREVO_API_KEY = process.env.BREVO_API_KEY
    const TO_EMAIL = process.env.TO_EMAIL || "info@yourinstitute.com"

    if (!BREVO_API_KEY) {
      throw new Error("Brevo API key not configured")
    }

    // Create email content
    const emailContent = `
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
            border-bottom: 2px solid #3b82f6;
            padding-bottom: 20px;
        }
        .logo {
            max-width: 150px;
            height: auto;
        }
        h1 {
            color: #3b82f6;
            font-size: 24px;
            margin-top: 10px;
        }
        .section {
            margin-bottom: 20px;
            padding: 15px;
            background-color: #f9f9f9;
            border-radius: 5px;
        }
        .section-title {
            color: #3b82f6;
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 18px;
        }
        .footer {
            margin-top: 30px;
            font-size: 12px;
            color: #777;
            text-align: center;
            border-top: 1px solid #eee;
            padding-top: 20px;
        }
        .info-label {
            font-weight: bold;
            color: #555;
        }
    </style>
</head>
<body>
    <div class="header">
        <img src="cid:companyLogo" alt="Your Institute Logo" class="logo">
        <h1>New Course Inquiry: ${subject}</h1>
    </div>

    <div class="section">
        <div class="section-title">Contact Information</div>
        <p><span class="info-label">Name:</span> ${name}</p>
        <p><span class="info-label">Email:</span> ${email}</p>
        <p><span class="info-label">Phone:</span> ${phone || "Not provided"}</p>
        <p><span class="info-label">Preferred Contact Method:</span> ${contactPreference || "Not specified"}</p>
    </div>

    <div class="section">
        <div class="section-title">Course Details</div>
        <p><span class="info-label">Interested Course:</span> ${getCourseName(course)}</p>
        <p><span class="info-label">Subject:</span> ${subject || "Not specified"}</p>
    </div>

    <div class="section">
        <div class="section-title">Message</div>
        <p>${message.replace(/\n/g, '<br>')}</p>
    </div>

    <div class="footer">
        <p>This inquiry was submitted through your institute's website.</p>
        <p>Please respond within 24 hours for the best student experience.</p>
    </div>
</body>
</html>
`;

    // Helper function to get full course name
    function getCourseName(courseCode: string) {
      const courses: Record<string, string> = {
        cat: "CAT Preparation",
        bank: "Banking Exams",
        ssc: "SSC Exams",
        gre: "GRE Preparation",
        gmat: "GMAT Preparation",
        other: "Other"
      };
      return courses[courseCode] || "Not specified";
    }

    // Send email using Brevo API
    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Kautilya Enquiry",
          email: "sridharkautilya@yahoo.com",
        },
        to: [
          {
            email: TO_EMAIL,
            name: "Admissions Team",
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `New Course Inquiry: ${subject}`,
        htmlContent: emailContent,
        textContent: `New course inquiry from ${name} (${email}). Interested in: ${getCourseName(course)}. Message: ${message}`,
      }),
    })
    console.log("The line 153 log is", brevoResponse);
    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json()
      console.error("Brevo API error:", errorData)
      throw new Error("Failed to send email via Brevo")
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}