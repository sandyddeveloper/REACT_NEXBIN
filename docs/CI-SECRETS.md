# CI Secrets Guidance

Store required secrets in GitHub repository Secrets (Settings → Secrets):

- `VERCEL_TOKEN` — Vercel deploy token
- `VERCEL_ORG_ID` — Vercel organization id
- `VERCEL_PROJECT_ID` — Vercel project id
- `GITHUB_TOKEN` — already provided to actions; used for GHCR publish
- `DOCKER_REGISTRY_USER` / `DOCKER_REGISTRY_PASSWORD` — if pushing to external registry

Security best practices:
- Use least-privilege tokens scoped to required actions.
- Rotate secrets regularly.
- Use environment-specific secrets for staging/production.
- Never commit secrets in code or `.env` files.

CI tips:
- For Terraform, store cloud provider credentials as repository or org secrets and restrict usage to protected branches.
- For infrastructure deployments consider using a dedicated CI runner with restricted access to secrets.
