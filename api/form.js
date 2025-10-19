import dbConnect from '../lib/mongoose';
import FormModel from '../backend/src/models/form.model';

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Connect to database
    await dbConnect();

    const { name, email, videoType, budgetRange, vision } = req.body;

    // Validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email required' });
    }

    // Save to database
    const formEntry = await FormModel.create({
      name,
      email,
      videoType,
      budgetRange,
      vision
    });

    console.log('Form saved:', formEntry._id);

    return res.status(201).json({
      success: true,
      message: 'Form submitted successfully!',
      id: formEntry._id
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Failed to save form',
      details: error.message
    });
  }
}
