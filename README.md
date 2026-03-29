# Future Gadget Labs — Portfolio Showcase

High-end portfolio site showcasing all FGL projects.

## Projects

| # | Project | Org | Repo |
|---|---------|-----|------|
| 01 | TCG Collection Showcase | FutureGadgetCollections | [collection-showcase-frontend](https://github.com/FutureGadgetCollections/collection-showcase-frontend) |
| 02 | TCG Market Tracker | FutureGadgetCollections | [collection-market-tracker-frontend-admin](https://github.com/FutureGadgetCollections/collection-market-tracker-frontend-admin) |
| 03 | Cloud Predict Analytics | FG-PolyLabs | [cloud-predict-analytics-frontend-admin](https://github.com/FG-PolyLabs/cloud-predict-analytics-frontend-admin) |
| 04 | Doomsday Predictor | FG-PolyLabs | [doomsday-predict-frontend-admin](https://github.com/FG-PolyLabs/doomsday-predict-frontend-admin) |
| 05 | Card Identifier *(WIP)* | FutureGadgetResearch | [card-identifier-admin-frontend](https://github.com/FutureGadgetResearch/card-identifier-admin-frontend) |
| 06 | Crypto Portfolio *(WIP)* | FutureGadgetInvestments | [crypto-portfolio-frontend-admin](https://github.com/FutureGadgetInvestments/crypto-portfolio-frontend-admin) |
| 07 | Stock Portfolio *(WIP)* | FutureGadgetInvestments | [stock-portfolio-frontend-admin](https://github.com/FutureGadgetInvestments/stock-portfolio-frontend-admin) |

## TODO

- [ ] **Project detail pages** — replace the direct GitHub repo links on each bento card with rich showcase pages (`/projects/01-tcg-collection/`, etc.). Each page should include:
  - Project overview, purpose, and how it works
  - Screenshots / demo video embed
  - Architecture diagram (how frontend, backend, BigQuery, Cloud Run, GCS fit together)
  - Links to all related repos (frontend, backend, infra) and the live site
  - Tech stack breakdown
  - Current status / roadmap for WIP projects

## Stack

Static HTML/CSS/JS — no build step required. Open `index.html` directly or serve with any static host.

## Updating for architectural changes

Use the built-in `architecture-sync` agent:

```
/architecture-sync
```

This will fetch the latest READMEs, Hugo configs, and CI workflows from all four repos and return a structured report of what changed so the portfolio cards and architecture diagram can be updated accurately.
