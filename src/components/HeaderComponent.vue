<script>
import {
    CHeader,
    CContainer,
    CHeaderBrand,
    CHeaderToggler,
    CCollapse,
    CHeaderNav,
    CNavItem,
    CNavLink,
    CDropdown,
    CDropdownItem
} from '@coreui/vue'

export default {
    components: {
        CHeader,
        CContainer,
        CHeaderBrand,
        CHeaderToggler,
        CCollapse,
        CHeaderNav,
        CNavItem,
        CNavLink,
        CDropdown,
        CDropdownItem,
    }
}

</script>

<template>
    <CHeader>
        <CContainer fluid>
        <CHeaderBrand href="#">Header</CHeaderBrand>
                <CHeaderToggler @click="visible = !visible" />
                <CCollapse class="header-collapse" :visible="visible">
                    <CHeaderNav>
                        <CNavItem>
                            <CNavLink href="#" active>
                                Home
                            </CNavLink>
                        </CNavItem>
                        <CNavItem>
                            <CNavLink href="#">Link</CNavLink>
                        </CNavItem>
                        <CDropdown togglerText="Dropdown" variant="nav-item">
                            <CDropdownItem href="#">Action</CDropdownItem>
                            <CDropdownItem href="#">Another action</CDropdownItem>
                            <CDropdownItem href="#">Something else here</CDropdownItem>
                        </CDropdown>
                        <CNavItem>
                            <CNavLink href="#" disabled>
                                Disabled
                            </CNavLink>
                        </CNavItem>
                    </CHeaderNav>
                </CCollapse>
            </CContainer>
        </CHeader>
</template>


<style scoped lang="scss">
.header{
    --cui-header-bg:#212631;
    --cui-header-brand-color:white;
}
</style>
