<template>
  <div class="home-page">
    <h1 class="title">{{ t("hello") }}</h1>
    <label for="params" class="params">
      <span>通用参数(空时使用默认参数)</span>
      <textarea
        id="params"
        v-model="paramsBind"
        class="params-input"
        type="text"
        placeholder="输入json字符串"
      />
    </label>
    <BaseButton
      :disabled="!account"
      class="l-btn"
      label="stakePeers"
      @click="governance.callStakePeers(params)"
    />
    <BaseButton
      :disabled="!account"
      class="l-btn"
      label="redeemPeers"
      @click="governance.callRedeemPeers(params)"
    />
    <BaseButton
      :disabled="!account"
      class="l-btn"
      label="withdrawFeeReward"
      @click="governance.callWithdrawFeeReward(params)"
    />
    <BaseButton
      :disabled="!account"
      class="l-btn"
      label="withdrawUnfrozenOnt"
      @click="governance.callWithdrawUnfrozenOnt(params)"
    />
    <BaseButton
      :disabled="!account"
      class="l-btn"
      label="withdrawPeerUnboundOng"
      @click="governance.callWithdrawPeerUnboundOng(params)"
    />
    <BaseButton
      :disabled="!account"
      class="l-btn"
      label="getAllPeerPool"
      @click="governance.callGetAllPeerPool()"
    />
    <BaseButton
      :disabled="!account"
      class="l-btn"
      label="getAttributes"
      @click="governance.callGetAttributes(params)"
    />
    <BaseButton
      :disabled="!account"
      class="l-btn"
      label="getStakeInfo"
      @click="governance.callGetStakeInfo(params)"
    />
    <BaseButton
      :disabled="!account"
      class="l-btn"
      label="getRewardFeeAmount"
      @click="governance.callGetRewardFeeAmount()"
    />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import BaseButton from "@/components/BaseButton.vue";
import { useAccountState } from "@/store/user";
import { ref, computed } from "vue";
import * as governance from "./governance";

const { t } = useI18n();
const account = useAccountState();

const paramsBind = ref("");

const params = computed(() => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return JSON.parse(paramsBind.value);
  } catch (e) {
    return undefined;
  }
});
</script>

<style lang="scss" scoped>
.home-page {
  height: 100%;
  padding: 6vw;
  letter-spacing: 1px;
}

.title {
  font-size: 4.6vw;
  line-height: 10vw;
}

.params {
  text-align: left;
}

.params-input {
  width: 100%;
  margin-top: 2vw;
  height: 30vw;
  font-size: 5vw;
  line-height: 6vw;
}

.l-btn {
  display: block;
  margin-top: 5vw;
}
</style>
