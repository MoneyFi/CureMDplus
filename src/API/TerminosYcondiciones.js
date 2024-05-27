const dividirTextoEnListas = (texto) => {
    // Agregar '5.2' al regex
    const regex = /(\d+(\.\d+)?-|\d+(\.\d+)|•|[a-z]\))/g;
    const partes = texto.split(regex).filter(part => part !== undefined && part.trim() !== '');
    let resultado = [];
    let actual = { type: 'text', content: '' };

    for (let i = 0; i < partes.length; i++) {
        const parte = partes[i];
        if (regex.test(parte)) {
            if (actual.type === 'list') {
                resultado.push(actual);
            } else if (actual.content.trim()) {
                resultado.push(actual);
            }
            actual = { type: 'list', items: [] };
            if (i + 1 < partes.length && partes[i + 1] !== undefined && partes[i + 1].trim()) {
                actual.items.push(parte + " " + partes[i + 1].trim());
                i++;
            } else {
                actual.items.push(parte.trim());
            }
        } else {
            if (actual.type === 'list') {
                actual.items[actual.items.length - 1] += " " + parte.trim();
            } else {
                actual.content += " " + parte.trim();
            }
        }
    }

    if (actual.type === 'list') {
        resultado.push(actual);
    } else if (actual.content.trim()) {
        resultado.push(actual);
    }

    return resultado;
};

export { dividirTextoEnListas };