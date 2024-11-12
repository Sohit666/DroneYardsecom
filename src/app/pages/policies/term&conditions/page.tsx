// ./src/app/pages/policies/term&conditions/page.tsx

import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      {/* Page Title */}
      <Box mb={4} textAlign="center">
        <Typography variant="h4" component="h1" gutterBottom>
          DroneYards Terms and Conditions
        </Typography>
      </Box>

      {/* Section 1: Use of Platform */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          1. Use of Platform
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          The website DroneYards.com (the “Website”) is an internet-based content and e-commerce portal based in Kaushambhi, Ghaziabad, U.P. By accessing or using the Website, you acknowledge that you have read and agree to be bound by these Terms and Conditions.
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          DroneYards reserves the right to refuse registration or access to any user at its sole discretion. Changes to these Terms and Conditions may occur at any time without notice, and continued use of the Website after modifications signifies your acceptance of the updated terms.
        </Typography>
      </Box>

      {/* Section 2: FPV Drone Rules & Regulations */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          2. FPV Drone Rules & Regulations
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Drones are permitted for operation in India under the 2022 amended drone rules. DroneYards&apos; Plug and Fly Drone is classified as a Micro Drone (weighing over 250 grams and up to 2 kilograms), compliant with DGCA regulations. Users must ensure compliance with applicable laws, as DroneYards is not liable for violations.
        </Typography>
      </Box>

      {/* Section 3: Warning Notice */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          3. Warning Notice
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Operating drones involves risks. Ensure that propellers are removed when working on drones, and handle Lithium Polymer (LiPo) batteries with caution, as improper use can lead to fire or injury.
        </Typography>
      </Box>

      {/* Section 4: Warranty and Liability */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          4. Warranty and Liability
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          DroneYards provides a one-month crash warranty on specific drones, covering repair services under certain conditions. This warranty does not cover unauthorized modifications, tampering, or misuse.
        </Typography>
      </Box>

      {/* Section 5: Conditions Not Covered Under Warranty */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          5. Conditions Not Covered Under Warranty
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          The warranty excludes damage from weather, interference with other wireless devices, unauthorized parts, accidents, improper installation, or failure to follow the manual.
        </Typography>
      </Box>

      {/* Section 6: During Flight of Plug and Fly Drones */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          6. During Flight of Plug and Fly Drones
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Before flight, ensure satellite connection, check antennas, confirm propeller direction, and monitor battery voltage. Only fly in open areas and avoid flying below the recommended voltage levels.
        </Typography>
      </Box>

      {/* Section 7: Pricing and Offer Information */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          7. Pricing and Offer Information
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          While we strive for accuracy, DroneYards is not liable for inaccuracies in product details. Prices and offers may change without notice.
        </Typography>
      </Box>

      {/* Section 8: Payment */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          8. Payment
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Payment options include UPI, Credit/Debit Cards, Net Banking, Wallets, EMI, e-Gift cards, and Cash on Delivery (in select areas). All transactions are processed through secure gateways, and DroneYards is not liable for transaction errors.
        </Typography>
      </Box>

      {/* Closing Statement */}
      <Box textAlign="center" mt={4}>
        <Typography variant="body2" color="textSecondary">
          By using DroneYards&apos; services, you agree to these Terms and Conditions.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
