<script>
  let { id, name, onEdit } = $props();

  function save() {
    onEdit(id, name);
  }
</script>

{id} <input type="text" id="id" bind:value={name} />
<button onclick={save}>Save</button>
