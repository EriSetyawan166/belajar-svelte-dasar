<script>
  import Maxwell from "./Maxwell.svelte";

  const name = "Svelte";
  const content = "<p>Hello World</p>";
</script>

{@html content}
<h1>Hello {name.toUpperCase()}!</h1>

<Maxwell />


<style>
  h1 {
    color: red;
  }
</style>
