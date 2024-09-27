import connectToDatabase from '../../lib/mongodb';
import Contact from '../../models/contact';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Connect to the database
      await connectToDatabase();

      // Create a new contact entry
      const { name, email, message } = req.body;
      const newContact = new Contact({ name, email, message });

      // Save the entry to the database
      await newContact.save();

      // Respond with success
      res.status(201).json({ success: true, message: 'Contact information saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'An error occurred' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
