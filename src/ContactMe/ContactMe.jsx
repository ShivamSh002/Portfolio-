import React, { useState } from 'react';
import styles from './Contact.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import emailjs from 'emailjs-com';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    service: '',
    query: '',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_i9ezn47', 
      'template_aa2rfrl', 
      {
        from_name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        service: formData.service,
        query: formData.query,
        details: formData.details,
      },
      'kCMBMwrB4Q3FL4jMs' 
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert("SUCCESS!")
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        service: '',
        query: '',
        details: ''
      })
    }).catch((err) => {
      console.error('FAILED...', err);
      alert("FAILED...")
    });
  };

  return (
    <div id='Contact Me'>
      <p className={styles.heading}>Contact Me</p>
      <p className={styles.subPart}>Cultivating Connections: Reach Out and Connect with Me</p>
      <div>
        <form onSubmit={handleSubmit} className={styles.formWrapper}>
          <div>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              sx={{
                opacity: "0.6",
                backgroundColor: 'rgb(253, 252, 252,5%)',
                input: { color: 'white' },
                label: { color: 'white' },
                width: "25rem"
              }}
            />
          </div>
          <div>
            <TextField
              id="email"
              type='email'
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              sx={{
                opacity: "0.6",
                backgroundColor: 'rgb(253, 252, 252,5%)',
                input: { color: 'white' },
                label: { color: 'white' },
                width: "25rem"
              }}
            />
          </div>
          <div>
            <TextField
              id="phoneNumber"
              label="Phone Number"
              variant="outlined"
              value={formData.phoneNumber}
              onChange={handleChange}
              sx={{
                opacity: "0.6",
                backgroundColor: 'rgb(253, 252, 252,5%)',
                input: { color: 'white' },
                label: { color: 'white' },
                width: "25rem"
              }}
            />
          </div>
          <div>
            <TextField
              id="service"
              label="Service"
              variant="outlined"
              value={formData.service}
              onChange={handleChange}
              sx={{
                opacity: "0.6",
                backgroundColor: 'rgb(253, 252, 252,5%)',
                input: { color: 'white' },
                label: { color: 'white' },
                width: "25rem"
              }}
            />
          </div>
          <div>
            <TextField
              id="query"
              label="Query"
              variant="outlined"
              value={formData.query}
              onChange={handleChange}
              sx={{
                opacity: "0.6",
                backgroundColor: 'rgb(253, 252, 252,5%)',
                input: { color: 'white' },
                label: { color: 'white' },
                width: "25rem"
              }}
            />
          </div>
          <div>
          <TextField
           id="details"
           label="Details..."
           multiline
           rows={4}
           variant="outlined"
           value={formData.details}
           onChange={handleChange}
           sx={{
              opacity: "0.6",
             backgroundColor: 'rgb(253, 252, 252,5%)',
             '& .MuiInputBase-input': { color: 'white' }, 
             '& .MuiOutlinedInput-root': {
             '& textarea': { color: 'white' }, 
              },
           label: { color: 'white' },
           width: "25rem"
           }}
/>
          </div>
          <div className={styles.btn}>
            <Button
              type="submit"
              variant="outlined"
              sx={{
                opacity: "0.6",
                backgroundColor: 'none',
                color: 'white',
                border: "2px solid white",
                borderRadius: "5px",
                width: "150px"
              }}
            >
              Send
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
