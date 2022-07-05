import GhostContentAPI,{PostsOrPages} from "@tryghost/content-api";


const api = new GhostContentAPI({
    url: 'https://blog.codyscottjohnson.com',
    key: '604ce983a2c211f88f993f7462',
    version: "v5.0"
});

export async function getPosts():Promise<PostsOrPages|void> {
    return await api.posts
        .browse({
            limit: "all"
        })
        .catch(err => {
            console.error(err);
            
        });
}
