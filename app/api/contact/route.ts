import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { name, email, message } = body

    const data = await resend.emails.send({
      from: "Sky HI Design <hello@skyhidesigns.com>",
      to: "skyhidesignsinfo@gmail.com",
      replyTo: email,
      subject: `New Website Inquiry from ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Contact Form Submission</h2>

          <p>
            <strong>Name:</strong><br />
            ${name}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${email}
          </p>

          <p>
            <strong>Message:</strong><br />
            ${message}
          </p>
        </div>
      `,
    })

    return NextResponse.json(data)
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    )
  }
}