<script>
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import icons from '$lib/icons.svg?raw';
  let { children } = $props();
</script>

{@html icons}
<Nav />
{@render children()}
