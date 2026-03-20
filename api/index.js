export default function handler(req, res) {
  if (req.url === '/setup' || req.url.includes('setup')) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ is_setup_completed: true }));
    return;
  }
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ status: "Omi → OneNote integration is active" }));
}
