import nodemailer from 'nodemailer';

const MailService = () => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    return {
        sendActivationMail: async function (to, link) {
            await transporter.sendMail({
                from: process.env.SMTP_USER,
                to,
                subject: `Активация учетной записи на ${process.env.API_URL}`,
                text: '',
                html: `
                    <div>
                      <h1>Для активации необходимо пройти по ссылке ниже</h1>
                      <a href="${link}">${link}</a>
                    </div>
                `,
            });
        },
    };
};

export default MailService;
