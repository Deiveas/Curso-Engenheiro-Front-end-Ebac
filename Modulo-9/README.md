# Curso-Engenheiro-Front-end-Ebac:man_student:

Primeiro Repositório Ebac

# Git

## Conceitos de versionamento

- Histórico
- Controle de versão
- Quem alterou
- O que alterou
- Quando alterou
- Todos os arquivos
- Evolução contínua

## Clonar o projeto

git clone https://github.com/Deiveas/Curso-Engenheiro-Front-end-Ebac.git

## Commits

Informação de alteração
- após testado todo seu código

- git add *
- git commit -m "mensagem"
- git push (enviar alterações para o repositório)
- git pull(puxar / trazer alterações de GitHub para minha máquina)

## GitFlow

Fluxo do Git

### Branchs

são ramificações / versões paralelas

- main / master (vai para produção, quando o projeto é publico)
- Develope
- DOD Definition of Done: critérios de aceite
- versionamento 1.0.0

git checkout -b dev (cria uma branch)
git checkout master (mudar de branch)

### Merge
mescla de branchs
Você pode precisar resolver conflitos manualmente

git merge main 

### Pull Requests
Mescla de branchs no repositório
Permite code review
O repositório resolve os conflitos automaticamente

#### Configura  o GitFlow
git flow init
git flow feature start {nome-da-feature}