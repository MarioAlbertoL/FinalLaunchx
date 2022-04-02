<template>
    <div>
    <HelloWorld/>
        <AdminArea/>
    </div>
</template>

<script>

import AdminArea from "../components/AdminArea.vue"
import HelloWorld from "../components/HelloWorld.vue"
export default {
    name: 'ClientView',
    components: {
        AdminArea, HelloWorld
    }

}
</script>