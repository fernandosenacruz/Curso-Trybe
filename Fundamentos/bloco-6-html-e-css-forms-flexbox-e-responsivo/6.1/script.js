const select = document.getElementById('UF');
const estados = ['Acre', 'Alagoas','Amapá','Amazonas','Bahia','Ceará','Distrito Federal','Espírito Santo', 'Goiás','Maranhão,', 'Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins'];

function optionGenerate() {
    for (let index = 0; index < estados.length; index += 1) {
        let option = document.createElement('option');
        option.innerText = estados[index];
        option.className = 'ufs'
        select.appendChild(option);        
    }
}
optionGenerate();

let resumo = document.getElementById('resumo-perfil');
resumo.style.width = '100%';
let resumoCargo = document.getElementById('resumo-cargo');
resumoCargo.style.width = '100%';