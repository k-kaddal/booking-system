FROM node:16
WORKDIR /booking
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY . .
EXPOSE 5003
CMD npm run start:dev