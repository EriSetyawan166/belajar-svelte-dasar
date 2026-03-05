<script>
  import EditTodo from "./EditTodo.svelte";
  import Todo from "./Todo.svelte";

  let todos = $state([]);
  let name = $state("");
  let id = 0;

  function add(e) {
    e.preventDefault();
    todos.push({ id: id++, name: name });
    name = "";
  }

  function remove(id) {
    todos = todos.filter((todo) => todo.id !== id);
  }

  function edit(id) {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, edit: true } : todo,
    );
  }
  function onEdit(id, name) {
    todos = todos.map((todo) =>
      todo.id === id ? { id, name, edit: false } : todo,
    );
  }
</script>

<form>
  <input type="text" id="todo" bind:value={name} />
  <button onclick={add}>Add</button>
</form>
<ul>
  {#each todos as todo (todo.id)}
    <li>
      {#if todo.edit}
        <EditTodo id={todo.id} name={todo.name} {onEdit} />
      {:else}
        <Todo {...todo} />
        <button onclick={() => edit(todo.id)}>Edit</button>
        <button onclick={() => remove(todo.id)}> remove </button>
      {/if}
    </li>
  {/each}
</ul>

<style>
  :global {
    button {
      background-color: red;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }
  }
</style>
