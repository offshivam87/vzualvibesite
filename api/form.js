export default function handler(req, res) {
  if (req.method === 'POST') {
    // Handle form data
    res.status(200).json({ success: true });
  }
}
