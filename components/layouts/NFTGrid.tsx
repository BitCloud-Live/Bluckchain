import React from "react";
import NFTCard from "../../components/cards/NTFCard";
import { NFTModel, NFTAddressesProps } from "../../utils/types";
import Box, { BoxProps } from '@mui/material/Box';


function Item(props: BoxProps) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
          color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          p: 1,
          m: 1,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }

export default function NFTGrid(props: NFTAddressesProps) {
    const [nftList, setNftList] = React.useState<NFTModel[]>([]);
    React.useEffect(() => {
        if (props.addresses.length > 0) {
            // fetch real data here
        } else {
            // use fake data here
            setNftList([
                {
                    name: "NFT 1",
                    image:
                        "https://lh3.googleusercontent.com/XYrDUd8Kz4HLNdZql_Ebwk6vc2OCuaw0MeENa5k67kvDD_X7AEbmcbbHMbMZDDXH1WSUn9hUp2rQsOeTEN2NH9bbOe-3HC50qCrEMAI=w600",
                    description:
                        "we crave each other's touch and yet we refuse our desires",
                    creator: "GrayArtist",
                    contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e",
                    tokenId:
                        "26295466185321165399678017206049401268544401990002960745176610597860968235009",
                    tokenStandard: "ERC-1155",
                    blockchain: "Ethereum",
                    metadata: "decentralized",
                    creatorfee: "10%",
                    isSelected: false,
                },
                {
                    name: "NFT 2",
                    image:
                        "https://lh3.googleusercontent.com/XYrDUd8Kz4HLNdZql_Ebwk6vc2OCuaw0MeENa5k67kvDD_X7AEbmcbbHMbMZDDXH1WSUn9hUp2rQsOeTEN2NH9bbOe-3HC50qCrEMAI=w600",
                    description:
                        "we crave each other's touch and yet we refuse our desires",
                    creator: "GrayArtist",
                    contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e",
                    tokenId:
                        "26295466185321165399678017206049401268544401990002960745176610597860968235009",
                    tokenStandard: "ERC-1155",
                    blockchain: "Ethereum",
                    metadata: "decentralized",
                    creatorfee: "10%",
                    isSelected: false,
                },
                {
                    name: "NFT 3",
                    image:
                        "https://lh3.googleusercontent.com/XYrDUd8Kz4HLNdZql_Ebwk6vc2OCuaw0MeENa5k67kvDD_X7AEbmcbbHMbMZDDXH1WSUn9hUp2rQsOeTEN2NH9bbOe-3HC50qCrEMAI=w600",
                    description:
                        "we crave each other's touch and yet we refuse our desires",
                    creator: "GrayArtist",
                    contractAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e",
                    tokenId:
                        "26295466185321165399678017206049401268544401990002960745176610597860968235009",
                    tokenStandard: "ERC-1155",
                    blockchain: "Ethereum",
                    metadata: "decentralized",
                    creatorfee: "10%",
                    isSelected: false,
                },
            ]);
        }
    }, [])
    function selectNft(nft: NFTModel) {
        console.log("Nft item clicked")
        setNftList(nftList.map((n) => {
            n.isSelected = false;
            if (n.name === nft.name) {
                n.isSelected = !n.isSelected;
            }
            return n;
        }))
    }
    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {nftList.map((nft: NFTModel, index: React.Key) => (
                <Item onClick={() => selectNft(nft)}  key={index}>
                    <NFTCard  nftModel={nft} ></NFTCard>
                </Item>
            ))}
        </Box>
    )
}

