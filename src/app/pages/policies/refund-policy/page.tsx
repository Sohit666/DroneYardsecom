// pages/policy/shipping-and-returns.js
import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

const ShippingAndReturns = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      {/* Page Header */}
      <Box mb={4} textAlign="center">
        <Typography variant="h4" component="h1" gutterBottom>
          Shipping and Returns
        </Typography>
      </Box>

      {/* Replacement Policy */}
      <Box mb={3}>
        <Typography variant="h5" gutterBottom>
          Replacement Policy
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          At DroneYards, we strive to ensure your satisfaction with our products. However, we understand that there may be instances where you may need to replace your drone. Please review our replacement policy outlined below:
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Complaint Window */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Complaint Window
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Replacements will only be accepted if the customer has raised a complaint ticket within 2 days of receiving the product. Any complaints received after this period will not be eligible for replacement.
          </Typography>
        </Grid>

        {/* Eligibility Criteria */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Eligibility Criteria
          </Typography>
          <Typography variant="body1" color="textSecondary">
            The product will be eligible for replacement under the following circumstances: if there is a manufacturing defect, damage during transport, item mismatch, or missing parts. The product must be accompanied by all original accessories and packaging.
          </Typography>
        </Grid>

        {/* Customer Responsibility for Damage */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Customer Responsibility for Damage
          </Typography>
          <Typography variant="body1" color="textSecondary">
            If the product is crashed or damaged by the customer, they will bear a service charge of Rs 700 plus 18% GST. DroneYards covers all costs for replacements due to shipping damage, item mismatch, or missing parts.
          </Typography>
        </Grid>

        {/* Process for Replacement */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Process for Replacement
          </Typography>
          <Typography variant="body1" color="textSecondary">
            If eligible for replacement, contact our customer service within the complaint window. Provide proof of damage or defect through photos/videos. Upon verification, we’ll provide instructions for returning the product. <em>Note: Old parts will not be returned to you.</em>
          </Typography>
        </Grid>

        {/* Replacement Authorization */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Replacement Authorization
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Replacement requests are subject to authorization by DroneYards. We reserve the right to refuse replacement if conditions are not met.
          </Typography>
        </Grid>

        {/* Refund Policy */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Refund Policy
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Replacements are provided as a product replacement or store credit, depending on availability. Refunds are not issued for replacement requests.
          </Typography>
        </Grid>

        {/* Exclusions */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Exclusions
          </Typography>
          <Typography variant="body1" color="textSecondary">
            This policy does not cover damages due to misuse, neglect, accidents, or unauthorized modifications.
          </Typography>
        </Grid>
      </Grid>

      {/* Return Policy */}
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Return Policy
        </Typography>
        <Typography variant="body1" color="textSecondary">
          At DroneYards, we aim to provide excellent products and services. Please review our return policy below:
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Eligible Reasons for Return */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Eligible Reasons for Return
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Returns are accepted only if the product is unavailable. In case of a manufacturing defect, DroneYards will decide on a replacement or return.
          </Typography>
        </Grid>

        {/* Return Window */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Return Window
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Returns must be initiated within 2 days of receiving the product. Requests after this period may not be accepted.
          </Typography>
        </Grid>

        {/* Return Process */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Return Process
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Contact customer service with your order details and reason for the return. You may need to provide photographic evidence of shipping damage or mismatched items.
          </Typography>
        </Grid>

        {/* Refund Policy */}
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Refund Policy
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Refunds are issued after inspection, with a Rs 1000 deduction for processing fees. Refunds will be made to the original payment method.
          </Typography>
        </Grid>
      </Grid>

      {/* Cancellation Policy */}
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>
          Cancellation Policy
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Orders cannot be canceled once placed. Review your order carefully before confirming. Orders can only be canceled if they haven’t been shipped, with a 10% refund. Shipped orders incur a 20% fee, including shipping, packing, and operational costs.
        </Typography>
      </Box>

      {/* Exclusions */}
      <Box mt={2}>
        <Typography variant="h6" gutterBottom>
          Exclusions
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Returns are not accepted for used, damaged due to misuse, or modified products. Clearance items cannot be returned unless specified in the policy.
        </Typography>
      </Box>

      {/* Authorization */}
      <Box mt={2} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          By purchasing from DroneYards, you agree to abide by these terms and conditions. Contact customer support for any questions.
        </Typography>
      </Box>
    </Container>
  );
};

export default ShippingAndReturns;
