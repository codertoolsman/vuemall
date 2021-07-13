<template>
    <div id="tabbar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style scoped>
  #tabbar {
    display: flex;
    background-color: #e3e3e3;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.3);
  }
</style>