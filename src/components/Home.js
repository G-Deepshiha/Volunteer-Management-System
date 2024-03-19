import React from 'react'
import './style.css'

const Home = () => {
  return (
    <div>
      <h2>Volunteer Management System</h2>
      <div class="container1">
        <h2>Welcome to our Website</h2>
        <h3>
As a hub for community engagement and support, our Volunteer Management System strives to connect passionate individuals with meaningful opportunities.
 Whether you're a seasoned volunteer or someone looking to make a difference for the first time, we're here to guide you on your journey of giving back.</h3>
 <br></br><br></br>
<h4>
<h2>Key features of a Volunteer Management System typically include:</h2>
<strong><ins>Volunteer Recruitment:</ins></strong> Allows organizations to create profiles of available volunteer opportunities and roles, making it easy for individuals to find opportunities that match their interests and skills.<br></br>
<strong><ins>Registration and Onboarding:</ins></strong> Enables volunteers to sign up for opportunities and complete necessary forms or training online. It may also include background checks and verification processes.<br></br>
<strong><ins>Scheduling:</ins></strong> Helps organizers create and manage volunteer schedules, ensuring adequate coverage for events or ongoing projects.<br></br>
<strong><ins>Communication: </ins></strong>Provides tools for sending messages, updates, and reminders to volunteers, as well as facilitating communication between volunteers and organizers.<br></br>
<strong><ins>Tracking and Reporting:</ins></strong> Allows organizations to track volunteer hours, activities, and contributions. It may generate reports for analysis, grant applications, or compliance purposes.<br></br>
<strong><ins>Integration:</ins></strong> Integrates with other systems such as CRM (Customer Relationship Management) or event management software to streamline data sharing and workflows.<br></br>
<strong><ins>Feedback and Evaluation:</ins> </strong>Collects feedback from volunteers and organizers to assess the effectiveness of volunteer programs and identify areas for improvement.<br></br>
</h4>

    </div>
    <div class="container2">
        <h2>About US</h2>
        <h4>
        Our Volunteer Management System is powered by a dedicated team committed to facilitating meaningful connections between volunteers and organizations.
         Learn more about our mission, values, and team members.
         <br></br><br></br>
            <h2>Our Mission</h2>
              Our mission is to empower individuals and organizations to collaborate effectively,
              driving positive change and fostering a culture of volunteerism and social responsibility.<br></br> <h2>We strive to:</h2>
               Facilitate seamless connections between volunteers and organizations.<br></br>
               Provide comprehensive resources and support to enhance the volunteering experience.<br></br>
              Promote diversity, equity, and inclusion in all aspects of our platform.<br></br>
               Celebrate the collective efforts and achievements of our vibrant volunteer community.</h4>
             <br></br><br></br>
             <h2>Why Choose Our Volunteer Management System?</h2>
            <h4>
            <strong><ins>User-Friendly Interface:</ins></strong> Our intuitive platform makes it easy for volunteers and organizations to navigate and find the right opportunities.<br></br>
            <strong><ins>Diverse Opportunities:</ins></strong> From local events to global initiatives, discover a wide range of volunteering opportunities tailored to your interests and skills.<br></br>
            <strong><ins>Community Impact:</ins></strong> Join a network of like-minded individuals and organizations dedicated to making a positive impact in communities worldwide.<br></br>
            <strong><ins>Effortless Sign-Up:</ins></strong> Get started in minutes with our simple registration process. Create your profile, explore opportunities, and start making a difference right away.</h4>
            <br></br>
            <h2>Our Team</h2>
            <h4>Behind the Volunteer Management System is a dedicated team committed to empowering volunteers and organizations alike. <br></br>
            Our team brings together expertise in technology, community engagement, and volunteer management to create a platform that makes a difference.</h4>
            <br></br>
            <h2>Get Involved</h2>
            <h4>Ready to join our community of volunteers and organizations making a difference? Sign up today and start your volunteering journey with us!</h4>
    </div>
    <div class="container3">
        <h2>Contact</h2>
        <h3>Have questions or need assistance? Our support team is here to help. Reach out to us via email, phone, or through our online contact form.</h3>
        <br></br>
        <div class="contactus-container">
          <div class="contact">
            <br></br>
            <h2>Contact US</h2>
            <br></br>
            <p>
              <strong>Email:&emsp;&emsp;</strong>contact@gmail.com
            </p>
            <br></br>
            <p>
              <strong>Phone:&emsp;&emsp;</strong>80125 30321/ 80125 30323
            </p>
            <br></br>
            <p>
              <strong>Location:&emsp;&emsp;</strong>India
            </p>
          </div>
          <div class="message-container">
            <form>
              <br></br>
              <h2>Send a Message</h2>
              <br></br>
              <input
                class="detail f-name"
                type="text"
                placeholder="First Name"
              />
              <br></br>
              <br></br>
              <input
                class="detail l-name"
                type="text"
                placeholder="Last Name"
              />
              <br></br>
              <br></br>
              <input
                class="detail phone1"
                type="text"
                placeholder="Phone Number"
              />
              <br></br>
              <br></br>
              <input class="detail mail1" type="text" placeholder="Email" />
              <br></br>
              <br></br>
              <textarea
                class="detail mess1"
                placeholder="Type your Message"
              ></textarea>
              <br></br>
              <br></br>
              <button onclick="submit">Submit</button>
              <br></br>
              <br></br>
            </form>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Home
