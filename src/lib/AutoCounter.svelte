<script>
let count = $state(0);
let interval = $state(1000);

function increment() {
    interval += 1000;
}

$effect(() => {
    const id = setInterval(() => {
        count += 1;
    }, interval)

    return (() => {
        clearInterval(id);
    })
})

</script>

<h1 class={count % 2 === 0 ? 'red' : 'blue'}>{count}</h1>

<button onclick={increment}>Increment</button>

<style>
    .red {
        background-color: red;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }

    .blue {
        background-color: blue;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }
</style>