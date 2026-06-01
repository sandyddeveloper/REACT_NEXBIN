# Architecture Overview

This document describes the high-level architecture for the nexbin monorepo.

- Frontends: `apps/web` (user dashboard) and `apps/admin` (admin panel), Next.js applications.
- Shared libraries: `packages/*` provide UI components, hooks, and API clients.
- Backend services: `services/*` host API, authentication, and third-party integrations (each integration isolated).
- Infrastructure: IaC lives under `infrastructure/` (Terraform, k8s manifests).
- Ops: CI/CD, monitoring and observability configs under `ops/`.

Security and deployment notes:
- Secrets stored in a secure secret store (Key Vault / AWS Secrets Manager) — do NOT commit secrets to the repo.
- Use CI to build, test, run type checks, and publish artifacts.
