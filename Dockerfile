FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN npm install

# Gera os arquivos do Prisma Client
RUN npx prisma generate
RUN rm -rf node_modules
RUN npm install

COPY . .

CMD ["npm", "start"]
EXPOSE 3000
