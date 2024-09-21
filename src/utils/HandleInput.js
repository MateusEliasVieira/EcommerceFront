const applyCPFMask = (value) => {
    return value
        .replace(/\D/g, '') // Remove caracteres não numéricos
        .slice(0, 11) // Limita a 11 caracteres (incluindo os pontos e traço)
        .replace(/(\d{3})(\d)/, '$1.$2') // Insere o primeiro ponto após o terceiro dígito
        .replace(/(\d{3})(\d)/, '$1.$2') // Insere o segundo ponto após o sexto dígito
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Insere o traço após o nono dígito
};
const applyCEPMask = (value) => {
    return value
        .replace(/\D/g, '') // Remove caracteres não numéricos
        .slice(0, 8) // Limita a 8 caracteres (incluindo o hífen)
        .replace(/(\d{5})(\d{1,3})$/, '$1-$2'); // Insere o hífen após os primeiros 5 dígitos
};
const applyTELMask = (value) => {
    return value
        .replace(/\D/g, '')      // Remove caracteres não numéricos
        .slice(0, 9)             // Limita a 9 caracteres (número de telefone)
        .replace(/(\d{5})(\d{4})/, '$1-$2'); // Adiciona hífen após os cinco primeiros dígitos
};
