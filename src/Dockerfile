FROM node:16 AS development

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# if you are using yarn
# RUN yarn install

# Bundle app source
COPY . .

RUN npm run build

# Copy app source to /usr/src/app
#Production mode

FROM node:16 AS production

# Set node env to prod
ARG NODE_ENV=production
ENV NODE_ENV=development

# Set Working Directory
WORKDIR /usr/src/app

# Copy all from development stage
COPY --from=development /usr/src/app/ .

EXPOSE 8080


CMD [ "node", "dist/main" ]


# Language: dockerfile
# Path: src/Dockerfile
#build with AmirJahan