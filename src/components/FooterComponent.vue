<template>
    <CFooter class="footer">
        <div>
            <CLink href="https://coreui.io">CoreUI</CLink>
            <span>&copy; 2024 My Company.</span>
        </div>
        <div>
            <span>Powered by</span>
            <CLink href="https://coreui.io">CoreUI</CLink>
        </div>
    </CFooter>
</template>

<script>
import { CFooter, CLink } from '@coreui/vue'

export default {
    components: {
        CFooter,
        CLink
    }
}
</script>

<style scoped lang="scss">
.footer {
    background-color: #212631; /* Sfondo scuro */
    color: #fff; /* Testo bianco */
    text-align: center;
    border: none;

    a {
        color: #ffffff;
        text-decoration: none;
    }

    a:hover {
        color: #d1d1d1;
    }

    div {
        display: flex;
        justify-content: space-between;
    }
}
</style>
