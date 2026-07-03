export function applicationAccepted(data) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>You're In! — JEEsociety</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f3f4f6;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:580px;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#8B0000 0%,#B22222 100%);border-radius:12px 12px 0 0;padding:36px 40px;text-align:center;">
              <img src="=https://jeesoc-ten.vercel.app/logo.png" alt="JEEsociety" width="80" height="80" style="display:block;margin:0 auto 16px;border-radius:16px;border:0;" />
              <p style="margin:0;font-size:12px;font-weight:500;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase;">Careers</p>
            </td>
          </tr>

          <!-- Congrats banner -->
          <tr>
            <td style="background-color:#C8910A;padding:16px 40px;text-align:center;">
              <p style="margin:0;font-size:13px;font-weight:700;color:#ffffff;letter-spacing:1.5px;text-transform:uppercase;">&#127881; Congratulations — You&rsquo;ve been selected</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:44px 40px 36px;">
              <h1 style="margin:0 0 20px;font-size:26px;font-weight:800;color:#111111;line-height:1.25;">
                Welcome aboard, ${data.name}!
              </h1>
              <p style="margin:0 0 16px;font-size:15px;color:#4b5563;line-height:1.75;">
                We're thrilled to let you know that your application for the <strong style="color:#111111;">${data.jobTitle}</strong> position at JEEsociety has been <strong style="color:#8B0000;">accepted</strong>.
              </p>
              <p style="margin:0 0 32px;font-size:15px;color:#4b5563;line-height:1.75;">
                Out of everyone who applied, you stood out — and we genuinely can't wait to have you on the team. Someone from our side will reach out to you shortly with the next steps and onboarding details.
              </p>

              <!-- Highlight box -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#fef2f2;border-left:4px solid #8B0000;border-radius:0 10px 10px 0;margin-bottom:32px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0 0 12px;font-size:12px;font-weight:700;color:#8B0000;text-transform:uppercase;letter-spacing:1px;">What to expect next</p>
                    <p style="margin:0 0 8px;font-size:14px;color:#374151;line-height:1.65;">&#8594; &nbsp;A team member will contact you within <strong>48 hours</strong></p>
                    <p style="margin:0 0 8px;font-size:14px;color:#374151;line-height:1.65;">&#8594; &nbsp;We'll share onboarding details and get you set up</p>
                    <p style="margin:0;font-size:14px;color:#374151;line-height:1.65;">&#8594; &nbsp;You'll meet the rest of the team soon</p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 16px;font-size:15px;color:#4b5563;line-height:1.75;">
                JEEsociety is built by IITians who care deeply about making quality JEE mentorship accessible to every serious aspirant. You're now part of that mission.
              </p>
              <p style="margin:0;font-size:15px;color:#4b5563;line-height:1.75;">
                See you on the other side. &#128640;
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="background-color:#ffffff;padding:0 40px;">
              <div style="height:1px;background-color:#e5e7eb;"></div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#ffffff;border-radius:0 0 12px 12px;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 4px;font-size:13px;color:#9ca3af;line-height:1.6;">You received this because you applied for a role at JEEsociety.</p>
              <p style="margin:0;font-size:13px;color:#9ca3af;">
                © ${new Date().getFullYear()} JEEsociety · Mumbai, Maharashtra ·
                <a href="https://jeesociety.com" style="color:#8B0000;text-decoration:none;">jeesociety.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
