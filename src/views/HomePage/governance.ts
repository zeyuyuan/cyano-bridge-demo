import { client } from "cyanobridge";
import { StakeParams, GasParams, PubKeyParams } from "@/types/provider";

const defaultGas: GasParams = {
  gasPrice: "2512",
  gasLimit: "21234",
};

const stakeDefaultParams: StakeParams = {
  peerPubKeys: [
    "02ae45c8813a51906a76150e69d274a9972665f61edc45b30ba7043376c4c4c64d",
    "02bd20195047b02c52e4edf4f49545fc9125affc25e845b0fdf936318ef9df06ac",
  ],
  amounts: ["1", "2"],
  ...defaultGas,
};

export const callSignMessage = async (params = { message: "hello" }) => {
  const result = await client.api.message.signMessage(params);
  console.log("signMessage 结果", result);
};

export const callStakePeers = async (
  params: StakeParams = stakeDefaultParams
) => {
  console.log("stakePeers 参数", params);
  const result = await client.api.governance.stakePeers(params);
  console.log("stakePeers 结果", result);
};

export const callRedeemPeers = async (
  params: StakeParams = stakeDefaultParams
) => {
  console.log("redeemPeers 参数", params);
  const result = await client.api.governance.redeemPeers(params);
  console.log("redeemPeers 结果", result);
};

export const callWithdrawFeeReward = async (params: GasParams = defaultGas) => {
  console.log("withdrawFeeReward 参数", params);
  const result = await client.api.governance.withdrawFeeReward(params);
  console.log("withdrawFeeReward 结果", result);
};

export const callWithdrawUnfrozenOnt = async (
  params: StakeParams = stakeDefaultParams
) => {
  console.log("withdrawUnfrozenOnt 参数", params);
  const result = await client.api.governance.withdrawUnfrozenOnt(params);
  console.log("withdrawUnfrozenOnt 结果", result);
};

export const callWithdrawPeerUnboundOng = async (
  params: GasParams = defaultGas
) => {
  console.log("withdrawPeerUnboundOng 参数", params);
  const result = await client.api.governance.withdrawPeerUnboundOng(params);
  console.log("withdrawPeerUnboundOng 结果", result);
};

export const callGetAllPeerPool = async () => {
  const result = await client.api.governance.getAllPeerPool();
  console.log("getAllPeerPool 结果", result);
};

export const callGetAttributes = async (
  params: PubKeyParams = {
    peerPubKey:
      "02ae45c8813a51906a76150e69d274a9972665f61edc45b30ba7043376c4c4c64d",
  }
) => {
  console.log("getAttributes 参数", params);
  const result = await client.api.governance.getAttributes(params);
  console.log("getAttributes 结果", result);
};

export const callGetStakeInfo = async (
  params: PubKeyParams = {
    peerPubKey:
      "02ae45c8813a51906a76150e69d274a9972665f61edc45b30ba7043376c4c4c64d",
  }
) => {
  console.log("getStakeInfo 参数", params);
  const result = await client.api.governance.getStakeInfo(params);
  console.log("getStakeInfo 结果", result);
};

export const callGetRewardFeeAmount = async () => {
  const result = await client.api.governance.getRewardFeeAmount();
  console.log("getRewardFeeAmount 结果", result);
};
