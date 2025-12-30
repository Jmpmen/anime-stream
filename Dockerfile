FROM node:22-bullseye-slim AS base

# Common labels and working dir
WORKDIR /app
ENV NODE_ENV=production

########################################
# Dependencies stage - cached by package files
########################################
FROM base AS deps
COPY package*.json ./
# Install only production dependencies for smaller image; build stage will have dev deps if needed
RUN npm ci --no-audit --no-fund

########################################
# Builder - full source and build
########################################
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# If you need env disabled for telemetry uncomment
# ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

########################################
# Runtime image - use the standalone output created by next
########################################
FROM node:22-bullseye-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 --ingroup nodejs nextjs

# Copy public and standalone outputs only (smaller footprint)
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone .
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]