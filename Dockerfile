FROM node:latest
LABEL maintainer="projetomiranha"
ENV PORT=3000 
WORKDIR /homem-aranha
COPY homem-aranha /homem-aranha
RUN npm install -y
ENTRYPOINT ["npm", "start"]
EXPOSE $PORT