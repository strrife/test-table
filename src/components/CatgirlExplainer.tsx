import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

// There are no issues for you to fix in this file
// Please ignore it
const CatgirlExplainer: React.FC = () => {
  return (
    <>
      <Card sx={{ display: 'flex' }}>
        <Box
          sx={{ flex: '0 0 310px', display: 'flex', alignItems: 'flex-end' }}
        >
          <CardMedia
            component='img'
            height='280'
            image='/catgirl.webp'
            alt=''
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent>
            <Typography variant={'h5'}>Hello UwU</Typography>
            <Typography variant='body2' color='text.secondary'>
              Help this catgirl strategically invest her life savings into
              crypto. There are few issues on her way to a brand new orange
              Lanborghini Aventador &ndash; and your way to get a full-time job
            </Typography>
            <ul>
              <li>
                <Typography>Fix incorrect data shown in the table</Typography>
              </li>
              <li>
                <Typography>
                  Fix the percentage column (i.e. show 1% instead of 0.01).
                  Also, make it either green (value &gt; 0) or red (value &lt;
                  0)
                </Typography>
              </li>
              <li>
                <Typography>
                  Fix the reload button &ndash; it should reload the table
                </Typography>
              </li>
              <li>
                <Typography>Add the ability to sort by columns</Typography>
              </li>
            </ul>
            <Typography variant='body2' color='text.secondary'>
              Good luck!
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default CatgirlExplainer;
