# Prototype kit only supports up to v20
FROM node:20-alpine3.21

# Create a non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

RUN mkdir -p .tmp

# Change ownership to the non-root user
RUN chown -R nodejs:nodejs /app
USER nodejs

EXPOSE 3000
CMD ["npm", "start"]
