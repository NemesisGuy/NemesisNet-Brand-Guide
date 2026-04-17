FROM nginx:1.27-alpine

# Remove default config
RUN rm -f /etc/nginx/conf.d/default.conf


# Copy custom NGINX config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy HTML and assets
COPY src/index.html /usr/share/nginx/html/index.html
COPY src/brand-tokens.css /usr/share/nginx/html/brand-tokens.css
COPY src/sitemap.xml /usr/share/nginx/html/sitemap.xml
COPY robots.txt /usr/share/nginx/html/robots.txt
COPY css/ /usr/share/nginx/html/css/
COPY public/assets/ /usr/share/nginx/html/assets/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
