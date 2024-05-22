const readline = require('readline')
const fs = require('fs')

const input = readline.createInterface(
    process.stdin, 
    process.stdout
);

let user = ''

input.question("Qual é o seu nome de usuário? ", (userDigitado) => {
    user = userDigitado
    console.log(user)
    if (!!user) {
        fetch(`https://api.github.com/users/${user}`)
        .then(response => {
            if(response.ok === true){
                return response.json()
            } else {
                throw new Error()
            }
        })
        .then(data => {
            console.log(data);
            console.log(data.name)
            console.log(data.avatar_url)
            console.log(data.html_url)
            console.log(data.bio) // -> pode ser null
            console.log(data.company) // -> pode ser null
            console.log(data.public_repos)
            console.log(data.followers)
            console.log(data.following)
            if (data.bio == null) {
                data.bio = "Biografia não inserida"
            }
            if (data.company == null) {
                data.company = "local de trabalho não inserido"
            }

            fs.writeFileSync('usuario.html', `
            <!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>perfil usuário</title>
              </head>
              <body>
                <style>
                  * {
                  font-family: "poppins", sans-serif; 
                  font-size: 1.3rem;
                  color: #fff;
                  text-decoration: none;
                  transition: .3s;
                  gap: 3ch;
                }
                body {
                  display: flex; 
                  flex-direction: column; 
                  justify-content: center; 
                  align-items: center;
                  padding-top: 5%;
                  background: #222;
                }
                img {
                  border-radius: 50%;
                  width: 13rem;
                  border: 1px solid #fff;
                }
                a:hover {
                    transform: scale(0.8);
                  }
                  div {
                    display: grid;
                    grid-auto-columns: auto;
                    grid-template-columns: repeat(1, 1fr);
                    align-items: center;
                  }
  
                  @media screen and (min-width: 768px) {
                    * {
                      gap: 1rem;
                    }
                    div {
                      grid-template-columns: repeat(2, 1fr);
                    }
                  }
                  span {
                    margin-left: 1rem;
                    margin-right: 1rem;
                    padding-inline: 4rem;
                    padding-block: 1rem;
                    border-radius: 16rem;
                    background: #191919;
                    box-shadow: .2em .2em 1em #111;
                  }            
              </style>
              <h1>${data.name}</h1>
              <img src="${data.avatar_url}" alt="avatar_perfil">
                <a href="${data.html_url}">\\ Visite o perfil aqui</a>
                <div>
                  <span> Biografia: ${data.bio} </span>
                  <span> Local de Trabalho: ${data.company} </span>
                  <span> Repositórios: ${data.public_repos} </span>
                </div>
                <div>
                  <span> Seguidores: ${data.followers} </span>
                  <span> Seguindo: ${data.following} </span>
                </div>
              </body>     
            </html>
            `)
            
        })
        .catch(() => {
            console.error("ocorreu um erro ao acessar a API")
            
        })
    } else {
        console.log(`o usuario inserido ${user}, está inválido`)
    }
    input.close()
})
