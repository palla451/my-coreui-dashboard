<template>
    <CSidebar color-scheme="dark" >
        <CSidebarNav>
            <CNavTitle>Nav Title</CNavTitle>
            <CNavItem href="#">
                <CIcon  class="nav-icon" icon="cilAsteriskCircle" size="xxl" /> Nav item
            </CNavItem>
            <CNavItem href="#">
                <CIcon  class="nav-icon" icon="cilBan" size="xxl"/> With badge
                <CBadge class="ms-auto" color="primary">NEW</CBadge>
            </CNavItem>
            <CNavGroup>
                <template #togglerContent>
                    <CIcon  customClassName="nav-icon" icon="cilBasket" size="xxl"/> Nav dropdown
                </template>
                <CNavItem href="#">
                    <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
                </CNavItem>
                <CNavItem href="#">
                    <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
                </CNavItem>
            </CNavGroup>
            <CNavGroup>
                <template #togglerContent>
                    <CIcon  customClassName="nav-icon" icon="cilCalendar" size="xxl"/> Nav dropdown 2
                </template>
                <CNavItem href="#">
                    <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
                </CNavItem>
                <CNavItem href="#">
                    <span class="nav-icon"><span class="nav-icon-bullet"></span></span> Nav dropdown item
                </CNavItem>
            </CNavGroup>
            <CNavItem href="https://coreui.io">
                <CIcon class="nav-icon" icon="cilBasket"  size="xxl"/> Download CoreUI
            </CNavItem>
            <CNavItem href="https://coreui.io/pro/">
                <CIcon class="nav-icon" icon="cilBell"  size="xxl" /> Try CoreUI PRO
            </CNavItem>
        </CSidebarNav>
        <CSidebarFooter class="border-bottom">
            <CSidebarToggler />
        </CSidebarFooter>
    </CSidebar>
</template>


<style scoped lang="scss">
.sidebar-minimized {
    width: 80px; /* Imposta la larghezza minimizzata */
}
</style>

<script>
import {CSidebar, CNavTitle, CSidebarNav, CNavItem, CNavGroup, CSidebarFooter, CBadge, CSidebarToggler } from '@coreui/vue'

export default {
    components: {
        CSidebar,
        CNavTitle,
        CSidebarNav,
        CNavItem,
        CNavGroup,
        CSidebarFooter,
        CBadge,
        CSidebarToggler
    }
}
</script>
