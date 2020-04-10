<template>
  <div class="home">
    <NavBarHome></NavBarHome>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBarHome from "@/components/Base/navbar-home"

export default {
  name: 'Home',
  components: {
    NavBarHome
  }
}
</script>
