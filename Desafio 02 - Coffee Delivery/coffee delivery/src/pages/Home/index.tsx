import { Informations, IntroContainer, Items } from "./styles";
import  image  from '../../assets/Imagem.svg'
import cart2 from '../../assets/cart2.svg'
import box from '../../assets/box.svg'
import timer from '../../assets/timer.svg'
import cup from '../../assets/cup.svg'

export function Home() {
    return(
        <>
            <IntroContainer>
                <Informations>
                    <strong>Encontre o café perfeito para qualquer hora do dia</strong>
                    <p>Com o coffee delivery você recebe seu café onde estiver, a qualquer hora</p>

                    <Items>
                        <div>
                            <img src={cart2} alt="" />
                            <p>Compra simples e segura</p>
                        </div>
                        <div>
                            <img src={timer} alt="" />
                            <p>Entrega rápida e rastreada</p>
                        </div>
                        <div>
                            <img src={box} alt="" />
                            <p>Embalagem mantém o café intacto</p>
                        </div>
                        <div>
                            <img src={cup} alt="" />
                            <p>O café chega fresquinho até você</p>
                        </div>
                    </Items>
                </Informations>

                <img src={image} alt="" />
            </IntroContainer>

            
        </>
    )
}