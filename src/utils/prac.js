const TMDB_TOKEN =
`eyJhbGciOiJIUzI1NiJ9
    .eyJhdWQiOiI4ZWM3YTZmM2NkMjg1ZGJmNmJmMmU2YTM3MDljNjA3MCIsInN1YiI6IjY0NTEwNzFiYWY4NWRlMDBlNzI0MDAxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ
    .uLVyKU2Uf_pGK_TmGyIZgs7pCdMw7avqBV8NX8U0SdE`
const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};
console.log(headers.Authorization);