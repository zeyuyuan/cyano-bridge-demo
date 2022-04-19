export enum MetaMaskErrorCode {
  Cancel = 4001,
}

export interface MetaMaskError {
  code: number;
  message: string;
  stack: string;
}

export enum OntoExtensionError {
  Cancel = "CANCELED",
}
