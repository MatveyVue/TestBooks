const { Composer, Markup } = require('telegraf');

const composer = new Composer();

// Обработчик команды /start
composer.start(async (ctx) => {
    // Формируем текст сообщения с использованием HTML для переносов и форматирования.
    // Важно: команды должны быть частью текста, а не отдельными переменными или элементами.
    const startMessageText = `
        📚 Добро пожаловать! <br>
        Ниже представлены команды для получения учебников по классам: <br><br>
        ➡️ /books_class_10 - Учебники за 10 класс <br>
        ➡️ /books_class_11 - Учебники за 11 класс <br>
    `;

    try {
        // Отправляем сообщение с HTML разметкой.
        // Кнопки не прикрепляем, так как в /start они не были созданы.
        await ctx.reply(startMessageText, {
            parse_mode: 'HTML',
        });
    } catch (error) {
        console.error("Error sending /start message:", error);
        // В случае ошибки отправляем простое сообщение
    }
});

// Обработчик команды /books_class_10
composer.command('books_class_10', async (ctx) => {
    const buttons = Markup.inlineKeyboard([
        [Markup.button.url('📚 Алгебра (10-11 класс)', 'https://go.11klasov.net/engine/ajax/viewer/viewer.php?id=3788')],
        [Markup.button.url('📐 Геометрия', 'https://go.11klasov.net/engine/ajax/viewer/viewer.php?id=11329')], // Убедитесь, что URL правильный
        [Markup.button.url('💡 Физика', 'https://go.11klasov.net/engine/ajax/viewer/viewer.php?id=16594' )],
        [Markup.button.url('🌏 География', 'https://go.11klasov.net/engine/ajax/viewer/viewer.php?id=16594' )],
        [Markup.button.url('🖥️ Информатика', 'https://go.11klasov.net/engine/ajax/viewer/viewer.php?id=10561' )],
        [Markup.button.url('📝 Русский Язык', 'https://go.11klasov.net/engine/ajax/viewer/viewer.php?id=918' )],
        [Markup.button.url('📚 Литература', 'https://go.11klasov.net/engine/ajax/viewer/viewer.php?id=918' )],
        [Markup.button.url('📊 Обществознание', 'https://go.11klasov.net/engine/ajax/viewer/viewer.php?id=25484' )],
        [Markup.button.url('🦠 Биология', 'https://go.11klasov.net/engine/ajax/viewer/viewer.php?id=26060' )],
        [Markup.button.url('🧬 Химия', 'https://go.11klasov.net/engine/ajax/viewer/viewer.php?id=26130' )], 
        [Markup.button.url('💵 Английский Язык', 'https://go.11klasov.net/engine/ajax/viewer/viewer.php?id=24974' )],
        [Markup.button.url('🕯 Всеобщая История', 'https://go.11klasov.net/engine/ajax/viewer/viewer.php?id=25478' )],
        [Markup.button.url('🕯 История России', 'https://go.11klasov.net/engine/ajax/viewer/viewer.php?id=26222' )],
    ]);

    const messageText = `
        📖 Учебники за 10 Класс:
    `;

    try {
        await ctx.reply(messageText, {
            parse_mode: 'HTML',
            reply_markup: buttons.reply_markup, // Прикрепляем созданные кнопки
        });
    } catch (error) {
        console.error("Error sending /books_class_10 message:", error);
        // В случае ошибки отправляем простое сообщение
        await ctx.reply("Failed to load 10th-grade books. Please try again later.");
    }
});

module.exports = composer;
