FROM node:16
WORKDIR /user
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY . .
EXPOSE 5001
CMD ["npm", "run", "start:dev"]
