<script setup>
import UserItem from '@/components/UserItem.vue';

const onClick = () => alert("hello")
</script>

<template>
  <div>
    <UserItem title="Guillaume Duhan" description="codewithguillaume@gmail.com" small />
  </div>
</template>