import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import mdm from '../../assets/a.jpg';
import txt from '../../assets/b.jpg';

function CreateAd() {
  const navigate = useNavigate();
  const [selectedAd, setSelectedAd] = useState(null);

  const handleCheckboxChange = (adType) => {
    setSelectedAd((prev) => (prev === adType ? null : adType));
  };

  const handleAdClick = (adType) => {
    setSelectedAd((prev) => (prev === adType ? null : adType));
  };

  const handleNextButtonClick = () => {
    if (selectedAd === 'media') {
      navigate('/media-ad');
    } else if (selectedAd === 'text') {
      navigate('/text-ad');
    }
  };

  return (
    <div className='flex flex-col items-center mt-10 mb-10'>
      <div className='flex flex-col sm:flex-row sm:space-x-10 m-10 justify-between'>
        <Card style={{ width: '250px', margin: '10px', position: 'relative' }}onClick={() => handleAdClick('text')}>
          <Checkbox checked={selectedAd === 'text'}onChange={() => handleCheckboxChange('text')}onClick={(event) => event.stopPropagation()}/>
          <CardContent style={{ textAlign: 'center' }}>
            <img src={txt}alt="Media Ad"style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }}/>
            <Typography variant="body2" color="textSecondary">Create</Typography>
            <Typography variant="h6" color="textPrimary" style={{ fontWeight: 'bold', marginTop: 8 }}>Text Ad</Typography>
          </CardContent>
        </Card>

        <div >
          <Card style={{ width: '250px', margin: '10px', position: 'relative' }}onClick={() => handleAdClick('media')}>
            <Checkbox checked={selectedAd === 'media'}onChange={() => handleCheckboxChange('media')}onClick={(event) => event.stopPropagation()}/>
            <CardContent style={{ textAlign: 'center' }}>
              <img src={mdm}alt="Media Ad"style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }}/>
              <Typography variant="body2" color="textSecondary">Create</Typography>
              <Typography variant="h6" color="textPrimary" style={{ fontWeight: 'bold', marginTop: 8 }}>Media Ad</Typography>
            </CardContent>
          </Card>
        </div>
      </div>

      <Button variant="contained" color="primary" onClick={handleNextButtonClick} style={{ marginTop: '10px' }}>
        Next
      </Button>
    </div>
  );
}

export default CreateAd;
