FROM node:22-alpine AS build

WORKDIR /work
RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY libs/email-templates/package.json ./libs/email-templates/package.json
RUN pnpm install --frozen-lockfile --network-concurrency=2 --child-concurrency=1

COPY tsconfig*.json nest-cli.json mikro-orm.config.ts ./
COPY src ./src
COPY libs/email-templates ./libs/email-templates
COPY public ./public
RUN pnpm --filter @repo/email-templates build && pnpm build

FROM node:22-alpine AS production

WORKDIR /work
ENV NODE_ENV=production
RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY libs/email-templates/package.json ./libs/email-templates/package.json
RUN node -e "const fs = require('node:fs'); const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8')); delete pkg.scripts.prepare; fs.writeFileSync('package.json', JSON.stringify(pkg));" \
    && pnpm install --prod --frozen-lockfile

COPY --from=build /app/dist ./dist
COPY --from=build /app/libs/email-templates/dist ./libs/email-templates/dist

USER node
EXPOSE 3600
CMD ["node", "/dist/main.js"]
