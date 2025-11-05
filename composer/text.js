const { Composer, Markup } = require('telegraf');

const composer = new Composer();

composer.start(async (ctx) => {
    // Текст для команды /start
    const startMessageText = `
        Ниже представлены все команды для учебников всех классов:
        <br>
        /books_class_10 - Учебники за 10 класс
        <br>
        /books_class_11 - Учебники за 11 класс
        <br>
        (Добавьте другие команды по аналогии)
    `;

    // Отправляем сообщение для /start
    try {
        await ctx.reply(startMessageText, {
            parse_mode: 'HTML',
        });
    } catch (error) {
        console.error("Error sending /start message:", error);
    }
});

// Обработка команды /books_class_10
composer.command('books_class_10', async (ctx) => {
    const buttons = Markup.inlineKeyboard([
        [Markup.button.url('Алгебра (10-11 класс)', 'https://kstu.kg/fileadmin/user_upload/algebra_10-11_kl_ja_alimov_.pdf')],
        [Markup.button.url('Геометрия', 'https://t.me/@whsxg0')], // Уточните URL для геометрии, если это не канал
        // Добавьте другие учебники по аналогии
    ]);

    const messageText = `
        📚 Учебники за 10 Класс:
    `;

    try {
        await ctx.reply(messageText, {
            parse_mode: 'HTML',
            reply_markup: buttons.reply_markup,
        });
    } catch (error) {
        console.error("Error sending /books_class_10 message:", error);
    }
});

module.exports = composer;
