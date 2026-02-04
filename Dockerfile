# Stage 1: Documentation/Base
FROM nginx:alpine AS final

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy your static files (index.html, css, js)
COPY . /usr/share/nginx/html

# COPY your custom nginx config that we created in the previous step
# This replaces the default config that only knows about Port 80
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose BOTH ports for HTTP and HTTPS
EXPOSE 80
EXPOSE 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]