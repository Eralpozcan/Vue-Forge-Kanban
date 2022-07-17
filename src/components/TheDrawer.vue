<script setup lang="ts">
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";
import { useRouter } from 'vue-router';
import { computed,ref} from 'vue';
import router from "@/router";

const selectedId = ref(0);
const expanded = ref(false);
const expandedIcons = computed (() => 
    expanded.value ? 'k-i-arrow-left' : 'k-i-arrow-right'
);

const items = computed(() => [
  {
    text: "Boards",
    icon: "k-i-set-column-position",
    selected: true,
    data: {
      path: "/",
    },
  },
  {
    text: "Templates",
    icon: "k-i-border-left",
    data: {
      path: "/templates",
    },
  },
  {
    text: "Settings",
    icon: "k-i-gear",
    data: {
      path: "/settings",
    },
  },
  {
    text: "Collapse",
    icon: expandedIcons.value,
    data: {
      action: () => (expanded.value = !expanded.value),
    },
  },
]);

function onSelect({ itemIndex}: { itemIndex: number }) {
    const item = items.value[itemIndex]
    if(item.data.path) router.push(item.data.path)
    if (typeof item.data.action === 'function') item.data.action()
}

</script>

<template>
    <Drawer class="h-[90vh]" :expanded="expanded" position="start" mode="push" :mini="true" :items="items"
        @select="onSelect">
        <DrawerContent>
            <div class="px-5">
                <router-view />
            </div>
        </DrawerContent>
    </Drawer>
</template>