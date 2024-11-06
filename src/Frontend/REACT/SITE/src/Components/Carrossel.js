import React, { useRef, useState } from "react";
import styled from "styled-components";
import Carrossel1 from "../Assets/imagemCarrossel1.jpg"
import Carrossel2 from "../Assets/imagemCarrossel2.jpg"
import Carrossel3 from "../Assets/imagemCarrossel3.jpg"
import Carrossel4 from "../Assets/imagemCarrossel4.jpg"
import Carrossel5 from "../Assets/imagemCarrossel5.jpg"
import Carrossel6 from "../Assets/imagemCarrossel6.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css'
import 'swiper/css/pagination'

const CarouselContainer = styled.div`
 display:flex; 
 justify-content: center;
 align-items: center;

.swiper .swiper-slide{
background-position:center;
background-size:cover;
width:700px;
height:700px;

}
.swiper-slide .title {
    font-size: 41px;
    font-weight: 300;
    padding-top: 150px;
    color: #fff;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.8);
    margin-left: 50px; 
}

.swiper-slide .subtitle {
    font-size: 21px;
    color: #fff;
    margin-left: 100px; 
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.8);
}

.swiper-slide .text {
    font-size: 14px;
    max-width: 400px;
    line-height: 1.3;
    color: white;
    margin-left: 100px; 
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.8);

}
`;

const slides = [
    Carrossel1,
    Carrossel2,
    Carrossel3,
    Carrossel4,
    Carrossel5,
    Carrossel6
]

const Titulo = [
    "CCA - Geração Futuro",
    "CCA - Geração de Samuel",
    "CCA - JD Panamericano",
    "CEDESP Kairós",
    "CTA Vila Mariana",
    "CA Refúgio I",
    "CA Refúgio II"

]
const SubTitulo = [
    "AMIZADE",
    "COMUNHÃO"
]

const Texto = [
    "Atividades que incentivam a convivência, expressão e desenvolvimento, por meio de jogos, cultura e esportes. Um espaÃ§o acolhedor e divertido, pensado para promover interaçãoo e novas experiências, especialmente para quem mais precisa.",
    "Atividades externas para fortalecer, estimular a imaginação e incentivar o aprendizado. Com oficinas de esportes, arte e cultura, criamos um ambiente vibrante e acolhedor, onde cada participante encontra apoio, diversão e a oportunidade de fazer novas descobertas e amizades.",

]

const Carrossel = () => {

    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {

    };
    return (
        <CarouselContainer>

            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={3000}
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper">

                <div>
                    {
                        slides.map((slides, i) => (
                            <SwiperSlide key={i} style={{ backgroundImage: `url(${slides})` }}>
                                <div className="title">
                                    <h2 className="title">{Titulo[i]}</h2>
                                </div>
                                <div>
                                    <p className="subtitle">{SubTitulo[i]}</p>
                                </div>
                                <div>
                                    <p className="text">{Texto[i]}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                </div>

            </Swiper>
        </CarouselContainer>
    );
};

export default Carrossel;