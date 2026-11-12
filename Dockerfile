# Stage 1: Build static web assets
FROM node:22-alpine AS builder
WORKDIR /app
# Install dependencies first for optimal Docker layer caching
COPY package*.json ./
RUN npm ci
# Copy source code and build project
COPY . .
RUN npm run build

# Stage 2: Minimal, production-ready Nginx server
FROM nginx/nginx-unprivileged:stable-alpine-slim
# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy compiled static assets from builder stage
COPY --chown=101:101 --from=builder /app/dist /usr/share/nginx/html
USER 101:101
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:8080/ || exit 1
CMD ["nginx", "-g", "daemon off;"]
