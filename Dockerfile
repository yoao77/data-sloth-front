FROM node:20-slim

# Instalar utilitários
RUN apt-get update && apt-get install -y \
    vim \
    iputils-ping \
    && rm -rf /var/lib/apt/lists/*

# Habilitar pnpm
RUN corepack enable

WORKDIR /app

# Copiar arquivos de dependência primeiro (melhor cache)
COPY package.json pnpm-lock.yaml* ./

RUN pnpm install

# Copiar resto do projeto
COPY . .

EXPOSE 3000

CMD ["pnpm", "dev"]
