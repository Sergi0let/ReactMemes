const links = {
  env: {
    apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    prodApiEndpoint: process.env.NEXT_PUBLIC_PROD_API_ENDPOINT!,
    databaseUrl: process.env.DATABASE_URL!,
    api: {
      memes: "/api/memes",
    },
  },
}

export default links
