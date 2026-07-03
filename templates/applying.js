export function applicationReceived(data) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>Application Received — JEEsociety</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f3f4f6;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:580px;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#8B0000 0%,#B22222 100%);border-radius:12px 12px 0 0;padding:36px 40px;text-align:center;">
              <img src="https://jeesoc-ten.vercel.app/logo.png" alt="JEEsociety" width="80" height="80" style="display:block;margin:0 auto 16px;border-radius:16px;border:0;" />
              <p style="margin:0;font-size:12px;font-weight:500;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase;">Careers</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:44px 40px 36px;">
              <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#8B0000;text-transform:uppercase;letter-spacing:1.5px;">Application Received</p>
              <h1 style="margin:0 0 20px;font-size:26px;font-weight:800;color:#111111;line-height:1.25;">
                Thanks for applying, ${data.name}!
              </h1>
              <p style="margin:0 0 16px;font-size:15px;color:#4b5563;line-height:1.75;">
                Your application for the <strong style="color:#111111;">${data.jobTitle}</strong> role has been received. We're glad you're interested in joining the JEEsociety team.
              </p>
              <p style="margin:0 0 32px;font-size:15px;color:#4b5563;line-height:1.75;">
                Our team personally reviews every application. If your profile matches what we're looking for, we'll reach out within <strong style="color:#111111;">5–7 business days</strong> to take things forward.
              </p>

              <!-- What happens next -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#fef2f2;border-radius:10px;margin-bottom:32px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0 0 14px;font-size:12px;font-weight:700;color:#8B0000;text-transform:uppercase;letter-spacing:1px;">What happens next</p>
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td style="padding:6px 0;">
                          <table cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td style="width:24px;vertical-align:top;padding-top:1px;">
                                <span style="display:inline-block;width:20px;height:20px;background-color:#8B0000;border-radius:50%;text-align:center;font-size:11px;font-weight:700;color:#ffffff;line-height:20px;">1</span>
                              </td>
                              <td style="padding-left:10px;font-size:14px;color:#374151;line-height:1.5;">Our team reviews your profile &amp; application</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;">
                          <table cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td style="width:24px;vertical-align:top;padding-top:1px;">
                                <span style="display:inline-block;width:20px;height:20px;background-color:#8B0000;border-radius:50%;text-align:center;font-size:11px;font-weight:700;color:#ffffff;line-height:20px;">2</span>
                              </td>
                              <td style="padding-left:10px;font-size:14px;color:#374151;line-height:1.5;">Shortlisted candidates are contacted directly</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:6px 0;">
                          <table cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td style="width:24px;vertical-align:top;padding-top:1px;">
                                <span style="display:inline-block;width:20px;height:20px;background-color:#8B0000;border-radius:50%;text-align:center;font-size:11px;font-weight:700;color:#ffffff;line-height:20px;">3</span>
                              </td>
                              <td style="padding-left:10px;font-size:14px;color:#374151;line-height:1.5;">1–2 interview rounds, then a final decision</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0;font-size:15px;color:#4b5563;line-height:1.75;">
                In the meantime, learn more about what we're building at
                <a href="https://jeesociety.com" style="color:#8B0000;text-decoration:none;font-weight:600;">jeesociety.com</a>.
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
