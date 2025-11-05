
const { Composer, Markup } = require('telegraf');

const composer = new Composer();

composer.start(async (ctx) => {
    return ctx.reply(
        `Ниже представлены все команды для учебников всех классов/n /BooksClass10`,
        { parse_mode: 'HTML' } // Доступ к reply_markup через свойство объекта
    );
});

composer.BooksClass10(async (ctx) => {
    const buttons = Markup.inlineKeyboard([
        [Markup.button.url('Алгебра', 'https://t.me/GreatsJobsBot/GreatsJobs')],
        [Markup.button.url('Геометрия', 'https://t.me/@whsxg0')],
    ]);

    return ctx.reply(
        `Учебники за 10 Класс:`,
        { parse_mode: 'HTML', reply_markup: buttons.reply_markup } // Доступ к reply_markup через свойство объекта
    );
});

module.exports = composer;
