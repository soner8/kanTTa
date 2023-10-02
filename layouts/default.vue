<template>
  <main class="mainWrapper">
    <SideBar />

    <div class="section-wrapper">
      <slot />
    </div>
  </main>
</template>

<style lang="css" scoped>
.mainWrapper {
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.section-wrapper {
  padding: 40px;
  width: auto;
  overflow: scroll;
}
.search-input {
  margin: auto;
  position: absolute;
  left: 50%;
  right: auto;
}
</style>
