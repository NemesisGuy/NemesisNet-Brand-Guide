FROM nginx:1.27-alpine

# Remove default config
RUN rm -f /etc/nginx/conf.d/default.conf


# Copy custom NGINX config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy HTML and assets
COPY index.html /usr/share/nginx/html/index.html
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
