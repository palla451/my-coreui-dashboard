<template>
    <CNavbar colorScheme="light" expand="lg">
        <CContainer fluid>
            <CNavbarBrand href="#">My Dashboard</CNavbarBrand>
        </CContainer>
    </CNavbar>
    <CCard style="width: 18rem">
        <CCardImage orientation="top" src="/images/vue.jpg" />
        <CCardBody>
            <CCardTitle>Card title</CCardTitle>
            <CCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CCardText>
            <CButton color="primary" href="#">Go somewhere</CButton>
        </CCardBody>
    </CCard>
</template>

<script>
import { CNavbar, CNavbarBrand, CContainer, CCardImage,CCardBody, CCard, CCardTitle, CCardText, CButton  } from '@coreui/vue'

export default {
    components: {
        CNavbar,
        CNavbarBrand,
        CContainer,
        CCardImage,
        CCard,
        CCardTitle,
        CCardText,
        CButton,
        CCardBody
    }
}
</script>
