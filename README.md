Hero-IO Live Link : https://appmk.netlify.app

**Hero-IO** is a modern React-based web application where users can explore, install, and uninstall different apps from one place.  
The platform includes around 20 apps, each displaying detailed information such as rating, number of downloads, and review rate.

When a user installs an app, it is saved in **LocalStorage** and displayed on the “My Installation” page.  
If the user uninstalls an app, it is removed from both the UI and LocalStorage.  

This project is built using React’s component-based structure and styled with Tailwind CSS to ensure a modern, clean, and fully responsive design.

 Technologies Used

**React JS** – Frontend framework  
**Tailwind CSS** – Styling framework  
**React Router DOM** – Navigation and page routing  
**LocalStorage** – To store installed app data  
**Toast Messages** – For install/uninstall notifications  
**Vite** – Build tool and fast development environment  

Project Overview

 Displays a list of 20+ available apps in a beautiful grid layout  
Shows app details: name, rating, downloads, and reviews  
 **Install button** → saves the app to LocalStorage  
 Installed apps appear in the **My Installation** page  
**Uninstall button** → removes app from LocalStorage and the UI  
 Fully responsive design with smooth animations and a clean interface  


How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Hero-IO.git
2. Navigate to the project folder:
 cd Hero-IO
3. Install dependencies:
npm install
4.Start the development server:
 npm run dev
5. Open the app in  browser:
 http://localhost:5173/


**Future Enhancements**:

Add user authentication system

Implement search and filter for apps

Add dark mode support

Enable users to write reviews and submit ratings

