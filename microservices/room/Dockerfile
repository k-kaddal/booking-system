FROM node:16
WORKDIR /room
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY . .
EXPOSE 5002
CMD npm run start:dev