npm run build

gcloud app deploy `
    --version=$(Get-Content ./VERSION) `
    --project 'henryfbp-nodejs-site' `
    --quiet