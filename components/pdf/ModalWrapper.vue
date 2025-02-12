<template>
    <div v-if="isVisible" class="modal-overlay">
      <div class="modal-wrapper">
        <div class="modal-content">
          <slot name="header">
            
          </slot>
          <slot name="body">
            
          </slot>
          <slot name="footer">
            <div class="modal-footer">
              <button @click="closeModal" class="modal-button">Close</button>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isVisible: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      closeModal() {
        this.$emit('close'); // Emit a 'close' event to the parent
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent backdrop */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Ensure modal is on top */
  }
  
  .modal-wrapper {
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden; /* Prevent content from overflowing rounded corners */
  }
  
  .modal-content {
    display: flex;
    flex-direction: column; /* Arrange header, body, footer vertically */
    min-width: 300px; /* Minimum width of the modal */
    max-width: 600px; /* Maximum width of the modal */
    overflow: scroll;
  }
  
  .modal-header,
  .modal-body,
  .modal-footer {
    padding: 20px;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  
  .modal-title {
    margin: 0;
  }
  
  .modal-close {
    border: none;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
  }
  
  .modal-footer {
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid #eee;
  }
  
  .modal-button {
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px; /* Spacing between buttons */
  }
  </style>