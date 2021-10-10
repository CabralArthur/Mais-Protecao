import React from 'react'
import { Container, MainTitle } from './styles';
import { Carousel } from 'react-carousel-minimal';

const CarouselSection = () => {
    const data = [
        {
          image: "https://cdn.discordapp.com/attachments/859989475417522217/892210468020707358/Prancheta_1_copiarsdd.png",
          caption: "Imagem 3"
        },
        {
          image: "https://cdn.discordapp.com/attachments/859989475417522217/892210481983524884/Prancheta_12.png",
          caption: "Imagem 1"
        },
        {
          image: "https://cdn.discordapp.com/attachments/859989475417522217/882276088422744164/Tenha_seus_beneficios_na_palma_de_sua_mao_1120x600.png",
          caption: "Imagem 2"
        },
    ];

    const captionStyle = {
        display: 'none'
    }

    return (
        <Container id='clube-de-beneficios'>
            <MainTitle>
              Clube De Benefícios
            </MainTitle>
            
            <Carousel
            data={data}
            time={5000}
            width="1120px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1120px",
              maxHeight: "500px",
            }}
            />
        </Container>
    )
}

export default CarouselSection
