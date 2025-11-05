
const { Composer, Markup } = require('telegraf');

const composer = new Composer();

composer.start(async (ctx) => {
    const buttons = Markup.inlineKeyboard([
        [Markup.button.url('Go To Jobs', 'https://t.me/GreatsJobsBot/GreatsJobs')],
        [Markup.button.url('Community', 'https://t.me/@whsxg0')],
    ]);

    return ctx.reply(
        `Looking for employees or a job in @GreatsJobsBot.`,
        { parse_mode: 'HTML', reply_markup: buttons.reply_markup } // Доступ к reply_markup через свойство объекта
    );
});

module.exports = composer;
