const uploadBtn = document.getElementById("upload-btn"); // Get the upload button
const inputUpload = document.getElementById("image-upload") // Get the input upload

uploadBtn.addEventListener("click", () => {
    inputUpload.click(); //
})

function lerConteudoDoArquivo(arquivo) { // Função para ler o conteúdo do arquivo
    return new Promise((resolve, reject) => { // Retorna uma promessa       
        const leitor = new FileReader(); // Cria um novo objeto FileReader
        leitor.onload = () => { // Quando o arquivo é carregado
            resolve({URL: leitor.result, nome: arquivo.name}) // Resolve a promessa com o resultado da leitura
        }
        leitor.onerror = () => {
            reject('Erro na leitura do arquivo ${arquivo.name}') // Rejeita a promessa com o erro
        }
        leitor.readAsDataURL(arquivo); // Lê o arquivo como uma URL
        
})

inputUpload.addEventListener("change", async (eventos) => {
    const arquivo = eventos.target.files[0];
    
    if(arquivo) {
        try{
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
        
        }
    }
})
    
