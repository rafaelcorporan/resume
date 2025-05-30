import React, { useState } from 'react';
import Section from '../ui/Section';
import SocialLinks from '../ui/SocialLinks';
import { personalData } from '../../data/resume-data';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a server
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact" title="Contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Feel free to reach out if you're looking for a designer, have a question, or just want to connect.
          </p>
          
          <div className="mb-8">
            <h4 className="text-sm uppercase font-semibold text-gray-500 dark:text-gray-400 mb-3">Connect with me</h4>
            <SocialLinks links={personalData.socialLinks} className="mb-6" />
            
            <div className="space-y-2">
              <p className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="font-medium mr-2">Email:</span> {personalData.email}
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="font-medium mr-2">Phone:</span> {personalData.phone}
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-300">
                <span className="font-medium mr-2">Location:</span> {personalData.location}
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 bg-white dark:bg-gray-800"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 bg-white dark:bg-gray-800"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 bg-white dark:bg-gray-800"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="px-6 py-3 bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800 rounded-md transition-colors hover:bg-gray-700 dark:hover:bg-gray-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;