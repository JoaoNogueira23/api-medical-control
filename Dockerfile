FROM node:16.15-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

# Gera os arquivos do Prisma Client
RUN rm -rf node_modules
RUN npm install

## comando para gerar o Prisma Client
RUN npx prisma generate

COPY . .

### comandos para iniciar a aplicação em prod
CMD ["npm", "start", "npx", "prisma"]
EXPOSE 3000
