# vogs-web — Treasury Dashboard

Next.js 16 institutional treasury dashboard with Solana wallet integration, real-time WebSocket data, AI agent chat, and compliance monitoring.

## Pages

### Public (no auth required)

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, features, CTA buttons |
| `/login` | Sign in — passkey, wallet, or email+password |
| `/signup` | Create account — institution, email, password |

### Protected (auth required — redirects to /login)

| Route | Description |
|-------|-------------|
| `/dashboard` | Dashboard overview — AUM, vault count, recent payments (live API data) |
| `/vaults` | Vault management — balances, APY, allocation strategy |
| `/payments` | Payment history — table with KYT status badges, new payment modal |
| `/streams` | Payment streams — active streams with rate and remaining amount |
| `/collateral` | Collateral positions — pledged assets, LTV, health factor |
| `/compliance` | Compliance dashboard — KYT alerts, Travel Rule log, blocked payments |
| `/agent` | AI agent chat — natural language commands with streaming responses |
| `/settings/security` | Auth methods — linked wallets, passkeys, active sessions |

## Prerequisites

- Bun 1.2+

## Installation

```bash
bun install
```

## Configuration

```bash
cp .env.example .env
```

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_API_URL` | Yes | Backend API URL (e.g., http://localhost:8080) |
| `NEXT_PUBLIC_WS_URL` | Yes | WebSocket URL (e.g., ws://localhost:8080/ws) |
| `NEXT_PUBLIC_SOLANA_RPC_URL` | No | Solana RPC (default: devnet) |
| `NEXT_PUBLIC_SOLANA_NETWORK` | No | Network name (default: devnet) |
| `PORT` | No | Server port (default: 3000) |

All `NEXT_PUBLIC_*` variables are **build-time** — they are baked into the JavaScript bundle during `bun run build`.

## Run

```bash
# Development
bun dev

# Production build
bun run build

# Start production server
bun start
```

## Linting

```bash
bun run lint      # Check with Biome
bun run format    # Auto-format
```

## Docker

```bash
docker build \
  --build-arg NEXT_PUBLIC_API_URL=http://localhost:8080 \
  --build-arg NEXT_PUBLIC_WS_URL=ws://localhost:8080/ws \
  .
```

3-stage build: deps → builder (with `NEXT_PUBLIC_*` as `ARG`) → runner (non-root `nextjs` user).

## Key Features

- **Solana Wallet Adapter** — Phantom, Solflare via `@solana/wallet-adapter-react`
- **WebSocket Hooks** — `useWebSocket` with exponential backoff reconnection
- **Domain Hooks** — `useVaults`, `usePayments`, `useStreams`, `useCollateral`
- **AI Chat** — `useAgent` hook with streaming responses
- **Theme** — Light default, dark mode via `useTheme` + localStorage persistence
- **PWA** — `manifest.json` with standalone display mode

## Project Structure

```
vogs-web/
├── next.config.ts         # output: "standalone", reactCompiler: true
├── public/
│   └── manifest.json      # PWA manifest
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Root layout (Sidebar + Header)
│   │   ├── globals.css    # CSS custom properties (light/dark)
│   │   ├── page.tsx       # Dashboard (/)
│   │   ├── vaults/        # /vaults
│   │   ├── payments/      # /payments
│   │   ├── streams/       # /streams
│   │   ├── collateral/    # /collateral
│   │   ├── compliance/    # /compliance
│   │   └── agent/         # /agent
│   ├── components/        # App-specific components
│   │   ├── Sidebar.tsx, Header.tsx
│   │   ├── Providers.tsx, WalletConnect.tsx
│   │   ├── TreasurySummary.tsx, VaultCard.tsx
│   │   ├── PaymentForm.tsx, ComplianceDashboard.tsx
│   │   └── AgentChat.tsx
│   ├── hooks/             # Custom React hooks
│   │   ├── useWebSocket.ts, useTheme.ts, useAgent.ts
│   │   ├── useVaults.ts, usePayments.ts
│   │   ├── useStreams.ts, useCollateral.ts
│   └── lib/               # Utility modules
│       ├── config.ts      # NEXT_PUBLIC_* centralized access
│       ├── types.ts       # TypeScript interfaces
│       ├── api.ts         # HTTP client functions
│       └── solana.ts      # Connection + wallet setup
└── Dockerfile
```

## Technical Note

`output: "standalone"` is set in `next.config.ts` for Docker deployment. The runner stage copies only `.next/standalone` and `.next/static`.
