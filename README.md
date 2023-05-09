This is a test React app that connects to my mongo-atlas back end to fetch a single image.

I deployed this app to vercel.com (master branch - not main branch) and it correctly runs there in the free hobby tier.   I can enter vercel through github or directly.  There was some trouble when I was in vercel and did a deploy and it wouldn't use the latest code from github.  Things were fixed when I clicked on one of the vercel links when in my github repo.

So the idea would be to rebuild the UI of my website in react using the mongo atlas api and all of it would be free.   For the administration I could continue to run a local python API that talks to mongo atlas or else rework my admin UI to login to mongo-atlas with write permission so that it can perform CRUD operations on the database without needing the python API.

