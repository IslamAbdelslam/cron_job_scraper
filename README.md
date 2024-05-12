## CRON_SCRAPPER

This script performs web scraping on the Royal College of Radiologists (RCR) website to search for the occurrence of the word "2025" on a specific page. If the word is found, it sends an email notification to designated recipients. The script is scheduled to run automatically every day at 10:22 PM Cairo time.

### Requirements

Ensure you have the following prerequisites installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

### Usage

1. Set up your environment variables by creating a `.env` file in the project directory. Include the following variables:

   ```
   EMAIL_CRON=your_email@gmail.com
   PASS_CRON=your_app_password
   EMAIL_USER=recipient1@example.com
   EMAIL_USER_2=recipient2@example.com
   ```

   - `EMAIL_CRON`: Your Gmail email address used for sending emails.
   - `PASS_CRON`: The App Password generated for your Gmail account.
   - `EMAIL_USER`: The email address of the primary recipient.
   - `EMAIL_USER_2`: The email address of the secondary recipient.

2. Update the URL in the script (`axios.get`) to the desired webpage to be scraped.

3. Run the script using the command:

   ```
   node your_script_name.js
   ```

   This will start the cron job, which will execute the web scraping function at the scheduled time.

### Explanation

- **`scrapeAndSearch()`**: This function performs web scraping using Axios and Cheerio to search for the occurrence of the word "2025" on a specific webpage. It then sends an email notification based on the search result.

- **`sendEmail(message)`**: This function sends email notifications using Nodemailer. It sends emails to the recipients specified in the environment variables.

- **`cron.schedule()`**: This schedules the `scrapeAndSearch()` function to run automatically every day at 10:22 PM Cairo time using the `node-cron` module.

### Notes

- Ensure that you have enabled Two-Step Verification for your Gmail account and generated an App Password specifically for this script.
- Update the recipients' email addresses (`EMAIL_USER` and `EMAIL_USER_2`) as per your requirements.
- Modify the script to scrape different webpages or search for different keywords as needed.

### Credits

- **axios**: Promise-based HTTP client for Node.js.
- **cheerio**: Fast, flexible, and lean implementation of core jQuery designed specifically for the server.
- **nodemailer**: Module for sending emails with Node.js.
- **node-cron**: Module for scheduling cron jobs in Node.js.
