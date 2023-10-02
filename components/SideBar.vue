<template>
  <div class="sideWrapper">
    <div class="icon-wrapper">
      <NuxtLink to="/">
        <Icon
          class="sidebar-icon"
          color="white"
          name="icon-park-solid:movie"
          size="25"
        />
      </NuxtLink>
      <NuxtLink to="shows">
        <Icon
          class="sidebar-icon"
          color="white"
          name="solar:tv-bold"
          size="25"
        />
      </NuxtLink>

      <NuxtLink to="favorites">
        <Icon
          class="sidebar-icon"
          color="white"
          name="icon-park-solid:like"
          size="25"
        />
      </NuxtLink>
      <NuxtLink to="search">
        <Icon
          class="sidebar-icon"
          color="white"
          name="icon-park-solid:search"
          size="25"
        />
      </NuxtLink>
    </div>
  </div>
</template>
<style lang="css" scoped>
.sideWrapper {
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 60px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  border-right: 1px solid white;
}

.icon-wrapper {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.sidebar-icon {
  cursor: pointer;
}
</style>
