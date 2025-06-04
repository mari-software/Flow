<script lang="ts">
    let { children, className } = $props<{
        children: () => void; 
        className?: string ;
         }>();
</script>

<fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
    {@render children()}
</fieldset>