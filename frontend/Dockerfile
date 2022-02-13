# Stage 1: install dependencies
FROM node:17 AS deps
WORKDIR /app
COPY package*.json .
RUN npm install

# Stage 2: build
FROM node:17 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY src ./src
COPY package.json next.config.js jsconfig.json ./
ARG NEXT_PUBLIC_BACKEND_URL
ENV NEXT_PUBLIC_BACKEND_URL $NEXT_PUBLIC_BACKEND_URL
RUN npm run build

# Stage 3: run
FROM node:17
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
CMD ["npm", "run", "start"]
