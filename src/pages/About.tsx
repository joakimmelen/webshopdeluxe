import { Box, Container, Typography } from '@mui/material'
import React from 'react'

function About() {
  return (
    <Container maxWidth="lg">
    <Box sx={{ bgcolor: 'orange', height: '100vh' }}>
       <Typography>About us, all about us</Typography>
    </Box>
</Container>
  )
}

export default About