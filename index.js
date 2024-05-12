const axios = require('axios');
const cheerio = require('cheerio');
const nodemailer = require('nodemailer');
// const cron = require('node-cron');
const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 10000;
const app = express();


// Function to scrape the website and search for the word "2025"
async function scrapeAndSearch() {
    try {
        const response = await axios.get('https://www.rcr.ac.uk/exams-training/rcr-exams/clinical-radiology-exams/frcr-part-1-radiology-cr1/');
        const $ = cheerio.load(response.data);
        const text = $('body').text();
        const result = text.includes('2025') ? 'Yes, RCR 2025 is here' : 'RCR Not yet';

        // Send email
        await sendEmail(result);
    } catch (error) {
        console.error('Error scraping website:', error);
    }
}

// Function to send email
async function sendEmail(message) {
    try {
        // Create transporter with your email service details
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_CRON,
                pass: process.env.PASS_CRON

            },
        });

        // Define email options
        const mailOptions = {
            from: process.env.EMAIL_CRON,
            to: process.env.EMAIL_USER,
            subject: 'FRCR 2025 Update',
            text: message
        };

        const mailOptions_me = {
            from: process.env.EMAIL_CRON,
            to: process.env.EMAIL_USER_2,
            subject: 'FRCR 2025 Update',
            text: message
        };

        // Send email
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(mailOptions_me);

        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}


//get request for cron job
app.get('/', (req, res) => {
    scrapeAndSearch();
    res.send('cron job is done');
})


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


// Schedule the function to run every day at 10:22 p.m 
// cron.schedule('30 23 * * *', async () => {
//     console.log('Running scraper...');
//     await scrapeAndSearch();
// }, {
//     scheduled: true,
//     timezone: 'Africa/Cairo'
// });