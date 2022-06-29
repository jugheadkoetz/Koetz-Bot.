player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Erro emitido da conexão sua net é lixo em mlk ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Tocando ${track.title} em **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Musica ${track.title} adicionada a Fila ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Foi desconectado automaticamente do canal de voz, Limpando a Fila... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Ninguem encontrado no canal de voz, Saindo do canal de voz Tchauu!!... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Terminei de ler a Fila inteirinha se acredita? to vazando ✅');
});