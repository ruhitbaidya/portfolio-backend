import dotenv from "dotenv";

dotenv.config()


export const config = {
    port : process.env.PORT,
    emailpasswor : process.env.emailpasswor,
    gunDomain : process.env.MAILGUN_DOMAIN,
    db_url:process.env.DB_URL,
    token_sec : process.env.TOKEN_SEC
}