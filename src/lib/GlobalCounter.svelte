<script>
  import { counter } from "../state/counter.svelte";

function increment() {
    counter.count++;
}
</script>

<button onclick={increment}>
increment {counter.count}
</button>