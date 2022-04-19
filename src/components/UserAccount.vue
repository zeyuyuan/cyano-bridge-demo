<template>
  <div class="user-account">{{ formatLongStr(account) }}</div>
</template>

<script lang="ts" setup>
import { formatLongStr } from "@/utils/format";

defineProps<{
  account: string;
}>();
</script>

<style lang="scss" scoped>
.user-account {
  border-radius: 26px;
  font-size: 14px;
  border: 2px solid var(--primary);
  padding: 10px 14px;
  line-height: 16px;
  color: var(--primary);
}
</style>
