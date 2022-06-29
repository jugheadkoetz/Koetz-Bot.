module.exports = {
    app: {
        px: '$',
        token: 'OTg3MzEyMTk3NDY4Mjk1MTc5.GI5xfa.x_x9XAPco7sezY_eV9SZA0ER06VSjEioS-Cwfk',
        playing: 'a mãe do igao no chão', playing_1: 'a tia do mateus na parede'

    },

    opt: {
        DJ: {
            enabled: true,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 200,
        loopMessage: true,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
