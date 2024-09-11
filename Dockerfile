FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN npm install

# Gera os arquivos do Prisma Client
RUN rm -rf node_modules
RUN npm install

## comando para gerar o Prisma Client
RUN npx prisma generate

## comando para fazer a migração do banco de dados
RUN npx prisma migrate deploy
COPY . .

<<<<<<< HEAD:DockerFile
### comandos para iniciar a aplicação em prod
CMD ["npm", "start", "npx", "prisma"]
EXPOSE 3000
=======
CMD ["npm", "start"]
EXPOSE 3000
>>>>>>> e9395baffd35811fce06099056a7217891cc0ab6:Dockerfile
