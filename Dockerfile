# Stage 1: Build the application
FROM node:22-slim AS build
WORKDIR /app
RUN apt-get update && apt-get upgrade -y
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application
FROM node:22-slim
WORKDIR /app
RUN apt-get update && apt-get upgrade -y
COPY --from=build /app/dist/landingpage ./
RUN npm install serve
EXPOSE 3000
CMD ["npx", "serve", "-s", "."]