FROM node as builder

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN npm install

COPY . .

RUN npm run build


FROM nginx

COPY --from=builder /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]