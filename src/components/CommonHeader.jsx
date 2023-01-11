import React from 'react';

import { Box, Typography, useTheme } from '@mui/material';

const CommonHeader = ({title, subTitle, description, ...props}) => {
  const { palette } = useTheme();

  class Style {
    constructor(fontSize, fontWeight, fontFamily, color, align, mb) {
      this.fontSize = fontSize;
      this.fontWeight = fontWeight;
      this.fontFamily = fontFamily;
      this.color = color;
      this.textAlign = align;
      this.mb = mb;
    }
  }

  const subTitleStyle = new Style(15, 600, 'HK Grotesk, sans-serif', `${palette.primary.main}`, 'center', '10px');
  const titleStyle = new Style(36, 600, 'HK Grotesk, sans-serif', `${palette.grey.main}`, 'center', '10px');
  const descriptionStyle = new Style(16, 400, 'Jost, sans-serif', `${palette.grey.light}`, 'center', '20px')

  return (
    <Box sx={{
      mb: '40px'
    }}>
      <Typography sx={subTitleStyle}>
        {subTitle}
      </Typography>
      <Typography sx={titleStyle}>
        {title}
      </Typography>
      <Typography sx={descriptionStyle}>
        {description}
      </Typography>
    </Box>
  )
}

export default CommonHeader