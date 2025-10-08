import React from "react";
import "./EventPlanner.css";

function EventPlanner() {
  return (
    <div className="event-planner-container">
      <header>
        <h1>Welcome to Event Planner</h1>
      </header>

      {/* Description Section */}
      <section className="description">
        <p>
          Plan and organize your events effortlessly with Event Planner. From
          birthdays to corporate meetings, we've got you covered.
        </p>
        <button className="get-started-button">Get Started</button>
      </section>

      {/* Event Categories Section */}
      <section className="events_categories">
        <h1>Event Categories</h1>

        <ul>
          <h2>Social Events:</h2>
          <li>Birthday parties</li>
          <li>Anniversary celebrations</li>
          <li>Wedding receptions</li>
          <li>Baby showers</li>
          <li>Graduation parties</li>
          <li>Family reunions</li>
        </ul>

        <ul>
          <h2>Entertainment Events:</h2>
          <li>Concerts</li>
          <li>Music festivals</li>
          <li>Film screenings</li>
          <li>Comedy shows</li>
          <li>Art exhibitions</li>
          <li>Cultural events</li>
        </ul>

        <ul>
          <h2>Community Events:</h2>
          <li>Fundraising events</li>
          <li>Charity galas</li>
          <li>Volunteer drives</li>
          <li>Neighborhood block parties</li>
          <li>Community festivals</li>
          <li>Cultural celebrations</li>
        </ul>
      </section>

      {/* Features Section */}
      <section className="features">
        <h1>Features</h1>
        <ul>
          <li>Easy event creation and management</li>
          <li>Customizable event templates</li>
          <li>Guest list management</li>
          <li>Real-time collaboration</li>
          <li>Reminders and notifications</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h1>Testimonials</h1>

        <div className="testimonial">
          <p>
            "Event Planner made organizing my wedding a breeze. Highly
            recommended!"
          </p>
          <p className="author">- Emily Johnson</p>
        </div>

        <div className="testimonial">
          <p>
            "I use Event Planner for all my corporate events. It saves me so
            much time and effort!"
          </p>
          <p className="author">- John Smith</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button className="submit-button">Send</button>
        </form>
      </section>
    </div>
  );
}

export default EventPlanner;
