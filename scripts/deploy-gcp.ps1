npm run build

gcloud app deploy --version=$(Get-Content ./VERSION) --quiet