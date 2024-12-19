FROM node:22.12.0 as builder

WORKDIR /app

COPY package.json .

# Install pnpm
RUN npm install -g pnpm
RUN pnpm install

# set up tailwind css
RUN pnpm install -D tailwindcss
RUN npx tailwindcss init

COPY . .

EXPOSE 5001

CMD ["pnpm", "run", "dev"]