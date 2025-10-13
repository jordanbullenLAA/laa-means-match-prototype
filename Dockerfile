# Prototype kit only supports up to v20
FROM node:20-alpine3.21

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

RUN mkdir -p .tmp

# Change ownership to non-root user and switch to it
RUN chown -R 1001:1001 /app
USER 1001

EXPOSE 3000
CMD ["npm", "start"]
