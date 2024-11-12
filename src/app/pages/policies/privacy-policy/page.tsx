// pages/policy/privacy-policy.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      {/* Page Title */}
      <Box mb={4} textAlign="center">
        <Typography variant="h4" component="h1" gutterBottom>
          Privacy Policy
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Effective Date: [Insert Effective Date Here]
        </Typography>
      </Box>

      {/* Introduction */}
      <Box mb={3}>
        <Typography variant="body1" color="textSecondary">
          DroneYards (hereafter “we,” “us,” or “our”) is committed to safeguarding the privacy of our visitors and users (hereafter “Visitors,” “you,” or “your”) of our website, www.DroneYards.com, and/or our mobile application (hereafter referred to as the “Website”). This privacy policy (hereafter the “Policy”) describes:
        </Typography>
      </Box>

      {/* Section 1: Information We Collect */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          1. Information We Collect
        </Typography>
        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          We gather “Personal Information” that identifies you, which may include your name, email address, contact number, postal address, and payment details when you voluntarily provide it during transactions or inquiries.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Automatic Information
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          We automatically receive your device’s IP address and browsing details when you visit our Website, which helps us understand your preferences and enhance user experience.
        </Typography>
      </Box>

      {/* Section 2: How We Use Your Information */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          2. How We Use Your Information
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          We may use your Personal Information to process orders, manage your account, provide customer support, and communicate with you about your purchases or inquiries. By providing us with your Personal Information, you consent to receive communications from us via email, SMS, or other channels regarding your transactions.
        </Typography>
      </Box>

      {/* Section 3: Consent */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          3. Consent
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          By using our Website, you consent to the collection and use of your information for the purposes outlined in this Policy. If we request your Personal Information for additional reasons, we will either obtain your explicit consent or provide you the option to decline.
        </Typography>
      </Box>

      {/* Section 4: Disclosure of Information */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          4. Disclosure of Information
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          We may disclose your Personal Information if required by law or in response to valid requests by public authorities.
        </Typography>
      </Box>

      {/* Section 5: Payment Security */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          5. Payment Security
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          We use secure payment gateways that adhere to the Payment Card Industry Data Security Standards (PCI-DSS) to ensure the safe handling of your credit card information. Your transaction data is stored only as long as necessary to complete your purchase and is deleted afterward.
        </Typography>
      </Box>

      {/* Section 6: Third-Party Services */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          6. Third-Party Services
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          We may engage third-party service providers to assist us in operating our Website and services. These providers may have their own privacy policies concerning the information we provide to them. We recommend reviewing these policies.
        </Typography>
      </Box>

      {/* Section 7: Links to Other Sites */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          7. Links to Other Sites
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Our Website may contain links to other sites. We are not responsible for the privacy practices of these external sites and encourage you to read their privacy policies.
        </Typography>
      </Box>

      {/* Section 8: Security Measures */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          8. Security Measures
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          We take reasonable precautions to protect your Personal Information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.
        </Typography>
      </Box>

      {/* Section 9: Age of Consent */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          9. Age of Consent
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          By using our Website, you represent that you are at least the age of majority in your jurisdiction or that you have consent from a guardian.
        </Typography>
      </Box>

      {/* Section 10: Changes to This Privacy Policy */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          10. Changes to This Privacy Policy
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          We reserve the right to modify this Policy at any time. Changes will take effect immediately upon posting on our Website. We will notify you of significant changes, so you are aware of how your information is used.
        </Typography>
      </Box>

      {/* Section 11: Contact Us */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          11. Contact Us
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          If you have any questions or concerns about this Policy, please contact us at:
        </Typography>
        <Typography variant="body1" color="textSecondary">
  <a href="mailto:droneyards@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
    Email: droneyards@gmail.com
  </a>
</Typography>
<Typography variant="body1" color="textSecondary">
  <a href="tel:+918506969051" style={{ color: 'inherit', textDecoration: 'none' }}>
    Contact No.: (+91) 8506969051
  </a> / 
  <a href="tel:+918506969140" style={{ color: 'inherit', textDecoration: 'none' }}>
    8506969140
  </a>
</Typography>

      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
