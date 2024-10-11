import React from 'react';
import styles from './ContactSection.module.css';

// Define TypeScript types for the contact information
interface Contact {
  name: string;
  position: string;
  program: string;
  phone: string;
  email: string;
}

// Define an array of contact information
const contacts: Contact[] = [
  {
    name: 'Janitha Prabodha',
    position: 'Project Chairperson',
    program: 'CodeSprint 8',
    phone: '+94 71 522 5455',
    email: 'janitha.20220212@iit.ac.lk',
  },
  {
    name: 'Aakif Ahamed',
    position: 'Vice Chairperson',
    program: 'Program',
    phone: '+94 76 156 7017',
    email: 'aakif.20220471@iit.ac.lk',
  },
  {
    name: 'Chanumi Dewanga',
    position: 'Vice Chairperson',
    program: 'Delegate Coordination',
    phone: '+94 71 142 2301',
    email: 'chanumi.20210741@iit.ac.lk',
  },
  {
    name: 'Amaa Samarasekara',
    position: 'Vice Chairperson',
    program: 'Industry Relations',
    phone: '+94 76 004 5795',
    email: 'amaa.20220020@iit.ac.lk',
  },
];

const ContactSection: React.FC = () => {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.contactTitle}>Contact Us</h2>
      <div className={styles.contactsGrid}>
        {contacts.map((contact, index) => (
          <div key={index} className={styles.contactCard}>
            <h3>{contact.name}</h3>
            <p>{contact.position}</p>
            <p>{contact.program}</p>
            <p>{contact.phone}</p>
            <a href={`mailto:${contact.email}`} className={styles.email}>
              {contact.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
