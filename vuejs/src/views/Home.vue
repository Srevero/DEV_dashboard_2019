<template>
  <div class="home">
    <NavBarHome></NavBarHome>
    <PopupConnexion></PopupConnexion>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBarHome from "@/components/Base/navbar-home"
import PopupConnexion from "@/components/popups/connexion-popup"

export default {
  name: 'Home',
  components: {
    NavBarHome,
    PopupConnexion
  }
}
</script>
