FROM node:22.11.0-alpine AS base

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22.11.0-alpine AS production

WORKDIR /app

COPY --from=base /app/package.json /app/package-lock.json ./
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public

RUN npm install --production

EXPOSE 3000

CMD ["npm", "run", "start"]
