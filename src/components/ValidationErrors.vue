<template>
  <div>Here are sharable validation</div>
</template>

<script>
export default {
  name: "McvValidationErrors",
  props: {
    validationErrors: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped></style>
