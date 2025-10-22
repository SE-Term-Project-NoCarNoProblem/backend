FROM node:24-alpine AS base

FROM base AS builder
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

# deps
COPY package.json pnpm-lock.yaml .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# prisma generate
COPY prisma prisma
RUN pnpm run db:generate

# actual bundle
COPY . .
RUN pnpm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/build ./build

EXPOSE 8000
ENV PORT=8000

CMD ["node", "--enable-source-maps", "build/app.js"]