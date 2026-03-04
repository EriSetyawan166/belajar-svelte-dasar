<script>
  import Todo from "./Todo.svelte";

  const todos = $state([
    {
      id: "1",
      name: "Belajar Nextjs",
      done: true,
    },
    {
      id: "2",
      name: "Belajar svelte",
      done: false,
    },
    {
      id: "3",
      name: "Belajar sveltekit",
      done: false,
    },
    {
      id: "4",
      name: "Belajar vue",
      done: false,
    },
  ]);

  function remove() {
    todos.shift()
  }
</script>

<ul>
  {#each todos as todo (todo.id)}
    <li>
      <Todo {...todo} />
    </li>
  {/each}
</ul>

<button onclick={remove}>
    remove
</button>
