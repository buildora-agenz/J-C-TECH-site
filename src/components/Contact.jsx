import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
  <div className="container">
    <div className="section-head reveal">
      <div className="eyebrow">Get in Touch</div>
      <h2>Let's Talk About Your Engineering Goals</h2>
      <p>Whether it's a course, a corporate program or a consulting engagement — start the conversation.</p>
    </div>
    <div className="contact-wrap">
      {/*  ACTION REQUIRED before launch: replace YOUR_FORM_ID with the real endpoint.
           Free option: formspree.io — sign up with gopiinath.c@gmail.com, create a form,
           paste the endpoint below. Enquiries then arrive by email.
           Until that is done the form refuses to accept a message and sends people
           to WhatsApp instead — it will never silently swallow an enquiry.  */}
      <form className="reveal" id="contactForm" method="POST"
            action="https://formspree.io/f/YOUR_FORM_ID">
        <div className="form-field">
          <label htmlFor="cf-name">Full Name</label>
          <input id="cf-name" name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </div>
        <div className="form-field">
          <label htmlFor="cf-email">Email Address</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </div>
        <div className="form-field">
          <label htmlFor="cf-interest">Interested In</label>
          <input id="cf-interest" name="interest" type="text" list="cf-interest-options" placeholder="Course / Corporate Training / Consulting" />
          <datalist id="cf-interest-options">
            <option value="Course"></option>
            <option value="Corporate Training"></option>
            <option value="Consulting"></option>
            <option value="AI Solutions"></option>
          </datalist>
        </div>
        <div className="form-field">
          <label htmlFor="cf-message">Message</label>
          <textarea id="cf-message" name="message" placeholder="Tell us what you're looking for..."></textarea>
        </div>
        <div className="hp-field" aria-hidden="true">
          <label htmlFor="cf-company">Company (leave blank)</label>
          <input id="cf-company" name="_gotcha" type="text" tabIndex="-1" autoComplete="off" />
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
        <p className="form-status" id="formStatus" role="status" aria-live="polite"></p>
      </form>
      <div className="reveal">
        <div className="contact-info">
          <div className="info-row"><div className="info-ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z" opacity="0"/><path d="M22 6l-10 7L2 6"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg></div><div><b>Email</b><a href="mailto:gopiinath.c@gmail.com" style={{ color: 'var(--orange-500)' }}>gopiinath.c@gmail.com</a></div></div>
          <div className="info-row"><div className="info-ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5a2 2 0 012-2h3l2 5-2.5 1.5a11 11 0 005 5L14 12l5 2v3a2 2 0 01-2 2A16 16 0 013 5z"/></svg></div><div><b>WhatsApp</b><a href="https://wa.me/919940226776?text=Hi%20JC%20Tech%2C%20I%27d%20like%20to%20know%20more%20about%20your%20courses." target="_blank" rel="noopener" style={{ color: 'var(--orange-500)' }}>+91 99402 26776</a></div></div>
          <div className="info-row"><div className="info-ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></div><div><b>LinkedIn</b><a href="#">&nbsp;</a></div></div>
          <div className="info-row"><div className="info-ic"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg></div><div><b>Website</b><a href="#">&nbsp;</a></div></div>
        </div>
        <div className="map-box" style={{ padding: 0, border: 'none' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5!2d80.2!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen=""
            loading="lazy"
            title="Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Contact;
