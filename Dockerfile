FROM node:14 as build
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
RUN install -g @angular/cli@15
COPY . /app
RUN ng build --configuration production
FROM nginx:1.21-alpine
COPY --from=build  /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

