import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { Resend } from "resend"

const contactSchema = z.object({
  services: z.array(z.string()).min(1),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = contactSchema.parse(body)

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Format services for the subject line
    const servicesFormatted = data.services
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1).replace("-", " "))
      .join(", ")

    // Format the email subject: CATEGORY - COMPANY - NAME
    const fullName = `${data.firstName} ${data.lastName}`
    const company = data.company || "N/A"
    const subject = `${servicesFormatted} - ${company} - ${fullName}`

    // Format the email body
    const emailBody = `${data.message}

---
Contact Details:
Name: ${fullName}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ""}
Company: ${company}
Services: ${servicesFormatted}`

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json(
        { success: false, error: "Email service is not configured. Please add RESEND_API_KEY to environment variables." },
        { status: 500 }
      )
    }

    // Send notification email to Auletta Advisory
    const notificationResult = await resend.emails.send({
      from: "Auletta Advisory <noreply@aulettaadvisory.com>",
      to: "info@aulettaadvisory.com",
      replyTo: data.email,
      subject: subject,
      text: emailBody,
      html: emailBody.replace(/\n/g, "<br>"),
    })

    // Send confirmation email to the user
    const confirmationSubject = "Thank you for contacting Auletta Advisory"
    const confirmationBody = `Dear ${data.firstName},

Thank you for reaching out to Auletta Advisory. We have received your inquiry regarding ${servicesFormatted.toLowerCase()}.

Our team will review your message and get back to you as soon as possible, typically within 1-2 business days.

In the meantime, if you have any urgent questions, please don't hesitate to reach out to us directly at info@aulettaadvisory.com.

Best regards,
The Auletta Advisory Team

---
This is an automated confirmation email. Please do not reply to this message.`

    const confirmationResult = await resend.emails.send({
      from: "Auletta Advisory <noreply@aulettaadvisory.com>",
      to: data.email,
      subject: confirmationSubject,
      text: confirmationBody,
      html: confirmationBody.replace(/\n/g, "<br>"),
    })

    return NextResponse.json(
      { 
        success: true, 
        message: "Emails sent successfully", 
        notificationEmailId: notificationResult.data?.id,
        confirmationEmailId: confirmationResult.data?.id
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: "Invalid form data", details: error.issues },
        { status: 400 }
      )
    }

    // Better error message for Resend errors
    const errorMessage = error instanceof Error ? error.message : "Failed to send email"
    
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    )
  }
}
