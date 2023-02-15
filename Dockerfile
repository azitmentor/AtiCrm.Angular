FROM node:14 as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json
COPY package-lock.json
RUN npm install
RUN run install -g @angular/cli@15
COPY . /app
RUN ng build --configuration production
FROM nginx:1.21-alpine
COPY --from=build  /app/dist /usr/share/nginx/html
EXPOSE 80
