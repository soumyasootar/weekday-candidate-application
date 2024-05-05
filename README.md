# Candidate Application Platform      
 
## Vite App Local Setup Guide and Frontend Interview Assignment: 

### Overview
This document serves as a guide for setting up and running a Vite app locally and provides instructions for completing the Frontend Interview Assignment: Candidate Application Platform. The assignment entails creating a candidate application platform allowing users to view job listings, apply filters, and implement infinite scroll for seamless browsing. The platform should have a user-friendly interface and meet specific requirements outlined in the assignment brief.

### Requirements
- Job Cards: Each job listing should display essential information, including job title, company name, location, job description (with an option to expand), experience required, and an apply button/link.
- Filters: Implement filters allowing users to refine job listings based on criteria such as minimum experience, company name, location, remote/on-site, tech stack, role, and minimum base pay.
- Infinite Scroll: Implement infinite scroll to load additional job listings automatically as users scroll down the page, without requiring a "Load More" button.
- Responsive Design: Ensure the platform is responsive and functions well across different screen sizes, including mobile devices (Optional).

### Technology Stack
- ReactJS
- Redux
- CSS
- Material UI

### Assets

- UI designs can be viewed through an extension provided.
[Link](https://jobs.weekday.works/extension?acquisitionSource=assignment)
- Job data is fetched from the provided API endpoint, which returns a list of jobs and total count based on limit and offset parameters.

### Evaluation Criteria

Your assignment will be evaluated based on the following criteria:

- Functionality: Does the platform meet all specified requirements?
- Code Quality: Is the code well-structured, readable, and maintainable?
- User Interface: Does the UI match the provided sample?
- Responsiveness: Does the platform work seamlessly across devices and screen sizes? (Bonus)
- Performance: Have performance best practices been considered and implemented?

### How to Start this Project?

To start working on this project, follow these steps:

- Clone the Repository: Clone the GitHub repository provided for the project to your local machine using the following command:
bash

``` git clone <repository_url>```

- Navigate to Project Directory: Move into the project directory:
``` powershell cd <project_directory>   ```
Install Dependencies: Install the necessary dependencies for the project. Since it's a Vite app with React, you'll likely use npm or yarn:
bash
Copy code
npm install
# or
yarn install
Run the Development Server: Start the development server to view the project locally. Use the following command:
bash
Copy code
npm run dev
# or
yarn dev
Open in Browser: Once the development server is running, open your web browser and navigate to the specified URL (typically http://localhost:3000) to view the project.
Start Implementing: With the project set up and running, start implementing the features as outlined in the assignment brief. Follow the provided requirements, use the specified technology stack, and refer to the UI designs and API endpoint provided.
