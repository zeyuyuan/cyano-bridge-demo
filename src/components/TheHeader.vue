<template>
  <header class="the-header">
    <UserAccount v-if="account" class="l-right" :account="account" />
    <BaseButton
      v-else
      class="l-right"
      :label="t('connect_wallet')"
      @click="connectOntoApp"
    />
  </header>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import UserAccount from "@/components/UserAccount.vue";
import { useAccountState } from "@/store/user";
import { client } from "cyanobridge";
import { CyanoBridgeResponse } from "@/types/provider";
import BaseButton from "./BaseButton.vue";
import Toast from "./BaseToast";

const { t } = useI18n();
const account = useAccountState();

const connectOntoApp = async () => {
  try {
    console.log("start connect");
    client.registerClient();
    const result = await client.api.asset.getAccount();
    console.log("connect result:", result);
    account.value = (result as CyanoBridgeResponse).result;
  } catch (e) {
    console.log("connect error", e);
    Toast.error(typeof e === "string" ? e : (e as Error).message);
  }
};

onMounted(async () => {
  await connectOntoApp();
});
</script>

<style lang="scss" scoped>
.the-header {
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

.l-right {
  margin-left: auto;
}
</style>
