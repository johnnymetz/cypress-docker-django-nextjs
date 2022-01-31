FROM node:17
WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm install

# copy source code
COPY src/ ./src

EXPOSE 3000

CMD ["npm", "run", "dev"]
