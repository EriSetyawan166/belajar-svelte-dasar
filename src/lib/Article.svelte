<script>
    async function getArticle() {
        let response = await fetch("./article.json")
        return await response.json()
    }
</script>

{#await getArticle()}
    <p>.....Loading</p>
{:then data}
    <h1>{data.id}</h1>
    <p>{data.title}</p>
    <p>{data.content}</p>
    <p>{data.author}</p>
    <p>{data.date}</p>
{/await}