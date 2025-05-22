# 📦 Product Scanner

Sistema de controle de entrada e saída de produtos por leitura de QR Code.

Este projeto é um **monorepo** estruturado com `npm workspaces`, contendo aplicações backend e frontend, além de pacotes compartilhados entre elas.

---

## 🎯 Finalidade

O **Product Scanner** tem como objetivo facilitar o controle de estoque por meio da leitura de **QR Codes**. Cada produto possui um código único gerado no sistema, e é possível registrar sua **entrada** ou **saída** com praticidade usando um smartphone ou câmera conectada.

Este sistema é ideal para pequenas empresas, ateliês de decoração ou ambientes com rotatividade de materiais.

---

## 🗂️ Estrutura do Monorepo
```
product-scanner/
├── apps/
│ ├── api/ → Backend (Node.js, Express, TypeScript)
│ └── web/ → Frontend (React, Vite, TypeScript)
│
├── packages/
│ ├── core/ → Entidades e enums compartilhados (TypeScript)
│ └── db/ → Configuração do banco de dados (TypeORM, PostgreSQL)
│
├── tsconfig.json → Configuração base do TypeScript
├── package.json → Workspaces e scripts globais
```

---

## 🛠️ Tecnologias

### Backend – `apps/api`
- **Node.js**
- **Express**
- **TypeScript**
- **TypeORM**
- **PostgreSQL**

### Frontend – `apps/web`
- **React**
- **Ant Design**
- **Vite**
- **TypeScript**
- **QR Code Scanner**

### Pacotes Compartilhados – `packages/`
- `core`: entidades, enums e tipos usados por frontend e backend
- `db`: conexão e configuração do TypeORM

---

## ▶️ Como iniciar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/RafaelNagatomo/product-scanner.git
cd product-scanner
```

2. Instale as dependências:
```bash
npm install
```

3. Rode o projeto:
```bash
npm run dev
```

Este comando executa o backend (apps/api) e o frontend (apps/web) simultaneamente.

🧩 QR Code Scanner
A leitura do QR Code pode ser feita via câmera do celular ou webcam.

O QR Code contém o identificador do produto.

Ao escanear, o sistema registra automaticamente a entrada ou saída no estoque.

📌 Status
🚧 Projeto em desenvolvimento – MVP em progresso
