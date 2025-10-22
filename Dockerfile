FROM node:24-alpine AS base

FROM base AS builder
WORKDIR /app

# deps
COPY package.json package-lock.json* .npmrc* .
RUN npm ci

# prisma generate
COPY prisma prisma
RUN npm run db:generate

# actual bundle
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/build ./build

EXPOSE 8000
ENV PORT=8000

CMD ["node", "--enable-source-maps", "build/app.js"]