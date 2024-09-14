export function formatarCPF(input: string) {
    // Remove tudo que não for número
    let cpf = input.replace(/\D/g, '');

    // Limita o CPF a 11 caracteres numéricos
    if (cpf.length > 11) {
        cpf = cpf.substring(0, 11);
    }

    // Aplica a formatação conforme o usuário digita
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    cpf = cpf.replace(/\.(\d{3})(\d{2})$/, ".$1-$2");

    // Atualiza o valor do campo input
    return cpf;
}