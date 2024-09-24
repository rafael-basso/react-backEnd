FROM node:14

# Install dependencies
RUN npm install

# Set up SQLite database
RUN npm install sqlite3
RUN sqlite3 /app/db.sqlite3

# Copy application code
COPY . /app/

# Compile code
RUN npm run build

# Expose port
EXPOSE 3331

#ENV-variables
ENV DATABASE_URL=$DATABASE_URL
ENV NODE_ENV=$NODE_ENV

# Run command
CMD ["node", "server.ts"]