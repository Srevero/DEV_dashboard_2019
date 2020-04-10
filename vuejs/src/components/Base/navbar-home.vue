<template>
    <div>
        <v-app-bar
            color="deep-purple"
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

            <v-btn text>
                Explorer
            </v-btn>

            <v-btn text>
                Blog
            </v-btn>

            <v-btn text>
                Se connecter
            </v-btn>

            <v-btn :class="$style.btnInscrire">
                S'inscrire
            </v-btn>
        </v-app-bar>
    </div>
</template>

<style lang="scss" module>
    @import "@/style";
    .brandTitle{
        color: $color-font-main;
    }
    .btnInscrire{
        background: #97C727!important;
    }

</style>