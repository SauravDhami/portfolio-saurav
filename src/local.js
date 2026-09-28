const KEYS = {
    waves: 'saurav-waves',
};

const MAIL_TO = 'saugatdhami88@gmail.com';

function read(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch {
        return fallback;
    }
}

function write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

const intentLabels = {
    friendship: 'Friendship',
    freelance: 'Freelance',
    full_time: 'Full-time',
    part_time: 'Part-time',
};

const replies = {
    friendship: 'Noted. I am always glad to meet for a game or a long walk.',
    freelance: 'Noted as freelance work. I will reply if it is a fit.',
    full_time: 'Noted as a full-time conversation. I will take a proper look.',
    part_time: 'Noted as part-time. I take focused work seriously when the problem is clear.',
};

function openMail({ subject, body }) {
    const href = `mailto:${MAIL_TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
}

const quizResults = {
    pitch: {
        key: 'pitch',
        title: 'Pitch energy',
        copy: 'You recharge with people, movement, and a real game. Same here — futsal first, plans later.',
    },
    trail: {
        key: 'trail',
        title: 'Open-air mind',
        copy: 'You want space, a walk, and no rush. I like that pace when the week has been loud.',
    },
    city: {
        key: 'city',
        title: 'Restless traveler',
        copy: 'New streets first. I have not traveled as much as I want yet — this is the nudge.',
    },
};

function scoreQuiz(answers) {
    const tallies = { pitch: 0, trail: 0, city: 0 };
    const map = {
        pitch: 'pitch',
        friends: 'pitch',
        trail: 'trail',
        walk: 'trail',
        city: 'city',
        trip: 'city',
        mountain: 'trail',
        sea: 'city',
        street: 'city',
    };

    Object.values(answers).forEach((value) => {
        if (map[value]) {
            tallies[map[value]] += 1;
        }
    });

    return quizResults[Object.entries(tallies).sort((a, b) => b[1] - a[1])[0][0]];
}

export const localApi = {
    getWaves() {
        return { total: Number(read(KEYS.waves, 0)) || 0 };
    },

    sendWave() {
        const total = (Number(read(KEYS.waves, 0)) || 0) + 1;
        write(KEYS.waves, total);
        return { total, message: 'Hello. I will wave back.' };
    },

    sendApproach(payload) {
        if (payload.website) {
            return { message: replies[payload.intent] || replies.friendship };
        }

        const note = (payload.note || '').trim();
        if (note.length < 4) {
            throw new Error('Write a short note.');
        }

        const intent = payload.intent || 'friendship';
        const name = (payload.name || '').trim();
        const email = (payload.email || '').trim();
        const label = intentLabels[intent] || 'Note';
        const subject = `Hello — ${label}${name ? ` from ${name}` : ''}`;
        const body = [
            name ? `Name: ${name}` : '',
            email ? `Email: ${email}` : '',
            `Reason: ${label}`,
            '',
            note,
        ].filter((line) => line !== '').join('\n');

        openMail({ subject, body });

        return { message: `${replies[intent] || replies.friendship} Your note is ready to send.` };
    },

    sendQuiz(payload) {
        if (payload.website) {
            return quizResults.trail;
        }

        return scoreQuiz(payload);
    },

    sendMail(payload) {
        if (payload.website) {
            return { message: 'Thanks. I will read this when I get a quiet minute.' };
        }

        const email = (payload.email || '').trim().toLowerCase();
        const name = (payload.name || '').trim();
        const message = (payload.message || '').trim();

        if (name.length < 2) {
            throw new Error('Name is required.');
        }
        if (!email.includes('@')) {
            throw new Error('A valid email is required.');
        }
        if (message.length < 10) {
            throw new Error('Tell me a little more.');
        }

        const label = intentLabels[payload.intent] || '';
        const subject = (payload.subject || '').trim() || `Hello from ${name}`;
        const body = [
            `From: ${name} <${email}>`,
            label ? `Reason: ${label}` : '',
            '',
            message,
        ].filter((line) => line !== '').join('\n');

        openMail({ subject, body });

        return { message: 'Your message is ready. Send it and I will reply.' };
    },
};
