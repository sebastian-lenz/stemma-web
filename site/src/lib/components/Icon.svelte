<script lang="ts">
  interface Props {
    id: string;
    class?: string;
  }

  let { id, class: className = 'h-4 w-4' }: Props = $props();
</script>

<svg class={className} aria-hidden="true">
  <use href="#{id}" />
</svg>
