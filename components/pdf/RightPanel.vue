<script setup>
import { ref } from 'vue'
import PropertiesPanel from '@/components/pdf/PropertiesPanel.vue';
import DataPanel from '@/components/pdf/DataPanel.vue';

const tabs = [
    {
        key: "properties",
        value: "Properties"
    },
    {
        key: "data",
        value: "Data"
    }
]

const currentTab = ref(tabs[0])


</script>

<template>
    <div class="right-panel-container">
        <div class="tabs">
            <button v-for="tab in tabs" :key="tab.key" :class="{ active: currentTab.key == tab.key }"
                @click="currentTab = tab">{{
                    tab.value }}</button>
        </div>
        <div class="panels">
            <div v-if="currentTab.key == tabs[0].key" class="panel">
                <PropertiesPanel />
            </div>
            <div v-if="currentTab.key == tabs[1].key" class="panel">
                <DataPanel />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.right-panel-container {
    border-left: 1px solid #e0e0e0;
    position: absolute;
    right: 0px;
    top: 0px;
    height: 100%;
    width: 400px;
    background-color: white;
    z-index: 1;

    .tabs {
        display: flex;
        border-bottom: 1px solid #ccc;
    }

    .tabs button {
        border-radius: 0;
        padding: 10px 15px;
        border: none;
        background-color: transparent;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        /* Highlight border */
        transition: border-color 0.3s ease;
        /* Smooth transition */
    }

    .tabs button.active {
        border-bottom-color: #3B5999;
        /* Highlight active tab */
        color: #3B5999;
        /* Highlight active tab text */
    }

    .panel {
        //padding: 20px;
        //margin-top: 10px;
        width: 100%;
        height: 100%;
    }
}
</style>
