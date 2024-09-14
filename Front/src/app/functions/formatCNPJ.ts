export function formatarCNPJ(input: string) {
    // Remove tudo que não for número
    let cnpj = input.replace(/\D/g, '');

    // Limita o CNPJ a 14 caracteres numéricos
    if (cnpj.length > 14) {
        cnpj = cnpj.substring(0, 14);
    }

    // Aplica a formatação conforme o usuário digita
    cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2");
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    cnpj = cnpj.replace(/\.(\d{3})(\d{4})(\d)/, ".$1/$2-$3");

    // Atualiza o valor do campo input
    return cnpj;
}