https://www.youtube.com/watch?v=Z4Yw5Wdht_k

D3
https://www.youtube.com/watch?v=hOzKr8H_438

https://github.com/lumenwrites/helix

## Prisma with Postgres
- ``` npx prisma generate``` 
- ``` npx prisma db push ``` - This every time you update schema (Update Step 2)
- ``` npx prisma studio```  - Then you can do this
### Mirgations/Seeds
- ``` npx prisma migrate dev ```  --name development You will need to delete and re-run this is you change the schema (Update Step 1)
- ``` npx prisma migrate reset ``` - Do this to reset the entire DB
- ``` node prisma/seeds/clean.js``` 
- ``` npx prisma db seed ``` 

    checkmarks[index].value === null ? checkmarks[index].value = true
    : checkmarks[index].value === true ? checkmarks[index].value = false
    : checkmarks[index].value = null



ESLINT:    https://nextjs.org/docs/basic-features/eslint

I need to expand next auth to include a userId or change all the apis unique identifiers to work from email.