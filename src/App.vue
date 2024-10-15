<template>
    <div id="app">
        <HeaderComponent />
        <div class="app-wrapper">
            <!-- Sidebar -->
            <SideBarComponent />
            <!-- Main Content -->
            <div class="main-content flex-grow-1 d-flex flex-column">
                <!-- Navbar -->
                <main class="p-3 flex-grow-1">
                    <!-- Qui va il contenuto delle varie pagine -->
                    <router-view />
                </main>
            </div>
        </div>
        <FooterComponent />
    </div>
</template>

<script>
// import NavBar from './components/NavBar.vue'



import SideBarComponent from "@/components/SideBarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
    components: {
        HeaderComponent,
        SideBarComponent,
        FooterComponent
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

html, body, #app {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
}

.app-wrapper {
    display: flex;
    height: 100vh; /* Assicura che l'app occupi tutta l'altezza dello schermo */
}

.main-content {
    flex-grow: 1; /* Occupa tutto lo spazio rimanente accanto alla sidebar */
    //margin-left: 0px; /* Sposta il contenuto principale per fare spazio alla sidebar */
    display: flex;
    flex-direction: column;
    overflow-y: auto; /* Permette lo scroll se il contenuto è più lungo dello schermo */
}

main {
    flex-grow: 1; /* Assicura che il contenuto principale si espanda */
    background-color: #f8f9fa; /* Puoi cambiare il colore di sfondo se necessario */
    padding: 20px; /* Margine interno */
}

.d-flex {
    display: flex;
}
</style>

