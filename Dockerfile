# Stage 1: Documentation/Base
FROM nginx:alpine AS final

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy your static files from your local machine to the container
# This assumes your index.html is in the root of your project
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx (this is the default command for the image, but good to be explicit)
CMD ["nginx", "-g", "daemon off;"]