<script>
  import EditTodo from "./EditTodo.svelte";
  import Todo from "./Todo.svelte";

  let todos = $state([]);

  let id = 0;

  function add(e) {
    e.preventDefault();
    const input = document.getElementById("todo");
    todos.push({ id: id++, name: input.value });
    input.value = "";
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
  <input type="text" id="todo" />
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
