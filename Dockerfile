# Prototype kit only supports up to v20
FROM node:20-alpine3.21

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

RUN mkdir -p .tmp

EXPOSE 3000
CMD ["npm", "start"]
