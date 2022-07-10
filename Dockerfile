FROM node:12
WORKDIR /project
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8081
CMD [“node”, “index.js”]


