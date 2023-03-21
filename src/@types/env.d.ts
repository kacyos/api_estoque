declare global {
  namespace NodeJS {
    interface ProcessEnv {
      LOCAL: number
      PRODUCTION: number
      DB_USER: string
      DB_PASSWORD: string | undefined,
      DB_NAME: string,
    }
  }
}
export { }

