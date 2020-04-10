<template>
    <div>
        <v-app-bar
            height="95px"
        >
            <v-toolbar-title>
                <v-row>
                    <v-col :class="$style.brandTitle">
                        <h1>Epiboard</h1>
                        <p>Votre dashboard</p>
                    </v-col>
                </v-row>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <div v-if="$vuetify.breakpoint.smAndDown">
                <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn
                    v-on="on"
                    icon
                    >
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </template>
                <v-list class="px-3">
                    <v-list-item
                    v-for="(item, index) in navItems"
                    :key="index"
                    @click="affiche(index)"
                    >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                    <v-btn :class="$style.btnInscrire">
                        S'inscrire
                    </v-btn>
                </v-list>
                </v-menu>
            </div>
            <div v-if="$vuetify.breakpoint.mdAndUp">
                <v-btn text v-for="navItem in navItems" :key="navItem.id">
                    {{navItem.title}}
                </v-btn>

                <v-btn :class="$style.btnInscrire">
                    S'inscrire
                </v-btn>
            </div>
        </v-app-bar>
    </div>
</template>
<script>
export default {
    data () {
        return {
        navItems: [
            { id: 0, title: "Explorer", route: "" },
            { id: 1, title: "Blog", route: "" },
            { id: 2, title: "Se connecter", route: "" },
        ],
        dialog: false,
        connexionPopup: ''
        }
    },
    methods: {
        affiche(index) {
            console.log(index);
        }
    }
}
</script>


<style lang="scss" module>
    @import "@/style";
    .brandTitle{
        color: $color-font-main;
    }
    .btnInscrire{
        background: #97C727!important;
    }

</style>