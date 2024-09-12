FROM node:16.15-alpine

WORKDIR /usr/src/app

COPY . .

# Gera os arquivos do Prisma Client
RUN rm -rf node_modules
RUN npm install

## comando para gerar o Prisma Client
RUN npx prisma generate
RUN npx prisma migrate deploy

COPY . .

### comandos para iniciar a aplicação em prod
CMD ["npm", "start"]
<<<<<<< HEAD
EXPOSE 3000
=======
EXPOSE 3000
>>>>>>> eefd8a81e8e65a07f8ba8346e2aabd32cea5175f
