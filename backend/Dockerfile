FROM node

RUN ["echo", "Starting backend..."]

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN ["echo", "Starting backend..."]

CMD ["npm", "start"]