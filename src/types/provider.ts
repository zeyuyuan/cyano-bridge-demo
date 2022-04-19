export interface CyanoBridgeResponse {
  action: string;
  version: string;
  error: number;
  desc: string;
  result: string;
}

export interface GasParams {
  gasPrice?: string;
  gasLimit?: string;
}

export interface StakeParams extends GasParams {
  peerPubKeys: string[];
  amounts: string[];
}

export interface PubKeyParams {
  peerPubKey: string;
}
