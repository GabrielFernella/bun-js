# Install Project
curl -fsSL https://bun.sh/install | bash

# Create Project 
bun create elysia nameProject

# Steps


# Packages
1. bun install -d prisma
2. bunx prisma init --datasource-provider postgresql
3. bunx prisma generate --schema=./src/external/prisma/schema.prisma
4. bunx prisma migrate dev --name init --schema=./src/external/prisma/schema.prisma






# Content
https://www.youtube.com/watch?v=5p5sE62bBVs
24:13