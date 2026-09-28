export const profile = {
    name: 'Saurav Dhami',
    role: 'Backend Engineer',
    location: 'Bhaktapur, Nepal',
    email: 'saugatdhami88@gmail.com',
    photo: `${import.meta.env.BASE_URL}saurav.png`,
    cv: `${import.meta.env.BASE_URL}Resume_Saurav_Dhami.pdf`,
    cvFile: 'Resume_Saurav_Dhami.pdf',
    socials: [
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sauravdhami/' },
        { label: 'GitHub', href: 'https://github.com/SauravDhami' },
        { label: 'GitLab', href: 'https://gitlab.com/SauravDhami' },
        { label: 'Instagram', href: 'https://www.instagram.com/saugat_saurav/' },
    ],
};

export const intents = [
    {
        key: 'friendship',
        title: 'Friendship',
        copy: 'A game, a walk, or a proper conversation.',
    },
    {
        key: 'freelance',
        title: 'Freelance',
        copy: 'A defined problem and a careful build.',
    },
    {
        key: 'full_time',
        title: 'Full-time',
        copy: 'A longer role on a backend team.',
    },
    {
        key: 'part_time',
        title: 'Part-time',
        copy: 'Focused work, with the same standard.',
    },
];

export const aboutCards = [
    {
        title: 'Tech lover',
        copy: 'I like systems that stay steady when the load rises. Laravel, Node.js, RabbitMQ, and an API that does one job clearly.',
    },
    {
        title: 'Sports lover',
        copy: 'Futsal first, and any game that earns the tiredness. If there is a pitch, I am usually on it.',
    },
    {
        title: 'Travel, later',
        copy: 'I want more cities and more open air. The chances have been few so far, and I am keeping the list ready.',
    },
];

export const experience = [
    {
        role: 'Backend Engineer',
        place: 'Genius Systems Pvt. Ltd.',
        time: 'Jan 2023 — Present',
        points: [
            'Backend services in Laravel, Node.js, and Moleculer for NetTV (IPTV) and an ISP OSS/CRM used by hundreds of thousands of subscribers.',
            'Event-driven work with Kafka and RabbitMQ, including subscription and launcher flows that have to stay correct.',
            'Owned CRM, Subscription, FTTH, Inventory, and AAA, plus a notification service for SMS, push, and email from one API.',
            'Payments with eSewa, Khalti, and FonePay, social login, and MFA, shipped with Docker and CI/CD alongside teams in Nepal and abroad.',
        ],
    },
    {
        role: 'Freelance — Vue.js + Laravel',
        place: 'CodeCanyon modules for Concord CRM',
        time: 'Published',
        points: [
            'Custom SMS module for Concord CRM, with Twilio for automated and on-demand messages.',
            'Google Workspace module covering Drive, Sheets, Docs, Forms, and Slides.',
            'Deal-linked invoicing with PDF generation and status tracking.',
        ],
        links: [
            { label: 'SMS module', href: 'https://codecanyon.net/item/custom-sms-module-for-concord-crm-automated-and-ondemandmessages/58558546' },
            { label: 'Google Workspace', href: 'https://codecanyon.net/item/google-workspace-module-for-concord-crm-google-drive-sheets-docsforms-slides/58558594' },
            { label: 'Invoicing', href: 'https://codecanyon.net/item/invoicing-module-for-concord-crm-empower-your-deals-with-invoices/58558685' },
        ],
    },
    {
        role: 'MERN Stack Intern',
        place: 'Optimum Futurist Pvt. Ltd.',
        time: 'Apr 2022 — Jul 2022',
        points: [
            'An HR system with attendance, scrum logs, and team sessions, built with a small team.',
            'An e-commerce site for a dumpling store, and a first React Native app.',
            'Daily work across MongoDB, Express, React, and Node, including REST APIs and shared Git practice.',
        ],
    },
    {
        role: 'Academic project',
        place: 'Medicine Recommendation System',
        time: 'BSc. CSIT',
        points: [
            'A Python engine using Random Forest to suggest medicines from a disease or a related drug.',
            'Ranked results from real product reviews and ratings, served through two REST APIs for a mobile app.',
        ],
    },
];

export const education = [
    {
        school: 'Bhaktapur Multiple Campus',
        detail: 'BSc. CSIT',
        time: '2017 — 2022',
    },
    {
        school: 'Capital College and Research Center',
        detail: '+2, Science',
        time: '2014 — 2017',
    },
    {
        school: 'Jaycees Secondary School',
        detail: 'SLC',
        time: '2011 — 2014',
    },
];

export const skills = {
    Backend: ['Laravel', 'PHP', 'Node.js', 'Moleculer', 'RabbitMQ', 'Microservices'],
    Data: ['MySQL', 'MongoDB', 'Redis', 'Kafka'],
    Security: ['MFA', 'Passkeys', 'OAuth 2.0', 'Social login'],
    Craft: ['Vue.js', 'React.js', 'Docker', 'CI/CD', 'Payments'],
};

export const quizQuestions = [
    {
        key: 'weekend',
        prompt: 'A free Saturday shows up. Where do you go?',
        options: [
            { value: 'pitch', label: 'Straight to the pitch' },
            { value: 'trail', label: 'A quiet trail or park' },
            { value: 'city', label: 'A new street, no plan' },
        ],
    },
    {
        key: 'recovery',
        prompt: 'After a long week, what actually helps?',
        options: [
            { value: 'friends', label: 'Friends and a real game' },
            { value: 'walk', label: 'A slow walk, phone away' },
            { value: 'trip', label: 'Planning the next trip' },
        ],
    },
    {
        key: 'ticket',
        prompt: 'A free ticket appears tomorrow. You pick:',
        options: [
            { value: 'mountain', label: 'Mountains and cold air' },
            { value: 'sea', label: 'Water and a slow town' },
            { value: 'street', label: 'Street food and night buses' },
        ],
    },
];
