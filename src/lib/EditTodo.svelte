<script>
  const { id, name, onEdit } = $props();

  function save() {
    const input = document.getElementById("id");
    onEdit(id, input.value);
  }
</script>

{id} <input type="text" id="id" value={name} />
<button onclick={save}>Save</button>
