import { Buffer } from 'buffer'


if (typeof window !== 'undefined') {
  // WalletConnect relies on Buffer, so it must be polyfilled.
  if (!(window as any).Buffer) {
    (window as any).Buffer = Buffer;
  }
}
