const { Composer, Markup } = require('telegraf');

const composer = new Composer();

composer.start(async (ctx) => {
    const buttons = Markup.inlineKeyboard([
        [Markup.button.url('🚀 Go to App', 'https://t.me/HateCapsBot/Hatecaps')],
        [Markup.button.url('📣 Channel', 'https://t.me/@whsxg0')],
    ]);

    const messageText = `👋 Hi friend!

Here you can take part in the NFT Hate Caps draw, which will be in great demand for their uniqueness.
Do not miss this opportunity!`;

    try {
        await ctx.reply(messageText, {
            reply_markup: buttons.reply_markup, 
            parse_mode: 'MarkdownV2',
        });
    } catch (error) {
        console.error("Error sending start message:", error);
    }
});

module.exports = composer;
