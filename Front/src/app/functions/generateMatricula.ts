export function gerarMatriculaAleatoria(tamanho: number): string {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    let matricula = '';

    for (let i = 0; i < tamanho; i++) {
        if (Math.random() < 0.5) {
            // Adiciona uma letra aleatória
            matricula += letras.charAt(Math.floor(Math.random() * letras.length));
        } else {
            // Adiciona um número aleatório
            matricula += numeros.charAt(Math.floor(Math.random() * numeros.length));
        }
    }

    return matricula;
}