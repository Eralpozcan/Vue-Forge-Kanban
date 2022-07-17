<script setup lang="ts">
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";
import { useRouter } from 'vue-router';
import { computed,ref} from 'vue';




</script>

<template>
    <Drawer>
        <DrawerContent>
            <router-view />
        </DrawerContent>
    </Drawer>
</template>