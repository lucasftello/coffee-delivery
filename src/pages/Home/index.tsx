import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { coffees } from '../../../data.json'
import { Card } from './components/Card'
import {
  Hero,
  HeroContent,
  HeroText,
  HeroInfo,
  Info,
  Icon,
  Coffees,
  CoffeesContent,
  CoffeeList,
} from './styles'

export function Home() {
  return (
    <main>
      <Hero>
        <HeroContent>
          <HeroText>
            <h1>
              Encontre o café perfeito <br />
              para qualquer hora do dia
            </h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a <br />
              qualquer hora
            </span>

            <HeroInfo>
              <Info>
                <Icon bgColor="yellow-dark">
                  <ShoppingCart size={16} weight="fill" />
                </Icon>
                <span>Compra simples e segura</span>
              </Info>
              <Info>
                <Icon bgColor="gray">
                  <Package size={16} weight="fill" />
                </Icon>
                <span>Embalagem mantém o café intacto</span>
              </Info>
              <Info>
                <Icon bgColor="yellow">
                  <Timer size={16} weight="fill" />
                </Icon>
                <span>Entrega rápida e rastreada</span>
              </Info>
              <Info>
                <Icon bgColor="purple">
                  <Coffee size={16} weight="fill" />
                </Icon>
                <span>O café chega fresquinho até você</span>
              </Info>
            </HeroInfo>
          </HeroText>

          <img src="/images/hero.svg" alt="Café do Coffee Delivery" />
        </HeroContent>
      </Hero>

      <Coffees>
        <CoffeesContent>
          <h2>Nossos cafés</h2>

          <CoffeeList>
            {coffees.map((coffee) => (
              <Card key={coffee.id} coffee={coffee} />
            ))}
          </CoffeeList>
        </CoffeesContent>
      </Coffees>
    </main>
  )
}
