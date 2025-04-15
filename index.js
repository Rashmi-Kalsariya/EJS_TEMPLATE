const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 8090;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('static'));

const resumeData = {
  personalInfo: {
    name: 'EMELY COOPER JONATHAN',
    title: 'UI/UX DESIGNER',
    profile: 'To gain new experience and opportunity in a organization that can help me to grow with a good enhancement of my skills and experience.'
  },
  skills: [
    'User Experience Design',
    'Visual Design',
    'Prototyping',
    'Mobile Application Design',
    'Website Design',
    'Web Application Design',
    'Responsive Design'
  ],
  tools: [
    'Figma, FigJam',
    'Adobe Xd',
    'Zeplin',
    'Adobe Photoshop',
    'Adobe Illustrator'
  ],
  contact: {
    phone: '+91 123456789',
    email: 'emelycooper2023@gmail.com',
    address: '70 Washington Square South, New York, NY 10012, United States'
  },
  employment: {
    title: 'UI/UX Designer',
    company: 'Microsoft',
    location: '70 Washington Square South, New York, NY 10012, United States'
  },
  education: [
    {
      school: 'Cabridge University',
      degree: 'INFORMATION TECHNOLOGY',
      period: '(2017 - 2020)',
      gpa: '6.94 CGPA'
    },
    {
      school: 'CAMBRIDGE UNIVERSITY',
      degree: 'DIPLOMA IN WEB DESIGN',
      period: '(2020 - 2021)'
    }
  ],
  portfolio: [
    {
      title: 'KALAKARI ARTS',
      description: 'E-commerce Website'
    },
    {
      title: 'WHY. REVIEWS',
      description: 'Marketing company website'
    },
    {
      title: 'PRACTO',
      description: 'Medicine Order Application'
    },
    {
      title: 'VRESTO POS',
      description: 'Food Restaurant POS System'
    },
    {
      title: 'AVID',
      description: 'Online Video Generator Website - AI'
    }
  ]
};

app.get('/', (req, res) => {
  res.render('index', { resume: resumeData });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});