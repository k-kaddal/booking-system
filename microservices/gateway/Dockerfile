FROM node:16
WORKDIR /gateway
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD npm run start:dev