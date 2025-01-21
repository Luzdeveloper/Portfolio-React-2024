import { useState } from 'react';
import '../styles/contact.css'


export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
          template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          user_id: import.meta.env.VITE_EMAILJS_USER_ID,
          template_params: templateParams,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Email sent successfully:', data);
        alert('Email sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        console.error('Error sending email:', data);
        alert('Error sending email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
