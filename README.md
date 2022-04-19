# A demo of governance api for onto app

## Build scripts

### for testing server
```shell
npm i
npm run build:stage
```
### for production server
```shell
npm i
npm run build:main
```

### Api specification

#### Response基础和异常处理参照其他旧接口
```typescript
interface CyanoBridgeResponse<T> {
  action: string;
  version: string;
  error: number;
  desc: string;
  result: T;
}
```
stakePeers: 质押节点  
result: Transaction hash

redeemPeers: 提取质押节点,提取后ont会立即或根据质押周期解冻  
result: Transaction hash

withdrawFeeReward: 提取质押奖励的ong  
result: Transaction hash

withdrawUnfrozenOnt: 提取未冻结的ont    
result: Transaction hash

withdrawPeerUnboundOng: legacy功能一般没用,但仍需支持  
result: Transaction hash

getAllPeerPool: 查询全部节点列表  
result: PeerPoolItem[]
```typescript
export interface PeerPoolItem {
    index: number;
    peerPubKey: string;
    address: string;
    status: number;
    initPos: number;
    totalPos: number;
}
```

getAttributes: 查询某节点的信息  
return: PeerAttributes
```typescript
export interface PeerAttributes {
  peerPubKey: string;
  maxAuthorize: string;
  t2PeerCost: number; // peer cost, active in view T + 2
  t1PeerCost: number; // peer cost, active in view T + 1
  tPeerCost: number; // peer cost, active in view T
  t2StakeCost: number;
  t1StakeCost: number;
  tStakeCost: number;
  field4: string;
}
```

getStakeInfo: 查询用户在某节点的质押数据  
return: StakeInfo
```typescript
export interface StakeInfo {
  peerPubKey: string;
  address: string;
  consensusPos: number;
  freezePos: number;
  newPos: number;
  withdrawPos: number;
  withdrawFreezePos: number;
  withdrawUnfreezePos: number;
}
```

getRewardFeeAmount: 查询用户质押奖励数量  
return: Amount of reward fee(string)
