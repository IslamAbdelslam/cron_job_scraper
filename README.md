# FRCR 2025 Update Scraper

This Node.js application periodically scrapes a website to check for updates related to the "FRCR 2025" topic. If the specified keyword is found on the website, it sends an email notification to notify the recipients about the update.

## Dependencies

- [axios](https://www.npmjs.com/package/axios): For making HTTP requests to fetch website content.
- [cheerio](https://www.npmjs.com/package/cheerio): For parsing HTML content and extracting information.
- [nodemailer](https://www.npmjs.com/package/nodemailer): For sending email notifications.
- [express](https://www.npmjs.com/package/express): For creating a simple HTTP server.
- [dotenv](https://www.npmjs.com/package/dotenv): For loading environment variables from a .env file.

## Installation

1. Clone the repository:
    ```
    git clone <repository-url>
    ```

2. Install dependencies:
    ```
    npm install
    ```

3. Create a `.env` file in the project directory and add the following environment variables:
    ```
    PORT=10000
    EMAIL_CRON=your-email@gmail.com
    PASS_CRON=your-email-password
    EMAIL_USER=user1@example.com
    EMAIL_USER_2=user2@example.com
    ```

## Usage

Run the application using the following command:
```
npm start
```

The application will start an HTTP server listening on the specified port (default is 10000). When a GET request is made to the root route `/`, it triggers a cron job to scrape the website specified in the code. If the keyword "2025" is found on the website, it sends email notifications to the recipients specified in the `.env` file.

### Integration with cron-job.org

You can set up a recurring GET request to your application endpoint using cron-job.org. Configure a job on cron-job.org to periodically send a GET request to your server's endpoint `/`. This will trigger the scraping and email sending process at the specified intervals.

1. Log in to [cron-job.org](https://cron-job.org/en/).
2. Create a new job.
3. Set the job type to "HTTP(s) Request".
4. Enter your server's URL followed by the endpoint `/` in the URL field (e.g., `https://your-domain.com/`).
5. Set the request method to "GET".
6. Define the schedule for the job to specify how often the request should be sent.
7. Save the job.

## Customization

- You can modify the URL to be scraped in the `scrapeAndSearch` function by updating the `axios.get()` method's URL parameter.
- Adjust the keyword to search for by modifying the `text.includes('2025')` condition in the `scrapeAndSearch` function.
- Customize the email message and subject in the `sendEmail` function.
- You can add more recipients by adding additional `EMAIL_USER_X` variables in the `.env` file and updating the `mailOptions_me` object accordingly.

Ensure that the necessary permissions and configurations are set up for your email service provider to send emails from the application.

## Credits

This application was created by [Islam Abdelslam].