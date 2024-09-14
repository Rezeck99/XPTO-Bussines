export function formatarCPFeCNPJ(input: string) {
    // Remove tudo que não for número
    let valor = input.replace(/\D/g, '');

    // Define formatação com base no número de dígitos (CPF ou CNPJ)
    if (valor.length <= 11) {
        // Formatação para CPF
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
        valor = valor.replace(/\.(\d{3})(\d{2})$/, ".$1-$2");
    } else {
        // Formatação para CNPJ
        valor = valor.replace(/^(\d{2})(\d)/, "$1.$2");
        valor = valor.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        valor = valor.replace(/\.(\d{3})(\d{4})(\d)/, ".$1/$2-$3");
    }

    // Limita o número de caracteres a 14 para CPF e 18 para CNPJ
    return valor.substring(0, 18);
}