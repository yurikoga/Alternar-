document.addEventListener('DOMContentLoaded', () => {
    const lockSwitch = document.getElementById('lock-switch');

    // Ouvir o evento de mudança (change) no checkbox
    lockSwitch.addEventListener('change', () => {
        if (lockSwitch.checked) {
            console.log('Cadeado trancado (Estado: image_9.png)');
            // Adicione sua lógica de trancamento aqui (ex: bloquear um recurso)
        } else {
            console.log('Cadeado destrancado (Estado: image_8.png)');
            // Adicione sua lógica de destrancamento aqui (ex: liberar um recurso)
        }
    });
});
