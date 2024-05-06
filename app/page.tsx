import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'First Button',
    },
    {
      action: 'tx',
      label: 'Send Base Sepolia',
      target: `${NEXT_PUBLIC_URL}/api/tx`,
      postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
    },
    {
      label: 'Dgenlotto',
      action: 'post_redirect',                             // outbound link
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/hs.jpg`,    // image that is displayed in initial frame
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'hypersolid',
  description: 'LFG',
  openGraph: {
    title: 'hypersolid',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/hs.jpg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Hypersolid.eth</h1>
    </>
  );
}
