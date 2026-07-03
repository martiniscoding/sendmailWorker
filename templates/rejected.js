export function applicationRejected(data) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <title>Application Update — JEEsociety</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f3f4f6;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:580px;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#8B0000 0%,#B22222 100%);border-radius:12px 12px 0 0;padding:36px 40px;text-align:center;">
              <img src="https://jeesociety.com/logo.png" alt="JEEsociety" width="80" height="80" style="display:block;margin:0 auto 16px;border-radius:16px;border:0;" />
              <p style="margin:0;font-size:12px;font-weight:500;color:rgba(255,255,255,0.6);letter-spacing:1px;text-transform:uppercase;">Careers</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#ffffff;padding:44px 40px 36px;">
              <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:1.5px;">Application Update</p>
              <h1 style="margin:0 0 20px;font-size:26px;font-weight:800;color:#111111;line-height:1.25;">
                Hi ${data.name}, a quick update on your application
              </h1>
              <p style="margin:0 0 16px;font-size:15px;color:#4b5563;line-height:1.75;">
                Thank you for taking the time to apply for the <strong style="color:#111111;">${data.jobTitle}</strong> position at JEEsociety. We genuinely appreciate your interest and the effort you put into your application.
              </p>
              <p style="margin:0 0 32px;font-size:15px;color:#4b5563;line-height:1.75;">
                After careful consideration, we've decided to move forward with other candidates whose profiles more closely matched our current requirements. This was not an easy decision — the competition was strong.
              </p>

              <!-- Encouragement box -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background-color:#f9fafb;border-radius:10px;margin-bottom:32px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <p style="margin:0 0 10px;font-size:14px;font-weight:700;color:#111111;">This isn't the end of the road.</p>
                    <p style="margin:0;font-size:14px;color:#4b5563;line-height:1.7;">
                      We grow fast and open new roles often. We encourage you to keep an eye on our careers page and apply again in the future — your skills could be exactly what we're looking for next time.
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 16px;font-size:15px;color:#4b5563;line-height:1.75;">
                We wish you all the best in your journey ahead, and we hope our paths cross again.
              </p>
              <p style="margin:0;font-size:15px;color:#4b5563;line-height:1.75;">
                Explore open roles anytime at
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
