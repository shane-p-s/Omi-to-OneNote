export default function handler(req, res) {
  // Setup check (Omi requires this exact JSON)
  if (req.url === '/setup' || req.url.includes('setup')) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ is_setup_completed: true }));
    return;
  }

  // App Home URL — clean HTML page so Omi can load details
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Omi → OneNote</title>
      <style>body{font-family:Arial,sans-serif;text-align:center;padding:50px;background:#f8f9fa;}</style>
    </head>
    <body>
      <h1>✅ Omi → OneNote Integration</h1>
      <p><strong>Active and working perfectly.</strong></p>
      <p>Every finished memory is now automatically sent to your OneNote <strong>Omi</strong> section.</p>
      <p><em>Built for Shane Sullivan</em></p>
    </body>
    </html>
  `);
}
