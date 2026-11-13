export default async function handler(req, res) {
  // CORS support
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const raw = req.body || {};
    const name = typeof raw.name === 'string' ? raw.name.trim() : '';
    const email = typeof raw.email === 'string' ? raw.email.trim() : '';
    const type = typeof raw.type === 'string' ? raw.type.trim() : '';
    const message = typeof raw.message === 'string' ? raw.message.trim() : '';

    if (!name || name.length < 2) {
      return res.status(400).json({ success: false, error: 'Molimo unesite vaše ime (minimalno 2 karaktera).' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ success: false, error: 'Molimo unesite ispravnu email adresu.' });
    }

    if (!message || message.length < 10) {
      return res.status(400).json({ success: false, error: 'Poruka je prekratka (minimalno 10 karaktera).' });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not defined in environment variables.');
      return res.status(500).json({ success: false, error: 'Email servis trenutno nije konfigurisan (nedostaje RESEND_API_KEY na Vercelu).' });
    }

    const typeLabels = {
      '3dsmax': '3ds Max 3D render projekat',
      'autocad': 'AutoCAD tehnička dokumentacija',
      'interior-design': 'Dizajn enterijera / Konsultacije',
      'other': 'Ostali upiti i predlozi saradnje'
    };

    const typeLabel = typeLabels[type] || type || 'Opšti upit';

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Portfolio Upit <onboarding@resend.dev>',
        to: ['ivezicm21@gmail.com'],
        reply_to: email,
        subject: `[Portfolio Upit] ${name} — ${typeLabel}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e4e4e7; border-radius: 8px; color: #18181b;">
            <h2 style="margin-top: 0; font-size: 20px; font-weight: 600; border-bottom: 1px solid #f4f4f5; padding-bottom: 12px; color: #09090b;">
              Novi upit sa portfolija
            </h2>

            <div style="margin: 16px 0; font-size: 14px;">
              <p style="margin: 6px 0;"><strong>Ime / Studio:</strong> ${escapeHtml(name)}</p>
              <p style="margin: 6px 0;"><strong>Email pošiljaoca:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #2563eb; text-decoration: underline;">${escapeHtml(email)}</a></p>
              <p style="margin: 6px 0;"><strong>Vrsta upita:</strong> ${escapeHtml(typeLabel)}</p>
            </div>

            <div style="margin-top: 20px; padding: 16px; background-color: #f4f4f5; border-radius: 6px; border-left: 3px solid #18181b;">
              <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a; margin-bottom: 8px; font-weight: 600;">Poruka klijenta:</div>
              <p style="white-space: pre-wrap; margin: 0; font-size: 14px; line-height: 1.6; color: #27272a;">${escapeHtml(message)}</p>
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f4f4f5; font-size: 12px; color: #a1a1aa;">
              Poslato putem kontakt forme na Mirjana Ivezić portfoliju. Klikom na "Reply" odgovarate direktno klijentu na adresu: ${escapeHtml(email)}
            </div>
          </div>
        `
      })
    });

    const data = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Resend API error response:', data);
      return res.status(resendResponse.status).json({
        success: false,
        error: data.message || 'Greška prilikom slanja emaila preko Resend servisa.'
      });
    }

    return res.status(200).json({ success: true, id: data.id });
  } catch (err) {
    console.error('Handler error:', err);
    return res.status(500).json({ success: false, error: 'Greška na serveru.' });
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

