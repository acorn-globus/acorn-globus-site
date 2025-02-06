<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Hand, Grab } from 'lucide-vue-next';

const isDragging = ref(false);
const isHandSelected = ref(false);
let translateX = 0;
let translateY = 0;
let startX = 0;
let startY = 0;

// Use non-reactive variables for position tracking
const startDragging = (event) => {
    if (!isHandSelected.value) return;
    
    isDragging.value = true;
    startX = event.clientX - translateX;
    startY = event.clientY - translateY;
};

const handleDrag = (event) => {
    if (!isHandSelected.value || !isDragging.value) return;
    
    translateX = event.clientX - startX;
    translateY = event.clientY - startY;
    
    // Apply transform directly to the element
    const container = document.querySelector('.content-container');
    if (container) {
        container.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }
};

const stopDragging = () => {
    isDragging.value = false;
};

const toggleHand = () => {
    isHandSelected.value = !isHandSelected.value;
};
</script>

<template>
    <div class="figma-canvas">
        <div 
            class="canvas-wrapper" 
            :style="{ cursor: isDragging ? 'grabbing' : (isHandSelected ? 'grab' : 'default') }"
            @mousedown="startDragging" 
            @mousemove="handleDrag" 
            @mouseup="stopDragging" 
            @mouseleave="stopDragging"
        >
            <div class="content-container">
                <slot />
            </div>
        </div>

        <div 
            @click="toggleHand" 
            class="hand-container"
            :class="{ 'selected': isHandSelected }"
        >
            <Hand v-if="!isHandSelected" />
            <Grab v-if="isHandSelected" />
        </div>
    </div>
</template>

<style scoped>
.figma-canvas {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: scroll;
    background-color: #f3f3f3;
}

.canvas-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.content-container {
    position: absolute;
    width: 100%;
    height: 100%;
    will-change: transform;
}

.hand-container {
    z-index: 1;
    position: fixed;
    bottom: 22px;
    left: 22px;
    padding: 8px;
    border-radius: 8px;
    background: white;
    cursor: pointer;
}

.hand-container.selected {
    background: #3B5999;
    color: white;
}
</style>