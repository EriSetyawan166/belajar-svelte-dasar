<!-- <script>
  let count = $state(0)
  const increment = () => {
    count += 1
  }
</script>

<button onclick={increment}>
  count is {count}
</button> -->

<script>
  let count = $state([]);

  let total = $derived(count.reduce((a, b) => a + b, 0));

  function increment() {
    count.push(1);
  }
</script>

<h1>{count.join("+")} = {total}</h1>

<button onclick={increment}> increment! </button>
