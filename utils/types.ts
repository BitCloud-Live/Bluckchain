
export interface NFTModel {
  name: string;
  image: string;
  description: string;
  contractAddress: string;
  tokenId: string;
  tokenStandard: string;
  blockchain: string;
  metadata: string;
  creatorfee: string;
  creator: string;
  isSelected: boolean;
}

export interface INFTCardProps {
  nftModel: NFTModel;
}

export interface MainLayoutProps {
  children: React.ReactNode;
}

export interface NFTAddressesProps {
  addresses: string[];
}
